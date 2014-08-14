/**
 * Created by julia on 14-8-14.
 */
describe("NumberGameSpec",function(){
    var compare = new CompareNumber();

//    beforeEach(function(){
//        compare = new CompareNumber();
//    });

    it("should be printed 4A0B if input = answer",function(){
        expect(compare.compareNumber("1234","1234")).toBe("4A0B");
    });
})