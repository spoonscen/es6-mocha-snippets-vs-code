# ES6 Mocha Snippets for Visual Studio Code!
Mocha snippets for Visual Studio Code using ES6 syntax.  The focus is to keep the code dry leveraging arrow functions and omitting curlies by where possible.  The snippets use the Mocha function names prepended with `m-`.

![screenshot](images/demo.gif)

## Included Snippet Interfaces

#BDD
- Before (m-before)
    ```
    before(() => );
    ```
- Before Named Function (m-beforeNamed)
    ```
    before(function someFunctionName(){ });
    ```
- Before With Description (m-beforeDescription)
    ```
    before('some description', () => );
    ```
- Before Each (m-beforeEach)
    ```
    beforeEach(() => );
    ```
- Before Each Named Function (m-beforeEachNamed)
    ```
    beforeEach(function someFunctionName(){ });
    ```
- Before Each With Description (m-beforeEachDescription)
    ```
    beforeEach('some description', () => );
    ```
- After (m-after)
    ```
    after(() => );
    ```
- After Named Function (m-afterNamed)
    ```
    after(function someFunctionName(){ });
    ```
- After With Description (m-afterDescription)
    ```
    after('some description', () => );
    ```
- After Each (m-afterEach)
    ```
    afterEach(() => );
    ```
- After Each Named Function (m-afterEachNamed)
    ```
    afterEach(function someFunctionName(){ });
    ```
- After Each With Description (m-afterEachDescription)
    ```
    afterEach('some description', () => );
    ```
- Describe And It (m-describeAndIt)
    ```
    describe('some thing', () => {
        it('can do the thing', () => {

        });
    });
    ```
- Describe (m-describe)
    ```
    describe('some thing', () => {

    });
    ```
- It (m-it)
    ```
    it('can do the thing', () => {

    });
    ```

#TDD
- Suite (m-suite)
    ```
    suite('some thing', () => {

    });
    ```
- Suite Setup (m-suiteSetup)
    ```
    suiteSetup(() => {

    });
    ```
- Suite Teardown (m-suiteTeardown)
    ```
    suiteTeardown(() => {

    });
    ```
- Setup (m-setup)
    ```
    setup(() => {

    });
    ```
- Teardown (m-teardown)
    ```
    teardown(() => {

    });
    ```
- Teardown (m-teardown)
    ```
    teardown(() => {

    });
    ```
- Test (m-test)
    ```
    test('the thing', () => {

    });
    ```
- Entire Suite (m-entireSuite)
    ```
    suite('some thing', () => {

        suiteSetup(() => { });

        test('some functionality', () => {

        });

        suiteTeardown(() => { });

    });
    ```

# Exports
- Exports Suite (m-exportsSuite)
    ```
    exports.Foo = {
        'Foobar': {
            'should foo the bar': () => {

            },
        }
    };
    ```


### Other Great Tools:
* [Visual Studio Code](http://code.visualstudio.com/)
* [Mocha](https://mochajs.org/)
* [Sinon JS](http://sinonjs.org/)
* [Chai JS](https://chaijs.com/)

### Supported languages (file extensions)
* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)

