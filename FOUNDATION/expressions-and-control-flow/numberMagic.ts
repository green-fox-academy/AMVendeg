'use strict';


// gimme your number and i will tell, is it divide by 13. 

let yourNumber: any = 0;


if (isNaN(yourNumber) || yourNumber === true || yourNumber === false) {

    console.log(" It's not a num, Bear! :) ");
  
}   else if (yourNumber == 0) {

        console.log("Okay, but 13 / 0 always will be 0.")
}
    
 else {
        
    console.log("Congratulations! Your number: " + yourNumber + " / 13 is: " + yourNumber / 13);

}


