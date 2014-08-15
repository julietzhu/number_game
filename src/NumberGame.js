/**
 * Created by julia on 14-8-14.
 */
function CompareNumber(){
}

CompareNumber.prototype.compareNumber = function(input,answer){
    var countA = 0;
    var countB = 0;

    for( var positionA=0;positionA<4;positionA++){
        var numberInput = input[positionA];
        for(var positionB=0;positionB<4;positionB++){
            var numberAnswer = answer[positionB];
            if(numberAnswer==numberInput&&positionA==positionB){
                countA++;
            }
            if(numberAnswer==numberInput&&positionA!=positionB){
                countB++;
            }
        }
    }
    return countA+"A"+countB+"B";
}
