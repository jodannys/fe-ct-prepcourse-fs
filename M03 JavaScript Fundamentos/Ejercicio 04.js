/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return (num*num)
}
console.log(elevarAlCuadrado(4));


function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return num * num * num;
}
console.log(elevarAlCubo(3));


function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
return Math.pow(num,exponent);
}
console.log(elevar(5,6))

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código: 
   return Math.round(num);
}
console.log(redondearNumero(23.45))


function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num)

}
 console.log(redondearHaciaArriba(66.69));

function numeroRandom(num) {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random()
}
console.log(numeroRandom(0,1));


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
