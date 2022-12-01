var swiper = new Swiper(".mySwiper", {

    slidesPerView: 2.5,
    spaceBetween: 15,
    slidesPerGroup: 1,
    // loop: true,
    freeMode: true,
    infinite: true,
    breakpoints: {
        480: {
            freeMode: true,
    slidesPerView: 2.5,
    spaceBetween: 10,
  },
  640: {
    freeMode: true,
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  900:{
    slidesPerView: 4.5,
    spaceBetween: 30,
    slidesPerGroup: 1,
  }

    },
    
  });

  