/////////////////Mobile Menu//////////////////////

var $select = $("<select></select>");
$(".lg-screen-nav").append($select);

$(".lg-screen-nav a").each(function() {
    var $anchor = $(this);
    var $option = $("<option></option>");
    $option.val($anchor.attr("href"));
    $option.text($anchor.text());
    $select.append($option);
});

var $button = $("<button>Go</button>");
$(".lg-screen-nav").append($button);

$button.click(function() {
    window.location = $select.val();
});