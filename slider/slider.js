//Carousel
let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');
let sliderImage = document.querySelector('.slider img');

let imagesLists = [
    'img/banner-img.jpg',
    'img/expert-bg.jpg',
    'img/img-lstng.jpg',
    'img/img-reading.jpg',
    'img/process-bg.jpg'
];

let counter = 0;
sliderImage.setAttribute('src', imagesLists[0]);

sliderImage.style = 'height: 200px;';

var changeAnimation = () => {
    sliderImage.classList.add('hide');

    setTimeout(function(){
        sliderImage.setAttribute('src', imagesLists[counter]);
        sliderImage.classList.remove('hide');
    }, 300);
};

var resetCounter = () => {
    if(counter  >= imagesLists.length || counter < 0) {
        counter = 0;
    }
};

function nextImage(){
    if(counter + 1 < imagesLists.length){
        ++counter;
        resetCounter();
    }
    changeAnimation();
    // sliderImage.setAttribute('src', imagesLists[counter]);
    //console.log('image', counter);
}

function prevImage(){
    if(counter > 0){
        --counter;
        resetCounter();
    }
    changeAnimation();
    // sliderImage.setAttribute('src', imagesLists[counter]);
    //console.log('image', counter);
}


//Get Elements
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);




let sliderPrevBtn = document.querySelector('#sliderPrevBtn');
let sliderNextBtn = document.querySelector('#sliderNextBtn');
let mainSlider = document.querySelector('.image-wrapper');
let sliderWrapper = document.querySelector('.slider2');
let sliderImages = document.querySelectorAll('.slider2 img');
console.log(sliderImages);
var currentIndex = 0;

//Creating Empty Array
var allWidths = [];

//Get Slider width
var imageWidth = sliderImages.forEach(function(value, index){
    // //var imageWidth = value.clientWidth;
    // console.log('The Width is ', imageWidth);
    allWidths.push(value.clientWidth);
});
console.log(allWidths);

//Calculate Total Width
for(let i = 0; i < allWidths.length; i++){
    var totalImageWidth = allWidths[i] * (i + 1);
    console.log('The Total Width is ', totalImageWidth);
}

console.log(totalImageWidth);
//Adding Total width on main slider wrapper
mainSlider.style = `width: ${totalImageWidth}px;`;

//Adding Width To the Images
var addingImageSize = () => {
    var imageDOMWidth = (sliderWrapper.clientWidth / 100) * 50;
    console.log(imageDOMWidth);
    sliderImages.forEach(function(value, index) {
        value.style = `width: ${imageDOMWidth}px;`;
    });
};

// addingImageSize();

let bodyWidth = document.querySelector('body').clientWidth;
// let bodyWidthHalf = bodyWidth / 2;

function getTheWidth(){
    let imageWidth = 0;
    if(currentIndex > 0){
        for(let i = 0; i < currentIndex; i++){
            imageWidth += allWidths[i];
            console.log('Margin is ', imageWidth);
        }
    }
    return imageWidth;
}
let slideNextImage = function(){
    if(allWidths.length - 1 > currentIndex){
        currentIndex++;
    }

    mainSlider.style = `width: ${totalImageWidth}px; margin-left: -${getTheWidth()}px;`;
    // console.log('move left', bodyWidthHalf);
};

let sliderPrevImage = function(){
    if(currentIndex > 0){
        currentIndex--;
    }

    mainSlider.style = `width: ${totalImageWidth}px; margin-left: -${getTheWidth()}px;`;
    // console.log('move right', bodyWidthHalf);
};

sliderPrevBtn.addEventListener('click', sliderPrevImage);
sliderNextBtn.addEventListener('click', slideNextImage);

//Refreshing Image Width on Window Resize
window.addEventListener('resize', function(){
    // console.log(sliderWrapper.clientWidth);
    // addingImageSize();

    //Adding Total width on main slider wrapper
    mainSlider.style = `width: ${totalImageWidth}px;`;

    sliderPrevBtn.addEventListener('click', sliderPrevImage);
    sliderNextBtn.addEventListener('click', slideNextImage);
}, true);