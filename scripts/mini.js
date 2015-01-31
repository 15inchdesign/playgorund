/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Iteraciju čemo izvesti na sljedeći način
// kroz for loop funkciju kroz 3 statementsa

for (var np = 0; np <= 20; np++) {                                  
    if (np % 2 === 0) {                                          
        console.log(np + '  ja sam sexy paran'); 
    } else {
        console.log(np + ' a ja sam neparan :P');             
    }
  }




/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Isto tako za ispis tablice za množenje na 2 načina sa nestanim for loop primjer 2
var multiplier = 9;
for (var i = 0; i <= 10; i++); {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}


for (var multiplier = 0; multiplier <= 10; multiplier++); {
 for (var i = 0; i <= 10; i++); {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}