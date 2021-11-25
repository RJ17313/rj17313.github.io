function decide() {
    if (document.getElementById("theSidebar").style.width != "15%") {
        openSidebar()
    }
    else{
        closeSidebar()
    }
}

function openSidebar() {
    console.log("working");
    document.getElementById("theSidebar").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
}

function closeSidebar() {
    document.getElementById("theSidebar").style.width = "0%";
    document.getElementById("main").style.marginLeft = "0%";
}