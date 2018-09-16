type Snippet = { body: string[], description: string, prefix: string, functionType: 'arrow' | 'function' | 'both' }

const snippets: Snippet[] = [
  {
    prefix: "before",
    functionType: 'arrow',
    body: [
      "before(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Before "
  },
  {
    prefix: "fbefore",
    functionType: 'function',
    body: [
      "before(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Before::Function"
  },
  {
    prefix: "beforeNamed",
    functionType: 'arrow',
    body: [
      "before(function ${1}() {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Before with Named Function"
  },
  {
    prefix: "beforeDescription",
    functionType: 'arrow',
    body: [
      "before('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Before with Description"
  },
  {
    prefix: "fbeforeDescription",
    functionType: 'function',
    body: [
      "before('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Before with Description::Function"
  },
  {
    prefix: "beforeEach",
    functionType: 'arrow',
    body: [
      "beforeEach(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Before Each"
  },
  {
    prefix: "fbeforeEach",
    functionType: 'function',
    body: [
      "beforeEach(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Before Each::Function"
  },
  {
    prefix: "beforeEachNamed",
    functionType: 'arrow',
    body: [
      "beforeEach(function ${1}() {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Before Each with Named Function"
  },
  {
    prefix: "beforeEachDescription",
    functionType: 'arrow',
    body: [
      "beforeEach('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Before Each with Description"
  },
  {
    prefix: "fbeforeEachDescription",
    functionType: 'function',
    body: [
      "beforeEach('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Before Each with Description::Function"
  },
  {
    prefix: "after",
    functionType: 'arrow',
    body: [
      "after(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::After"
  },
  {
    prefix: "fafter",
    functionType: 'function',
    body: [
      "after(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::After::Function"
  },
  {
    prefix: "afterNamed",
    functionType: 'arrow',
    body: [
      "after(function ${1}() {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::After with Named Function"
  },
  {
    prefix: "afterDescription",
    functionType: 'arrow',
    body: [
      "after('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::After with Description"
  },
  {
    prefix: "fafterDescription",
    functionType: 'function',
    body: [
      "after('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::After with Description::Function"
  },
  {
    prefix: "afterEach",
    functionType: 'arrow',
    body: [
      "afterEach(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::After Each"
  },
  {
    prefix: "fafterEach",
    functionType: 'function',
    body: [
      "afterEach(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::After Each::Function"
  },
  {
    prefix: "afterEachNamed",
    functionType: 'arrow',
    body: [
      "afterEach(function ${1}() {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::After Each with Named Function"
  },
  {
    prefix: "afterEachDescription",
    functionType: 'arrow',
    body: [
      "afterEach('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::After Each with Description"
  },
  {
    prefix: "fafterEachDescription",
    functionType: 'function',
    body: [
      "afterEach('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::After Each with Description::Function"
  },
  {
    prefix: "describeAndIt",
    functionType: 'arrow',
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
    functionType: 'function',
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
    functionType: 'arrow',
    body: [
      "describe('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Describe"
  },
  {
    prefix: "fdescribe",
    functionType: 'function',
    body: [
      "describe('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Describe::Function"
  },
  {
    prefix: "contextAndIt",
    functionType: 'arrow',
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
    functionType: 'function',
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
    functionType: 'arrow',
    body: [
      "context('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Context"
  },
  {
    prefix: "fcontext",
    functionType: 'function',
    body: [
      "context('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Context::Function"
  },
  {
    prefix: "it",
    functionType: 'arrow',
    body: [
      "it('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::It"
  },
  {
    prefix: "fit",
    functionType: 'function',
    body: [
      "it('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::It::Function"
  },
  {
    prefix: "suite",
    functionType: 'arrow',
    body: [
      "suite('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Suite"
  },
  {
    prefix: "fsuite",
    functionType: 'function',
    body: [
      "suite('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Suite::Function"
  },
  {
    prefix: "suiteSetup",
    functionType: 'arrow',
    body: [
      "suiteSetup(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::SuiteSetup"
  },
  {
    prefix: "fsuiteSetup",
    functionType: 'function',
    body: [
      "suiteSetup(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::SuiteSetup::Function"
  },
  {
    prefix: "setup",
    functionType: 'arrow',
    body: [
      "setup(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Setup"
  },
  {
    prefix: "fsetup",
    functionType: 'function',
    body: [
      "setup(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Setup::Function"
  },
  {
    prefix: "suiteTeardown",
    functionType: 'arrow',
    body: [
      "suiteTeardown(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::SuiteTeardown"
  },
  {
    prefix: "fsuiteTeardown",
    functionType: 'function',
    body: [
      "suiteTeardown(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::SuiteTeardown::Function"
  },
  {
    prefix: "teardown",
    functionType: 'arrow',
    body: [
      "teardown(() => {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Teardown"
  },
  {
    prefix: "fteardown",
    functionType: 'function',
    body: [
      "teardown(function () {",
      "\t${1}",
      "});"
    ],
    description: "Mocha::Teardown::Function"
  },
  {
    prefix: "test",
    functionType: 'arrow',
    body: [
      "test('${1}', () => {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Test"
  },
  {
    prefix: "ftest",
    functionType: 'function',
    body: [
      "test('${1}', function () {",
      "\t${2}",
      "});"
    ],
    description: "Mocha::Test::Function"
  },
  {
    prefix: "entireSuite",
    functionType: 'arrow',
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
    functionType: 'function',
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
    functionType: 'arrow',
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
    functionType: 'function',
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

