
import * as assert from 'assert'
import * as vscode from 'vscode'
import { CompletionItemProvider } from '../src/extension'
import snippets from '../src/snippets'

describe('extension', () => {

  describe('CompletionItemProvider', () => {

    describe('provideCompletionItems', () => {

      let options: {
        semicolons: boolean,
        customPrefix:
        string,
        functionType: 'arrow' | 'function' | 'both',
        quoteType: 'single' | 'double'
      }

      beforeEach(() => {
        options = {
          semicolons: true,
          customPrefix: '',
          functionType: 'both',
          quoteType: 'single'
        }
      });

      it('returns a completion item for each snippet', () => {
        const provider = new CompletionItemProvider(options)

        assert.equal(provider.provideCompletionItems({} as any, {} as any, {} as any).length, snippets.length)
      })

      it('removes semicolons when semicolon false', () => {
        options.semicolons = false
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        completionItems.forEach(item => {
          assert.equal((item.insertText as vscode.SnippetString).value.includes(';'), false)
        })
      })

      it('leaves semicolons on when semicolon true', () => {
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        completionItems.forEach(item => {
          assert.equal((item.insertText as vscode.SnippetString).value.includes(';'), true)
        })
      })

      it('uses single quotes when quoteType = single', () => {
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        const snippetsWithSingleQuotes = completionItems.filter((item) => {
          return (item.insertText as vscode.SnippetString).value.includes(`'`)
        })

        const snippetsWithDoubleQuotes = completionItems.filter((item) => {
          return (item.insertText as vscode.SnippetString).value.includes(`"`)
        })

        assert(snippetsWithSingleQuotes.length > 1, 'no snippets found with single quotes')
        assert(snippetsWithDoubleQuotes.length === 0, 'Snippets with double quotes found when there should be none')
      })

      it('uses double quotes when quoteType = double', () => {
        options.quoteType = 'double'
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        const snippetsWithSingleQuotes = completionItems.filter((item) => {
          return (item.insertText as vscode.SnippetString).value.includes(`'`)
        })

        const snippetsWithDoubleQuotes = completionItems.filter((item) => {
          return (item.insertText as vscode.SnippetString).value.includes(`"`)
        })

        assert(snippetsWithDoubleQuotes.length > 1, 'no snippets found with double quotes')
        assert(snippetsWithSingleQuotes.length === 0, 'Snippets with single quotes found when there should be none')
      })

      it('adds a custom prefix to the filter text', () => {
        options.customPrefix = 'm-'
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        completionItems.forEach(item => {
          assert.equal(item.filterText.includes('m-'), true)
        })
      })

      it('makes the completion item detail the description', () => {
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        completionItems.forEach((item, ix) => {
          assert.equal(item.detail, snippets[ix].description)
        })
      })

      it('returns arrow functions when the functionType is arrow', () => {
        options.functionType = 'arrow'
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        completionItems.forEach((item, ix) => {
          assert.equal(item.filterText.startsWith('f'), false)
        })
      })

      it('returns function functions when the functionType is function', () => {
        options.functionType = 'function'
        const completionItems = new CompletionItemProvider(options).provideCompletionItems({} as any, {} as any, {} as any)

        completionItems.forEach((item, ix) => {
          assert.equal(item.filterText.startsWith('f'), true)
        })
      })
    })
  })
})
