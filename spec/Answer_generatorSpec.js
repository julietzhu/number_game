/**
 * Created by tiny on 14-8-13.
 */

describe('generator', function(){
    var generator;

    beforeEach(function(){
        generator = new Answer_generator();
    });

    it('the length of return should be 4 after generated',function(){
        expect(generator.generate_number().length).toBe(4);
    });

    it('should not be repeated the number of generated', function(){

        var generated_number = generator.generate_number();
        var flag = 1;
        for (var i=0; i<generated_number.length-1; i++){
            for (var j=i+1; j<generated_number.length; j++){
                if (generated_number[i] == generated_number[j]){
                    flag = 0;
                    break;
                }
            }
        }
        expect(flag).toBe(1);
    });

    it('should all be numbers',function(){
        var generated_number = generator.generate_number();
        var flag1 = 1;
        for (i=0; i<generator.generate_number().length; i++){
            if (generated_number[i] > '9' || generated_number[i] < '0') {
                flag1 = 0;
                break;
            }
        }
        expect(flag1).toBe(1);
    })


});