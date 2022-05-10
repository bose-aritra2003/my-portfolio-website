const slideIndex = new Array(3);
slideIndex[0]=1;
slideIndex[1]=1;
slideIndex[2]=1;

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);


function plusSlides(n, slideshownumber)
{
    slideIndex[slideshownumber] = slideIndex[slideshownumber] + n;
    showSlides( slideIndex[slideshownumber], slideshownumber );
}

function currentSlide(n, slideshownumber)
{
    slideIndex[slideshownumber] = n;
    showSlides(slideIndex[slideshownumber], slideshownumber);
}

function showSlides(n, slideshownumber)
{
    let i;
    const slideshowname = "slider" + slideshownumber;
    const slides = document.getElementsByName(slideshowname);
    const dotname = "dot" + slideshownumber;
    const dots = document.getElementsByName(dotname);
    if (n > slides.length)
    {
        slideIndex[slideshownumber] = 1;
    }

    if (n < 1)
    {
        slideIndex[slideshownumber] = slides.length;
    }

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex[slideshownumber]-1].style.display = "block";
    dots[slideIndex[slideshownumber]-1].className += " active";
}
