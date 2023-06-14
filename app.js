const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn")
const toggleBtn = document.querySelector(".theme-toggle");

// display sidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
    
})

//close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none"
})

//toggle theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    toggleBtn.querySelector("span:nth-child(1)").classList.toggle("active");
    toggleBtn.querySelector("span:nth-child(2)").classList.toggle("active");
//    toggleBtn.querySelector("span").classList.toggle("active");
})

//filling orders table
Orders.forEach(order => {
    const tr = document.createElement("tr");
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.shipping === "Declined" ? "danger" : order.shipping === "Pending" ? "warning" : "primary"}">${order.shipping}</td>
        <td class="primary">Details</td>
        `;
    
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
})

//Greet User
const currentTime = new Date();
const currentHour = currentTime.getHours();

let greeting;
if (currentHour < 12) {
    greeting = " morning";
} else if (currentHour < 18) {
    greeting = " afternoon"
} else if (currentHour < 22) {
    greeting = " evening"
} else {
    greeting = "night"
}
// currentHour < 12 ? "Good morning," : currentHour < 18 ? "Good evening," : console.log("Good night,");

const timeOfDayElement = document.getElementById("timeOfDay");
timeOfDayElement.textContent = greeting;

const usernameElement = document.getElementById("username");
usernameElement.textContent = "Valerie";