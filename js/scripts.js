$(document).ready(function(){
  var flavors = ["chocolate", "vanilla", "pistachio", "rice dream"];
  flavors.forEach(function(flavor) {

    $(".dessert").after('<li> I like ' + flavor + '! </li>');
  });
});
