/**
 * Created by tiny on 14-8-13.
 */
function Guess(answer_generator, compare){
    this.answer = answer_generator.generate_number();
    this.compare = compare;
}

Guess.prototype.guess_number = function(input_number){
    return this.compare.compare_number(this.answer, input_number);
};