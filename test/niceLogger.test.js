// Import a specific function from the file
const {niceLogger, messageRepeater} = require("../src/niceLogger.js");

// Import the file
const niceLoggerFile = require("../src/niceLogger.js");
// Import a specific function from the file
const niceLoggerFunction = niceLoggerFile.niceLogger;


describe("niceLogger function tests", () => {
    test("niceLogger returns Hello World!", () => {

        expect(niceLogger()).toBe("Hello World!");
    });

    test("niceLogger returns Hello World!", () => {

        expect(niceLogger()).toBe("Hello World!");
    });

    test("niceLogger returns Hello World!", () => {

        expect(niceLogger()).toBe("Hello World!");
    });

    test("niceLogger returns Hello World!", () => {

        expect(niceLogger()).toBe("Hello World!");
    });
});

describe("messageRepeater function test", () => {

    test("messageRepeater repeats words correctly", () => {
        let repeateMessage = messageRepeater("hello");

        expect(repeateMessage).toBe("hellohellohello");
        expect(repeateMessage).toHaveLength(15);
    });

    test("messageRepeater repeats numbers correctly", () => {
        let repeateMessage = messageRepeater(1);

        expect(repeateMessage).toEqual("111");
        expect(repeateMessage).toHaveLength(3);
    });

    test("messageRepeater repeats arrays correctly", () => {
        let repeateMessage = messageRepeater(["hello", "world"]);

        console.log(repeateMessage);
        expect(repeateMessage).toStrictEqual(["hello", "world","hello", "world","hello", "world"]);
        expect(repeateMessage).toHaveLength(6);
    });

    test("messageRepeater repeats null or whitespace correctly", () => {
        let repeateMessage = messageRepeater("");

        expect(repeateMessage).toEqual("");
        expect(repeateMessage).toHaveLength(0);
    });
});