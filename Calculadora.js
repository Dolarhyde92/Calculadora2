var array = [];
var total = 0;
var flagFirstTime = false;
var op = "";

function init(){
    document.getElementById("solucion").value = total;
}

/*function sum(val1, val2){
    return val1 + val2;
}*/

/*function addToArray(val){
    if (array.length < 2){
        array.push(val);
        console.log("Mi array", array);
    }else{
        console.log("El array esta lleno");
    }
}*/

function setOp(_op){
    op = _op;
}

function addToAcumulator(val){
    if (!flagFirstTime){
        document.getElementById("solucion").value = val;
        flagFirstTime = true;
    } else {
        switch(op) {
            case "+":
                document.getElementById("solucion").value = parseInt(document.getElementById("solucion").value) + val;
                break;
            case "-":
                document.getElementById("solucion").value = parseInt(document.getElementById("solucion").value) - val;
                break;
            case "*":
                document.getElementById("solucion").value = parseInt(document.getElementById("solucion").value) * val;
                break;
            case "/":
                document.getElementById("solucion").value = parseInt(document.getElementById("solucion").value) / val;
                break;
            default:
                document.getElementById("solucion").value = val;
        }

        op = "";
    }

}
