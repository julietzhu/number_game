/**
 * Created by julia on 14-8-14.
 */
function CompareNumber(){
}

CompareNumber.prototype.compareNumber = function(inputnumber,answer){
    var countA = 0;
    var countB = 0;

    _.each(inputnumber,function(input){
        if(_(answer).contains(input)){
            if(inputnumber.indexOf(input)===answer.indexOf(input)){
                countA++
            }
            else{
                countB++;
            }
        }
    })

    return countA+"A"+countB+"B";
}


