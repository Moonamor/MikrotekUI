let corner1, corner2, l, d;
$(document).ready(function () {

    // console.log()

    $("#footer").css("min-height", ($(window).innerHeight() - $("body").height() + 50) + "px");
    $("#news").hide();
    $("#news").slideDown(1000);

    const visited = window.localStorage.getItem('visited') != null;
    if (!visited) {
        window.localStorage.setItem('Theme_islight', 'L');
        window.localStorage.setItem('visited', true);
        
    }
    theme(window.localStorage.getItem('Theme_islight'));
    

    $("#themeButton").click(function () {
        if (window.localStorage.getItem('Theme_islight') == 'L')
            window.localStorage.setItem('Theme_islight', 'D');
        else if (window.localStorage.getItem('Theme_islight') == 'D')
            window.localStorage.setItem('Theme_islight', 'L');
        theme(window.localStorage.getItem('Theme_islight'));
    });

    function theme(themee) {
        
        if (themee == 'L') {
            console.log(window.localStorage.getItem('Theme_islight'));
            // light
            corner1 = 0;
            clearInterval(l);
            d = setInterval(function () {
                corner1 = corner1 + 1;//#a3ced6, #c2a3d6
                $("body").css({ "background-image": "linear-gradient(" + corner1 + "deg, #a3ced6, #1899e4)" });
                if (corner1 == 360)
                    corner1 = 0;
            }, 10);
            $("body").css({
                "background-repeat": "no-repeat",
                "color": "#282828",
                "background-position": "center",
                "background-size": "cover",
                "direction": "rtl",
                // "background-color": "red",
                "height": "100%",
                "width": "100%",
                "background-size": "100% 100%"
            });
            $("table").css({ "color": "#282828" });
            $("#in-box").css({
                "background-color": "#ffffffbe",
                "max-width": "350px"
            });
            $("#login-btn").attr("class", "btn btn-primary");
            // var x = $("#login-btn").attr("class");
            // alert(x);
            $("#navv").attr("class", "navbar navbar-expand-md  bg-primary navbar-dark fixed-top")
            $("#footer").css({
                "background-color": "#006eff",
                "font-size": "1.5em",
                "color": "azure",
                "text-align": "center",
                "border": "3px solid rgb(255, 255, 255)",
                "border-radius": "10px",
                "box-shadow": "#00eeff 0px 0px 20px 10px"
            });
            $("#converting-btn").attr("class", "btn btn-outline-primary btn-lg");
            $("#offcanvas-about").attr("class", "container radius alert alert-light");
            $(".logout-btn").attr("class", "logout-btn btn btn-primary");

        } 
        else if (themee == 'D'){
            // dark 
            corner2 = 0;
            clearInterval(d);
            l = setInterval(function () {
                corner2 = corner2 + 1;
                $("body").css({ "background-image": "linear-gradient(" + corner2 + "deg, #353535, #00828b)" });
                if (corner2 == 360)
                    corner2 = 0;

            }, 10);
            $("body").css({
                "background-repeat": "no-repeat",
                "color": "lightcyan",
                "background-position": "center",
                "background-size": "cover",
                "direction": "rtl",
                "height": "100%",
                "width": "100%",
                "background-size": "100% 100%"

            });
            $("table").css({ "color": "lightcyan" });
            $("#in-box").css({
                "background-color": "#2e2e2ebe",
                "max-width": "350px"
            });
            $("#login-btn").attr("class", "btn btn-secondary");
            $("#navv").attr("class", "navbar navbar-expand-md  bg-dark navbar-dark fixed-top")
            $("#footer").css({
                "background-color": "#282828",
                "font-size": "1.5em",
                "color": "azure",
                "text-align": "center",
                "border": "3px solid rgb(255, 255, 255)",
                "border-radius": "10px",
                "box-shadow": "#00ffdd 0px 0px 20px 10px"
            });
            $("#converting-btn").attr("class", "btn btn-outline-dark btn-lg");
            $("#offcanvas-about").attr("class", "container radius alert alert-dark");
            $(".logout-btn").attr("class", "logout-btn btn btn-dark");

        }
    }
});


