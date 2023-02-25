let time = document.getElementById("time");
time.value = new Date().toISOString().slice(0, 16);

function validateForm() {
    let form = document.querySelector("form");
    let requiredFields = form.querySelectorAll("[required]");
    let membershipLevel = form.querySelectorAll("[name=membershipLevel]");
    let valid = false;
    membershipLevel.forEach(function (field) {
        if (field && field.checked) {
            valid = true;
        }
    });
    requiredFields.forEach(function (field) {
        if (!field.value) {
            valid = false;
        }
    });
    return valid;
}

document.getElementById("submit").addEventListener("click", () => {
    if (validateForm()) {
        window.location.href = "thankyou.html";
    }
});