'use strict';


let lineCount: number = 10;

// piramis csillagokból és szóközökből


for (let i = 0; i < lineCount; i++) {                                           
    let pyramidSelf: string = '';                                                  
    let pyramidSpace: string = '';
    

    for (let k = 0; k < (lineCount-i-1); k++) {                                  
        pyramidSpace += ' ';                                                    
    }

    
    for (let m = 1; m < 2 * (i + 1); m++) {            
        pyramidSelf += '*';                              
    }

    console.log(pyramidSpace + pyramidSelf);

}
