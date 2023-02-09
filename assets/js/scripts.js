var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 0,
    margin: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

const   //boton_menu = document.querySelector('.navbar-toggler'),
        //menu = document.querySelector('#navbarNav'),
        links = document.querySelectorAll('.nav-link')
        //figuras_propuestas = document.querySelectorAll('#propuesta figure'),
        //caja1 = document.querySelector('.caja-1'),
        //caja2 = document.querySelector('.caja-2'),
        //ver_mas = document.querySelectorAll('.btn-mas')

links.forEach((element) => {

    //variables que contendran donde empieza y donde termina una section
    var start_div = 0,
        end_div = 0

    //algunos datos    
    let id = element.getAttribute('data-link')
            // pos_div = document.querySelector(id).offsetTop,
            // alto_div = document.querySelector(id).offsetHeight,
            // alto_header = document.querySelector('header').offsetHeight

    console.log (document.querySelector(id).scrollY)

        //acá calculamos donde empieza y donde termina cada section    
        // start_div = pos_div-alto_header
        // end_div = start_div + alto_div -1


    //al clickear un link se ocultará el menú y hará scroll hasta el link clickeado
    // element.addEventListener('click', (e) => {
    //     // if (!boton_menu.classList.contains( 'collapsed' )){
    //     //     boton_menu.click()
    //     // }
    //     window.scrollTo(0, start_div)
    //     //e.preventDefault()
    //     //return false
    // }) 


    //al hacer scroll usará las variables creadas para saber en qué section está y darle un active a la section que corresponda
    window.addEventListener('scroll', () => {
        console.log('start: '+start_div + ' | end: '+end_div + ' | actual: '+ window.scrollY  )

        if(window.scrollY >=start_div && window.scrollY <=end_div){
            element.parentNode.classList.add('active')
        }else{
            element.parentNode.classList.remove('active')
        }

    })    
})