import * as vscode from 'vscode'
import snippets from './snippets'

type Config = {
  semicolons: boolean
  customPrefix: string
  functionType: 'arrow' | 'function' | 'both'
}

export class CompletionItemProvider implements vscode.CompletionItemProvider {
  private semicolons: boolean
  private customPrefix: string
  private functionType: Config['functionType']

  constructor(config: Config) {
    this.customPrefix = config.customPrefix
    this.semicolons = config.semicolons
    this.functionType = config.functionType
  }

  provideCompletionItems = (_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken): vscode.CompletionItem[] => {
    return snippets
      .filter(s => {
        if (this.functionType === 'both') return s
        if (this.functionType === 'arrow' && s.functionType === 'arrow') return s
        if (this.functionType === 'function' && s.functionType === 'function') return s
      })
      .map(({ body, description, prefix }) => {
        const completionItem = new vscode.CompletionItem(prefix)
        completionItem.kind = vscode.CompletionItemKind.Snippet

        completionItem.insertText = String(this.semicolons ? body.join('\n') : body.join('\n').replace(/;/g, ''))
        completionItem.filterText = this.customPrefix ? this.customPrefix + prefix : prefix
        completionItem.detail = description
        return completionItem
      })
  }
}

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('mocha-snippets')
  const glob = config.get<string>('glob')
  const semicolons = config.get<boolean>('semicolon', true)
  const customPrefix = config.get<string>('custom-prefix', '')
  const functionType = config.get<Config['functionType']>('function-type', 'both')

  const selector: vscode.DocumentSelector = ['typescript', 'javascript', 'typescriptreact', 'javascriptreact'].map(language => ({ language, pattern: glob }))
  const SnippetProvider = vscode.languages.registerCompletionItemProvider(selector, new CompletionItemProvider({ semicolons, customPrefix, functionType }))
  context.subscriptions.push(SnippetProvider)
}

export function deactivate() {
}
