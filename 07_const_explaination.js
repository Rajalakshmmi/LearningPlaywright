// `const` -> for values that should not change
// `const` is also **block-scoped**, but it **cannot be reassigned** and **cannot be redeclared**. It must be initialized at the time of declaration.

// This is the default choice for an SDET — test URLs, config values, locators, expected results — anything that should remain fixed throughout the test.

const BASE_URL = "https://app.thetestingacademy.com";
BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.
console.log(BASE_URL)
