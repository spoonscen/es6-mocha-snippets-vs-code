# ES6 Mocha Snippets for Visual Studio Code!
Mocha snippets for Visual Studio Code using ES6 syntax.  The focus is to keep the code dry leveraging arrow functions and omitting curlies by where possible.  The snippets use the Mocha function names for ease of memory that way you don't need to learn new names.

![screenshot](images/demo.gif)

## Customize the snippets
In your "User Settings" or workspace settings you an configure the snippets to fit your needs.
### Semicolons
Turn semicolons on or off
```
{
    "mocha-snippets.semicolons": boolean
}
```

### Custom prefix
Use this to add a custom prefix to the snippet. For example if input here `'m-'` if you want the snippets to appear when you type `m-`
```
{
    "mocha-snippets.custom-prefix": string
}
```

### Custom Glob Pattern
Use this to add a custom glob pattern that you want this extension to apply to. Example `'**/*.spec.ts'`
```
{
    "mocha-snippets.glob": string
}
```

## Included Snippet Interfaces

### BDD
- Before (before)
    ```
    before(() => );
    ```
- Before Named Function (beforeNamed)
    ```
    before(function someFunctionName(){ });
    ```
- Before With Description (beforeDescription)
    ```
    before('some description', () => );
    ```
- Before Each (beforeEach)
    ```
    beforeEach(() => );
    ```
- Before Each Named Function (beforeEachNamed)
    ```
    beforeEach(function someFunctionName(){ });
    ```
- Before Each With Description (beforeEachDescription)
    ```
    beforeEach('some description', () => );
    ```
- After (after)
    ```
    after(() => );
    ```
- After Named Function (afterNamed)
    ```
    after(function someFunctionName(){ });
    ```
- After With Description (afterDescription)
    ```
    after('some description', () => );
    ```
- After Each (afterEach)
    ```
    afterEach(() => );
    ```
- After Each Named Function (afterEachNamed)
    ```
    afterEach(function someFunctionName(){ });
    ```
- After Each With Description (afterEachDescription)
    ```
    afterEach('some description', () => );
    ```
- Describe And It (describeAndIt)
    ```
    describe('some thing', () => {
        it('can do the thing', () => {

        });
    });
    ```
- Describe (describe)
    ```
    describe('some thing', () => {

    });
    ```
- It (it)
    ```
    it('can do the thing', () => {

    });
    ```
- Context And It (contextAndIt)
    ```
    context('some thing', () => {
        it('can do the thing', () => {

        });
    });
    ```
- Context (context)
    ```
    context('some thing', () => {

    });
    ```
### TDD
- Suite (suite)
    ```
    suite('some thing', () => {

    });
    ```
- Suite Setup (suiteSetup)
    ```
    suiteSetup(() => {

    });
    ```
- Suite Teardown (suiteTeardown)
    ```
    suiteTeardown(() => {

    });
    ```
- Setup (setup)
    ```
    setup(() => {

    });
    ```
- Teardown (teardown)
    ```
    teardown(() => {

    });
    ```
- Teardown (teardown)
    ```
    teardown(() => {

    });
    ```
- Test (test)
    ```
    test('the thing', () => {

    });
    ```
- Entire Suite (entireSuite)
    ```
    suite('some thing', () => {

        suiteSetup(() => { });

        test('some functionality', () => {

        });

        suiteTeardown(() => { });

    });
    ```

### Exports
- Exports Suite (exportsSuite)
    ```
    exports.Foo = {
        'Foobar': {
            'should foo the bar': () => {

            },
        }
    };
    ```

## Arrow Functions

Mocha discourage passing arrow functions (more [here](https://mochajs.org/#arrow-functions)). If you don't want to pass arrow functions you can use the `f` prefix on every snippet:

### BDD

- Before Function (fbefore)
    ```
    before(function () {});
    ```
- Before with Description Function (fbeforeDescription)
    ```
    before('', function () {});
    ```
- Before Each Function (fbeforeEach)
    ```
    beforeEach(function () {});
    ```
- Before Each with Description Function (fbeforeEach)
    ```
    beforeEach('', function () {});
    ```
- After Function (fafter)
    ```
    after(function () {});
    ```
- After with Description Function (fafterDescription)
    ```
    after('', function () {});
    ```
- After Each Function (fafterEach)
    ```
    afterEach(function () {});
    ```
- After Each with Description Function (fafterEach)
    ```
    afterEach('', function () {});
    ```
- Describe Function (fdescribe)
    ```
    describe('', function () {});
    ```
- Describe and It Function (fdescribeAndIt)
    ```
    describe('', function () {
      it('', function () {});
    });
    ```

### TDD
- Context Function (fcontext)
    ```
    context('', function () {});
    ```
- Context and It Function (fcontextAndIt)
    ```
    context('', function () {
      it('', function () {});
    });
    ```
- It Function (fit)
    ```
    it('', function () {});
    ```
- Suite Function (fsuite)
    ```
    suite('', function () {});
    ```
- Suite Teardow Function (fsuiteTeardown)
    ```
    suiteTeardown(function () {});
    ```
- Setup Function (fsetup)
    ```
    setup(function () {});
    ```
- Teardown Function (fteardown)
    ```
    teardown(function () {});
    ```
- Test Function (ftest)
    ```
    test('', function () {});
    ```
- Entire Suite Function (fentireSuite)
    ```
    suite('', function () {
      suiteSetup(function () { });
      test('', function () {});
      suiteTeardown(function () { });
    });
    ```

### Exports

- Exports Suite Function (fexportsSuite)
    ```
    suite('', function () {
      suiteSetup(function () { });
      test('', function () {});
      suiteTeardown(function () { });
    });
    ```

## Other Great Tools:
* [Visual Studio Code](http://code.visualstudio.com/)
* [Mocha](https://mochajs.org/)
* [Sinon JS](http://sinonjs.org/)
* [Chai JS](https://chaijs.com/)

## Supported languages (file extensions)
* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)
