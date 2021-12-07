console.log("scropt loaded");
var slide_index = 0;
var slides = document.getElementsByClassName("slide");

function changeSlide(index) {
  slide_index += index;
  showSlide();
}

function checkIndexWrap() {
  if(slide_index > slides.length - 1) {
    slide_index = 0;
  }
  else if (slide_index < 0) {
    slide_index = slides.length - 1;
  }
}

function showSlide() {
  var i;
  checkIndexWrap();

  for(i = 0; i < slides.length; i++) {
    console.log("index: " + i);
    if(i == slide_index) {
      slides[i].style.display = "block";
    }
    else {
      slides[i].style.display = "none";
    }
  }
}

// properly instantiates the slideshow
showSlide(slide_index);
