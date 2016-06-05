var skills = [
  ['Basic Data Types','Numbers','Strings','Booleans'],
  ['Advanced Data Types', 'Arrays', 'Objects', 'Undefined and Null'],
  ['Operators', 'Arithmetic Operators', 'Logical Operators', 'Other Operators']
  ['Functions','Basic','Function scope'],
  ['Looping', 'For Loop', 'While Loop'],
  ['Control Flow', 'If Statements', 'Switch Statements', 'Ternary Operator'],
  ['Basic Objects', 'Object Literal (JSON)', 'Object Constructors', 'Inheritance and Prototypes'],
  ['Array Methods', 'sort()', 'indexOf()', 'push()'],
  ['String Methods', 'slice()', 'length()', 'concat()'],
  ['Higher-order Functions', 'map()', 'filter()', 'reduce()'],
  ['Object-oriented Programming', 'Classes and Instances', 'Encapsulation and Privacy'],
  ['In-built Objects', 'Document', 'Math', 'Date'],
  ['ECMA 6', 'Fat Arrows', 'Template Strings', 'let', 'const', 'Symbols'],
  ['Functional Programming', 'Functional programming principles', 'Closures', 'Pure functions'],
  ['JS Libraries', 'JQuery', 'Bootstrap', 'Materialize'],
  ['JS Frameworks', 'Angular', 'React']
];

