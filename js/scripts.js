            (function(){
                //Variables
                var formulario = document.getElementsByName('formulario')[0],
                    //elementos = formulario.elements,
                    boton = document.getElementById('btn');
    
                var validarNombre = function(e){
                    if (formulario.nombre_cliente.value == 0){
                        alert("Completa el campo Nombre");
                        e.preventDefault();
                    }
                };

                var validarMail = function(e){
                    if (formulario.dir_mail.value == 0){
                        alert("Completa el campo E-mail");
                        e.preventDefault();
                    }
                };
    
                var validarRadio = function(e){
                    if (formulario.consulta[0].checked == true || 
                        formulario.consulta[1].checked == true){
                    } else{
                        alert("Completa el campo Tipo de Cliente");
                        e.preventDefault();
                    }
                };
    
                var validar = function(e){
                    validarNombre(e);
                    validarRadio(e);
                    validarMail(e);
                };
                formulario.addEventListener("submit", validar);
            }())