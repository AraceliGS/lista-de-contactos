$(document).ready(function() {
  $('.modal').modal();
  alert('Hola');
  // Variables
  var $addButton = $('#add-button');
  var $telephoneInput = $('#icon_telephone');
  // Comprobando el número de dígitos ingresados en el input del modal
  $telephoneInput.on('input', function() {
    console.log($('#icon_telephone').val());
    if ($telephoneInput.val().trim().length === 9) {
      //console.log($telephoneInput.val().trim().length);
      $addButton.removeAttr('disabled');
      $addButton.click(function() {
        alert('¡Funciona!');
      });
    } else {
      if ($telephoneInput.val().trim().length < 9 || $telephoneInput.val().trim().length > 9) {
        $addButton.attr('disabled', true);
        $telephoneInput.one('keyup', function() {
          alert('Escriba un nùmero de 9 digítos');
        });
      }
    }
  });
});
