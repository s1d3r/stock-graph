var preloader = document.getElementById('loader');
function preLoaderHandler(){
    preloader.style.display = 'none';
}
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});

function change_lang(){
    if (document.getElementById("stat1_name").innerHTML != "Предыдущее закрытие"){
        document.getElementById("language").setAttribute('src','https://www.countryflags.com/wp-content/uploads/russia-flag-png-xl.png');
        document.getElementById("stat1_name").innerHTML = "Предыдущее закрытие";
        document.getElementById("stat2_name").innerHTML = "Дневной диапазон";
        document.getElementById("stat3_name").innerHTML = "Годовой диапазон";
        document.getElementById("stat4_name").innerHTML = "Дивидендная доходность";
        document.getElementById("stat5_name").innerHTML = "Цена / прибыль";
        document.getElementById("stat6_name").innerHTML = "Сайт";
        document.getElementById("stat7_name").innerHTML = "Работников";
        document.getElementById("stat1_name").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat2_name").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat3_name").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat4_name").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat5_name").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat6_name").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat7_name").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat1_parsed").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat2_parsed").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat3_parsed").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat4_parsed").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat5_parsed").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat6_parsed").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat7_parsed").style = "font-family: 'Rubik', sans-serif;"
        document.getElementById("stat1").style = "padding: 3px"
        document.getElementById("stat2").style = "padding: 3px"
        document.getElementById("stat3").style = "padding: 3px"
        document.getElementById("stat4").style = "padding: 3px"
        document.getElementById("stat5").style = "padding: 3px"
        document.getElementById("stat6").style = "padding: 3px"
        document.getElementById("stat7").style = "padding: 3px"
        document.getElementById("numbers").style = "flex-basis: 30%;"
    } else {
        document.getElementById("language").innerHTML = "<img src='https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg' style='width: auto; height: 20px;'>"
        document.getElementById("language").setAttribute('src','https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png');
        document.getElementById("stat1_name").innerHTML = "Previous Close";
        document.getElementById("stat2_name").innerHTML = "Day Range";
        document.getElementById("stat3_name").innerHTML = "Year Range";
        document.getElementById("stat4_name").innerHTML = "Dividend Yield";
        document.getElementById("stat5_name").innerHTML = "P/E";
        document.getElementById("stat6_name").innerHTML = "Website";
        document.getElementById("stat7_name").innerHTML = "Employees";
        document.getElementById("stat1_name").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat2_name").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat3_name").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat4_name").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat5_name").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat6_name").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat7_name").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat1_parsed").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat2_parsed").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat3_parsed").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat4_parsed").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat5_parsed").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat6_parsed").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat7_parsed").style = "font-family: 'Poppins', sans-serif;"
        document.getElementById("stat1").style = "padding: 0px"
        document.getElementById("stat2").style = "padding: 0px"
        document.getElementById("stat3").style = "padding: 0px"
        document.getElementById("stat4").style = "padding: 0px"
        document.getElementById("stat5").style = "padding: 0px"
        document.getElementById("stat6").style = "padding: 0px"
        document.getElementById("stat7").style = "padding: 0px"
        document.getElementById("numbers").style = "flex-basis: 26%;"
    }
}
