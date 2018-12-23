var $lottie = $('#lottie');
var loadPendantFrame = 600;


 var animation = bodymovin.loadAnimation({
   container: document.getElementById('lottie'),
   path: 'assets/data.json',
   renderer: 'svg',
   loop: true,
   autoplay: false,
   name: 'pendant-animation',
   rendererSettings: {
    scaleMode: 'slice',
    clearCanvas: true,
    progressiveLoad: false,
    className: 'pendant-animation'
   }
 })


 animation.addEventListener('DOMLoaded', function() {
   animation.playSegments([0,599], true);
 });



 $lottie.on('click', function() {

    console.log('next');

    animation.playSegments([600,900], false);
    animation.loop = false;



 });
