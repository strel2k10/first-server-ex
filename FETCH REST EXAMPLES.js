// ################################################################################## //
// ################################## POST REQUEST ################################## //
// ################################################################################## //
var data = new Object();
data.name = "Tiago";
data.age  = "";
data.userId = 1;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var config = { method: 'POST',
			   body: JSON.stringify(data),
               headers: myHeaders };

fetch('https://jsonplaceholder.typicode.com/posts', config)
.then(function(response) {
  	console.log(response.json());
}).catch(function(error) {
	console.log(error); 
})