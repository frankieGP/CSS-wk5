$("#analog-bass").on('click', function() {
  var $this = $(this),
      audio = $this.children('audio')[0];
      audio.play();



});
$( function() {
  $( "#analog-bass" ).on( "click", function() {
    $( ".osc1-tail" ).addClass( "move", 1000 );
  });
  });



  $("#digital-bass").on('click',function() {

    var $this = $(this),
        audio = $this.children('audio')[0];
        audio.play();
      });
