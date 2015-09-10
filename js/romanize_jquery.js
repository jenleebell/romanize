/*
    ROFL:ROFL:ROFL:ROFL
         ___^___ _
 L    __/      [] \
LOL===__           \
 L      \___ ___ ___]
          I   I
        ----------/
*/
$(document).ready(function(){
  $("form").submit(function(event){

    var number = parseInt($("#number").val());

    var result = romanize(number);

    $("#results").show();
    $("#results").text(result);
    event.preventDefault();
  });
});
