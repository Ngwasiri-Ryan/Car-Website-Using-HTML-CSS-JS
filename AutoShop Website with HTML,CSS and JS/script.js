//for the side bar

var hamburgermenu =document.querySelector('#hamburger-menu-bar');
var sidebar= document.querySelector('.side-bar');
hamburgermenu.addEventListener('click',function(){
    sidebar.classList.toggle('showmenu');
});


//for the service button
var service =document.querySelector('#button');
var servicecontainer= document.querySelector('.service-container');
service.addEventListener('click',function(){
   servicecontainer.classList.toggle('show-service-container');
});

// for about page content
let btn = document.querySelector('.more-about-us');
let content = document.querySelector('.about-content');
let title = document.querySelector('.about-heading');

const contents = [{
    title:'Where are we found?' ,
    content :'We have branches of our AutoShop situated across Northen America at Washington DC, Chicago, New York ,Maimi and New Jersey. Our branch is situated at the New Jersey where all our services may be rendered to you. '
},
{
   title:'Our History' ,
   content :'This company was founded by Abraham Stewrad in the late 90s in New Yourk. This company was famously known in car repairs in the release of the Mercedes. We have been operational ever since then to this day and since then we have established to the company you see today.'
},
{
   title:'Contact-Us' ,
   content :'You can get to us in our main office at 9, Cliffside Park,07010 or on our facebook page, twitter ,whatsapp and instagram page for more information our services or more questions'
},
{
   title:'Service Delivery' ,
   content:'The services we render to you are mostly onsite services and less of online previledges, we are secure confidential and very protective of our client requirement specifications and information on all monetary transactions '
},
{
   title:'Lets talk about business' ,
   content :'Our AutoShop offers services such as maintenance, car bibding,car trading, car washing, car repairs and other services for all our customers.'
},

];

btn.addEventListener('click',function(){
   let random = Math.floor(Math.random() * contents.length);

   title.innerText = contents[random].title;
   content.innerText = contents[random].content;
});

//for more experts button
var experts =document.querySelector('.More-Experts');
var expertcontainer= document.querySelector('.expert-container');
experts.addEventListener('click',function(){
   expertcontainer.classList.toggle('show-expert-container');
});

//for typing text
const text= document.querySelector('.second-text');

const textLoad =() =>{
       setTimeout(() =>{
               text.textContent="car repairs";
       },0);
       setTimeout(() =>{
               text.textContent="car washing";
       },4000);
       setTimeout(() =>{
                text.textContent="car trading";
      },8000);
      setTimeout(() =>{
        text.textContent="car biding";
      },12000);
      setTimeout(() =>{
         text.textContent="car parts";
       },16000);
}
   textLoad();
    setInterval(textLoad,20000);