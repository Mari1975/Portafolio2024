


//////formulario////

document.querySelector('#mostrarFormulario').addEventListener('click', function() {
   var formulario = document.querySelector('.form-container');
    if (formulario.style.display === 'none') {
        formulario.style.display ="Block" ;

    } else {
        formulario.style.display = 'none';
    }


});

// enviar formulario con submit

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formulario = document.querySelector('.form-container');

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validar que los campos no estén vacíos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }
  
    // Validar el formato del email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }
  
    // Mostrar mensaje de éxito

    alert('¡Formulario enviado!');
    setTimeout(() => {
    formulario.style.display = 'none';
    }, 2000); 

    // oculta suavemente elformulario
    formulario.classList.add('oculto');

// Oculta el formulario después de 2 segundos (2000 milisegundos)
    //document.getElementById('successMessage').textContent = 'Formulario enviado correctamente.';
    //document.getElementById('successMessage').style.display = 'block' ;
    //document.querySelector('.form-container').style.display = "none", 2000;
  
    // Limpiar el formulario
    document.getElementById('contactForm').reset();
  });
  



//zoom en imagen portada//////
document.querySelector('#imageZoom').addEventListener('click', function() {
    this.classList.toggle('zoom');
})

// imagenes proyectos

const imagenes = document.querySelectorAll('#proyectos img');

    
   imagenes.forEach(imagen => {
       imagen.addEventListener('mouseover', function() {
           this.classList.toggle('zoom2');
       })
    

        imagen.addEventListener('mouseout', function() {
        this.classList.toggle('zoom2');
        })
})