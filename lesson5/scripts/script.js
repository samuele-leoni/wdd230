document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("favchap");
    const button = document.querySelector("button");
    const list = document.getElementById("list");

    button.addEventListener("click", function () {
        if (input.value !== "") {
            let li = document.createElement("li");
            let delBtn = document.createElement("button");
            li.textContent = input.value;
            delBtn.textContent = "❌";
            li.append(delBtn);
            list.appendChild(li);
            delBtn.addEventListener("click", function () {
                list.removeChild(li);
            });
            input.focus();
            input.value = "";
        }
    });
});