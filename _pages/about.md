---
layout: about
title: about
permalink: /
subtitle: Ph.D. Candidate @ McGill University.
profile:
  align: right
  image: pro_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>
      <i class="fa-solid fa-location-dot"></i>
      <small>
        Montréal, Québec, Canada
      </small>
    </p><br>
    <p>
      <i class="fa-brands fa-google"></i>
      <small>
        <a href="https://scholar.google.com/citations?user=fHozot8AAAAJ">Google Scholar</a>
      </small>   
    </p><br>
    <p class="email-container">
      <i class="fas fa-envelope"></i> 
      <small>
        <span id="email">mohamed.debbagh@mail.mcgill.ca</span>
      </small>
      <button class="copy-btn" onclick="copyEmail()" title="Copy Email">
      <i class="fa-regular fa-clone"></i>
      </button>
    </p><br>
    <em><small>[Research Affiliations]</small></em><br>
    <p>
      <small>
        <i class="fas fa-seedling"></i>
        <a href='https://www.mcgill.ca/bioeng/faculty-and-staff/academic-staff/mark-lefsrud'>Biomass Production Lab</a>
      </small>
    </p><br>
    <p>
      <small>
        <i class="fas fa-eye"></i>
        <a href='https://shangpenglab.github.io/#/team'>Smart Production Systems Lab</a>
      </small>
    </p><br>
    <em><small>...former member</small></em><br>
    <p>
      <small>
        <i class="fas fa-wave-square"></i>
        <a href="https://adamchukpa.mcgill.ca/">Precision Agriculture and Sensor Systems Lab</a>
      </small>
    </p>


selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I'm a researcher and developer with a passion for exploring novel solutions to problems faced in agriculture and global food systems. With projects completed primarily in robotics and precision agriculture, I have extensive experience, in both industry and academia, applying engineering solutions towards solving complex challenges in a variety of food production systems. 

Some of my previous projects have included: optimization of controlled indoor fruit crop production, development of an automated liquid nutrient analyzer for organic fertilizer recipe building, and computer vision for plant health assessment and forecasting.

I am a currently a Ph.D. candidate in the department of Bioresource Engineering at McGill University. My current research focuses on the application of probabilistic computer vision and sensor fusion techniques for assessing plant development to improve crop throughput in controlled environment agriculture.

#### Research Interest
- **Controlled Environment Agriculture**
  - Biomass Production Methods and Quality Control
  - Nutrient Pathways & Biochemical Optimization
  - Urban Agriculture Distribution Practices
- **Plant Perception**
  - Environmental Interactions and Pattern Recognition
  - Plant Resource Management, Strategies, and Game Theory
  - Physiological Development and Morphology
- **Computer Vision, Sensor Fusion, and Robotics**
  - Quantitative Trait Extraction (Plant Phenotyping)
  - *In silico* Growth Simulation and Probabilistic Modeling
  - Control Systems and Optimization Algorithms

<br>

#### Here is a gallery highlighting some of my work!

