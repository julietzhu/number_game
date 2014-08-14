/**
 * Created by tiny on 14-8-13.
 */
function Answer_generator(){

}

Answer_generator.prototype.generate_number = function() {
    var generated_number;

    do{
        var number1 = Math.floor(Math.random()*10).toString();
        var number2 = Math.floor(Math.random()*10).toString();
        var number3 = Math.floor(Math.random()*10).toString();
        var number4 = Math.floor(Math.random()*10).toString();

        generated_number = number1+number2+number3+number4;
    }
    while(this.is_repeated(generated_number));

    return generated_number;
};

Answer_generator.prototype.is_repeated = function(number) {
    var flag = 1;
    for (var i=0; i<number.length-1; i++){
        for (var j=i+1; j<number.length; j++){
            if (number[i] == number[j]){
                flag = 0;
                break;
            }
        }
    }
    return flag == 0;
};

