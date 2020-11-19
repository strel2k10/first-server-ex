
// ################################################################################## //
// ################################## POST REQUEST ################################## //
// ################################################################################## //
var xhttp = new XMLHttpRequest();

var data = new Object();
data.name = "Tiago";
data.age  = 22;

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText)
    }
};

xhttp.open("POST", 'http://localhost:3000/professors', true);
xhttp.setRequestHeader('Content-type', 'application/json');
xhttp.send(JSON.stringify(data));

// ################################################################################# //
// ################################## PUT REQUEST ################################## //
// ################################################################################# //
var xhttp = new XMLHttpRequest();

var data = new Object();
data.age = 23;



xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText)
    }
};

xhttp.open("PUT", 'http://localhost:3000/professors/Tiago', true);
xhttp.setRequestHeader('Content-type', 'application/json');
xhttp.send(JSON.stringify(data));

// #################################################################################### //
// ################################## DELETE REQUEST ################################## //
// #################################################################################### //
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText)
    }
};

xhttp.open("DELETE", 'http://localhost:3000/professors/Tiago', true);
xhttp.send();