function checkPassword() {
    var input = document.getElementById("password").value;

    if (input === "Batota") { // 👈 غير دي باسمها الحقيقي
        document.getElementById("login").style.display = "none";
        document.getElementById("gift").classList.remove("hidden");
    } else {
        alert("غلط 😏 جربي تاني");
    }
}

function openBox() {
    document.getElementById("message").classList.add("show");
}
