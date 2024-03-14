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
    if ($(this).find('a span').text() === 'Java Guide') {
      $('#topics').fadeIn(500);
      $('#tasks, #runcode, #generator, #credits, #info').fadeOut(250);
    } else if ($(this).find('a span').text() === 'Site Info') {
      $('#info').fadeIn(500);
      $('#topics, #tasks, #runcode, #generator, #credits').fadeOut(250);
    } else if ($(this).find('a span').text() === 'Tasks') {
      $('#tasks').fadeIn(500);
      $('#info, #topics, #runcode, #generator, #credits').fadeOut(250);
    } else if ($(this).find('a span').text() === 'Run Java Code') {
      $('#runcode').fadeIn(500);
      $('#info, #topics, #tasks, #generator, #credits').fadeOut(250);
    } else if ($(this).find('a span').text() === 'Koshka Generator') {
      $('#generator').fadeIn(500);
      $('#info, #topics, #tasks, #runcode, #credits').fadeOut(250);
    } else if ($(this).find('a span').text() === 'Credits') {
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

function hentai(n) {
  var returnVar = "https://nhentai.to/g/";
  var ranSauce = Math.floor((Math.random() * 0.9 + 0.1) * Math.pow(10, n));

  if (n >= 7) {
    return "No breaky my codey UwU - Koshka!";
  }

  while (ranSauce > 426505) {
    ranSauce = Math.floor((Math.random() * 0.9 + 0.1) * Math.pow(10, n));
  }

  return {
    number: ranSauce,
    link: returnVar + ranSauce
  };
}

function generateHentai() {
  var result = hentai(6);
  var resultText = result.number !== undefined ?
    `Generated Number: ${result.number}, Sauce Link: <a href="${result.link}" target="_blank">${result.link}</a>` :
    result;

  var sauceResultElement = document.getElementById("SauceResult");
  sauceResultElement.innerHTML = resultText;
  sauceResultElement.style.color = "blue";
  sauceResultElement.style.fontWeight = "bold";
  sauceResultElement.style.textAlign = "center";

  var generateButton = document.querySelector(".Generate-button");
  generateButton.style.display = "block";
  generateButton.style.margin = "0 auto";
}

// --------- PasswordSection -----------
var passwordEntered = false;

function promptPasswordForKoshkaGenerator() {
  if (!passwordEntered) {
    var password = prompt("Please enter the password for Koshka Generator:");
    
    if (password === "KOSHKANSFW") { 
      $('#generator').show(); 
      generateAndLoad(); 
      
      passwordEntered = true;
    } else {
      alert("Incorrect password. Redirecting to Site Info.");
      
      window.location.href = "#site-info";
      $('#accordian ul li').removeClass("active"); 
      $('#accordian ul li:first-child').addClass("active"); 
      $('#info').fadeIn(500); 
      $('#topics, #tasks, #runcode, #generator, #credits').fadeOut(250); 
      $('#generator').hide(); 
    }
  } else {
    
    $('#generator').show();
    generateAndLoad(); 
  }
}
// --------- Generator-Section -----------

function generateAndLoad() {
  var returnVar = "https://nhentai.to/g/";
  var maxSauce = 426505; 

  var ranSauce = Math.floor(Math.random() * maxSauce) + 1;

  if (ranSauce >= 426505) {
    alert("No breaky my codey UwU - Koshka!");
    return;
}

  var result = {
      number: ranSauce,
      link: returnVar + ranSauce
  };

  var resultText = `Generated Number: ${result.number}, Sauce Link: <a href="${result.link}" target="_blank">${result.link}</a>`;

  var sauceResultElement = document.getElementById("SauceResult");
  sauceResultElement.innerHTML = resultText;

  var url = result.link;
  var iframe = document.createElement("iframe");
  iframe.setAttribute("src", url);
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  document.getElementById("miniWebsite").innerHTML = '';
  document.getElementById("miniWebsite").appendChild(iframe);
}