//Write a function to change the background color when the button is clicked.
function changeColor() {
    var body = document.body;
    body.style.backgroundColor = "lightblue";
}   

//Use JavaScript to pick a random color from a predefined list or generate a random color.
const randomColor = () => {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    return `#${random}`;
}  

//Write a function to change the background color to a random color when the button is clicked.
function changeColor() {
    var body = document.body;
    body.style.backgroundColor = randomColor();

}
