const headerNav = document.querySelector(".header-navigation");
const headerToggle = document.querySelector(".header-navigation__toggle");

headerNav.classList.remove("header-navigation--nojs");

function getNavList() {
  if (headerNav.classList.contains("header-navigation--opened")) {
    headerNav.classList.remove("header-navigation--opened");
    headerNav.classList.add("header-navigation--closed");
  } else {
    headerNav.classList.remove("header-navigation--closed");
    headerNav.classList.add("header-navigation--opened");
  }
}

headerToggle.addEventListener("click", getNavList);

//map

const map = L.map("map").setView(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  100
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
  icon: mainPinIcon,
  }
);

marker.addTo(map);
map.panTo(marker);
