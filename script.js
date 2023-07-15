function volume_sphere() {
    //Write your code here
	let radious= document.getElementById('radius');
     let r= radious.value;
     let pi= 22/7;
     let volume= 4/3*22/7*r*r*r;
     let vol= document.getElementById('volume')
     vol.value= volume
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
