// Array Methods

// ForEach
// Map
// Filter
// reduce
//--------------------------------------------------------------
//1. ForEach
const coding = ["JS", "Java", "Cpp", "Go", "Rust", "Python"];

//Syntax for forEach Method using simple function.
coding.forEach(function (Languages, index, Array) {
  // console.log(Languages, index, Array);
});

// using arrow function
coding.forEach((Languages, index, Array) => {
  /* In ForEach method we can pass index as well as whole array also. */
  // console.log(Languages, index, Array);
});

const Coding = [
  {
    LanguageName: "JavaScript",
    LanguageFileName: "js",
  },
  {
    LanguageName: "CPP",
    LanguageFileName: "cpp",
  },
  {
    LanguageName: "GoLang",
    LanguageFileName: "Go",
  },
];

Coding.forEach((item) => {
  // console.log(item.LanguageName); --> Printing the LanguageName of the objects defined inside the array.
});