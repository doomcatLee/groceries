$(function(){
  $("form#groceries").submit(function(){
    event.preventDefault();
    var input = [];
    for (var i=0; i < 6; i++){
      input.push($("#item" + (i+1)).val().toUpperCase());
    }
    input.sort().forEach(function(each){
      $("#output ul").append("<li>" + each + "</li>");
    });
  });
});
