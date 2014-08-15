/**
 * Created by julia on 14-8-15.
 */
function AnswerGenerator(){
}

AnswerGenerator.prototype.setNumber = function(){
    var digit = Math.floor(Math.random()*10).toString();
    while(digit.length<4){
        var s = Math.floor(Math.random()*10).toString();
        if(_(digit).contains(s)==false){
            digit = digit + s;
        }
    }
    return digit;
}


