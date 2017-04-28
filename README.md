# UniversalMock [![Build Status](https://img.shields.io/travis/MeltingMosaic/UniversalMock/master.svg)](https://travis-ci.org/MeltingMosaic/UniversalMock) [![npm](https://img.shields.io/npm/v/universal-mock.svg)](https://www.npmjs.com/package/universal-mock)  [![npm](https://img.shields.io/npm/dt/universal-mock.svg)](https://www.npmjs.com/package/universal-mock)
A JavaScript object that is _everything_...

Universal Mock is an object that pretends to have every property, and will return a Universal Mock for everything, so you can do

```javascript
const mock = require("universalMock");

mock.anythingAtAll === undefined; // false!
mock.anythingAtAll === null; // false!
mock.something.somethingElse.whatever; // OK
let value = mock.someOtherRandom(); // It's a function!
```

You can also set pre-determined value for any mock at any level:
```javascript
mock.value = 42;
console.log(mock.value); // Returns "42"

mock.something = () => "Hello!";
console.log(mock.something()); // "Hello!"
```

Universal Mock is useful when you only want to mock out part of an object and don't care about the rest. This is particularly useful in TypeScript where interfaces may require
you to implement everything.
