// --------- vertical-menu-with-inner-menu-active-animation -----------

var tabsVerticalInner = $('#accordian');
var selectorVerticalInner = $('#accordian').find('li').length;
var activeItemVerticalInner = tabsVerticalInner.find('.active');
var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
var itemPosVerticalTop = activeItemVerticalInner.position();
var itemPosVerticalLeft = activeItemVerticalInner.position();
$(".selector-active").css({
  "top": itemPosVerticalTop.top + "px",
  "left": itemPosVerticalLeft.left + "px",
  "height": activeWidthVerticalHeight + "px",
  "width": activeWidthVerticalWidth + "px"
});

// --------- seamless-switch-page-function -----------

$(document).ready(function() {
  var activeItemVerticalInner = $('#accordian ul li.active');
  var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
  var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
  var itemPosVerticalTop = activeItemVerticalInner.position();
  var itemPosVerticalLeft = activeItemVerticalInner.position();
  $(".selector-active").css({
    "top": itemPosVerticalTop.top + "px",
    "left": itemPosVerticalLeft.left + "px",
    "height": activeWidthVerticalHeight + "px",
    "width": activeWidthVerticalWidth + "px"
  });

  $('#info').show();

  $("#accordian").on("click", "li", function(e) {
    $('#accordian ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthVerticalHeight = $(this).innerHeight();
    var activeWidthVerticalWidth = $(this).innerWidth();
    var itemPosVerticalTop = $(this).position();
    var itemPosVerticalLeft = $(this).position();
    $(".selector-active").css({
      "top": itemPosVerticalTop.top + "px",
      "left": itemPosVerticalLeft.left + "px",
      "height": activeWidthVerticalHeight + "px",
      "width": activeWidthVerticalWidth + "px"
    });

    if ($(this).find('a span').data('value') === 'Java Guide') {
      $('#topics').fadeIn(500);
      $('#tasks, #runcode, #generator, #credits, #info').fadeOut(250);
    } else if ($(this).find('a span').data('value') === 'Site Info') {
      $('#info').fadeIn(500);
      $('#topics, #tasks, #runcode, #generator, #credits').fadeOut(250);
    } else if ($(this).find('a span').data('value') === 'Tasks') {
      $('#tasks').fadeIn(500);
      $('#info, #topics, #runcode, #generator, #credits').fadeOut(250);
    } else if ($(this).find('a span').data('value') === 'Run Java Code') {
      $('#runcode').fadeIn(500);
      $('#info, #topics, #tasks, #generator, #credits').fadeOut(250);
    } else if ($(this).find('a span').data('value') === 'Koshka Generator') {
      $('#generator').fadeIn(500);
      $('#info, #topics, #tasks, #runcode, #credits').fadeOut(250);
    } else if ($(this).find('a span').data('value') === 'Credits') {
      $('#credits').fadeIn(500);
      $('#info, #topics, #tasks, #runcode, #generator').fadeOut(250);
    }
  });
});
// --------- clickable-row -----------

document.querySelectorAll('.clickable-row').forEach(row => {
  row.addEventListener('click', () => {
    window.location.href = row.querySelector('table').dataset.href;
  });
});

// --------- back-to-index -----------

document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector(".profile");
  header.addEventListener("click", function() {
    var href = header.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });
});


// --------- Generator-Section -----------

const changeSourceButton = document.getElementById('changeSourceButton');
    const iframe = document.getElementById('myFrame');

    changeSourceButton.addEventListener('click', function() {
        const randomNumber = Math.floor(Math.random() * 426505) + 1;
        const newURL = 'https://nhentai.to/g/' + randomNumber;
        iframe.src = newURL;
    });
      