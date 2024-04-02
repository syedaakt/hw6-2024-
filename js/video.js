var video;
let slowDownCount = 0;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop=false;
	console.log("autoplay is set to" + video.autoplay)
	console.log("autoplay is set to" + video.loop)
});

document.querySelector("#play").addEventListener("click", function() { 	
	video.play()
  	console.log("Play Video");
	document.querySelector("#volume").innerHTML = "100%";
 });

 document.querySelector("#pause").addEventListener("click", function() {
 	video.pause()
 	console.log("Pause Video");
 });

 document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9;
	console.log("New video speed (slowed down): " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {

	video.playbackRate /= .9;
	console.log("New video speed (sped up): " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	const newTime = Math.min(video.currentTime + 10, video.duration);
	video.currentTime = newTime;
	console.log('New video location:', video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	document.querySelector("#mute").textContent = video.muted? 'Unmute' : 'Mute';
	console.log("video is " + video.muted )
});

document.querySelector("#slider").addEventListener("change", function() {
	current = document.querySelector("#slider").value/100;
	video.volume = current;
	document.querySelector("#volume").innerHTML = 100*(video.volume)+"%"
	console.log("current volume" + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
