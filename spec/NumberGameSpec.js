/**
 * Created by julia on 14-8-14.
 */
describe("NumberGameSpec",function(){
    var compare ;

    beforeEach(function(){
        compare = new CompareNumber();
    });

    it("should print 4A0B if input = answer",function(){
        expect(compare.compareNumber("1234","1234")).toBe("4A0B");
    });

    it("should print 0A4B if number is equal but position is different",function(){
        expect(compare.compareNumber("1234","4321")).toBe("0A4B");
    })

    it("should print 0A0B if number isn't equal and position is different", function(){
        expect(compare.compareNumber("1234","5678")).toBe("0A0B");
    })
})