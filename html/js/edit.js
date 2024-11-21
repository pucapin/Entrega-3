const newNameInput = document.getElementById('new-name');
const passInput = document.getElementById('new-pass');
//Edit profile options

function runEdit() {
    const userName = localStorage.getItem('currentUser');
    const userData = localStorage.getItem(userName); 
    if (userData) {
        const parsedUserData = JSON.parse(userData);
        newNameInput.value = parsedUserData.user
        passInput.value = parsedUserData.password
    }}

function editProfile() {
    const userName = localStorage.getItem('currentUser');
    const userData = localStorage.getItem(userName); 
    const newName = newNameInput.value;  // Get updated values from inputs
    const newPass = passInput.value;
    if (userData) {
        const parsedUserData = JSON.parse(userData);
        if(newName === '' || newPass === '') {
            alert("Llene los campos");
        } else {
            if (newName !== userName) {
                parsedUserData.user = newName;
                localStorage.setItem(newName, JSON.stringify(parsedUserData)); 
                localStorage.removeItem(userName);
                localStorage.setItem('currentUser', newName); 
            } else {
                parsedUserData.password = newPass;
                localStorage.setItem(userName, JSON.stringify(parsedUserData)); 
            }
            alert("Perfil actualizado con éxito!");
        }
    }

    

}