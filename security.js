document.addEventListener("DOMContentLoaded", function () {
    // Encrypted password hash (SHA-256 of "112233")
    const storedHash = "e4c06d42fc53ddda6a1c4a5c1f3e8dc5c357c9b1e99587e6166b3d97d98b9baa";

    function sha256(str) {
        return crypto.subtle.digest("SHA-256", new TextEncoder().encode(str))
            .then(buf => Array.from(new Uint8Array(buf))
            .map(b => b.toString(16).padStart(2, "0"))
            .join(""));
    }

    function verifyPassword(inputPass) {
        sha256(inputPass).then(hash => {
            if (hash === storedHash) {
                document.body.removeChild(modal);
                document.body.style.background = "white"; // Restore background
                document.body.innerHTML = "<h1 style='text-align: center;'>Welcome to the Secured Page</h1><p style='text-align: center;'>You have successfully unlocked the content.</p>";
            } else {
                document.body.innerHTML = "<h1 style='color: white; text-align: center; margin-top: 20%;'>Contents Encrypted</h1>";
            }
        });
    }

    // Creating modal dynamically
    let modal = document.createElement("div");
    Object.assign(modal.style, {
        position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
        background: "rgba(0, 0, 0, 0.9)", display: "flex", justifyContent: "center",
        alignItems: "center", zIndex: "1000"
    });

    let modalContent = document.createElement("div");
    Object.assign(modalContent.style, {
        background: "white", padding: "20px", borderRadius: "8px", textAlign: "center",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)"
    });

    let title = document.createElement("h2");
    title.innerText = "Admin Access Required";
    title.style.color = "black";

    let input = document.createElement("input");
    Object.assign(input, { type: "password", placeholder: "Enter password" });
    Object.assign(input.style, {
        padding: "10px", marginTop: "10px", fontSize: "16px", display: "block",
        width: "80%", marginLeft: "auto", marginRight: "auto"
    });

    let button = document.createElement("button");
    button.innerText = "Submit";
    Object.assign(button.style, {
        padding: "10px", marginTop: "10px", fontSize: "16px", cursor: "pointer",
        display: "block", width: "100%"
    });

    let errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";

    modalContent.append(title, input, button, errorMessage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    button.addEventListener("click", () => verifyPassword(input.value));
    input.addEventListener("keypress", event => { if (event.key === "Enter") button.click(); });

    // Ensure only the modal is shown initially
    document.body.style.background = "black";
});
      
