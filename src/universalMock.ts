const createProxy = function() {
    // our proxy object; we're overriding its get, set, and has traps to
    // intercept those operations
    const target = function(){ return createProxy(); };

    return new Proxy(target, {
        // tslint:disable-next-line:no-reserved-keywords
        set(trapTarget, key, value, receiver) {
            target[key] = value;

            return Reflect.set(trapTarget, key, value, receiver);
        },
        // tslint:disable-next-line:no-reserved-keywords
        get(trapTarget, key, receiver) {
            return target[key] || (key === "__ko_proto__" ? undefined : target[key] = createProxy());
        },
        has(trapTarget, key) {
            return target[key] || key !== "__ko_proto__";
        }
    });
};

export = createProxy();
