/**
 * Created by tiny on 14-8-13.
 */
function Number() {
}
//
//Number.prototype.number_generator = function() {
//
//
//
//    return '2387';
//};

Number.prototype.compare_number = function (generated_number, input_number) {
    var number_of_A = 0;
    var number_of_B = 0;

    for (var i=0; i<4; i++){
        for (var j=0; j<4; j++){
            if ((generated_number[i] == input_number[j]) && i==j){
                number_of_A += 1;
            }
            else if ((generated_number[i] == input_number[j]) && i!=j){
                number_of_B += 1;
            }
        }
    }

    return number_of_A+'A'+number_of_B+'B';
};

