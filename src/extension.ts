// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import snippets from './snippets'

export class CompletionItemProvider implements vscode.CompletionItemProvider {
    semiColons: boolean
    customPrefix: string

    constructor(configOpts: { semiColons: boolean, customPrefix: string }) {
        this.customPrefix = configOpts.customPrefix
        this.semiColons = configOpts.semiColons
    }

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {
        return snippets.map(({ body, description, prefix }) => {
            const completionItem = new vscode.CompletionItem(prefix, vscode.CompletionItemKind.Snippet)
            completionItem.insertText = new vscode.SnippetString(this.semiColons ? body.join('\n') : body.join('\n').replace(';', ''))
            completionItem.filterText = this.customPrefix ? this.customPrefix + description : description
            completionItem.detail = description
            return completionItem
        })
    }
}

export function activate(context: vscode.ExtensionContext) {
    let sel: vscode.DocumentSelector = ['typescript', 'javascript', 'typescriptreact', 'javascriptreact']
    const config = vscode.workspace.getConfiguration('mocha-snippets')
    const semiColons = config.get<boolean>('semicolon')
    const customPrefix = config.get<string>('custom-prefix')
    const SnippetProvider = vscode.languages.registerCompletionItemProvider(sel, new CompletionItemProvider({ semiColons, customPrefix }))
    context.subscriptions.push(SnippetProvider)
}

// this method is called when your extension is deactivated
export function deactivate() {
}
