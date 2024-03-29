// --------- vertical-menu-with-inner-menu-active-animation -----------

var tabsVerticalInner = $('#accordian');
var selectorVerticalInner = $('#accordian').find('li').length;
var activeItemVerticalInner = tabsVerticalInner.find('.active');
var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
var itemPosVerticalTop = activeItemVerticalInner.position();
var itemPosVerticalLeft = activeItemVerticalInner.position();
$(".selector-active").css({
	"top":itemPosVerticalTop.top + "px", 
	"left":itemPosVerticalLeft.left + "px",
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
        if ($(this).find('a span').text() === 'Subject #1') {
            $('#topics').fadeIn(500);
            $('#tasks, #runcode, #generator, #credits, #info, #topic4').fadeOut(250);
        } else if ($(this).find('a span').text() === 'Topic:') {
            $('#info').fadeIn(500); 
            $('#topics, #tasks, #runcode, #generator, #credits, #topic4').fadeOut(250); 
        } else if ($(this).find('a span').text() === 'Subject #2') {
            $('#tasks').fadeIn(500); 
            $('#info, #topics, #runcode, #generator, #credits , #topic4').fadeOut(250); 
        } else if ($(this).find('a span').text() === 'Subject #3') {
            $('#generator').fadeIn(500); 
            $('#info, #topics, #tasks, #runcode, #credits, #topic4').fadeOut(250); 
        } else if ($(this).find('a span').text() === 'Subject #4') {
            $('#topic4').fadeIn(500); 
            $('#info, #topics, #tasks, #generator, #credits').fadeOut(250); 
        } else if ($(this).find('a span').text() === 'Next') {
            $('#credits').fadeIn(500);
            $('#info, #topics, #tasks, #runcode, #generator, #topic4').fadeOut(250); 
        } else if ($(this).find('a span').text() === 'Back') {
            $('#credits').fadeIn(500);
            $('#info, #topics, #tasks, #runcode, #generator, #topic4').fadeOut(250); 
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
