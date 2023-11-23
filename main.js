new Swiper('.promotion .swiper-container', {
    autoplay: { 
        delay: 3000 
    },
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 10, 
    centeredSlides: true, 
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
})

const promotionEl1 = document.querySelectorAll('.promotion1')
const promotionEl2 = document.querySelectorAll('.promotion2')
const promotionEl3 = document.querySelectorAll('.promotion3')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = 1;
promotionToggleBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (isHidePromotion == 1) {
        for (let i = 0; i < promotionEl2.length; i++) {
            promotionEl2[i].classList.remove('hide')
        }
        isHidePromotion++
    }
    else if (isHidePromotion == 2) {
        for (let i = 0; i < promotionEl2.length; i++) {
            promotionEl3[i].classList.remove('hide')
        }
        isHidePromotion++
        if (isHidePromotion == 3) {
            promotionToggleBtn.classList.add('hide')
        }
    }
})

const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 300) {
        gsap.to(toTopEl, .2, {
            x: 0
        })

    } else {
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300))
toTopEl.addEventListener('click', function () {
    gsap.to(window, .2, {
        scrollTo: 0
    })
})

new Swiper('.insta-con .swiper-container', {
    slidesPerView: 6, 
    spaceBetween: 6, 
    loopAdditionalSlides : 1,
    pagination: {
        el: '.insta-con .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.insta-con .swiper-prev',
        nextEl: '.insta-con .swiper-next',
    }
})

