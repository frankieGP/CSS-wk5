$( document ).ready(function() {

  $('[class*="osc1"]').on('click',function() {

  $(this).addClass("osc1tail");

  });
  $("#analog-bass").click(function() {



    var $this = $(this),
        audio = $this.children('audio')[0];
        audio.play();



  });


  $("#digital-bass").click(function() {

    var $this = $(this),
        audio = $this.children('audio')[0];
        audio.play();
      });




});
