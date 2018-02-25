import * as vscode from 'vscode'
import snippets from './snippets'

export class CompletionItemProvider implements vscode.CompletionItemProvider {
    private semicolons: boolean
    private customPrefix: string

    constructor(configOpts: { semicolons: boolean, customPrefix: string }) {
        this.customPrefix = configOpts.customPrefix
        this.semicolons = configOpts.semicolons
    }

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
        return snippets.map(({ body, description, prefix }) => {
            const completionItem = new vscode.CompletionItem(prefix, vscode.CompletionItemKind.Snippet)
            completionItem.insertText = new vscode.SnippetString(this.semicolons ? body.join('\n') : body.join('\n').replace(/;/g, ''))
            completionItem.filterText = this.customPrefix ? this.customPrefix + description : description
            completionItem.detail = description
            return completionItem
        })
    }
}

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('mocha-snippets')
    const glob = config.get<string>('glob')
    const semicolons = config.get<boolean>('semicolon')
    const customPrefix = config.get<string>('custom-prefix')

    const selector: vscode.DocumentSelector = ['typescript', 'javascript', 'typescriptreact', 'javascriptreact'].map(language => ({ language, pattern: glob }))
    const SnippetProvider = vscode.languages.registerCompletionItemProvider(selector, new CompletionItemProvider({ semicolons, customPrefix }))
    context.subscriptions.push(SnippetProvider)
}

export function deactivate() {
}
