'use strict';


let lineCount: number = 10;

// felső része a macipiramisnak - nem szimmetrikus, ezen még dolgozni kell


for (let i = 0; i < lineCount; i++) {                                           // ez megy végig egyesével a 10 soron
    let bearFace: string = '';                                                  
    let bearSpace: string = '';
    

    for (let k = 0; k < (lineCount-i-1); k++) {                                  // ez pedig lineCount - i - 1, az h eggyel csökkenjen soronként, ezért kell bele az i
        bearSpace += '    ';                                                    // ez pedig += maciMancs a lényeg, ezzel lesz 10 az elején, vagy +, mert ha csak =, akkor egymás alá ir 9 db-t
    }

    
    for (let m = 1; m <= (i + 1); m++) {            
        bearFace += ' ʕ•ᴥ•ʔ ';                              
    }

    console.log(bearSpace + bearFace);

}


 /* alsó része a macipiramisnak - csökkenő maci, növekvő space-k
    
for (let i = 0; i < lineCount; i++) {                                           
    let bearFaceDown: string = '';                                                  
    let bearSpaceDown: string = '';
       
    for (let k = 0; k <= (lineCount-i-1); k++) {                                  
        bearFaceDown += ' ʕ•ᴥ•ʔ ';                              
    }
    
    
    for (let m = 1; m <= i; m++) {            
        bearSpaceDown += '    ';                                                    
    }


    console.log(bearSpaceDown + bearFaceDown);

}

*/