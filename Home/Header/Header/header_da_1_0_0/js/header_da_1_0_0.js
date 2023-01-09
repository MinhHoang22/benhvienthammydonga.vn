document.getElementById("headerMenuBtn").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.add("show");
    document.getElementById("headerBg").style.display = "block";
});
document.getElementById("headerBg").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.remove("show");
    document.getElementById("headerBg").style.display = "none";
});

const menuItem = document.querySelectorAll(".header_da_1_0_0__item");
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});
window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementsByClassName("header_da_1_0_0")[0].classList.add('header_da_1_0_0--active')
    } else {
        document.getElementsByClassName("header_da_1_0_0")[0].classList.remove('header_da_1_0_0--active')

    }
}


// click popup call
document.addEventListener("DOMContentLoaded", function(){
  
    const bvkn_dkcall = document.getElementsByClassName("bvda_call");
    const popup_call_1_0_0_overlayClickform = document.getElementById("popup_call_1_0_0_overlayClickform");
    const popup_call_1_0_0_overlay = document.getElementById("popup_call_1_0_0_overlay");
    const popup_call_1_0_0_closePopup = document.getElementById("popup_call_1_0_0_closePopup");

    for ( const call of bvkn_dkcall ){
      call.addEventListener("click", function(){
        popup_call_1_0_0_overlayClickform.style.display = "block";
        popup_call_1_0_0_overlay.style.display = "block";
      });
    }

    popup_call_1_0_0_closePopup.addEventListener("click", function(){
      popup_call_1_0_0_overlayClickform.style.display = "none";
      popup_call_1_0_0_overlay.style.display = "none";
    });

    popup_call_1_0_0_overlay.addEventListener("click", function(){
      popup_call_1_0_0_overlayClickform.style.display = "none";
      popup_call_1_0_0_overlay.style.display = "none";
    });

  });