/**
 * Created by tiny on 14-8-13.
 */
describe('guess test',function(){
    var guess;

    //unit test
    it('should return 4A0B when Answer_generator generate 1234 and input is 1234', function () {
        //Given
        var input = "1235";
        var answer = "1234";
        var answerGenerator = new Answer_generator();
        spyOn(answerGenerator, 'generate_number').and.returnValue(answer);

        var compare = new Number();
        spyOn(compare,'compare_number').and.returnValue('3A0B');

        //When
        guess = new Guess(answerGenerator, compare);
        var returnValue = guess.guess_number(input);

        //Then
        expect(returnValue).toBe("3A0B");

        expect(compare.compare_number).toHaveBeenCalledWith(answer, input);
    });

    //integration test
    it("should return 2A2B when Answer_generator generate 1234 and input is 1243", function() {
        var fake_numbers = [ 0.1, 0.2, 0.3, 0.4]
        spyOn(Math, 'random').and.callFake(function() {
          return fake_numbers.shift();
        });

        guess = new Guess(new Answer_generator(), new Number());

        expect(guess.guess_number("1243")).toBe("2A2B");
    });

});