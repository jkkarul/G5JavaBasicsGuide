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

document.addEventListener("DOMContentLoaded", function() {
  var rows = document.querySelectorAll(".clickable-row");
  rows.forEach(function(row) {
    row.addEventListener("mousedown", function(event) {
      var href = row.getAttribute("data-href");
      if (href && event.button === 1) { // middle-click
        window.open(href, '_blank');
      }
    });
    row.addEventListener("click", function(event) {
      var href = row.getAttribute("data-href");
      if (href && event.button !== 1) { // not middle-click
        window.location.href = href;
      }
    });
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
      
// --------- hack-text-thingcool -----------
const Alphapet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll('li').forEach(li => {
  const span = li.querySelector('span:not(i)');
  if (span) {
    // start\ animation on page load for the first span
    if (span === document.querySelectorAll('li > a > span:not(i)')[0]) {
      const finalText = span.dataset.value;
      let iter = 0;
      const inter = setInterval(() => {
        span.innerText = finalText.split('')
          .map((letter, index) => {
            if (index < iter) {
              return finalText[index];
            }
            return Alphapet[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iter >= finalText.length) clearInterval(inter);

        iter += 1 / 2;
      }, 50);
    }

    // mouseover event listener for all spans
    span.addEventListener('mouseover', (e) => {
      const finalText = e.target.dataset.value;
      let iter = 0;
      const inter = setInterval(() => {
        e.target.innerText = finalText.split('')
          .map((letter, index) => {
            if (index < iter) {
              return finalText[index];
            }
            return Alphapet[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iter >= finalText.length) clearInterval(inter);

        iter += 1 / 2;
      }, 50);
    });
  }
});