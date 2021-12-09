//topnav
var trigram = document.getElementsByClassName("trigram");
var nav_btns = document.getElementsByClassName("nav-item");
var header = document.getElementsByClassName("header");
var nav_open = false;

//slides
var slide_index = 0;
var slides = document.getElementsByClassName("slide");
var prev_btn = document.getElementsByClassName("prev");
var next_btn = document.getElementsByClassName("next");

//cards
var card_open = false;
var clicked_index = 0;
var cards = document.getElementsByClassName("grid-item");
var card_img = document.getElementsByClassName("img-small");
var card_content = document.getElementsByClassName("card-content");
var card_title = document.getElementsByClassName("card-title");
var card_text = document.getElementsByClassName("card-text");

//modals
var modals = document.getElementsByClassName("modal");

//debugging
var test = 0;

function toggleNav(e) {
  if(!nav_open) {
    changeNav("block");
  } else {
    changeNav("none");
  }
}

function changeNav(modifier) {
  if(modifier != "none") {
    header[0].style.justifyContent = "space-between";
    header[0].style.flexDirection = "column";
  } else {
    header[0].style.flexDirection = "row";
    header[0].style.justifyContent = "flex-end";
  }

  for(var i = 0; i < nav_btns.length; i++) {
    if(nav_btns[i].className != "nav-item trigram") {
      nav_btns[i].style.display = modifier;
    }
  }
  nav_open = !nav_open;
}

function changeSlide(index) {
  slide_index += index;
  showSlide();
}

function nextSlide() {
  changeSlide(1);
}

function prevSlide() {
  changeSlide(-1);
}

function checkIndexWrap() {
  if(slide_index > slides.length - 1) {
    slide_index = 0;
  } else if (slide_index < 0) {
    slide_index = slides.length - 1;
  }
}

function showSlide() {
  checkIndexWrap();

  for(var i = 0; i < slides.length; i++) {
    if(i == slide_index) {
      slides[i].style.display = "block";
      console.log("index: " + i);
    } else {
      slides[i].style.display = "none";
    }
  }
}

function initPage() {
  showSlide(slide_index);

  for(var i = 0; i < cards.length; i++) {
    //add clicked listeners
    cards[i].addEventListener("click", cardClicked);
    card_img[i].addEventListener("click", cardClicked);
    card_content[i].addEventListener("click", cardClicked);
    card_title[i].addEventListener("click", cardClicked);
    card_text[i].addEventListener("click", cardClicked);

    //add modal listeners
    modals[i].addEventListener("click", closeModal);
  }

  next_btn[0].addEventListener("click", nextSlide);
  prev_btn[0].addEventListener("click", prevSlide);
  trigram[0].addEventListener("click", toggleNav);
}

function cardClicked(e) {
  clicked_index = "modal" + e.currentTarget.id;
  curr_modal = document.getElementById(clicked_index);
  curr_modal.style.display = "block";
  console.log("card opened: " + clicked_index);
}

function closeModal(e) {
  if(e.target.id.length < 3 || e.target.className == "close") {
    clicked_index = "modal" + e.currentTarget.id;
  } else {
    clicked_index = e.currentTarget.id;
  }

  curr_modal = document.getElementById(clicked_index);
  curr_modal.style.display = "none";
  console.log("card closed: " + clicked_index);
}

initPage();
