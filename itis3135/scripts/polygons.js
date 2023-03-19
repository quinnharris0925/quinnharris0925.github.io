function validateEntry(number){
if (isNaN(number)){     //I had to lookup this method to assist with validation; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN 
    return 100;
}
number = Math.round(Math.abs(parseFloat(number)));
console.log(number);
if(number < 1 || number > 10){
    return 100;
}else{
    return number;
}
}
function getShape(sides){
    var word = "";
    switch (sides) {
        case 1: 
        return "Mobius Strip";
        case 2:
        return "Digon";
        case 3: 
        return "Triangle";
        case 4: 
        return "Quadrilateral";
        case 5: 
        return "Pentagon";
        case 6: 
        return "Hexagon";
        case 7: 
        return "Heptagon";
        case 8: 
        return "Octagon";
        case 9: 
        return "Nonagon";
        case 10: 
        return "Decagon";
        case 100:
            return "";
    }
}
function myFunction(){
    var number = document.getElementById("entry").value;
    var output = document.getElementById("word");
    var invalid = document.getElementById("invalid");
    
    var sides = validateEntry(number);
    var word = getShape(sides);
    output.innerHTML = word;
    if (word == ""){
        invalid.innerHTML = "Invalid input TRY AGAIN!!!";
    }else{
        invalid.innerHTML = "";
    }
}