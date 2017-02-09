var Calculadora = {function(num1,num2){
  var resultado = 0

  function actualizarResuldato(nuevoResultado){
    resultado = nuevoResultado
  }
  return {
    sumar: function(){
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
}

// Variables Generales para guardar resultados
var a = "0"
var b = 1
var c = 0
var d = 0
var i = 0
var resultado = 0
var tag= ""
// Se restablecen todos los valores a su estado inicial
document.getElementById('on').addEventListener("click",function(){
document.getElementById('display').innerHTML = 0
              a = "0"
              b = 1
              c = ""
              i = 0
})
function elemento(e){
  if (e.srcElement)
    tag = e.srcElement.id;
  else if (e.target)
      tag = e.target.id;
      if (tag >=0 && tag <= 9)
      c = parseInt(tag)
      else
      c = tag
function asignarTecla(){
    if (c >= 0 && c <= 9 ) {
document.getElementById(c).addEventListener("click",function(){
  // Agregar un numero si el valor inicial no es igual a 0
  if (a === "0" && b < 9 && c >= 1) {
                        a =  "" + c
                      document.getElementById('display').innerHTML =  a
                      c = ""
                        // Agregar un valor cuando "a" es diferente de 0 como valor inicial
                      }else if(a !== "0" && b < 9){
                        a = "" + a + c
                        document.getElementById('display').innerHTML = a
                        b = a.length
                        c= ""
                    }
                })
} else if (tag === "punto" && i === 0 ) {
  c = "."
  a = "" + a + c
  document.getElementById('display').innerHTML = a
  c = ""
  b = a.length
  i++
} else if ( d === 0 && tag === "sign" ) {
  a = "-" + a
  document.getElementById('display').innerHTML = a
  d++
} else if (d === 1 && tag === "sign") {
  a = a.substring(1,a.length)
  d--
  document.getElementById('display').innerHTML = a
}
}
}
onmousedown="elemento(event);"
