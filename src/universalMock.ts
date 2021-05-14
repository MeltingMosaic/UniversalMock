export const createMock = function (): any {
  // our proxy object; we're overriding its get, set, and has traps to
  // intercept those operations
  const target = function (): any {
    return createMock();
  };
  target[Symbol.toPrimitive] = () => "UniversalMock";

  return new Proxy(target, {
    set(trapTarget, key, value, receiver) {
      target[key] = value;

      return Reflect.set(trapTarget, key, value, receiver);
    },
    get(_trapTarget, key) {
      return target[key] !== undefined
        ? target[key]
        : key === "__ko_proto__"
        ? undefined
        : (target[key] = createMock());
    },
    has(_trapTarget, key) {
      return target[key] !== undefined ? target[key] : key !== "__ko_proto__";
    },
  });
};

export const mock = createMock();
