// `let` -> the modern way for changing values
// `let` is **block-scoped** (lives only inside `{ }`), can be **reassigned**, 
// but **cannot be redeclared** in the same scope.
// It is **hoisted** but not initialized, so accessing 
// it before declaration throws a `ReferenceError`.

// Use `let` when the value will genuinely change -> counters, retry attempts, current page URL, etc.

// let - Block Scoped
//let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined


