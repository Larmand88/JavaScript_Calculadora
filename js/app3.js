var Calculadora = (function(){
  var resultado = 0

  function actualizarResuldato(nuevoResultado){
    resultado = nuevoResultado
  }
  return {
    sumar: function(num1,num2){
      var resultado = num1 + num2
      actualizarResuldato(resultado)
    },
    restar: function(){
      var resultado = num1 -num2
      actualizarResuldato(resultado)
    },
    multiplicar: function(){
      var resultado = num1 * num2
      actualizarResuldato(resultado)
    },
    dividir: function(){
      var resultado = num1 / num2
      actualizarResuldato(resultado)
    },
    raiz: function(){
      var resultado = num1 +num2
      actualizarResuldato(resultado)
    },
    resultado: function(){
      return resultado
    }
  }
});
var testModule = (function () {

  var counter = 0;

  return {

    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };

})();

// Usage:

// Increment our counter
