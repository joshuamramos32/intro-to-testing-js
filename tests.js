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
describe("hello", function(){
    it("should return a defined function", function(){
        expect(sayHello()).toBe("hello")
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

