document.getElementById("generar").addEventListener("click", generar);
document.getElementById("limpiar").addEventListener("click", limpiar);

function generar() {
  var cantidadNumeros = 20;
  var myArray = []
  while (myArray.length < cantidadNumeros) {
    var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
    myArray[myArray.length] = numeroAleatorio;
  }
  console.log("números aleatorios : " + myArray);

  const bubbleSort = myArray => {
    const l = myArray.length;
    for (let i = 0; i < l; i++) {
      for (let j = 0; j < l - 1 - i; j++) {
        if (myArray[j] > myArray[j + 1]) {
          [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
        }
      }
    }

    return myArray;
  };
  const result = bubbleSort(myArray);

  console.log("números ordenados : " + result);


  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var width = 50;
  var X = 2;

  for (i = 0; i < myArray.length; i++) {
    ctx.fillStyle = '#000080';
    var h = myArray[i];
    ctx.fillRect(X, canvas.height - h, width, h);

    X += width + 15;

    ctx.fillStyle = '#060606 ';
    ctx.fillText(myArray[i], X - 50, canvas.height - h - 10);
  }
}

function limpiar() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}