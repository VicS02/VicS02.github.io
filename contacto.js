var validarNombre = function(event){
    if (document.f.t.value.length == 0){
        alert ("Por favor, escriba su nombre y apellido.");
        event.preventDefault();}
    
}
var validarMail = function(event){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f.e.value))
    {return (true) }
     alert("Por favor, ingrese una dirección de mail válida.")
    return (false)
    event.preventDefault();
}
var validarMensaje = function(event){
    if (document.f.m.value.length == 0){
        alert ("Por favor, deje un mensaje.");
        event.preventDefault()
    }
}

var validar = function(){
    validarNombre(event);
    validarMail(event);
    validarMensaje(event);
};

f.addEventListener("submit", validar);
