$( document ).ready(function() {

  $('.spinner-wrap').click(function() {

    var $this = $(this),
        audio = $this.siblings('audio')[0];
        audio.play();






  });

});
