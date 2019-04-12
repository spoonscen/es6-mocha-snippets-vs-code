import * as vscode from 'vscode'
import snippets from './snippets'
import { compose } from 'lodash/fp'

type Config = {
  semicolons: boolean
  customPrefix: string
  functionType: 'arrow' | 'function' | 'both'
  quoteType: 'double' | 'single'
  lang: 'js' | 'ts'
}

export class CompletionItemProvider implements vscode.CompletionItemProvider {
  private semicolons: Config['semicolons']
  private customPrefix: Config['customPrefix']
  private functionType: Config['functionType']
  private quoteType: Config['quoteType']
  private lang: Config['lang']

  constructor(config: Config) {
    this.customPrefix = config.customPrefix
    this.semicolons = config.semicolons
    this.functionType = config.functionType
    this.quoteType = config.quoteType
    this.lang = config.lang
  }

  maybeRemoveSemicolons = (bodyString: string): string => this.semicolons ? bodyString : bodyString.replace(/;/g, '')
  maybeDoubleQuotes = (bodyString: string): string => this.quoteType === 'single' ? bodyString : bodyString.replace(/'/g, '"')
  maybeStripTypes = (bodyString: string): string => this.lang === 'ts' ? bodyString : bodyString.replace(/\: void/g, '')


  transformBody = compose(this.maybeDoubleQuotes, this.maybeRemoveSemicolons, this.maybeStripTypes)

  provideCompletionItems = (_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken): vscode.CompletionItem[] => {
    return snippets
      .filter(s => {
        if (this.functionType === 'both') return s
        if (this.functionType === 'arrow' && s.functionType === 'arrow') return s
        if (this.functionType === 'function' && s.functionType === 'function') return s
      })
      .map(({ body, description, prefix }) => {
        const completionItem = new vscode.CompletionItem(prefix, vscode.CompletionItemKind.Snippet)

        completionItem.insertText = new vscode.SnippetString(this.transformBody(body.join('\n')))
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
  const quoteType = config.get<Config['quoteType']>('quote-type', 'single')


  const jsSelector: vscode.DocumentSelector = ['javascript', 'javascriptreact'].map(language => ({ language, pattern: glob }))
  const tsSelector: vscode.DocumentSelector = ['typescript', 'typescriptreact'].map(language => ({ language, pattern: glob }))

  const jsSnippets = new CompletionItemProvider({ semicolons, customPrefix, functionType, quoteType, lang: 'js' })

  const tsSnippets = new CompletionItemProvider({ semicolons, customPrefix, functionType, quoteType, lang: 'ts' })

  const JsSnippetProvider = vscode.languages.registerCompletionItemProvider(jsSelector, jsSnippets)

  const TsSnippetProvider = vscode.languages.registerCompletionItemProvider(tsSelector, tsSnippets)

  context.subscriptions.push(JsSnippetProvider, TsSnippetProvider)
}

export function deactivate() {
}
