let fruits = ['apple', 'peach', 'mango', 'cherry', 'pear'];

console.log(fruits);                                                                // tömb tartalmát dobja ki

console.log(['apple', 'peach', 'mango', 'cherry', 'pear'].indexOf('mango'));        // INDEXOF megmondja h a mango hányadik index a tömbben

fruits.forEach(function(e, i) {                                                     // FOREACH elem és az indexe
    console.log(e, i);
})


let triples = [1, 2, 3, 4, 5].map(function(e) {                                     // MAP megszorozza a tömb elemeit 3-al a tömbben
    return e * 3;
});

console.log(triples);                                                               


let fiveth = [6953, 786, 412, 205].map(function(e) {                                // MAP osztást is tud, tizedest is kiirja
    return e / 5;
});
console.log(fiveth);                                                                



let evens = [1, 2, 3, 4, 5].filter(function(e) {                                    // FILTER kidobja a tömb elemei közül a kettővel oszthatókat, vagyis ami maradék nélkül osztható
    return e % 2 == 0;
});
console.log(evens);



let isAllEven = [2, 5, 7, 3, 4].every(function(e) {                                 // EVERY - boolean-t ad vissza, megnézni h minden elemre érvényes-e a feltétel
    return e % 2 == 0;                                                              // false 
});
console.log(isAllEven);



let isAnyEven = [4, 7, 13, 43, 55].some(function(e){                                // SOME - boolean-t ad vissza szintén, megmondja h néhány elem osztható e maradék nélkül 2-vel a tömbben
    return e % 2 == 0;                                                              // true
});
console.log(isAnyEven);



let letters = 'Louise'.split('');                                                   // Split - szétválasztja a string karaktereit
console.log(letters);
console.log(letters.join('-'));                                                     // join('-') pedig összefűzi a string karaktereit a ()-ben megadott karakterrel: L-o-u-i-s-e


