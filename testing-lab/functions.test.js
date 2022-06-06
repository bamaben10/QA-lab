const { returnTwo, greeting, add, subtract, multiply, divide } = require("./functions");

test("returnTwo shouild return 2", () => {
    expect(returnTwo()).toBe(2);
});

test("greeting should expect a nice greeting for the name", () => {
    expect(greeting("James")).toBe("Hello, James");
    expect(greeting("Jill")).toBe("Hello, Jill");
});

test("the function add should add the numbers together", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
});

test("the math functions work", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
    expect(subtract(9, 5)).toBe(4);
    expect(subtract(10, 5)).toBe(5);
    expect(multiply(5, 7)).toBe(35);
    expect(multiply(5, 5)).toBe(25);
    expect(divide(50, 5)).toBe(10);
    expect(divide(6, 6)).toBe(1);
});

describe("do the math functions work", () => {
    test("the add functions work", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
    });
    test("the multiply functions work", () => {
        expect(multiply(5, 7)).toBe(35);
        expect(multiply(5, 5)).toBe(25);
    });
    test("the divide functions work", () => {
        expect(divide(50, 5)).toBe(10);
        expect(divide(6, 6)).toBe(1);
    });
    test("the subtract functions work", () => {
        expect(subtract(9, 5)).toBe(4);
        expect(subtract(10, 5)).toBe(5);
    });
});