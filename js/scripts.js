$( document ).ready(function() {
  $(".osc1").animate({left: '650px'});

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
