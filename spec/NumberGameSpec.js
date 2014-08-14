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

    it("should print 0A4B if number equal but position is different",function(){
        expect(compare.compareNumber("1234","4321")).toBe("0A4B");
    })
})