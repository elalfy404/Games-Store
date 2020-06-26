
let slideIndex = 0;
const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName('image-sliderfade');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 9000);
}
showSlides();



const carouselSlide = document.querySelector('.stage');
const carouselImages = [...carouselSlide.children];
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// move slides to the left
nextButton.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.9s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
// move slides to the right
prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.9s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

const Repetition = () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}
carouselSlide.addEventListener('transitionend', Repetition);

const slideshows = () => {
    for (let i = 0; i < carouselImages.length; i++) {
        carouselSlide.style.transition = 'transform 0.9s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    counter++;
    Repetition()
    setTimeout(slideshows, 6000);
}
slideshows();

// --------------------------------------------

const track = document.querySelector('.ol_stage');
const slides = [...track.children];
const prevBtn = document.querySelector('#button--right');
const nextBtn = document.querySelector('#button--left');
const dotsNav = document.querySelector('.dots');
const dots = [...dotsNav.children];
const slideWidth = slides[0].getBoundingClientRect().width;

const positionSlides = (slides) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = slideWidth * i + 'px'
    };
};
positionSlides(slides);

const moveToSlide = (track, currentSlide, targetSlide) => {
    const position = targetSlide.style.left;
    track.style.transition = 'transform 0.9s ease-in-out';
    track.style.transform = `translateX(-${position})`;
    toggleActive(currentSlide, targetSlide);

    // toggle(currentSlide, targetSlide)
};

const toggleActive = (current, target) => {
    current.classList.remove('active');
    target.classList.add('active');
};

const hideButton = (targetSlide, slides) => {
    if (targetSlide === slides[0]) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetSlide === slides[slides.length - 1]) {
        nextBtn.classList.add('is-hidden');
        prevBtn.classList.remove('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    };
};

const findIndex = (item, items) => {
    for (let i = 0; i < items.length; i++) {
        if (item === items[i]) {
            return i;
        };
    };
};


// MOVE TO DOT
const moveToDot = (targetSlide, slides, dotsNav, dots) => {
    let slideIndex = findIndex(targetSlide, slides);
    const currentDot = dotsNav.querySelector(".active");
    const targetDot = dots[slideIndex];
    toggleActive(currentDot, targetDot);
    // toggle(currentDot, targetDot);

};

nextBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.active');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    hideButton(nextSlide, slides);
    moveToDot(nextSlide, slides, dotsNav, dots);
});

prevBtn.addEventListener('click', () => {
    const currentSlide = track.querySelector('.active');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
    hideButton(prevSlide, slides);
    moveToDot(prevSlide, slides, dotsNav, dots);
});

dotsNav.addEventListener('click', e => {
    if (e.target === dotsNav) return;
    const targetDot = e.target;
    const currentSlide = track.querySelector('.active');
    const currentDot = dotsNav.querySelector('.active');
    let targeDotIndex = findIndex(targetDot, dots);
    const targetSlide = slides[targeDotIndex];
    moveToSlide(track, currentSlide, targetSlide);
    toggleActive(currentDot, targetDot);
    hideButton(targetSlide, slides);
    // toggle(currentDot, targetDot);
});


// track.addEventListener('transitionend', () => {
//     if (slides[0].id === x) {
//         const position = targetSlide.style.left;
//         track.style.transition = 'transform 0.9s ease-in-out';
//         track.style.transform = `translateX(-${position})`;
//         console.log('1');
//     }
//     console.log('2');
//     if (slides[0].id === a) {
//         const position = targetSlide.style.left;
//         track.style.transition = 'transform 0.9s ease-in-out';
//         track.style.transform = `translateX(-${position})`;
//         console.log('3');
//     }
//     console.log('4');
// })


//  -------------------------------------


const slideVideo = document.querySelector('.stage_videos');
const videoCarousel = [...slideVideo.children];

const prevBut = document.querySelector('#prev-btn');
const nextBut = document.querySelector('#next-btn');
let extent = 1;
const widthSize = videoCarousel[0].clientWidth;
slideVideo.style.transform = 'translateX(' + (-widthSize * extent) + 'px)';

nextBut.addEventListener('click', () => {
    if (extent >= videoCarousel.length - 1) return;
    slideVideo.style.transition = 'transform 0.9s ease-in-out';
    extent++;
    slideVideo.style.transform = 'translateX(' + (-widthSize * extent) + 'px)';
});

prevBut.addEventListener('click', () => {
    if (extent <= 0) return;
    slideVideo.style.transition = 'transform 0.9s ease-in-out';
    extent--;
    slideVideo.style.transform = 'translateX(' + (-widthSize * extent) + 'px)';
});

const skip = () => {
    if (videoCarousel[extent].id === 'last') {
        slideVideo.style.transition = 'none';
        extent = videoCarousel.length - 2;
        slideVideo.style.transform = 'translateX(' + (-widthSize * extent) + 'px)';
    }
    if (videoCarousel[extent].id === 'first') {
        slideVideo.style.transition = 'none';
        extent = videoCarousel.length - extent;
        slideVideo.style.transform = 'translateX(' + (-widthSize * extent) + 'px)';
    }
}
slideVideo.addEventListener('transitionend', skip);




// --------------------------------