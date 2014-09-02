function changeColor1() {
    document.getElementById("d1").className = "click";
    document.getElementById("d2").className = "";
    document.getElementById("d3").className = "";
  
    document.getElementById("UX").style.visibility = "visible";
    document.getElementById("IA").style.visibility = "hidden";
    document.getElementById("ARCH").style.visibility = "hidden";
    
    /* document.getElementById("UX").show();
    document.getElementById("IA").hide();
    document.getElementById("ARCH").hide(); */
    
    $('.project').removeClass('expanded');
}

function changeColor2() {
    document.getElementById("d1").className = "";
    document.getElementById("d2").className = "click";
    document.getElementById("d3").className = "";
    
    document.getElementById("UX").style.visibility = "hidden";
    document.getElementById("IA").style.visibility = "visible";
    document.getElementById("ARCH").style.visibility = "hidden";
    
    /* document.getElementById("UX").hide();
    document.getElementById("ARCH").show();
    document.getElementById("ARCH").hide(); */
    
    $('.project').removeClass('expanded');
}

function changeColor3() {
    document.getElementById("d1").className = "";
    document.getElementById("d2").className = "";
    document.getElementById("d3").className = "click";
    
    document.getElementById("UX").style.visibility = "hidden";
    document.getElementById("IA").style.visibility = "hidden";
    document.getElementById("ARCH").style.visibility = "visible";
    
    /* document.getElementById("UX").hide();
    document.getElementById("ARCH").hide();
    document.getElementById("ARCH").show(); */
    
    $('.project').removeClass('expanded');
}

function init() {
    document.getElementById("d1").onclick = changeColor1; 
    document.getElementById("d2").onclick = changeColor2;
    document.getElementById("d3").onclick = changeColor3;
}

window.onload = init();
window.onload = changeColor1(); /* to keep first choice selected onload */