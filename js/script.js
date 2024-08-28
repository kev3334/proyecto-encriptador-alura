function encriptar(){
    let textoUsuario = document.querySelector('.text-area');
    let texto = textoUsuario.value;    
    if(validarTexto(texto)){
        let textoResultado = document.querySelector('.resultado');
        textoResultado.removeAttribute('hidden');
        let arraySilabas=[];
        for (let index = 0; index < texto.length; index++) {
            arraySilabas[index] = texto[index];
        }
        let textoEncriptado='';
        for (let index2 = 0; index2 < arraySilabas.length; index2++) {
            if(arraySilabas[index2] == 'a'){
                arraySilabas[index2]='ai';
            }else if(arraySilabas[index2] == 'e'){
                arraySilabas[index2]='enter';
            }else if(arraySilabas[index2] == 'i'){
                arraySilabas[index2]='imes';
            }else if(arraySilabas[index2] == 'o'){
                arraySilabas[index2]='ober';
            }else if(arraySilabas[index2] == 'u'){
                arraySilabas[index2]='ufat';
            }
            textoEncriptado+=arraySilabas[index2];
        }
        
        if(textoEncriptado==""){
            textoEncriptado=texto;
        }
        textoResultado.innerHTML=textoEncriptado;
        textoUsuario.value='';

        limpiarPanelDerecho();
    }
}

function desencriptar(){
    let elementoTexto = document.querySelector('.text-area');
    let texto=elementoTexto.value;
    if(validarTexto(texto)){
        let elementoResultado = document.querySelector('.resultado');
        elementoResultado.removeAttribute('hidden');
        let textoDesencriptado="";
    
        if(texto.includes("ai")){
            textoDesencriptado = texto.replace(/ai/g,"a");
        }
        if(texto.includes("enter")){
            textoDesencriptado=textoDesencriptado.replace(/enter/g,"e");
        }
        if(texto.includes("imes")){
            textoDesencriptado=textoDesencriptado.replace(/imes/g,"i");
        }
        if(texto.includes("ober")){
            textoDesencriptado=textoDesencriptado.replace(/ober/g,"o");
        }
        if(texto.includes("ufat")){
            textoDesencriptado=textoDesencriptado.replace(/ufat/g,"u");
        }
    
        if(textoDesencriptado==""){
            textoDesencriptado=texto;
        }
    
        elementoResultado.innerText=textoDesencriptado;
        elementoTexto.value='';

        limpiarPanelDerecho();
    }
}

function copiar(){
    let textoACopiar="";
    textoACopiar = document.getElementById('texto-resultado').innerText;
    const campoTemporal = document.createElement('textarea');
    campoTemporal.value = textoACopiar;
    document.body.appendChild(campoTemporal);
    campoTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(campoTemporal);
    const mensaje = document.getElementById('mensajeCopiado');
    mensaje.classList.add('mostrar');
    setTimeout(() => {
        mensaje.classList.remove('mostrar');
    }, 1000);
}

function validarTexto(texto) {
    let regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function limpiarPanelDerecho(){
    let Imagen = document.querySelector('.image-container');
    Imagen.setAttribute('hidden',true);
    let mensaje = document.querySelector('.message');
    mensaje.setAttribute('hidden',true);
    let subMensaje = document.querySelector('.sub-message');
    subMensaje.setAttribute('hidden',true);
    let botonCopiar = document.querySelector('.btn-copiar-resultado');
    botonCopiar.removeAttribute('hidden');
    const rightPanel = document.querySelector('.right-panel-interno');
    rightPanel.style.justifyContent = 'space-between';
}
