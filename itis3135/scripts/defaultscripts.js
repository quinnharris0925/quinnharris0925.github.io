var today = new Date();
var d = today.toDateString();
var t = today.toTimeString();
document.getElementById("date").innerHTML = d;
document.getElementById("time").innerHTML = t;

function nf() {
    var fname = document.getElementById("fname").value;
    var feel = document.getElementById("feel").value;
    document.getElementById("nf").innerHTML = "Hello " + fname + ", we are glad you are feeling " + feel + " today!"

}
function best() {
    alert("Hedghog")
}
function game() {
    alert("Quinn WINS!!!")
}
function compliment() {
    alert("You look AMAZING today!!!")
}
function compare() {
    var best = document.getElementById("best").value
    document.getElementById("answer").innerHTML = best + " is the BEST!!!";
}

function add(){
    let x = Number(document.getElementById("i1").value)
    let y = Number(document.getElementById("i2").value)
    document.getElementById("result").innerHTML = "Total Hedgehogs: " + (x+y)
}



