// Check if the local storage has a color option
let mainColor = localStorage.getItem("color_option");
// console.log(mainColor);

if (mainColor != null) {
  //   console.log(mainColor);
  //   console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty("--main-color", mainColor);
}

// Remove the class from the element (which exist by default)
document.querySelectorAll(".color-list li").forEach((element) => {
  element.classList.remove("active");

  //   add active class on element with data-color === local storage color
  if (element.dataset.color === mainColor) {
    element.classList.add("active");
  }
});
// _______________________________________________________________________________________________
// Start Setting Box

// Get toggle Setting
let toggleSetting = document.querySelector(".toggle-setting i");

// OnClick function make it rotate around itself
toggleSetting.onclick = function () {
  this.classList.toggle("fa-spin");

  //   Add class open to setting box
  document.querySelector(".setting-box").classList.toggle("open");
};
// end Setting Box
// ___________________________________________________________________________________________________
// Switch the color of the site
let colorList = document.querySelectorAll(".color-list li");

// Foreach loop to get all li
colorList.forEach((li) => {
  // Add event to each li during click
  li.addEventListener("click", (e) => {
    // Set change of the root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Set the color to the local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove class active form all
    // e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    //   element.classList.remove("active");
    // });

    // // Add Active class to chosen color
    // e.target.classList.add("active");
    handelActive(e);
  });
});
// ____________________________________________________________________________________________________
// //

// Random background Option
let BackgroundOption = true;

// Variable to control interval
let backgroundInterval;

// / Switch Backgrounds
let RandomBackEl = document.querySelectorAll(".random-backgrounds span");

// For oop to get all spans
RandomBackEl.forEach((span) => {
  // Add event to each spans during click
  span.addEventListener("click", (e) => {
    // Remove class active form all spans
    // e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    //   element.classList.remove("active");
    // });

    // // Add Active class to chosen background option
    // e.target.classList.add("active");
    handelActive(e);

    if (e.target.dataset.background === "yes") {
      BackgroundOption = true;
      randomizeBackground();
    } else {
      BackgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});

// Start Change the image every minute
// Get the landing-page
let landingPage = document.querySelector(".landing-page");
// console.log(landingPage);

// Get the array of imgs
let imgArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpeg",
  "06.jpeg",
  "07.jpg",
  "08.jpg",
];

// To randomize imgs
function randomizeBackground() {
  if (BackgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Create random number
      let randomNumber = Math.floor(Math.random() * imgArray.length);
      // console.log(randomNumber);

      // Change Background imgs
      landingPage.style.backgroundImage = "url(" + imgArray[randomNumber] + ")";
    }, 5000);
  }
}
// end Change the image every minute

// Select skill sector
let OurSkills = document.querySelector(".skills");

// console.log(ourSkills);

window.onscroll = function () {
  // Get offset of the skill
  let skillOffSetTop = OurSkills.offsetTop;

  //   console.log(skillOffSetTop);

  // Get Offset height of skills
  let skillsOuterHeight = OurSkills.offsetHeight;
  //   console.log(skillsOuterHeight);

  //   Get the height of the window
  let windowHeight = this.innerHeight;
  //   console.log(windowHeight, ` height`);

  // Window Scroll Top
  let windowScrollTop = this.pageYOffset;
  //   console.log(windowScrollTop, ` Scroll`);

  if (windowScrollTop > skillOffSetTop + skillsOuterHeight - windowHeight) {
    // Get all spans of the progress
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    // For loop
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Start image popup from gallery sec

// Create popup
let OurGallery = document.querySelectorAll(".gallery img");

// foreach loop on our images
OurGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay
    let OverLay = document.createElement("div");

    // Add class to the overlay
    OverLay.className = "popup-overlay";

    // Append the overlay to the body
    document.body.appendChild(OverLay);

    // Create popup box
    let popupBox = document.createElement("div");

    // Add Class
    popupBox.className = "popup-box";

    if (img.alt != null) {
      // Create the heading
      let imgHeading = document.createElement("h3");

      // Create the text
      let imgText = document.createTextNode(img.alt);

      // Append txt to the heading
      imgHeading.appendChild(imgText);

      // Append the imgHeading to the popup-box
      popupBox.appendChild(imgHeading);
    }

    // Create img
    let popupImage = document.createElement("img");

    // to set the image scr, the source of the popup img == source of the event image
    popupImage.src = img.src;

    // Add img to popup box
    popupBox.appendChild(popupImage);

    // Add popup-box to the body
    document.body.appendChild(popupBox);

    // make close button
    // Create close span
    let closeSpan = document.createElement("span");

    // Create class
    closeSpan.className = "close-button";

    // Create the span text
    let closeText = document.createTextNode("X");

    // Append the txt to the span
    closeSpan.appendChild(closeText);

    // Append span to the popup-box
    popupBox.appendChild(closeSpan);
  });
});

// Close popup
document.addEventListener("click", function (e) {
  // remove the popup
  if (e.target.className == "close-button") {
    // Remove the parent element
    e.target.parentNode.remove();

    // Remove the overlay
    document.querySelector(".popup-overlay").remove();
  }
});
// Error here
// end image popup from gallery sec

// Select all bullets
let allBullets = document.querySelectorAll(".nav-bullets .bullets");
// Select all links
let allLinks = document.querySelectorAll(".links li a");

// Function to scroll to specific sections
function goToSections(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
goToSections(allBullets);
goToSections(allLinks);

// Handel Active state
function handelActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active class to chosen color
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullet-option");

if (bulletLocalItem != null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      localStorage.setItem("bullets-option", "block");
      bulletContainer.style.display = "block";
    } else {
      localStorage.setItem("bullets-option", "none");
      bulletContainer.style.display = "none";
    }

    handelActive(e);
  });
});

// Reset
document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  //   Another way to clear the local storage if you have additional info in localStorage and you don't want to remove them
  //   localStorage.removeItem("color_option");
  //   localStorage.removeItem("background-options");
  //   localStorage.removeItem("bullets-option");

  // Reload the window
  window.location.reload();
};
// Toggle menue
let toggelBtn = document.querySelector(".toggel-menue");
let tLinks = document.querySelector(".links");

toggelBtn.onclick = function (e) {
  // Stop propagation, this to if you clicked on the span not the btu itself in works like if you clicked on btn
  e.stopPropagation();

  //   Toggle class 'menus-acive' on button
  this.classList.toggle("menue-active");

  //   Toggle class 'open' on links
  tLinks.classList.toggle("open");
};

// Click Anywhere outside menue and links
document.addEventListener("click", (e) => {
  if (e.target != toggelBtn && e.target !== tLinks) {
    // Check if menue is open
    if (tLinks.classList.contains("open")) {
      toggelBtn.classList.toggle("menue-active");

      tLinks.classList.toggle("open");
    }
  }
});

// Stop propagation on menue
tLinks.onclick = function () {
  e.stopPropagation();
};
