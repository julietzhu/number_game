/**
 * Created by julia on 14-8-14.
 */
function CompareNumber(){
}

CompareNumber.prototype.compareNumber = function(input,answer){
    var countA = 0;
    var countB = 0;

    var positionA ;
    var positionB ;

    if(input===answer){
        countA = 4;
        countB = 0;
    }
    else{
        for(positionA=0;positionA<4;positionA++){
            var numberInput = input[positionA];
            console.log(positionA+"input"+numberInput);
            for(positionB=0;positionB<4;positionB++){
                var numberAnswer = answer[positionB];
                console.log(positionB+"answer"+numberAnswer);
                if(numberAnswer==numberInput){
                    countB++;
                    console.log("a"+countA);
                    if(positionA==positionB){
                        countA++;
                    }
                }
            }
        }
    }

    return countA+"A"+countB+"B";
}
