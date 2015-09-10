// documentreadylol
//
// make romanize happen
//
// ;
//
// [
//
// {
//
//
// }
// ]
//
// werk pls
//
// i need monay $$$$

$(document).ready(function(){
  $("form").submit(function(event){

    var number = parseInt($("#number").val());

    var result = romanize(number);

    $("#results").show();
    $("#results").text(result);
    event.preventDefault();
  });
});
