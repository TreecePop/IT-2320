var LastElement = {};
var CurrentElement = {};

toggleHighlight = function () {
    var current = $(CurrentElement);
    var last = $(LastElement);

    if (!$(current).hasClass("cellSelect")) {
        current.addClass("cellSelect");
        last.removeClass("piece red black cellSelect");
        current = {};
        last = {};
    } else {
        current.removeClass("cellSelect");
        current = {};
        last = {};
    }
};

$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {
        if ($(this).hasClass("cell piece black") || $(this).hasClass("cell piece red")) {
            CurrentElement = this;
            toggleHighlight();
            LastElement = this;
        }
        else {
            CurrentElement = this;
            toggleHighlight();
            LastElement = this;
        }
    });
});