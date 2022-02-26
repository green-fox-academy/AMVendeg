// önálló kitalált feladat: egy random és egy unique function-al tömbbe teszem, hogy Louise mit vegyen fel, mert nem tudja eldönteni. :) 
// ez ugyan nem TS, mert a TS-ben nem megy a shuffle, de megdolgoztam vele.

// shuffle function

function shuffle(a) {
    let j, x, y, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
       
        a[j] = x;
        y = a[i];
        a[i] = y;
    }
    return a;
  }

  // unique function to avoid the duplications

  Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};
  
  // let's make some wearing options
  
  let onLouise1 = ['magassarkú', 'télikabát', 'szoknya', 'parfüm', 'smink', 'ronda karácsonyi pulcsi'] ;
  let onLouise2 = ['sportcipő', 'sál', 'rúzs', 'fürdőruha', 'kisestélyi', 'köntös', 'válltöméses blúz'];
  
  // and shuffle them
  shuffle(onLouise1);
  shuffle(onLouise2);

  // then shuffle again and put them in variable [] to unique
  let louiseOnDate = shuffle(onLouise1);
  let louiseOnDate2 = shuffle(onLouise2);

  console.log(louiseOnDate.concat(louiseOnDate2).unique());
  
  