function make_GET(url,callback){
	let xhr = new XMLHttpRequest();
	xhr.open('GET' ,url);
	xhr.send();
	xhr.onload = function(){
		if(xhr.status != 200){

		}else{
			callback(xhr.response); 
		}
	}
}
let score = 0;



app.listen(port, ()=> console.log("Starting on port:" + port));