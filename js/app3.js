// Variables Generales para guardar resultados
var a = "0"  // Valor para el Display
var b = 1    // Define el largo de los numeros en la pantalla
var c = 0    // Se Asigna el valor de tag para poder evaluarlo si es numerico o si en su defecto se dio click a un elemento con ID
var d = 0    // Variable para saber si el signo negativo se uso
var f = 0    //Cuenta la cantidad de veces que se apreta una tecla que es un operador y se reinicia cuando es 0
var ptag = ""    // Variable para asignar el tag anterior
var i = 0    // Cuenta la cantidad de veces que se ha ingresado el punto
var ii = 0   // guardar el ultimo valor de "a" para seguir haciendo la operacion cuando se la da Click
var resultado = 0 // Guarda el resultado para seguir aplicando las operaciones que se necesiten
var tag= ""  // Devuelve el id que se presiona en el navegador
var operaciones = 0  // Asigna un valor numerico a las operaciones de suma, resta, multiplicacion, division y raiz

// las teclas generales se definen por aparte para trabajarlas por aparte y no se vean afectadas por las funciones
// esta nota es para el evaluador.....decidi utilizarlo asi porque al ser mi primer proyecto grande en JS me gusto
// el hecho de tenerlas clasras arriba

function Calculadora(e){
  if (e.srcElement)
    tag = e.srcElement.id;
  else if (e.target)
      tag = e.target.id;
      if (tag >=0 && tag <= 9)
      c = parseInt(tag)
      else
      c = tag
      console.log('ii tiene un valor de' + ii);
      console.log('a tiene un valor de' + a);
      console.log('tag tiene un valor de' + tag);
      console.log('ptag tiene un valor de' + ptag);
      if ( tag == "mas" || tag == "menos" || tag == "por" || tag == "dividido" || tag == "igual" ) {
        if ((operaciones === "igual" && tag !== "igual") ) {
          ii = 0
          f = 0
        }
        evaluarOperacion()
      }

  if ( c >= 0 && c <= 9 ) {
    return valorNumerico();
  }
}
// Se restablecen todos los valores a su estado inicial
document.getElementById('on').addEventListener("click",function(){
document.getElementById('display').innerHTML = 0
                a = "0"
                b = 1
                c = 0
                d = 0
                i = 0
                ii = 0
                resultado = 0
                tag= ""
                ptag= ""
                operaciones = 0
})
document.getElementById('punto').addEventListener("click",function(){  // Agregar un punto
b = a.length
  if ( i === 0 && b < 9) {
    c = "."
    a = "" + a + c
    document.getElementById('display').innerHTML = a
    c = ""
    i++
  }
})
document.getElementById('sign').addEventListener("click",function(){ // Agregar el signo Negativo
b = a.length
  if ( d === 0 && b < 9) {
  ii = "-" + ii
  document.getElementById('display').innerHTML = ii
  d++
} else if (d === 1 && b <= 9) {
    ii = ii.substring(1,a.length)
    d--
    document.getElementById('display').innerHTML = ii
  }
})
function valorNumerico(){
  document.getElementById(c).addEventListener("click",function(){
    if (a === "0" && b < 9 && c >= 1) {
          a =  "" + c
        document.getElementById('display').innerHTML =  a
        c = ""
          // Agregar un valor cuando "a" es diferente de 0 como valor inicial
    } else if (a !== "0" && b < 9){
          a = "" + a + c
          document.getElementById('display').innerHTML = a
          b = a.length
          c= ""
    }else if (a === "0" && parseFloat(ii) > 0 ) {
      ii = 0
    } {

    }
    ii = a
  })
}
function clickOperador(){
  a = "0"
  b = 1
  c = 0
  d = 0
  if (resultado !== ""){
  document.getElementById("display").innerHTML = resultado
  }
}
function evaluarOperacion(){
  console.log('operaciones tiene un valor de ' + operaciones);
operaciones = tag
console.log('operaciones guarda el valor de tag' + tag);
  switch (ptag) {
    case "mas": // Calcula los resuldados cuando se suma
      console.log('ii tiene un valor de' + ii);
      if (tag !== "igual" && a == "0") {
        ii = 0
      }
      resultado = parseInt(resultado) + parseInt(ii)
        if (tag !== "igual"){
          console.log('ptag tiene un valor de ' + ptag);
          ptag = tag
          console.log('ptag guarda el valor de tag');
        }
        return clickOperador()
    break;
    case "menos": // Calcula los resuldados cuando se resta
        console.log('ii tiene un valor de' + ii);
        resultado = parseInt(resultado) - parseInt(ii)
        if (tag !== "igual"){
          console.log('ptag tiene un valor de ' + ptag);
          ptag = tag
          console.log('ptag guarda el valor de tag');
        }
        return clickOperador()
      break;
    case "por": // Calcula los resuldados cuando se multiplica
        resultado = parseInt(resultado) * parseInt(ii)
        if (tag !== "igual"){
          ptag = tag
          console.log('ptag guarda el valor de tag');
        }
        return clickOperador()
      break;
    case "dividido": // Calcula los resuldados cuando se multiplica
        if (ii === "0" || ii === 0 ) {
          resultado = parseFloat(resultado)
        } else {
          resultado = parseFloat(resultado) / parseFloat(ii)
        }
        if ( (resultado + "").length > 9) {
          resultado = resultado.toFixed(7)
        }
        if (tag !== "igual"){
          ptag = tag
          console.log('ptag guarda el valor de tag');
        }
        return clickOperador()
      break;
    default: // Devuelve los valores que se obtienen al dar igual segun el ultimo Operador
      if (resultado === 0 ){
        resultado = parseInt(ii)
      }
      ptag = tag
      return clickOperador()
      }
    }
