// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function within code.js', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("Hello", function(){
    it("should return a defined function", function(){
        expect(sayHello()).toBe("Hello");
    })
    it("should return a string when called", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" ', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!"', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });it('should return the string "Hello, Pat!"', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!"', function() {
        expect(sayHello("Hello, World!")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!"', function(){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World" if false', function(){
        expect(sayHello(false)).toBe("Hello, World!")
    })

})

/* only have one test per spec!
describe("subtract", function(){
   it("should be a defined function", function(){
       expect(typeof subtract).toBe("function");
   });
    it("should return a number when passed to number arguments",function(){
        expect(typeof subtract(3, 1)).toBe("number");
    });
    it("should return false when passed any argument that is not a number", function (){
        expect(subtract()).toBe(false);
    });
    it("should return 34 when passed the argument of 64 and 30", function(){
		expect(subtract(64, 30)).toBe(34);
	})
});*/