<style>

  * {
    box-sizing: border-box;
  }
  
  img {
    vertical-align: middle;
  }
  
  /* Position the image container (needed to position the left and right arrows) */
  .galcontainer {
    position: relative;
  }
  
  /* Hide the images by default */
  .mySlides {
    display: none;
    position: relative; /* Create a positioning context */
    width: 100%;
    height: 600px; /* Set a fixed height */
    /* text-align: center;
    width: 100%; */
  }

  /* Center the images properly */
  .mySlides img {
  max-height: 100%;
  max-width: 85%;
  height: auto;
  display: block;
  margin: auto;
  object-fit: contain; /* Keeps images proportional */
}
  
  /* Add a pointer when hovering over the thumbnail images */
  .cursor {
    cursor: pointer;
  }
  
  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 60%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    /* color: white; */
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
  }
  
  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }
  
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* Number text (1/3 etc) */
  .numbertext {
    /* color: #f2f2f2; */
    font-size: 16px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }
  
  /* Container for image text */
  .caption-container {
    text-align: center;
    background-color: #222; /* Semi-transparent black */
    padding: 2px 16px;
    color: white;
  }

  .galrow {
  display: flex; /* Use flexbox layout */
  overflow-x: auto; /* Enables horizontal scrolling */
  /* Remove any default padding or margin if necessary */
  }

  .galrow:after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Six columns side by side */
  .galcolumn {
    /* float: left; */
    flex: 0 0 auto; /* Prevents the columns from growing or shrinking */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    /* height: 10%; */
    /* width:auto; */
    /* width: 14%; */
    /* flex-shrink: 0; */
  }

 
  /* Style for images inside each column */
  .galcolumn img {
  max-height: 15vw; /* Example fixed height, adjust as needed */
  width: auto; /* Maintain aspect ratio */
  /* Optionally, you can add object-fit if you want to force images into a specific aspect ratio */
  }

  /* Add a transparency effect for thumnbail images */
  .demo {
    opacity: 0.6;
  }
  
  .active,
  .demo:hover {
    opacity: 1;
  }

/* The switch - the box around the slider */
.switchgal {
  position: absolute;
  /* display: inline-block; */
  top:18vw;
  right:0;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switchgal input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cccccc75;
  -webkit-transition: .4s;
  transition: .4s;


}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgba(255, 255, 255, 0);
  -webkit-transition: .4s;
  transition: .4s;
  display: flex;
  align-items: center;
  justify-content: center;

  /* background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTIyNC03MlYzMjhjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRWMTg0YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjR6bTExMiAwVjMyOGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNFYxODRjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHoiLz48L3N2Zz4='); */
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6bTIyNC03MlYzMjhjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRWMTg0YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjR6bTExMiAwVjMyOGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNFYxODRjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHoiLz48L3N2Zz4=');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px; /* Adjust the size as needed */
  opacity: 0.75;
}

input:checked + .slider {
  background-color: #9c9c9c75;
}

input:focus + .slider {
  box-shadow: 0 0 1px #9c9c9c75;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);

  /* background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTE4OC4zIDE0Ny4xYzcuNi00LjIgMTYuOC00LjEgMjQuMyAuNWwxNDQgODhjNy4xIDQuNCAxMS41IDEyLjEgMTEuNSAyMC41cy00LjQgMTYuMS0xMS41IDIwLjVsLTE0NCA4OGMtNy40IDQuNS0xNi43IDQuNy0yNC4zIC41cy0xMi4zLTEyLjItMTIuMy0yMC45VjE2OGMwLTguNyA0LjctMTYuNyAxMi4zLTIwLjl6Ii8+PC9zdmc+'); */
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2ek0xODguMyAxNDcuMWMtNy42IDQuMi0xMi4zIDEyLjMtMTIuMyAyMC45VjM0NGMwIDguNyA0LjcgMTYuNyAxMi4zIDIwLjlzMTYuOCA0LjEgMjQuMy0uNWwxNDQtODhjNy4xLTQuNCAxMS41LTEyLjEgMTEuNS0yMC41cy00LjQtMTYuMS0xMS41LTIwLjVsLTE0NC04OGMtNy40LTQuNS0xNi43LTQuNy0yNC4zLS41eiIvPjwvc3ZnPg==');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px; /* Adjust the size as needed */
  opacity: 0.75;

}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}



/* Tooltip text */
.switchgal .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  font-size: 16px;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 0%;
  margin-left: -60px; /* Use half of the width value */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Show the tooltip text when you mouse over the tooltip container */
.switchgal:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

/* Hide the copy button by default */
.copy-btn {
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
  margin-left: 5px;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
}

/* Show the copy button only when hovering over the email container */
.email-container:hover .copy-btn {
  opacity: 1;
}

