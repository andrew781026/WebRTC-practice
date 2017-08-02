(function(){

    var video = document.getElementById('video');
    var vendorUrl = window.URL || window.webkitURL ;

    navigator.getMedia = navigator.getUserMedia || 
                         navigator.webkitGetUserMedia || 
                         navigator.mozGetUserMedia || 
                         navigator.msGetUserMedia ;

    // Capture video
    navigator.getMedia({
        video:true,
        audio:false
    }, function(stream) {
        
        video.src = vendorUrl.createObjectURL(stream);
        video.play();

        // aCtx = new webkitAudioContext();
        // analyser = aCtx.createAnalyser();
        // microphone = aCtx.createMediaStreamSource(stream);
        // microphone.connect(analyser);
        // analyser.connect(aCtx.destination);
    }, function (error){
        // An error occured
        // error.code
        console.warn("Error getting audio stream from getUserMedia");
    });

})();