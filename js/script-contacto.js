// Formulario

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;  // para hacer dinamico la creacion del objeto datos
    // console.log(datos)
}

// Submit

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();  // Para que no refresque la página

    // Validamos el formulario

    const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return; // Para que corte la ejecución
    }

    mostrarCorrecto('Mensaje enviado con éxito');
});

// funciones para el submit
// Validamos error
function mostrarError() {
    const error = document.createElement('P');
    error.textContent = 'Todos los campos son obligatorios';
    error.classList.add('error');

    formulario.appendChild(error);  // lo agregamos al documento HTML

    setTimeout(() => {
        error.remove();
    }, 3000);
};

// Validamos correcto
function mostrarCorrecto(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild(correcto);  // lo agregamos al documento HTML

    setTimeout(() => {
        correcto.remove();
    }, 3000);
};