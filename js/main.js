/////////////////Mobile Menu//////////////////////

var $select = $("<select></select>");
$(".nav").append($select);

$(".nav a").each(function() {
    var $anchor = $(this);
    var $option = $("<option></option>");
    $option.val($anchor.attr("href"));
    $option.text($anchor.text());
    $select.append($option);
});

var $button = $("<button>Go</button>");
$(".nav").append($button);

$button.click(function() {
    window.location = $select.val();
});