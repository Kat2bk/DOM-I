const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// Example: Update the img src for the logo
// IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let img2 = document.getElementById("cta-img");
img2.setAttribute('src', siteContent["cta"]["img-src"]);
let img3 = document.getElementById("middle-img");
img3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// anchor tags

// let anchors = document.querySelectorAll("header nav a")[0];
// anchors.textContent = (siteContent["nav"]["nav-item-1"])

// let anchors1 = document.querySelectorAll("header nav a")[1];
// anchors1.textContent = (siteContent["nav"]["nav-item-2"])

let anchors = document.querySelectorAll("a");
anchors.forEach((item, index) => item.textContent = siteContent['nav'][`nav-item-${index += 1}`])

let title = document.querySelectorAll(".cta-text h1")[0];
title.textContent = (siteContent["cta"]["h1"]);

let titleButton = document.querySelectorAll(".cta-text button")[0];
titleButton.textContent = (siteContent["cta"]["button"]);

// features 
let featureTitle = document.querySelectorAll(".main-content .top-content .text-content h4")[0];
featureTitle.textContent = (siteContent["main-content"]["features-h4"]);

let featurePara = document.querySelectorAll(".text-content p")[1];
featurePara.textContent = (siteContent["main-content"]["features-content"]);

// about

let aboutTitle = document.querySelectorAll(".main-content .top-content .text-content h4")[2];
aboutTitle.textContent = (siteContent["main-content"]["about-h4"]);

let aboutPara = document.querySelectorAll(".top-content .text-content p")[3];
aboutPara.textContent = (siteContent["main-content"]["about-content"]);

// services

let mainFeatures3 = document.querySelectorAll(".main-content .bottom-content .text-content h4")[4];
mainFeatures3.textContent = (siteContent["main-content"]["services-h4"]);

let mainParagraph3 = document.querySelectorAll(".main-content .bottom-content .text-content p")[2];
mainParagraph3.textContent = (siteContent["main-content"]["services-content"]);

// Product

let mainFeatures4 = document.querySelectorAll(".main-content .bottom-content .text-content h4")[3];
mainFeatures4.textContent = (siteContent["main-content"]["product-h4"]);

let mainParagraph4 = document.querySelectorAll(".main-content .bottom-content .text-content p")[3];
mainParagraph4.textContent = (siteContent["main-content"]["product-content"]);


