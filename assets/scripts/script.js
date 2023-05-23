document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.slider-wrapper', {
        // If we need pagination
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });
    const swiperBludo = new Swiper('.slider-bludo', {
        // If we need pagination
        slidesPerView: 4,
        centeredSlides: true,
        loop: true,
    });
    const swiperBludoMob = new Swiper('.slider-bludo-mob', {
        // If we need pagination
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
    });
    const swiperBludoTable = new Swiper('.slider-bludo-table', {
        // If we need pagination
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
    });

    document.querySelectorAll('.lang-item').forEach((elem) => {
        elem.addEventListener('click', function () {
            document.querySelectorAll('.lang-item').forEach((elem) => {
                elem.classList.remove('active')
            })
            this.classList.add('active')
        })
    })
    document.querySelectorAll('.tab-item').forEach((elem) => {
        elem.addEventListener('click', function () {
            document.querySelectorAll('.tab-item').forEach((elem) => {
                elem.classList.remove('active')
            })
            this.classList.add('active')
        })
    })
    document.querySelectorAll('.week-item').forEach((elem) => {
        elem.addEventListener('click', function () {
            document.querySelectorAll('.week-item').forEach((elem) => {
                elem.classList.remove('active')
            })
            this.classList.add('active')
        })
    })
    document.querySelectorAll('.program-item').forEach((elem) => {
        elem.addEventListener('click', function () {
            document.querySelectorAll('.program-item').forEach((elem) => {
                elem.classList.remove('active')
            })
            this.classList.add('active')
        })
    })
    document.querySelector('.header-menu-mob').addEventListener('click', function (){
        document.querySelector('.menu-mob').classList.toggle('active')
    })
    document.querySelector('.overlay').addEventListener('click', function (){
        document.querySelector('.menu-mob').classList.toggle('active')
    })
    document.querySelector('.closer').addEventListener('click', function (){
        document.querySelector('.menu-mob').classList.toggle('active')
    })

    document.querySelector('.button-item-order-phone__title').addEventListener('click', function (){
        let name = document.querySelector('#name')
        let phone = document.querySelector('#phone')
        let coorp = document.querySelector('#coorp')
        if (name.value === '') {
            name.closest('.form-wrapper').querySelector('.input-marker').classList.add('error')
            name.closest('.form-wrapper').querySelector('.label-input').classList.add('error')
            name.closest('.form-wrapper').querySelector('.error-text').innerHTML = 'Введите имя'
        }else {
            name.closest('.form-wrapper').querySelector('.input-marker').classList.remove('error')
            name.closest('.form-wrapper').querySelector('.input-marker').classList.add('success')
            name.closest('.form-wrapper').querySelector('.label-input').classList.remove('error')
            name.closest('.form-wrapper').querySelector('.label-input').classList.add('success')
            name.closest('.form-wrapper').querySelector('.error-text').innerHTML = ''
        }
        if (phone.value === '') {
            phone.closest('.form-wrapper').querySelector('.input-marker').classList.add('error')
            phone.closest('.form-wrapper').querySelector('.label-input').classList.add('error')
            phone.closest('.form-wrapper').querySelector('.error-text').innerHTML = 'Введите телефон'
        }else {
            phone.closest('.form-wrapper').querySelector('.input-marker').classList.remove('error')
            phone.closest('.form-wrapper').querySelector('.input-marker').classList.add('success')
            phone.closest('.form-wrapper').querySelector('.label-input').classList.remove('error')
            phone.closest('.form-wrapper').querySelector('.label-input').classList.add('success')
            phone.closest('.form-wrapper').querySelector('.error-text').innerHTML = ''
        }
        if (!coorp.checked)
        coorp.closest('.form-wrapper').querySelector('.error-text').innerHTML = "Обязательно выбрать"
        else
        coorp.closest('.form-wrapper').querySelector('.error-text').innerHTML = ""
    })
    $("#phone").mask("+375 (99) 999-99-99");
}, false)

/*Скролл вверх*/
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();