document.addEventListener("DOMContentLoaded", function () {
    const adminPass = "jvbjjhb";

    // Create modal elements dynamically
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0, 0, 0, 0.9)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "1000";

    let modalContent = document.createElement("div");
    modalContent.style.background = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "8px";
    modalContent.style.textAlign = "center";
    modalContent.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.2)";

    let title = document.createElement("h2");
    title.innerText = "Admin Access Required";
    title.style.color = "black";

    let input = document.createElement("input");
    input.type = "password";
    input.placeholder = "Enter password";
    input.style.padding = "10px";
    input.style.marginTop = "10px";
    input.style.fontSize = "16px";
    input.style.display = "block";
    input.style.width = "80%";
    input.style.marginLeft = "auto";
    input.style.marginRight = "auto";

    let button = document.createElement("button");
    button.innerText = "Submit";
    button.style.padding = "10px";
    button.style.marginTop = "10px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.display = "block";
    button.style.width = "100%";

    let errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";

    // Append elements to modal
    modalContent.appendChild(title);
    modalContent.appendChild(input);
    modalContent.appendChild(button);
    modalContent.appendChild(errorMessage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    button.addEventListener("click", function () {
        if (input.value === adminPass) {
            modal.remove();
        } else {
            document.body.innerHTML = "<h1 style='color: white; text-align: center; margin-top: 20%;'>Contents Encrypted</h1>";
        }
    });

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            button.click();
        }
    });

    // Hide page content until authenticated
    document.body.style.background = "black";
    document.body.innerHTML = "";
});
  
