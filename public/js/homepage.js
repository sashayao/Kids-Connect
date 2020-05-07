

var test = document.getElementById("w3");
var i;
var clone;
for (i = 0; i < 5; i++) { 
    test.appendChild(document.getElementById("w3_sub").cloneNode(true));
}
