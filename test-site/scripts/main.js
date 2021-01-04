// let heading = document.querySelector("h1");
// heading.textContent = "Hello World Change Heading!";
// heading.onclick = function() {
//     alert("You Clicked the Header!")
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }
let username = localStorage.getItem("username");
if (username) {
    let heading = document.querySelector("h1");
    heading.textContent = "Hello, " + username;
}

document.querySelector("button").onclick = function() {
    setUserName();
};

function setUserName() {
    let username = prompt("请输入您的名字：");
    if (!username || null === username) {
        setUserName();
    } else {
        localStorage.setItem("username", username);
        let heading = document.querySelector("h1");
        heading.textContent = "Hello, " + username;
    }
}