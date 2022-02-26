/*
callback: bizonyos function-oket oda tudunk adni paraméterként, amik kéősbb futnak le

milyen szenariokban hasznosak:
- vmilyen küd lefuttatását szeretnék bizonyos fuggvényekben
- de ne abban irjuk meg hanem paraméterként hazsnáljuk
- inkabb functionokat teszem be parameterbe, ahlyett h változoba tenném és ugy adnám át
- passed as an argument to another function

- időeltolódás esetén: mysql connection példa, elkezdődik vmi, de setTimeout-al megmondom h addig a
- error first callback paraméter: a function első paramétere mindig az error, aztan a result

- higher order function pl a map, ami szintén egy functiont vár, tömbműveletek

- callback-hell

- event loop: pl a setTimeout: mindig azt jelenti h ez később kell h lefusson
ahhoz képest ami után jön, függetlenül attól h 0 sec-t adok meg neki

a Timeout egy számmal tér vissza, ezt az egész timeout-t ezért bele tudom tenni egy változoba
pl. timeoutHandler = settiimeout()...
clearTimeout(timeoutHandler); --> töröljük a setTimeout-t

setInterval(() = {
  console.log('s elapsed);
}, 1000);

clearInterval()-ugyanugy mint a setTimeout-nál, törölhetem


De azt is lehet 5s multva induljon el egy 1sec interval
set Timeout 5000 cosnole log valami, azon belül setInterval 1 s: console log valami 2
de ezt nem tudjuk leállitani és nincs lehetőségünk is rá

le kell állítani, de hogyan? 


*/

const double = (a: number): number => a * 2;
let doubleF = function (a: number): number {
  return a * 2;
}

const doubleFunctions = [double, doubleF];


console.log(doubleFunctions.map(function (el) {
  return el(1)
}));

