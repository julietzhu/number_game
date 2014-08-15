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
        if(_(answer).contains(numberInput)){
            if(positionA==answer.indexOf(numberInput)){
                countA++
            }
            else{
                countB++;
            }
        }
    }
    return countA+"A"+countB+"B";
}

