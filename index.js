function changePage(elementId){
  let allPages = document.querySelectorAll('.page');
  allPages.forEach((el) => {
    el.classList.remove("active");
  })
  let activePage = document.getElementById(elementId);
  activePage.classList.add("active");
  window.scrollTo(0, 0);
}

function addBottomBorder(x){
  document.querySelectorAll('.nav').forEach((e) =>{
    e.setAttribute("style" , "border-bottom:none");
  })
  let y = document.querySelector(x);
  y.setAttribute("style" , "border-bottom:2px solid #FF6B00");
}

  let bookedTableButton = document.querySelector('.final-booking');
  let tableBookedDiv = document.querySelector('.table-booked');
  const appearBooked = function () {
  tableBookedDiv.style.display = "block";
  setTimeout(() => {
    tableBookedDiv.style.display = "none";
  }, 3000)
  console.log(document.getElementsByTagName('div'));//.forEach((e) => {e.value = "";});
  }