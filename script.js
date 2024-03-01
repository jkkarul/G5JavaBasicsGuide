// ---------vertical-menu with-inner-menu-active-animation-----------

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


// ---------seamless switch page function-----------


$(document).ready(function() {
    // Initialize active item's width and position
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

    // Show the info section by default
    $('#info').show();

    // Vertical menu with inner menu active animation
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

        // Check which menu item is clicked and show/hide respective sections
        if ($(this).find('a span').text() === 'Topics') {
            $('#topics').show(); // Show the topics section
            $('#info, #tasks, #runcode, #generator, #credits').hide(); // Hide other sections
        } else if ($(this).find('a span').text() === 'Site Info') {
            $('#info').show(); // Show the info section
            $('#topics, #tasks, #runcode, #generator, #credits').hide(); // Hide other sections
        } else if ($(this).find('a span').text() === 'Tasks') {
            $('#tasks').show(); // Show the tasks section
            $('#info, #topics, #runcode, #generator, #credits').hide(); // Hide other sections
        } else if ($(this).find('a span').text() === 'Run Code Online') {
            $('#runcode').show(); // Show the runcode section
            $('#info, #topics, #tasks, #generator, #credits').hide(); // Hide other sections
        } else if ($(this).find('a span').text() === 'Koshka Generator') {
            $('#generator').show(); // Show the generator section
            $('#info, #topics, #tasks, #runcode, #credits').hide(); // Hide other sections
        } else if ($(this).find('a span').text() === 'Credits') {
            $('#credits').show(); // Show the credits section
            $('#info, #topics, #tasks, #runcode, #generator').hide(); // Hide other sections
        }
    });
});


// --------------add active class-on another-page move----------

jQuery(document).ready(function($){
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if ( path == '' ) {
    path = 'index.html';
  }

  var target = $('#accordian ul li a[href="'+path+'"]');
  // Add active class to target link
  target.parent().addClass('active');
});

// ------------------site-info---------------------------


