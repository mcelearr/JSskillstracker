var skills = [
  ['Basic Data Types','Numbers','Strings','Booleans'],
  ['Advanced Data Types', 'Arrays', 'Objects', 'Undefined and Null'],
  ['Operators', 'Arithmetic Operators', 'Logical Operators', 'Other Operators']
  ['Functions','Basic','Function scope'],
  ['Looping', 'For Loop', 'While Loop'],
  ['Control Flow', 'If Statements', 'Switch Statements', 'Ternary Operator'],
  ['Basic Objects', 'Object Literal (JSON)', 'Object Constructors', 'Inheritance and Prototypes'],
  ['Array Methods', 'sort()', 'indexOf()', 'concat()', 'splice()'],
  ['String Methods', 'slice()', 'substring()', 'charAt()'],
  ['Higher-order Functions', 'map()', 'filter()', 'reduce()'],
  ['Object-oriented Programming', 'Classes and Instances', 'Getters and Setters', 'Polymorphism'],
  ['In-built Objects', 'Document', 'Math', 'Date'],
  ['Style', 'Naming Conventions', 'Indenting', 'Comments'],
  ['ECMA 6', 'Fat Arrows', 'Template Strings', 'let', 'const', 'Symbols'],
  ['JS Libraries', 'JQuery', 'Bootstrap', 'Materialize'],
  ['JS Frameworks', 'Angular', 'React'],
  ['Functional Programming', 'Closures', 'Promises']
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
}
]
