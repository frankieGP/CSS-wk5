$( document ).ready(function() {

  $('[class*="osc1-tail"]').on('click',function() {

  $(this).addClass("move");
  if($(this).hasClass("move")){
  return;
  }
  $(this).addClass("move");
  var that = this;
  setTimeout(function(){
  $(that).removeClass('move');
},7250);
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
