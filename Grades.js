function Display() {
    var data = document.getElementById("input").value;
    var element = document.getElementById("para1");

    if (data >= 50) {
        if (data >= 90) {
            element.textContent = "You have Distinction";
        } else {
            element.textContent = "You have Passed";
        }
    } else {
        element.textContent = "You have Failed";
    }
}