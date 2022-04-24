//open mobile search
var search_icon = document.querySelector(".search_icon");
var mobileSearch = document.querySelector(".overlay");
var mobileSearchInput = document.querySelector(".mobileSearchInput");
search_icon.onclick = function () {
  mobileSearch.classList.toggle("active_search");
  mobileSearchInput.classList.toggle("active_search");
};

mobileSearch.onclick = function () {
  mobileSearchInput.classList.remove("active_search");
  mobileSearch.classList.remove("active_search");
};

mobileSearchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    mobileSearchInput.classList.remove("active_search");
    mobileSearch.classList.remove("active_search");
  }
});

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile_navbar");
var headerHight = header.clientHeight;

//Đóng mở mobile menu
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHight;
  if (isClose) {
    header.style.height = "100%";
  } else {
    header.style.height = null;
  }
};

//Tự động đóng menu khi chọn
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function () {
    header.style.height = null;
  };
}
