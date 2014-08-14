/**
 * Created by tiny on 14-8-13.
 */

describe('number', function() {

    var number;

    beforeEach (function(){
        number = new Number();
    });

    it('should return 0A0B when input_number is 9645 ', function(){
        expect(number.compare_number('2387','9645')).toBe('0A0B');
    });

    it('should return 4A0B when input_number is 2387',function(){
        expect(number.compare_number('2387','2387')).toBe('4A0B');
    });

    it('should return 0A4B when input_number is 7832', function(){
        expect(number.compare_number('2387','7832')).toBe('0A4B');
    });

    it('should return 1A0B when input_number is 2569', function (){
        expect(number.compare_number('2387','2569')).toBe('1A0B');
    })


});