function back() {
    window.location = "activity_1.html"
}

function Getscore(){
    document.getElementById("score").innerHTML = "score: " + localStorage.getItem("score");
}