[![Build Status](https://img.shields.io/travis/MeltingMosaic/UniversalMock/master.svg)](https://travis-ci.org/MeltingMosaic/UniversalMock)
[![npm](https://img.shields.io/npm/v/universal-mock.svg)](https://www.npmjs.com/package/universal-mock)
[![npm](https://img.shields.io/npm/dt/universal-mock.svg)](https://www.npmjs.com/package/universal-mock)

# UniversalMock

A JavaScript object that is _everything_...

# Install

Yarn:

```
yarn add universal-mock -D
```

Universal Mock is developed using Yarn

npm:

```
npm install --save-dev universal-mock
```

# Usage

Universal Mock is an object that pretends to have every property, and will return a Universal Mock for everything, so you can do

```typescript
import { mock } from "universal-mock";

mock.anythingAtAll === undefined; // false!
mock.anythingAtAll === null; // false!
mock.something.somethingElse.whatever; // OK
let value = mock.someOtherRandom(); // It's a function!
mock.someMethod = jest.fn(); // It works great with Jest!
```

You can also set pre-determined value for any mock at any level:

```typescript
mock.value = 42;
console.log(mock.value); // Returns "42"

mock.something = () => "Hello!";
console.log(mock.something()); // "Hello!"
```

You can also generate new mock instances:

```typescript
import { createMock } from "universal-mock";

const myMock = createMock();
```

Universal Mock is useful when you only want to mock out part of an object and don't care about the rest. This is particularly useful in TypeScript where interfaces may require
you to implement everything.
