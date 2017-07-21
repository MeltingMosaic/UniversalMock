import "jasmine";

// We cannot use the ES6 import format here since universalMock isn't an ES6 module
const mock = require("../../src/universalMock");

describe("UniversalMock", function() {
    it("should work", function() {
        expect(mock).not.toBe(undefined);
    });

    it("should have any property", function() {
        const someProperty = mock.blah;
        expect(someProperty).not.toBe(null);
    });

    it("should return values that are set", function() {
        const someValue = "Thing!";
        mock.randomProperty = someValue;
        expect(mock.randomProperty).toBe(someValue);
    });

    it("should work for functions", function() {
        mock.someFunction = function() { return "hello!"; };
        expect(mock.someFunction()).toBe("hello!");
    });

    it("should return function objects", function() {
        expect(typeof (mock.anything)).toBe("function");
    });

    it("should work in interpolated strings", function() {
        expect(() => `${mock}`).not.toThrow();
    });
});
