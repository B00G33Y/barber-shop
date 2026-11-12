const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () =>{
    mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link =>{
    link.addEventListener("click", () => mainNav.classList.remove("open"))
});

const services =[
   { name:"Classic Haircut", price:"3000", duration:"30 min"},
   { name:"Beard Trim", price:"1500", duration:"15min"},
   { name:"Haircut + Beard ", price:"4000", duration:"45min"},
   { name:"Kids Cut", price:"2000", duration:"25min"},
];

const formatnaira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const servicesGrid= document.getElementById("servicesGrid");

servicesGrid.innerHTML = services
.map(({name, price, duration}) => `
<article class= "services-card>
<h3>$name</h3>
<p class="duration">${duration}</p>
<p class="price">${formatnaira.format(price)}</p>
</article>
`)

.join("");

const hours =[
    { day:"Sunday", time:"Closed"},
    { day:"Monday", time:"9:00 AM - 8:00 PM"},
    { day:"Tuesday", time:"9:00 AM - 8:00 PM"},
    { day:"Wednesday", time:"9:00 AM - 8:00 PM"},
    { day:"Thursday", time:"9:00 AM - 8:00 PM"},
    { day:"Friday", time:"9:00 AM - 9:00 PM"},
    { day:"Saturday", time:"8:00 AM - 9:00 PM"},
    
]

const hoursList = document.getElementById("hoursList");
const today = new Date().getDay();
hoursList.innerHTML = hours
.map(({day, time}, index) =>`
    <li class="${index === today ? "today" : ""}">
    <span>$day{day}</span>
    <span>$time{time}</span>
    </li>
`)

.join("");

const footerText =document.getElementById("footerText");
footerText.textContent = `${new Date().getFullYear()} Sharp Edge Barbers. All rights reserved.`;

const photos =[
    {src:"images/cut1.jpg", alt:"Fresh fade haircut"},
    {src:"images/cut2.jpg", alt:"clean beard haircut"},
    {src:"images/cut3.jpg", alt:"Classic side part"},
    {src:"images/cut4.jpg", alt:"Kids haircut"},
];

const sliderImage = document.getElementById("sliderImage");
const sliderCount = document.getElementById("sliderCount");
const prevBtn = document.getElementById("prevBtn");
const nextBtn= document.getElementById("nextBtn");

let current = 0;

function showPhoto (){
    sliderImage.src =photos[current].src;
    sliderImage.alt=photos[current].alt;
    sliderCount.textContent = `${current + 1} / ${photos.length}`;
}

nextBtn.addEventListener("click", ()=>{
    current= (current + 1) %photos.length;
    showPhoto();
});
prevBtn.addEventListener("click", ()=>{
     current= (current - 1 + photos.length) %photos.length;
    showPhoto();
});

showPhoto();
