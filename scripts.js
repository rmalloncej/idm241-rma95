var coll = document.getElementsByClassName("title");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        /*if the max-height is currently 500px then make it 0, else make it 500px. Max-height allows the dropdowns to resize to whatever they need to be instead of always expanding to 500px. If we used ".height = auto;" in the JS then it would just snap to place. As far as I know, there is no easy way to make the transition smooth using auto. Trust me on this one. Or don't. Whatever.*/

        if (content.style.maxHeight === "500px") {
            content.style.maxHeight = "0";
        } else {
            content.style.maxHeight = "500px";
        }
    });
}


(function (document) {
    var div = document.getElementById('container');
    var icon = document.getElementById('icon');
    var open = false;

    div.addEventListener('click', function () {
        if (open) {
            icon.className = 'fa fa-arrow-down';
        } else {
            icon.className = 'fa fa-arrow-down open';
        }

        open = !open;
    });
})(document);
