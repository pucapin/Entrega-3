function login() {
    let user = document.getElementById("user").value; // Keep the same variable name
    let pass = document.getElementById("password").value;

    // Validate that fields are not empty
    if (user !== "" && pass !== "") {
        const storedUser = localStorage.getItem(user); 
        
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === pass) {
                alert("Inicio de sesión exitoso!");
                localStorage.setItem('currentUser', userData.user);
                window.location = "./index2.html"; // Redirect after successful login
            } else {
                alert("Contraseña incorrecta");
            }
        } else {
            alert("El usuario no existe");
        }
    } else {
        alert("Por favor complete los campos para continuar");
    }
}

