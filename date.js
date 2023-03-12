/**
 * 
 * author josemi
 */

document.addEventListener("DOMContentLoaded", function () {

  // // var date = new Date(); // poner la fecha de hoy directamente al cargar el dom
  // // Obtenemos la fecha de hoy en formato ISO 
  // const fechaHoy = new Date().toISOString().substring(0, 10);
  // document.querySelector("input[name='fecha']").value = fechaHoy;

  // // Buscamos la etiqueta por su selector y ponemos que el dia maximo sea hoy
  // document.querySelector("input[name='fecha']").min = fechaHoy;

  // // var date = new Date(); // poner la fecha de hoy directamente al cargar el dom
  // // Obtenemos la fecha de hoy en formato ISO 
  // const fechaHoy1 = new Date().toISOString().substring(0, 10);
  // document.querySelector("input[name='fecha1']").value = fechaHoy1;

  // // Buscamos la etiqueta por su selector y ponemos que el dia maximo sea hoy
  // document.querySelector("input[name='fecha1']").min = fechaHoy1;

  $(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
  
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });

});