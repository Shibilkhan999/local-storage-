function getUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
}
  
function saveUsersToLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
}
  
let users = getUsersFromLocalStorage();
console.log(users);

function SignUp() {
    const username = document.getElementById("Username").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("Confirm Password").value;
    const phoneNumber = document.getElementById("Phone Number").value;
  
    
if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
}
  
    
if (isEmailUnique(email)) {
      alert("Email is already registered. Please use a different email.");
      return;
}
  
    
if (isPhoneNumberUnique(phoneNumber)) {
      alert("Phone number is already registered. Please use a different number.");
      return;
}
  
const newUser = {
      id: generateUniqueId(),
      username,
      email,
      password,
      phoneNumber,
};
  
    
users.push(newUser);
console.log(users);
saveUsersToLocalStorage(users);
    
alert("Registration successful!");
  
    
document.getElementById("SignUp").reset();
window.location.href = "login.html";
}
  
  
  function isEmailUnique(email) {
    return users.some((user) => user.email === email);
}
  
  
  function isPhoneNumberUnique(phoneNumber) {
    return users.some((user) => user.phoneNumber === phoneNumber);
}
  
  
  function generateUniqueId() {
    return users.length + 100;
}
  
  
function Login() {
    console.log(users);
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    const user = users.find((user) => user.email === loginEmail);
  
    if (!user || user.password !== loginPassword) {
      alert("Invalid email or password. Please try again.");
      return;
    }
    
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "welcome.html";
}