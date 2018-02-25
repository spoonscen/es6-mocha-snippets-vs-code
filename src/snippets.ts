type Snippet = { body: string[], description: string, prefix: string }

const snippets: Snippet[] = [
    {
        prefix: "before",
        body: [
            "before(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Before "
    },
    {
        prefix: "fbefore",
        body: [
            "before(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Before::Function"
    },
    {
        prefix: "beforeNamed",
        body: [
            "before(function ${1}() {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Before with Named Function"
    },
    {
        prefix: "beforeDescription",
        body: [
            "before('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Before with Description"
    },
    {
        prefix: "fbeforeDescription",
        body: [
            "before('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Before with Description::Function"
    },
    {
        prefix: "beforeEach",
        body: [
            "beforeEach(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Before Each"
    },
    {
        prefix: "fbeforeEach",
        body: [
            "beforeEach(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Before Each::Function"
    },
    {
        prefix: "beforeEachNamed",
        body: [
            "beforeEach(function ${1}() {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Before Each with Named Function"
    },
    {
        prefix: "beforeEachDescription",
        body: [
            "beforeEach('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Before Each with Description"
    },
    {
        prefix: "fbeforeEachDescription",
        body: [
            "beforeEach('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Before Each with Description::Function"
    },
    {
        prefix: "after",
        body: [
            "after(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::After"
    },
    {
        prefix: "fafter",
        body: [
            "after(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::After::Function"
    },
    {
        prefix: "afterNamed",
        body: [
            "after(function ${1}() {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::After with Named Function"
    },
    {
        prefix: "afterDescription",
        body: [
            "after('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::After with Description"
    },
    {
        prefix: "fafterDescription",
        body: [
            "after('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::After with Description::Function"
    },
    {
        prefix: "afterEach",
        body: [
            "afterEach(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::After Each"
    },
    {
        prefix: "fafterEach",
        body: [
            "fafterEach(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::After Each::Function"
    },
    {
        prefix: "afterEachNamed",
        body: [
            "afterEach(function ${1}() {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::After Each with Named Function"
    },
    {
        prefix: "afterEachDescription",
        body: [
            "afterEach('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::After Each with Description"
    },
    {
        prefix: "fafterEachDescription",
        body: [
            "afterEach('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::After Each with Description::Function"
    },
    {
        prefix: "describeAndIt",
        body: [
            "describe('${1}', () => {",
            "\tit('${2}', () => {",
            "\t\t${3}",
            "\t});",
            "});"
        ],
        description: "Mocha::Describe with It"
    },
    {
        prefix: "fdescribeAndIt",
        body: [
            "describe('${1}', function () {",
            "\tit('${2}', function () {",
            "\t\t${3}",
            "\t});",
            "});"
        ],
        description: "Mocha::Describe with It::Function"
    },
    {
        prefix: "describe",
        body: [
            "describe('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Describe"
    },
    {
        prefix: "fdescribe",
        body: [
            "describe('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Describe::Function"
    },
    {
        prefix: "contextAndIt",
        body: [
            "context('${1}', () => {",
            "\tit('${2}', () => {",
            "\t\t${3}",
            "\t});",
            "});"
        ],
        description: "Mocha::Context with It"
    },
    {
        prefix: "fcontextAndIt",
        body: [
            "context('${1}', function () {",
            "\tit('${2}', function () {",
            "\t\t${3}",
            "\t});",
            "});"
        ],
        description: "Mocha::Context with It::Function"
    },
    {
        prefix: "context",
        body: [
            "context('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Context"
    },
    {
        prefix: "fcontext",
        body: [
            "context('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Context::Function"
    },
    {
        prefix: "it",
        body: [
            "it('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::It"
    },
    {
        prefix: "fit",
        body: [
            "it('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::It::Function"
    },
    {
        prefix: "suite",
        body: [
            "suite('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Suite"
    },
    {
        prefix: "fsuite",
        body: [
            "suite('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Suite::Function"
    },
    {
        prefix: "suiteSetup",
        body: [
            "suiteSetup(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::SuiteSetup"
    },
    {
        prefix: "fsuiteSetup",
        body: [
            "suiteSetup(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::SuiteSetup::Function"
    },
    {
        prefix: "setup",
        body: [
            "setup(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Setup"
    },
    {
        prefix: "fsetup",
        body: [
            "setup(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Setup::Function"
    },
    {
        prefix: "suiteTeardown",
        body: [
            "suiteTeardown(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::SuiteTeardown"
    },
    {
        prefix: "fsuiteTeardown",
        body: [
            "suiteTeardown(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::SuiteTeardown::Function"
    },
    {
        prefix: "teardown",
        body: [
            "teardown(() => {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Teardown"
    },
    {
        prefix: "fteardown",
        body: [
            "teardown(function () {",
            "\t${1}",
            "});"
        ],
        description: "Mocha::Teardown::Function"
    },
    {
        prefix: "test",
        body: [
            "test('${1}', () => {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Test"
    },
    {
        prefix: "ftest",
        body: [
            "test('${1}', function () {",
            "\t${2}",
            "});"
        ],
        description: "Mocha::Test::Function"
    },
    {
        prefix: "entireSuite",
        body: [
            "suite('${1}', () => {",
            "",
            "\tsuiteSetup(() => { });",
            "",
            "\ttest('${2}', () => {",
            "\t\t${3}",
            "\t});",
            "",
            "\tsuiteTeardown(() => { });",
            "});"
        ],
        description: "Mocha::EntireSuite"
    },
    {
        prefix: "fentireSuite",
        body: [
            "suite('${1}', function () {",
            "",
            "\tsuiteSetup(function () { });",
            "",
            "\ttest('${2}', function () {",
            "\t\t${3}",
            "\t});",
            "",
            "\tsuiteTeardown(function () { });",
            "});"
        ],
        description: "Mocha::EntireSuite::Function"
    },
    {
        prefix: "exportsSuite",
        body: [
            "exports.${1} = {",
            "\t'${2}': {",
            "\t\t'${3}': () => {",
            "\t\t\t${4}",
            "\t\t},",
            "\t}",
            "};"
        ],
        description: "Mocha::ExportsSuite"
    },
    {
        prefix: "fexportsSuite",
        body: [
            "exports.${1} = {",
            "\t'${2}': {",
            "\t\t'${3}': function () {",
            "\t\t\t${4}",
            "\t\t},",
            "\t}",
            "};"
        ],
        description: "Mocha::ExportsSuite::Function"
    }
]
export default snippets

