/**
 * Created by julia on 14-8-15.
 */
describe("AnswerGeneratorSpec", function(){
    var answerGenerator;

    beforeEach(function(){
        answerGenerator = new AnswerGenerator();
        var number = answerGenerator.setNumber();
    });

    it("should print 4-digits", function(){

        expect(number.length).toBe(4);
    });
    
})