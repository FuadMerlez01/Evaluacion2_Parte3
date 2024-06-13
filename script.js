$(document).ready(function() {
    $('#pokeballBtn').on('click', function() {
        // Salto
        $('#Cuerpo').animate({ marginTop: '-=50px' }, 400)
                    .animate({ marginTop: '+=50px' }, 400);

        // Inclinación a la izquierda y derecha
        $('#Cuerpo').animate({ marginLeft: '-=20px' }, 200)
                    .animate({ marginLeft: '+=40px' }, 400)
                    .animate({ marginLeft: '-=20px' }, 200);

        // Movimiento de orejas (simulado usando brazos)
        $('#Brazo1').animate({ marginTop: '-=20px' }, 300)
                    .animate({ marginTop: '+=20px' }, 300);
        $('#Brazo2').animate({ marginTop: '-=20px' }, 300)
                    .animate({ marginTop: '+=20px' }, 300);

        // Mover la cola
        $('#Cola').animate({ marginLeft: '+=20px' }, 500)
                    .animate({ marginLeft: '-=20px' }, 500);

        // Saludo con el brazo izquierdo
        $('#Brazo1').animate({ marginLeft: '-=20px' }, 300)
                    .animate({ marginLeft: '+=20px' }, 300);
    });
});

