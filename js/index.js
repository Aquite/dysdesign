var indent = 7;
var width = 80;
before();

function before() {
  changeFont("Times New Roman, times, serif");
  changeStyle("italic");
  changeAlignment(80, "center");
  changeLineSpacing(1.1, "center");
  changeBG("white");
  changeNavigation(false);
  changeIndent(7, "normal", true);
}

function after() {
  changeFont("'Jost', sans-serif");
  changeWeight("Bold");
  changeAlignment(45, "left");
  changeLineSpacing(1.5, "left");
  changeBG("#e8e3d3");
  changeNavigation(true);
  changeIndent(1, "bold", false);
}

function changeFont(font) {
  var all = document.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
    if(all[i].tagName != "I") {
        all[i].style.fontFamily = font;
    }
  }
}

function changeStyle(style) {
  var all = document.getElementsByTagName("e");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontWeight = "normal";
    all[i].style.fontStyle = style;
  }
}

function changeWeight(weight) {
  var all = document.getElementsByTagName("e");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontWeight = weight;
    all[i].style.fontStyle = "normal";
  }
}

function changeAlignment(newWidth, pos) {
  width = newWidth;
  var all = document.getElementsByTagName("p");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.maxWidth = width + "ch";
    all[i].style.textAlign = pos;
  }

  var all = document.getElementsByTagName("dl");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.maxWidth = width * 10.5 + "px";
  }

  var all = document.getElementsByTagName("dt");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.textAlign = pos;
  }

  var all = document.getElementsByTagName("dd");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.textAlign = pos;
  }

  var all = document.getElementsByTagName("h3");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.maxWidth = width - indent + "ch";
    all[i].style.textAlign = pos;
  }

  var all = document.getElementsByTagName("h2");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.maxWidth = width - indent * 7 + "ch";
    all[i].style.textAlign = pos;
  }
}

function changeBG(color) {
  var all = document.getElementsByTagName("body");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.backgroundColor = color;
  }
}

function changeLineSpacing(num) {
  var all = document.getElementsByTagName("p");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.lineHeight = num;
  }
}

function changeNavigation(toggle) {
  var ham = document.querySelector(".navbar-toggler");
  var all = document.getElementsByClassName("nav-link");
  ham.hidden = !toggle;
  for (var i=0, max=all.length; i < max; i++) {
    all[i].hidden = !toggle;
  }
}

function changeIndent(num, weight, hidden) {
  indent = num;

  var all = document.getElementsByTagName("h3");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.maxWidth = width - indent + "ch";
    all[i].style.fontWeight =  weight;
  }

  all = document.getElementsByTagName("h2");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.maxWidth = width - indent * 7 + "ch";
    all[i].style.fontWeight = weight;
  }

  all = document.getElementsByTagName("i");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].hidden = hidden;
  }
}
