
import * as assert from 'assert'
import * as vscode from 'vscode'
import { CompletionItemProvider } from '../src/extension'
import snippets from '../src/snippets'

describe('extension', () => {
    describe('CompletionItemProvider', () => {
        describe('provideCompletionItems', () => {
            let options: { semicolons: boolean, customPrefix: string }
            beforeEach(() => {
                options = { semicolons: true, customPrefix: '' }
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
        })
    })
})