/* Style the copy icon */
.copy-btn i {
  color: #007bff; /* Match theme */
}

/* Hover effect */
.copy-btn:hover i {
  color: #0056b3; /* Darker blue on hover */
  transform: scale(1.1);
}

/* Green check icon when copied */
.copy-btn i.fa-check {
  color: #28a745;
}



</style>


<!-- <h3 style="text-align:center">Here is a gallery highlighting some of my work!</h3> -->

<div class="galcontainer">

  <div class="galrow">
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/001.jpg" style="width:100%" onclick="currentSlide(1)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/002.jpg" style="width:100%" onclick="currentSlide(2)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/012.gif" style="width:100%" onclick="currentSlide(3)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/003.jpg" style="width:100%" onclick="currentSlide(4)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/004.jpg" style="width:100%" onclick="currentSlide(5)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/005.jpg" style="width:100%" onclick="currentSlide(6)" alt="">
    </div>    
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/006.jpg" style="width:100%" onclick="currentSlide(7)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/007.jpg" style="width:100%" onclick="currentSlide(8)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/008.jpg" style="width:100%" onclick="currentSlide(9)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/009.jpg" style="width:100%" onclick="currentSlide(10)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/010.jpg" style="width:100%" onclick="currentSlide(11)" alt="">
    </div>
    <div class="galcolumn">
      <img class="demo cursor" src="assets/img/slideshow/011.gif" style="width:100%" onclick="currentSlide(12)" alt="">
    </div>
  </div>

  <br>

  <div class="mySlides">
    <div class="numbertext">1</div>
    <img src="assets/img/slideshow/001.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2</div>
    <img src="assets/img/slideshow/002.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3</div>
    <img src="assets/img/slideshow/014.gif" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4</div>
    <img src="assets/img/slideshow/003.jpg" style="width:100%">
  </div>
    
  <div class="mySlides">
    <div class="numbertext">5</div>
    <img src="assets/img/slideshow/004.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">6</div>
    <img src="assets/img/slideshow/005.jpg" style="width:100%">
  </div>
    
  <div class="mySlides">
    <div class="numbertext">7</div>
    <img src="assets/img/slideshow/006.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">8</div>
    <img src="assets/img/slideshow/007.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">9</div>
    <img src="assets/img/slideshow/008.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">10</div>
    <img src="assets/img/slideshow/009.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">11</div>
    <img src="assets/img/slideshow/010.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">12</div>
    <img src="assets/img/slideshow/011.gif" style="width:100%">
  </div>

  <div class="caption-container">
    <p id="caption"></p>
  </div>
    
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <label class="switchgal">
    <input type="checkbox" id="slideshowToggle" checked>
    <span class="slider round"></span>
    <span class="tooltiptext">Toggle Autoplay</span>
  </label>

</div>

<br>

<script>
let slideIndex = 1;
showSlides(slideIndex);
// autoShowSlides(); // Start the automatic slideshow
let autoSlideInterval = setInterval(autoShowSlides, 20000); // Store interval ID


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function autoShowSlides() {
  plusSlides(1);
}


// Function to start the slideshow
function startSlideshow() {
  autoSlideInterval = setInterval(autoShowSlides, 8000);
}

// Function to stop the slideshow
function stopSlideshow() {
  clearInterval(autoSlideInterval);
}

// Toggle switch event listener
document.getElementById('slideshowToggle').addEventListener('change', function() {
  if (this.checked) {
    startSlideshow();
  } else {
    stopSlideshow();
  }
});


function copyEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email).then(() => {
    let copyBtn = document.querySelector(".copy-btn i");
    copyBtn.classList.remove("fa-copy");
    copyBtn.classList.add("fa-check");

    setTimeout(() => {
      copyBtn.classList.remove("fa-check");
      copyBtn.classList.add("fa-copy");
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// setInterval(autoShowSlides, 5000); // Change image every 2 seconds

</script>