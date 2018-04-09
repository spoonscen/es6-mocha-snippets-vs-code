import * as vscode from 'vscode'
import snippets, { Snippet } from './snippets'

type Prefixes = {
    prefixArrow: string
    prefixFunction: string
}

type FunctionTypeFilter = 'arrow' | 'function' | 'prefixArrow' | 'prefixFunction'

type Filter = (s: Snippet) => boolean
type Prefixer = (s: Snippet) => Snippet

export class CompletionItemProvider implements vscode.CompletionItemProvider {
    constructor(private readonly customPrefix: string, private readonly semicolons: boolean, private readonly  functionType: FunctionTypeFilter, private readonly  prefixes: Prefixes) {     
    }

    buildFilter(): Filter {
        return this.functionType.startsWith('prefix') ? () => true : (s) => s.functionType == this.functionType      
    }

    buildPrefixer(): Prefixer {
        let prefixer: Prefixer = (s) => {
            s.prefix = this.prefixes[<'prefixArrow' | 'prefixFunction'>this.functionType] + s.prefix
            return s
        }
        return this.functionType.startsWith('prefix') ? prefixer : (s) => s
    }

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.CompletionItem[] {        
        
        return snippets
            .filter(this.buildFilter())          
            .filter(this.buildPrefixer())
            .map(({ body, description, prefix }) => {                
                const completionItem = new vscode.CompletionItem(prefix, vscode.CompletionItemKind.Snippet)
                completionItem.insertText = new vscode.SnippetString(this.semicolons ? body.join('\n') : body.join('\n').replace(/;/g, ''))
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
    const functionType = config.get<FunctionTypeFilter>('function-type', 'function')
    const prefixes = {
        prefixArrow: config.get<string>('arrow-prefix', 'a'),
        prefixFunction: config.get<string>('function-prefix', 'f')
    }

    const selector: vscode.DocumentSelector = ['typescript', 'javascript', 'typescriptreact', 'javascriptreact'].map(language => ({ language, pattern: glob }))
    const SnippetProvider = vscode.languages.registerCompletionItemProvider(selector, new CompletionItemProvider(customPrefix, semicolons, functionType, prefixes))
    context.subscriptions.push(SnippetProvider)
}

export function deactivate() {
}
