console.log('ciao')

const items = [
    {
        immagine: 'img/01.jpg',
        titolo: 'Svezia',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },

    {
        immagine: 'img/02.jpg',
        titolo: 'Svizzera',
        descrizione: 'Lorem ipsum.',
    },

    {
        immagine: 'img/03.jpg',
        titolo: 'Gran Bretagna',
        descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },

    {
        immagine: 'img/04.jpg',
        titolo: 'Germania',
        descrizione: 'Lorem ipsum, dolor sit amet',
    },

    {
        immagine: 'img/05.jpg',
        titolo: 'Paradise',
        descrizione: 'Lorem ipsum',
    },
];

const app = new Vue ({
    el: '#app',
    data: {
        activeIndex : 0,
        items: [
            {
                immagine: 'img/01.jpg',
                titolo: 'Svezia',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        
            {
                immagine: 'img/02.jpg',
                titolo: 'Svizzera',
                descrizione: 'Lorem ipsum.',
            },
        
            {
                immagine: 'img/03.jpg',
                titolo: 'Gran Bretagna',
                descrizione: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
        
            {
                immagine: 'img/04.jpg',
                titolo: 'Germania',
                descrizione: 'Lorem ipsum, dolor sit amet',
            },
        
            {
                immagine: 'img/05.jpg',
                titolo: 'Paradise',
                descrizione: 'Lorem ipsum',
            },
        ],

    },

    methods: {
       nextSlide () {
        (this.activeIndex < this.items.length-1 ) ? this.activeIndex++ : this.activeIndex = 0,
        console.log(this.activeIndex)
        },
        
        prevSlide () {
        (this.activeIndex > 0 ) ? this.activeIndex-- : this.activeIndex = this.items.length -1
        }
    }

    
});



// if ( activeCounter < items.length - 1 ) {
//     //             ++activeCounter;
//     //             console.log(activeCounter);    
//     //         } else {
//     //             activeCounter = 0;
//     //         }


// if ( activeCounter > 0 ) {
//     //             --activeCounter;
//     //             console.log(activeCounter);    
//     //         } else {
//     //             activeCounter = items.length - 1;
//     //         }


















































// // console.log(items)
// const slider = document.querySelector('.slider-wrapper');
// const controller = document.querySelector('.controller-wrapper');

// let sliderItem = '';
// let controllerItem = '';

// items.forEach( element => {

//     let  { immagine,titolo,descrizione } = element; 

//     sliderItem += `<div class="slider-item">
//     <div class="slider-img"><img src="${immagine}" alt=""></div>
    

//     <div class="text">
//         <h2>${titolo}</h2>
//         <p>${descrizione}</p>
//     </div>
//     </div>`;


//     controllerItem += `<div class="controller-item ">
//     <img src="${immagine}" alt="">
//     </div>`;    
// });


// slider.innerHTML += sliderItem;
// document.getElementsByClassName('slider-item')[0].classList.add('active');
// controller.innerHTML += controllerItem;
// document.getElementsByClassName('controller-item')[0].classList.add('active');


// const nextBtn = document.getElementById('up');
// const prevBtn = document.getElementById('down');

// let activeCounter = 0;

// nextBtn.addEventListener('click',
// function() {
    
//         if ( activeCounter < items.length - 1 ) {
//             ++activeCounter;
//             console.log(activeCounter);    
//         } else {
//             activeCounter = 0;
//         }

//         document.querySelector('.slider-item.active').classList.remove('active');
//         document.getElementsByClassName('slider-item')[activeCounter].classList.add('active');
                
//         document.querySelector('.controller-item.active').classList.remove('active');
//         document.getElementsByClassName('controller-item')[activeCounter].classList.add('active');
        
    
//     }
// );

// prevBtn.addEventListener('click',
//     function() {
        
//         if ( activeCounter > 0 ) {
//             --activeCounter;
//             console.log(activeCounter);    
//         } else {
//             activeCounter = items.length - 1;
//         }
        
//         document.querySelector('.slider-item.active').classList.remove('active');
//         document.getElementsByClassName('slider-item')[activeCounter].classList.add('active');
                
//         document.querySelector('.controller-item.active').classList.remove('active');
//         document.getElementsByClassName('controller-item')[activeCounter].classList.add('active');
        
    
//     }
// );
