function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	let radious= document.getElementById('radius');
     let r= radious.value;
     let pi= 22/7;
     let volume= 4/3*3.141*r*r*r;
     let vol= document.getElementById('volume')
     vol.value= volume
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
