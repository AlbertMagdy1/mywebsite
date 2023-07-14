//alert("Test")
var i = 0;
function myfunction(){
    document.getElementById("change").innerHTML = "Paragraph changed";
}


function Hello(){
    document.getElementById("txt").innerHTML = value;
}
let x,y,z ;
x = 5
y = 6
z = x+y
document.getElementById("hey").innerHTML = "The value of z is " + z + ".";



document.getElementById("Down").onclick = function(){
    i -= 1;
    document.getElementById("ccc").innerHTML = i;
}
document.getElementById("Reset").onclick = function(){
    i = 0;
    document.getElementById("ccc").innerHTML = i;
}
document.getElementById("Up").onclick = function(){
    i += 1;
    document.getElementById("ccc").innerHTML = i;
}





const person = {
    name : "Albert",
    age : 25,
    city: "New York"
};
document.getElementById("object").innerHTML = person.name + " , "+ person.age + " , "+ person.city;






/*       COUNTING FROM 0 ---> 3
function counter(i){
    document.getElementById("ccc").innerHTML = i;
}

setTimeout(function() { counter(i); }, 1000);
setTimeout(function() { counter(i+1); }, 2000);
setTimeout(function() { counter(i+2); }, 3000);  */

