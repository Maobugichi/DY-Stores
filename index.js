
if (window.matchMedia("(min-width:1024px)").matches) {
  const swiper = new Swiper('.slider-wrapper', {
    loop:true,
    
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
     0: {
      slidesPerView: 1
     },
     620: {
      slidesPerView: 2
     },
     1180: {
      slidesPerView: 2.5
     }
    
  }
  
  
  });
  
}




const org = document.querySelectorAll('.orange')

const abs = document.querySelector('.ab')

const cancel = document.querySelector('.cancel')

const img = document.getElementById('uu')

const head = document.querySelector('.pri')

const naira = document.querySelector('.naira')
for (let i = 0; i < org.length; i++) {
  org[i].addEventListener('click', (event) => {
    abs.classList.add('hid')
    
    const container = event.target.closest('.swiper-slide')

    const image = container.querySelector('img')

    const src = image.getAttribute('src')

    const classy = image.getAttribute('class')

    if (classy === 'user-image1') {
      head.innerText = 'Printed unisex shirts';
      naira.innerText = '25,000'
    } else if (classy === 'user-image2') {
      head.innerText = 'ByteBag';
      naira.innerText = '8000'
    } else if (classy === 'user-image3') {
      head.innerText = 'Denim Dynamo Jacket';
      naira.innerText = '106,000'
    }else if (classy === 'user-image4') {
      head.innerText = 'Kimetsu style Hoodie';
      naira.innerText = '20,000'
    }
    else if (classy === 'user-image6') {
      head.innerText = 'Tank Singlet'
      naira.innerText = '45,000'
    } else if (classy === 'user-image7') {
      head.innerText = 'Comic Coutoure Jeans';
      naira.innerText = '75,000';
    }else if (classy === 'user-image8') {
      head.innerText = 'Relaxed fit hat'
      naira.innerText = '12,000'
    }


    img.setAttribute('src', src)
    console.log(classy)


    
  })
}

cancel.addEventListener('click', () => {
  abs.classList.remove('hid')
})



