const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa');

        const respuesta = pregunta.querySelector('.respuesta');
        const alturaRealRespuesta = respuesta.scrollHeight;
        
        if(!respuesta.style.maxHeight){
            //Si esta vacío el maxHeigth ponemos un valor.
            respuesta.style.maxHeight = alturaRealRespuesta + 'px';
        } else {
            respuesta.style.maxHeight = null;
        }
    });
});