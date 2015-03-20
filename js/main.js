jQuery(function() {
    jQuery(document).mousemovestart(function(e) {
        console.log('mousestartmove');
        console.log(e);
    });
    jQuery(document).mousemoveend(function(e) {
        console.log('mouseendmove');
        console.log(e);
    });
});

// $(document).ready(function() {
//         var audioElement = document.createElement('audio');
//         audioElement.setAttribute('src', 'audio.mp3');
//         audioElement.setAttribute('autoplay', 'autoplay');
//         //audioElement.load()
//
//         $.get();
//
//         audioElement.addEventListener("load", function() {
//             audioElement.play();
//         }, true);
//
//         $('.play').click(function() {
//             audioElement.play();
//         });
//
//         $('.pause').click(function() {
//             audioElement.pause();
//         });
//     });
