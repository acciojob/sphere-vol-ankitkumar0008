function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let radius = document.getElementById('radius').value;
	let volume = document.getElementById('volume');
	if(isNaN(radius) || Number(radius)<0 ){
		volume.value = 'NaN';
	}else{
		let vol = ((4 / 3) * Math.PI * Math.pow(Number(radius), 3)).toFixed(4);
		volume.value = vol<=0?"":vol;
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
