const {niceLogger} = require("../src/niceLogger.js");

test("niceLogger returns Hello World!", () => {

    expect(niceLogger()).toBe("Hello World!");
});