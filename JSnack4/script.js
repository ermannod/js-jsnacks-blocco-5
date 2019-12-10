$(document).ready(function(){
  var array1 = [1, 2, 3, 4, 5];
  var array2 = ['a', 'b', 'c', 'd', 'e'];

  var arrayCombined = $.map(array1, function(v, i) {
    return [v, array2[i]];
  });

  console.log(arrayCombined);

});
