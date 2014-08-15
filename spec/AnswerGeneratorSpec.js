/**
 * Created by julia on 14-8-15.
 */
describe("AnswerGeneratorSpec", function(){
    var answerGenerator;
    var number;

    beforeEach(function(){
        answerGenerator = new AnswerGenerator();
        number = answerGenerator.setNumber();
    });

    it("answer are number",function(){
        expect(isNaN(Number(number))).toBe(false);
    });

    it("should print 4-digits", function(){
        expect(number.length).toBe(4);
    });

    it("the digits of answer are not repeat",function(){
        var result = function(){
            for(var i=0;i<4;i++){
                for(var n=(i+1);n<4;n++){
                    if(number[i]==number[n]){
                        return "the digits exist repeat";
                    }
                }
            }
            return "the digits don't exist repeat"
        }
       expect(result()).toBe("the digits don't exist repeat");
    });
})
