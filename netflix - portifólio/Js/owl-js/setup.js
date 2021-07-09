$('.owl-carousel').owlCarousel({
    loop:true, //navegação infinita
    margin:10, // margem entre posters
    nav:false, //botões de navegação
    //tela responsiva - aqui para quantidade de posters que aparecem
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})