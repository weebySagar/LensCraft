$(document).ready(function () {

    galleryMasonry()
    appendpPortfolioImage()
    initializeSlider();
    changeHeader()
    Fancybox.bind("[data-fancybox]")
})

// reusable function for appending images
function appendImages(images, containerClass) {
    const container = $(containerClass);

    images.forEach((imageSrc) => {
        const img = $("<img>").addClass("img-fluid").attr("src", imageSrc).attr("alt", "gallery image");
        const anchor = $("<a>").attr("href", imageSrc).attr("data-fancybox", "gallery").append(img);

        const gridItem = $("<div>").addClass("grid-item").append(anchor);
        container.append(gridItem)
    })
}


function galleryMasonry() {
    const galleryImages = ["../images/gallery1.jpg", "../images/gallery2.jpg", "../images/gallery3.jpg", "../images/gallery4.jpg", "../images/gallery5.jpg", "../images/gallery6.jpg", "../images/gallery7.jpg", "../images/gallery8.jpg", "../images/gallery9.jpg", "../images/gallery10.jpg", "../images/gallery11.jpg", "../images/gallery12.jpg"]

    appendImages(galleryImages, ".grid-container")


    const $masonry = $('.grid-container').masonry({
        itemSelector: '.grid-item',
        gutter: 20,
        fitWidth: true
    })

    $masonry.imagesLoaded().progress(function () {
        $masonry.masonry('layout')
    })
}


function appendpPortfolioImage() {
    const portfolioImages = ["../images/portfolio1.jpg", "../images/portfolio2.jpg", "../images/portfolio3.jpg", "../images/portfolio4.jpg", "../images/portfolio5.jpg", "../images/portfolio6.jpg", "../images/portfolio7.jpg",]


    appendImages(portfolioImages, ".portfolio-slider")
}


function initializeSlider() {
    // testimonial slider
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoPlay: true
    })

    // portfolio slider
    $('.portfolio-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoPlay: true,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: '<button class="slick-prev slick-arrow shadow" aria-label="Previous" type="button" style=""><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow shadow" aria-label="Next" type="button" style=""><i class="fa-solid fa-chevron-right"></i></button>'
    })
}


function changeHeader() {
    $(window).scroll(() => {
        if ($(window).scrollTop() > 200) {
            $('.header').addClass("scrolled")
        }
        else {
            $('.header').removeClass("scrolled")

        }
    })
}