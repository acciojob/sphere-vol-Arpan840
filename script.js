function volume_sphere(e) {
    //Write your code here
	 e.preventDefault();
  let radius = document.getElementById('radius').value;
  let pi = 22 / 7;
  let volume = (4 / 3) * pi * radius * radius * radius;
  let roundedVolume = volume.toFixed(2);
  let vol = document.getElementById('volume');
  vol.value = roundedVolume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
