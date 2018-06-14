import Toastr from 'toastr'

import 'toastr/toastr'
import 'toastr/toastr.less'

export default function(type, msj, titulo = '', fijo = false) {

  if(fijo){
    Toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-left",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "0",
      "hideDuration": "0",
      "timeOut": "0",
      "extendedTimeOut": "0",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
  } else {
    Toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-left",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "200",
      "hideDuration": "500",
      "timeOut": "2000",
      "extendedTimeOut": "2000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
  }

  switch(type.toUpperCase())
  {
    case "E":
      Toastr.error(msj,titulo);
      break;
    case "W":
      Toastr.warning(msj,titulo);
      break;
    case "S":
      Toastr.success(msj,titulo);
      break;
    case "I":
      Toastr.info(msj,titulo);
      break;
    case "C":
      Toastr.remove();
      break;
  }

}
