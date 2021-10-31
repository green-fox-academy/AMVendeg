'use strict';



let lineCount: number = 10;

// felső része a diamondnak 


for (let i = 0; i < lineCount; i++) {                                           
    let bearFace: string = '';                                                  
    let bearSpace: string = '';
    

    for (let k = 0; k < (lineCount-i-1); k++) {                                  
        bearSpace += ' ';                                                    
    }

    
    for (let m = 1; m < 2 * (i + 1); m++) {            
        bearFace += '*';                              
    }

    console.log(bearSpace + bearFace);

}


// alsó része a piramisnak
    
for (let i = 0; i < lineCount; i++) {                                           
    let bearFaceDown: string = '';                                                  
    let bearSpaceDown: string = '';
       
    for (let k = 0; k <= 2 * (lineCount-i-1); k++) {                                  
        bearFaceDown += '*';                              
    }
    
    
    for (let m = 1; m <= i; m++) {            
        bearSpaceDown += ' ';                                                    
    }


    console.log(bearSpaceDown + bearFaceDown);

}