var content = [
{
  title: "Codecademy arithmetic tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/getting-started-v2/0/3",
  description: "Basic arithmetic with Codecademy",
  skill: skills[0][0],
  subskill: skills[0][1],
},
{
  title: "Numbers docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_numbers.asp",
  description: "Documentation for numbers on W3 Schools",
  skill: skills[0][0],
  subskill: skills[0][1]
},
{
  title: "Formatting decimal places",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/formatting-decimal-places-number-0",
  description: "Codewars kata on numbers and formatting decimal places",
  skill: skills[0][0],
  subskill: skills[0][1]
},
{
  title: "Codecademy numbers and strings tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/getting-started-v2/1/5",
  description: "Basic data types with Codecademy. Learn to access the length property of a string",
  skill: skills[0][0],
  subskill: skills[0][2]
},
{
  title: "Strings docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_strings.asp",
  description: "Documentation for strings on W3 Schools",
  skill: skills[0][0],
  subskill: skills[0][2]
},
{
  title: "repeatIt",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/repeatit",
  description: "Codewars kata to create a function called repeatIt that takes a string and a number (n) and repeats the string n times",
  skill: skills[0][0],
  subskill: skills[0][2]
},
{
  title: "Codecademy booleans tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/getting-started-v2/1/6",
  description: "Basic data types with Codecademy. Learn to access the length property of a string",
  skill: skills[0][0],
  subskill: skills[0][3]
},
{
  title: "Booleans docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_booleans.asp",
  description: "Documentation for strings on W3 Schools",
  skill: skills[0][0],
  subskill: skills[0][3]
},
{
  title: "Exclusive 'or' (xor) Logical Operator",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/exclusive-or-xor-logical-operator",
  description: "Codewars kata to create an 'exclusive or' operator that evaluates two booleans and returns true if exactly one of the two expressions is true",
  skill: skills[0][0],
  subskill: skills[0][3]
},
{
  title: "Codecademy array tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/javascript-beginner-en-OcLlk/0/1",
  description: "Codecademy tutorial covering iterating over an array, heterogeneous arrays, 2-D arrays",
  skill: skills[1][0],
  subskill: skills[1][1]
},
{
  title: "Array docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_arrays.asp",
  description: "Documentation for arrays on W3 Schools",
  skill: skills[1][0],
  subskill: skills[1][1]
},
{
  title: "Sorted Union",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/sorted-union",
  description: "Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays",
  skill: skills[1][0],
  subskill: skills[1][1]
},
{
  title: "Codecademy objects tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/javascript-beginner-en-OcLlk/2/1",
  description: "Codecademy tutorial covering object syntax and object creators",
  skill: skills[1][0],
  subskill: skills[1][2]
},
{
  title: "Object docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_objects.asp",
  description: "Documentation for objects on W3 Schools",
  skill: skills[1][0],
  subskill: skills[1][2]
},
{
  title: "Count strings in objects",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/count-strings-in-objects",
  description: "Create a function strCount (takes an object as argument) that will count all string values inside an object",
  skill: skills[1][0],
  subskill: skills[1][2]
},
{
  title: "Truth, Equality and JavaScript",
  contentType: "tutorial",
  URL: "https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/",
  description: "Blog which explores the different data types with worked examples",
  skill: skills[1][0],
  subskill: skills[1][3]
},
{
  title: "Data types docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_datatypes.asp",
  description: "Documentation for data types including null and undefined on W3 Schools",
  skill: skills[1][0],
  subskill: skills[1][3]
},
{
  title: "Codermania arithmetic arithmetic operators tutorial",
  contentType: "tutorial",
  URL: "http://www.codermania.com/javascript/lesson/1i/arithmetic-operators",
  description: "Codermania tutorial covering arithmetic operators and including some exercises",
  skill: skills[2][0],
  subskill: skills[2][1]
},
{
  title: "Operators docs (arithmetic section)",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_operators.asp",
  description: "Documentation for operators on W3 Schools with section on arithmetic operators",
  skill: skills[2][0],
  subskill: skills[2][1]
},
{
  title: "JavaScript Comparison and Logical Operators",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_comparisons.asp",
  description: "Documentation for comparison and logical operators on W3 Schools",
  skill: skills[2][0],
  subskill: skills[2][2]
},
{
  title: "Codermania arithmetic logical operators tutorial",
  contentType: "tutorial",
  URL: "http://www.codermania.com/javascript/lesson/1n/logical-operators",
  description: "Codermania tutorial covering logical operators and including some exercises",
  skill: skills[2][0],
  subskill: skills[2][2]
},
{
  title: "Codermania arithmetic string operators tutorial",
  contentType: "tutorial",
  URL: "http://www.codermania.com/javascript/lesson/1k/string-operators",
  description: "Codermania tutorial covering string operators and including some exercises",
  skill: skills[2][0],
  subskill: skills[2][3]
},
{
  title: "Unary (incrementation) operator docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Unary_operators",
  description: "Documentation for unary operators on MDN",
  skill: skills[2][0],
  subskill: skills[2][3]
},
{
  title: "Bitwise (binary) operator docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators",
  description: "Documentation for bitwise operators on MDN",
  skill: skills[2][0],
  subskill: skills[2][3]
},
{
  title: "Relation operator docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Relational_operators",
  description: "Documentation for relational operators on MDN",
  skill: skills[2][0],
  subskill: skills[2][3]
},
{
  title: "Codecademy functions tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/functions-in-javascript-2-0/0/1",
  description: "Codecademy tutorial covering function syntax",
  skill: skills[3][0],
  subskill: skills[3][1]
},
{
  title: "Function docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_functions.asp",
  description: "Documentation for functions on W3 Schools",
  skill: skills[3][0],
  subskill: skills[3][1]
},
{
  title: "Eloquent Javascript Chapter 3",
  contentType: "book",
  URL: "http://eloquentjavascript.net/03_functions.html",
  description: "Chapter 3 of Marijn Haverbeke's legendary book on Javascript.",
  skill: skills[3][0],
  subskill: skills[3][1]
},
{
  title: "Codecademy functions tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/functions-in-javascript-2-0/0/1",
  description: "Codecademy tutorial covering function syntax",
  skill: skills[3][0],
  subskill: skills[3][2]
},
{
  title: "Function scope docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_scope.asp",
  description: "Documentation for function scope on W3 Schools",
  skill: skills[3][0],
  subskill: skills[3][2]
},
{
  title: "Test Your Knowledge Of Function Scope",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/test-your-knowledge-of-function-scope/javascript",
  description: "Create a function that adds from two invocations. This requires an understanding of function scopes.",
  skill: skills[3][0],
  subskill: skills[3][2]
},
{
  title: "Codecademy for loops tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/javascript-beginner-en-NhsaT/0/1",
  description: "Codecademy tutorial covering for loops and how to iterate through arrays",
  skill: skills[4][0],
  subskill: skills[4][1]
},
{
  title: "For loops docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_loop_for.asp",
  description: "Documentation for for loops on W3 Schools",
  skill: skills[4][0],
  subskill: skills[4][1]
},
{
  title: "Draw me a chessboard",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/56242b89689c35449b000059/train/javascript",
  description: "Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array. Making a digital chessboard is an interesting way of visualising how loops can work together.",
  skill: skills[4][0],
  subskill: skills[4][1]
},
{
  title: "Tutorials point while loops tutorial",
  contentType: "tutorial",
  URL: "http://www.tutorialspoint.com/javascript/javascript_while_loop.htm",
  description: "Tutorials point tutorial covering while loops",
  skill: skills[4][0],
  subskill: skills[4][2]
},
{
  title: "While loops docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_loop_while.asp",
  description: "Documentation for while loops on W3 Schools",
  skill: skills[4][0],
  subskill: skills[4][2]
},
{
  title: "Training JS #9: loop statement --while and do..while",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/57216d4bcdd71175d6000560",
  description: "Explanation of how to use and practice using do..while and while.",
  skill: skills[4][0],
  subskill: skills[4][2]
},
{
  title: "Codecademy if statement tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/conditionals-in-javascript/1/1",
  description: "Codecademy tutorial covering conditionals",
  skill: skills[5][0],
  subskill: skills[5][1]
},
{
  title: "If else docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_if_else.asp",
  description: "Documentation for if else statements on W3 Schools",
  skill: skills[5][0],
  subskill: skills[5][1]
},
{
  title: "Tube strike options calculator",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/tube-strike-options-calculator",
  description: "You must create a function which takes three parameters; walking distance home, distance the bus must travel, and the combined distance of walking from the office to the bus stop and from the bus stop to your house, and return the fastest option.",
  skill: skills[5][0],
  subskill: skills[5][1]
},
{
  title: "Codecademy switch statement tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/conditionals-in-javascript/3/1",
  description: "Codecademy tutorial covering switch statement",
  skill: skills[5][0],
  subskill: skills[5][2]
},
{
  title: "Switch statement docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_switch.asp",
  description: "Documentation for switch statements on W3 Schools",
  skill: skills[5][0],
  subskill: skills[5][2]
},
{
  title: "L1: Bartender, drinks!",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/l1-bartender-drinks",
  description: "Write a function getDrinkByProfession which serves up a drink appropriate for that person's profession",
  skill: skills[5][0],
  subskill: skills[5][2]
},
{
  title: "Codecademy ternary operator tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/conditionals-in-javascript/4/1",
  description: "Codecademy tutorial covering ternary operator",
  skill: skills[5][0],
  subskill: skills[5][3]
},
{
  title: "Ternary operator docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
  description: "Documentation for ternary operators on Mozilla Developer Network",
  skill: skills[5][0],
  subskill: skills[5][3]
},
{
  title: "Codecademy JSON tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/javascript-beginner-en-xTAfX/0/1",
  description: "Codecademy tutorial covering JSON",
  skill: skills[6][0],
  subskill: skills[6][1]
},
{
  title: "JSON docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/json/",
  description: "Documentation for JSON on W3 Schools",
  skill: skills[6][0],
  subskill: skills[6][1]
},
{
  title: "Configure package json for a node application",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/configure-package-json-for-a-node-application",
  description: "Create a package.json configuration",
  skill: skills[6][0],
  subskill: skills[6][1]
},
{
  title: "Codecademy object contructor tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/spencer-sandbox/3/1",
  description: "Codecademy tutorial covering object constructors",
  skill: skills[6][0],
  subskill: skills[6][2]
},
{
  title: "Object contructor docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor",
  description: "Documentation for object constructors on Mozilla Developer Network",
  skill: skills[6][0],
  subskill: skills[6][2]
},
{
  title: "Greedy seller's quotes",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/greedy-sellers-quotes",
  description: "In this kata you will write a method which returns a quote for a give quantity of items. Stock items are represented as a list of objects.",
  skill: skills[6][0],
  subskill: skills[6][2]
},
{
  title: "Codecademy prototype and inheritance tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/objects-ii/2/4?curriculum_id=506324b3a7dffd00020bf661",
  description: "Codecademy tutorial covering prototypes and inheritance",
  skill: skills[6][0],
  subskill: skills[6][3]
},
{
  title: "Object prototype docs",
  contentType: "documentation",
  URL: "https://developer.moziGreedy seller's quoteslla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype",
  description: "Documentation for object prototypes on Mozilla Developer Network",
  skill: skills[6][0],
  subskill: skills[6][3]
},
{
  title: "Strings, strings, strings (Easy)",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/strings-strings-strings-easy",
  description: "The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.",
  skill: skills[6][0],
  subskill: skills[6][3]
},
{
  title: "Array.sort method docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/jsref/jsref_sort.asp",
  description: "Documentation for Array.sort method on W3 Schools",
  skill: skills[7][0],
  subskill: skills[7][1]
},
{
  title: "Suzuki needs help lining up his students!",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/suzuki-needs-help-lining-up-his-students",
  description: "You will be given a string of student names. Sort them and return a list of names in descending order.",
  skill: skills[7][0],
  subskill: skills[7][1]
},
{
  title: "Array.indexOf method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
  description: "Documentation for Array.indexOf on Mozilla Developer Network",
  skill: skills[7][0],
  subskill: skills[7][2]
},
{
  title: "Training JS #31: methods of arrayObject---isArray() indexOf() and toString()",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/training-js-number-31-methods-of-arrayobject-isarray-indexof-and-tostring",
  description: "Kata which covers Array.indexOf and two other methods, isArray and toString.",
  skill: skills[7][0],
  subskill: skills[7][2]
},
{
  title: "Array.push method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
  description: "Documentation for Array.push on Mozilla Developer Network",
  skill: skills[7][0],
  subskill: skills[7][3]
},
{
  title: "Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/training-js-number-23-methods-of-arrayobject-push-pop-shift-and-unshift",
  description: "Kata which covers Array.indexOf and two other methods, pop and unShift.",
  skill: skills[7][0],
  subskill: skills[7][3]
},
{
  title: "String.slice method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
  description: "Documentation for String.slice method on Mozilla Developer Network",
  skill: skills[8][0],
  subskill: skills[8][1]
},
{
  title: "Training JS #16: Methods of String object--slice(), substring() and substr()",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr",
  description: "Kata which covers String.slice and two other methods, substring and substr.",
  skill: skills[8][0],
  subskill: skills[8][1]
},
{
  title: "String.length method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length",
  description: "Documentation for String.length on Mozilla Developer Network",
  skill: skills[8][0],
  subskill: skills[8][2]
},
{
  title: "Maximum Length Difference",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/maximum-length-difference",
  description: "Kata which covers Array.indexOf and two other methods, isArray and toString.",
  skill: skills[8][0],
  subskill: skills[8][2]
},
{
  title: "String.concat method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat",
  description: "Documentation for String.concat on Mozilla Developer Network",
  skill: skills[8][0],
  subskill: skills[8][3]
},
{
  title: "Training JS #18: Methods of String object--concat() split() and its good friend join(",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/57280481e8118511f7000ffa",
  description: "Kata which covers String.concat and two other methods, split and join.",
  skill: skills[8][0],
  subskill: skills[8][3]
},
{
  title: "Array.map method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
  description: "Documentation for Array.map method on Mozilla Developer Network",
  skill: skills[9][0],
  subskill: skills[9][1]
},
{
  title: "Training JS #26: methods of arrayObject---map()",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/572fdeb4380bb703fc00002c",
  description: "Write a function that takes a string and returns a character "|" into the middle of the string.",
  skill: skills[9][0],
  subskill: skills[9][1]
},
{
  title: "Array.filter method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
  description: "Documentation for Array.filter method on Mozilla Developer Network",
  skill: skills[9][0],
  subskill: skills[9][2]
},
{
  title: "Training JS #27: methods of arrayObject---filter()",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/572fdeb4380bb703fc00002c",
  description: "Write a function that takes an array of grade scores and returns an object which divides the grades into different categories.",
  skill: skills[9][0],
  subskill: skills[9][2]
},
{
  title: "Array.reduce method docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
  description: "Documentation for Array.reduce method on Mozilla Developer Network",
  skill: skills[9][0],
  subskill: skills[9][3]
},
{
  title: "Training JS #30: methods of arrayObject---reduce() and reduceRight()",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/573156709a231dcec9000ee8",
  description: "Write a function that returns the product of an array of numbers.",
  skill: skills[9][0],
  subskill: skills[9][3]
},
{
  title: "Codecademy classes and instances tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/intro-to-object-oriented-programming/0/1",
  description: "Codecademy tutorial covering classes and instances",
  skill: skills[10][0],
  subskill: skills[10][1]
},
{
  title: "Class and instance docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
  description: "Documentation for class and instance on Mozilla Developer Network",
  skill: skills[10][0],
  subskill: skills[10][1]
},
{
  title: "Fun with ES6 Classes #2 - Animals and Inheritance",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance",
  description: "Define the shark, cat and dog classes that inherit from Animal using the extends keyword.",
  skill: skills[10][0],
  subskill: skills[10][1]
},
{
  title: "Codecademy encapsulation and privacy tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/intro-to-object-oriented-programming/1/1",
  description: "Codecademy tutorial covering encapsulation and privacy",
  skill: skills[10][0],
  subskill: skills[10][2]
},
{
  title: "Douglas Crockford's private Members in JavaScript",
  contentType: "tutorial",
  URL: "http://javascript.crockford.com/private.html",
  description: "Douglas Crockford tutorial on public and private properties of objects",
  skill: skills[10][0],
  subskill: skills[10][2]
},
{
  title: "Can you keep a secret?",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/can-you-keep-a-secret",
  description: "Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods, getSecret() which returns the secret and setSecret() which sets the secret.",
  skill: skills[10][0],
  subskill: skills[10][2]
},
{
  title: "Document Object Modal tutorial",
  contentType: "tutorial",
  URL: "https://dom-tutorials.appspot.com/static/index.html",
  description: "Tutorial covering Document Object Modal",
  skill: skills[11][0],
  subskill: skills[11][1]
},
{
  title: "Document object docs",
  contentType: "documentation",
  URL: "http://www.w3schools.com/js/js_htmldom_document.asp",
  description: "Documentation for document object on W3 Schools",
  skill: skills[11][0],
  subskill: skills[11][1]
},
{
  title: "Codecademy Math object tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/en/courses/javascript-beginner-en-ws7tv/0/5",
  description: "Tutorial covering the Math object on Codecademy",
  skill: skills[11][0],
  subskill: skills[11][2]
},
{
  title: "Math object docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math",
  description: "Documentation for Document object on Mozilla Developer Network",
  skill: skills[11][0],
  subskill: skills[11][2]
},
{
  title: "Training JS #34: methods of Math---pow() sqrt() and cbrt()",
  contentType: "kata",
  URL: "http://www.codewars.com/kata/training-js-number-34-methods-of-math-pow-sqrt-and-cbrt",
  description: "In this lesson we learn three methods of Math: pow() sqrt() and cbrt()",
  skill: skills[11][0],
  subskill: skills[11][2]
},
{
  title: "Codecademy Date object tutorial",
  contentType: "tutorial",
  URL: "https://www.codecademy.com/courses/the-date-object/0/1",
  description: "Tutorial covering the Date object on Codecademy",
  skill: skills[11][0],
  subskill: skills[11][3]
},
{
  title: "Date object docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
  description: "Documentation for Date object on Mozilla Developer Network",
  skill: skills[11][0],
  subskill: skills[11][3]
},
{
  title: "An Introduction to JavaScript ES6 Arrow Functions",
  contentType: "tutorial",
  URL: "https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/",
  description: "Tutorial covering the fat arrows used to define functions in ES6",
  skill: skills[12][0],
  subskill: skills[12][1]
},
{
  title: "Tutorial covering template literals in ES6",
  contentType: "tutorial",
  URL: "http://exploringjs.com/es6/ch_template-literals.html",
  description: "ES6 has two new kinds of literals: template literals and tagged template literals.",
  skill: skills[12][0],
  subskill: skills[12][2]
},
{
  title: "let statement docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let",
  description: "Documentation for let statement on Mozilla Developer Network",
  skill: skills[12][0],
  subskill: skills[12][3]
},
{
  title: "const statement docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const",
  description: "Documentation for const statement on Mozilla Developer Network",
  skill: skills[12][0],
  subskill: skills[12][4]
},
{
  title: "Symbol statement docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
  description: "Documentation for Symbols on Mozilla Developer Network",
  skill: skills[12][0],
  subskill: skills[12][5]
},
{
  title: "JavaScript functional programming: 9 free beginner exercises",
  contentType: "tutorial",
  URL: "rmion.com/javascript-functional-programming-free-beginner-exercises/",
  description: "Test your knowledge of variables, operations, control flow and higher-order functions in JavaScript",
  skill: skills[13][0],
  subskill: skills[13][1]
},
{
  title: "The Two Pillars of JavaScript — Pt 2: Functional Programming",
  contentType: "tutorial",
  URL: "https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.94sw7qd0q",
  description: "Excellent functional programming tutorial on medium",
  skill: skills[13][0],
  subskill: skills[13][1]
},
{
  title: "Lexical scoping and closures docs",
  contentType: "documentation",
  URL: "https://developer.mozilla.org/en/docs/Web/JavaScript/Closures",
  description: "Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope).",
  skill: skills[13][0],
  subskill: skills[13][2]
},
{
  title: "JavaScript Closures 101- they're not magic",
  contentType: "tutorial",
  URL: "http://www.javascriptkit.com/javatutors/closures.shtml",
  description: "Tutorial on closures",
  skill: skills[13][0],
  subskill: skills[13][2]
},
{
  title: "An Introduction to Reasonably Pure Functional Programming",
  contentType: "tutorial",
  URL: "https://www.sitepoint.com/an-introduction-to-reasonably-pure-functional-programming/",
  description: "Tutorial on how to write pure functions using javascript",
  skill: skills[13][0],
  subskill: skills[13][3]
},
{
  title: "Redux: Pure and impure functions",
  contentType: "tutorial",
  URL: "https://egghead.io/lessons/javascript-redux-pure-and-impure-functions",
  description: "Tutorial on redux pure and impure functions on egghead.io",
  skill: skills[13][0],
  subskill: skills[13][3]
}
]
