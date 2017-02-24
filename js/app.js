// Variables Generales para guardar resultados
var a = "0"  // Valor para el Display
var b = 1    // Define el largo de los numeros en la pantalla
var c = 0    // Se Asigna el valor de tag para poder evaluarlo si es numerico o si en su defecto se dio click a un elemento con ID
var d = 0    // Variable para saber si el signo negativo se uso
var valoriiResultdo = 0    //Cuenta la cantidad de veces que se apreta una tecla que es un operador y se reinicia cuando es 0
var ptag = ""    // Variable para asignar el tag anterior
var i = 0    // Cuenta la cantidad de veces que se ha ingresado el punto
var ii = 0   // guardar el ultimo valor de "a" para seguir haciendo la operacion cuando se la da Click
var resultado = 0 // Guarda el resultado para seguir aplicando las operaciones que se necesiten
var tag= ""  // Devuelve el id que se presiona en el navegador
var operaciones = 0  // Asigna un valor numerico a las operaciones de suma, resta, multiplicacion, division y raiz
var variableValor = 0

// las teclas generales se definen por aparte para trabajarlas por aparte y no se vean afectadas por las funciones
// esta nota es para el evaluador.....decidi utilizarlo asi porque al ser mi primer proyecto grande en JS me gusto
// el hecho de tenerlas clasras arriba
function Calculadora(e){
  if (e.srcElement)
    tag = e.srcElement.id;
  else if (e.target)
      tag = e.target.id;
      if (tag >=0 && tag <= 9)
      c = parseFloat(tag)
      else
      c = tag
      if ( (tag == "mas" || tag == "menos" || tag == "por" || tag == "dividido" || tag == "raiz") ) {
         if (operaciones == "igual") {
           operaciones = ""
         }
        return evaluarOperacion()
      } else if (( tag == "igual")) {
        if (parseFloat(ii)>0) {
          valoriiResultdo = ii
          ii = 0
        }
        return evaluarIgual()
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
                valoriiResultdo = 0
})
document.getElementById('punto').addEventListener("click",function(){  // Agregar un punto
b = a.length
  if ( i === 0 && b < 8) {
    c = "."
    a = "" + a + c
    document.getElementById('display').innerHTML = a
    c = ""
    i++
  }
})
document.getElementById('sign').addEventListener("click",function(){ // Agregar el signo Negativo
if (ii){
b = ii.length
  if ( d === 0 && b < 8) {
  ii = "-" + ii
  document.getElementById('display').innerHTML = ii
  d++
} else if (d === 1 && b <= 8) {
    ii = ii.substring(1,a.length)
    d--
    document.getElementById('display').innerHTML = ii
  }
} else if (resultado) {
  b = resultado.length
    if ( d === 0) {
    resultado = "-" + resultado
    d++
    return imprimirResultado()
  } else if (d === 1) {
      resultado = resultado.substring(1,resultado.length)
      d--
      return imprimirResultado()
    }
}
})
function valorNumerico(){
  document.getElementById(c).addEventListener("click",function(){
    if (a === "0" && b < 8 && c >= 1) {
          a =  "" + c
        document.getElementById('display').innerHTML =  a
        c = ""
          // Agregar un valor cuando "a" es diferente de 0 como valor inicial
    } else if (a !== "0" && b < 8){
          a = "" + a + c
          document.getElementById('display').innerHTML = a
          b = a.length
          c= ""
    }
    ii = a
  })
}
function clickOperador(){
  a = "0"
  b = 1
  c = 0
  d = 0
  if (parseFloat(ii)>0) {
    valoriiResultdo = ii
    ii = 0
  }
  if (tag == "raiz") {
    operaciones = tag
    tag = ""
    evaluarOperacion()
  }else if (tag == "mas" || tag == "menos" || tag == "por" || tag == "dividido" ){
    ptag = tag
  }
  imprimirResultado()
}
function evaluarOperacion(){
if (operaciones == "igual") {
  return clickOperador()
} else if (tag == "raiz") {// Calcula los resuldados cuando se multiplica
    if (!ii) {
      resultado = Math.sqrt(parseFloat(resultado))
    } else {
      ii = Math.sqrt(parseFloat(ii))
    }
    return clickOperador()
}
  switch (ptag) {
    case "mas": // Calcula los resuldados cuando se suma
      if (ii) { resultado = parseFloat(resultado) + parseFloat(ii)  }
      if (operaciones == "raiz") { ii = 0 }
      return clickOperador()
      break;
    case "menos": // Calcula los resuldados cuando se resta
      if (ii) { resultado = parseFloat(resultado) - parseFloat(ii) }
      if (operaciones == "raiz") { ii = 0 }
      return clickOperador()
      break;
    case "por": // Calcula los resuldados cuando se multiplica
      if (ii) { resultado = parseFloat(resultado) * parseFloat(ii) }
      if (operaciones == "raiz") { ii = 0 }
      return clickOperador()
      break;
    case "dividido": // Calcula los resuldados cuando se multiplica
      if (ii) { resultado = parseFloat(resultado) / parseFloat(ii) }
      if (operaciones == "raiz") { ii = 0 }
      return clickOperador()
      break;
    default: // Devuelve los valores que se obtienen al dar igual segun el ultimo Operador
        resultado = parseFloat(ii)
        return clickOperador()
      }
    }
    function imprimirResultado(){
      var indexDelCero = (resultado+"").indexOf('.')
      if (indexDelCero == -1) {
        indexDelCero = 0
      }
      if ((resultado+"").length > 8 && indexDelCero < 8 ){
          resultado = (resultado+"").substring( 0 , 8 )
        } else if ( (resultado+"").length > 8 && indexDelCero > 8 ) {
          resultado = "Overflow"
        }
      if (resultado !== ""){
          document.getElementById("display").innerHTML = resultado
        }
    }
function evaluarIgual(){
operaciones = tag
  switch (ptag) {
    case "mas": // Calcula los resuldados cuando se suma
      resultado = parseFloat(resultado) + parseFloat(valoriiResultdo)
      return imprimirResultado()
      break;
    case "menos": // Calcula los resuldados cuando se resta
        resultado = parseFloat(resultado) - parseFloat(valoriiResultdo)
      return imprimirResultado()
      break;
    case "por": // Calcula los resuldados cuando se multiplica
      resultado = parseFloat(resultado) * parseFloat(valoriiResultdo)

      return imprimirResultado()
      break;
    case "raiz": // Calcula los resuldados cuando se multiplica
      resultado = Math.sqrt(parseFloat(resultado))
      return imprimirResultado()
      break;
    case "dividido": // Calcula los resuldados cuando se multiplica
      resultado = parseFloat(resultado) / parseFloat(valoriiResultdo)
      return imprimirResultado()
      break;
    default: // Devuelve los valores que se obtienen al dar igual segun el ultimo Operador
      }
    }
    function mouseDownUno(ee){
      if (ee.srcElement)
        enClickID = ee.srcElement.id;
      else if (ee.target)
          enClickID = ee.target.id;
      if (enClickID !== "calculadoraFondo" && enClickID !== "mas") {
        document.getElementById(enClickID).style.padding = "5px 5px 1px 5px"
      } else if (enClickID == "mas") {
        document.getElementById(enClickID).style.padding = "1px 2px 2px 1px"
      }
    }
    function mouseUpUno(ee){
      if (ee.srcElement)
        enClickID = ee.srcElement.id;
      else if (ee.target)
          enClickID = ee.target.id;
      if (enClickID !== "calculadoraFondo") {
        document.getElementById(enClickID).style.padding = "0px"
      }
    }
