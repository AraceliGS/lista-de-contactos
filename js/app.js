$(document).ready(function() {
  $('.modal').modal();
  alert('Hola');
  // Variables
  var $addButton = $('#add-button');
  var $nameInput = $('#icon_prefix');
  var $telephoneInput = $('#icon_telephone');
  // Comprobando el número de dígitos ingresados en el input del modal
  $telephoneInput.on('input', function() {
    console.log($('#icon_prefix').val().trim().length);
    console.log($('#icon_telephone').val().trim().length);
    // Analizando el nombre escrito 
    var $name = $('#icon_prefix').val();
    var PATTERNNAME =/[A-z]/g;
    var $result1 = $name.match(PATTERNNAME);
    // Analizando el nùmero escrito
    var $number = $('#icon_telephone').val();
    var PATTERNPHONENUMBER = /[0-9]/g;
    var $result2 = $number.match(PATTERNPHONENUMBER);
    if ($result1 !== ' ' && $result2.length === 9) {
      $addButton.removeAttr('disabled');
      $addButton.one('click', function() {
        alert('¡Funciona!');
      });
    } else if ($result1 === ' ' && $result2.length === 9) {
      $addButton.attr('disabled', true);
    } else if($result1 !== ' ' && $result2.length < 9 || $result2.length > 9) {
    $addButton.attr('disabled', true);
    } else {
        $addButton.attr('disabled', true);
        /*$telephoneInput.one('keyup', function() {
          alert('Escriba un nùmero de 9 digítos');
        });*/
    }
    if ($result1 === '') {
      $addButton.attr('disabled', true)
    }
  });
});
