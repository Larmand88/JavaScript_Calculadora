// Variables Generales para guardar resultados
var a = "0"
var b = 1
var c = 0
var d = 0
var i = 0
var ii = 0
var resultado = 0
var tag= ""
var operaciones = 0


// Se restablecen todos los valores a su estado inicial
document.getElementById('on').addEventListener("click",function(){
document.getElementById('display').innerHTML = 0
                a = "0"
                b = 1
                c = 0
                d = 0
                i = 0
                resultado = 0
                tag= ""
                operaciones = 0
})

function limpiarParaOperadores(){
  a = "0"
  b = 1
  c = 0
  d = 0
  tag= ""
}
function elemento(e){
  if (e.srcElement)
    tag = e.srcElement.id;
  else if (e.target)
      tag = e.target.id;
      if (tag >=0 && tag <= 9)
      c = parseInt(tag)
      else
      c = tag

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

document.getElementById(c).addEventListener("click",function(){
if (tag === "mas" && operaciones == 0) { // Calcula los resuldados cuando se suma
  resultado = parseInt(a)
  operaciones = 1
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = "0"
} else if ( tag === "mas"  && operaciones != 0) {
  resultado = resultado + parseInt(a)
  operaciones = 1
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = resultado
} else if ( tag === "igual" && operaciones == 1) {
  if (a !== "0" ){
  ii = a}
  resultado = resultado +  parseInt(ii)
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = resultado
} else if (tag === "menos" && operaciones == 0) { // Calcula los resuldados cuando se resta
  resultado = parseInt(a)
  operaciones = 2
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = "0"
} else if ( tag === "menos"  && operaciones != 0) {
  resultado = resultado - parseInt(a)
  operaciones = 2
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = resultado
} else if ( tag === "igual" && operaciones == 2) {
  if (a !== "0" ){
  ii = a}
  resultado = resultado -  parseInt(ii)
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = resultado
} else if (tag === "por" && operaciones == 0) { // Calcula los resuldados cuando se multiplica
  resultado = parseInt(a)
  operaciones = 3
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = "0"
} else if ( tag === "por"  && operaciones != 0) {
  resultado = resultado * parseInt(a)
  operaciones = 3
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = resultado
} else if ( tag === "igual" && operaciones == 3) {
  if (a !== "0" ){
  ii = a}
  resultado = resultado *  parseInt(ii)
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = resultado
} else if (tag === "dividido" && operaciones == 0) { // Calcula los resuldados cuando se divide
  resultado = parseInt(a)
  operaciones = 4
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = "0"
} else if ( tag === "dividido"  && operaciones != 0) {
  if (a === "0") {
    resultado = parseFloat(resultado)
    operaciones = 4
    limpiarParaOperadores();
    document.getElementById("display").innerHTML = resultado
  } else {
  resultado = parseFloat(resultado) / parseFloat(a)
  operaciones = 4
  limpiarParaOperadores();
  if ( (resultado + "").length > 9) {
    resultado = resultado.toFixed(7)
  }
  document.getElementById("display").innerHTML = resultado
}
} else if ( tag === "igual" && operaciones == 4) {
  if (a !== "0" ){
  ii = a}
  resultado = resultado /  parseInt(ii)
  if ( (resultado + "").length > 9) {
    resultado = resultado.toFixed(7)
  }
  limpiarParaOperadores();
  document.getElementById("display").innerHTML = resultado
}
});
}
