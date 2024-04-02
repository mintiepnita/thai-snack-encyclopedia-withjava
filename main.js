
// 2. Create 5 variables that store html content -----------------------------------------------------------------------------------------
const gaiyangInfo = document.getElementById('gaiyang-text');
const euroInfo = document.getElementById('euro-text');
const puthaiInfo = document.getElementById('puthai-text');
const jollystickInfo = document.getElementById('jollystick-text');
const luckycocoInfo = document.getElementById('luckycoco-text');
const bananaInfo = document.getElementById('banana-text');
const tenjangInfo = document.getElementById('tenjang-text');
const ringpopInfo = document.getElementById('ringpop-text');
const yimyimInfo = document.getElementById('yimyim-text');
const kidkidInfo = document.getElementById('kidkid-text');
const sanghaiInfo = document.getElementById('sanghai-text');
const fftomatoInfo = document.getElementById('fftomato-text');

// 3. Access 5 elements by ID and change their css in javascript using your variables ------------------------------------------------------
// Selecting elements by their IDs
const gaiyangCard = document.getElementById("gaiyang_card");
const euroCustardCard = document.getElementById("eurocustard_card");
const puthaiCard = document.getElementById("puthai_card");
const jollystickCard = document.getElementById("jollystick_card");
const luckyCocoCard = document.getElementById("luckycoco_card");
const bananaCard = document.getElementById("banana_card");
const tenjangCard = document.getElementById("tenjang_card");
const ringpopCard = document.getElementById("ringpop_card");
const yimyimCard = document.getElementById("yimyim_card");
const kidkidCard = document.getElementById("kidkid_card");
const sanghaiCard = document.getElementById("sanghai_card");
const fftomatoCard = document.getElementById("ff_card");

// Changing their CSS properties
gaiyangCard.style.transform = "rotate(10.36deg)";
euroCustardCard.style.transform = "rotate(-9deg)";
puthaiCard.style.transform = "rotate(8.96deg)";
jollystickCard.style.transform = "rotate(-12deg)";
luckyCocoCard.style.transform = "rotate(11.3deg)";
bananaCard.style.transform = "rotate(-7.21deg)";
tenjangCard.style.transform = "rotate(2deg)";
ringpopCard.style.transform = "rotate(10deg)";
yimyimCard.style.transform = "rotate(-15deg)";
kidkidCard.style.transform = "rotate(10deg)";
sanghaiCard.style.transform = "rotate(-10deg)";
fftomatoCard.style.transform = "rotate(20deg)";

// 4. 5 elements by CLASS and change their css in javascript using variables -------------------------------------------------------------

// Get the elements with the class 'card'
const cards = document.querySelectorAll('.card');

// Define variables for style changes
const borderColor = 'white';
const textColor = 'white';
const backgroundColor = '#222222';
const borderRadius = '18px';
const borderWidth = '1.2px';

// Loop through each card element and apply the style changes
cards.forEach(card => {
    card.style.borderColor = borderColor;
    card.style.color = textColor;
    card.style.backgroundColor = backgroundColor;
    card.style.borderRadius = borderRadius;
    card.style.borderWidth = borderWidth;
});

// 7. Create 5 if statements based on styles or content to change your HTML or CSS --------------------------------------------

// a. Creating card transform hover ---------------------------------------------------------------------------------
// Define the transformation function
function transformCard(card) {
    card.style.transform = 'scale(1.1)';
    card.style.transition = 'transform 0.3s';
  }
  
  // Define the tilt function
  function tiltCard(card) {
    card.style.transform = 'rotate(5deg)';
    card.style.transition = 'transform 0.3s';
  }
  
  // Define the reset function
  function resetCard(card, originalTransform) {
    card.style.transform = originalTransform;
    card.style.transition = 'transform 0.3s';
  }
  
  // Loop each card and add event listeners
  cards.forEach(card => {
    let isHovered = false;
    let originalTransform = card.style.transform; // Store the original transform value
  
    // Add mouseover event listener
    card.addEventListener('mouseover', () => {
      if (!isHovered) {
        transformCard(card);
        isHovered = true;
      }
    });
  
    // Add mouseout event listener
    card.addEventListener('mouseout', () => {
      if (isHovered) {
        tiltCard(card);
        setTimeout(() => {
          resetCard(card, originalTransform);
          isHovered = false;
        }, 300); // Delay to keep the transformed position after hover
      }
    });
  });

// b. Make Card Shuffle Button --------------------------------------------------------------------------------------
 // Get the card container element
const cardContainer = document.querySelector('.cardcontainer');

// Get the shuffle button element
const shuffleButton = document.getElementById('shuffleButton');

// Shuffle function
function shuffleCards() {
  for (let i = cardContainer.children.length; i >= 0; i--) {
    cardContainer.appendChild(cardContainer.children[Math.random() * i | 0]);
  }
}

// Event listener for the shuffle button
document.addEventListener('click', function(event) {
  if (event.target === shuffleButton) {
    shuffleCards();
  }
});

// c. Card color hover when clicked --------------------------------------------------------------------------------------
// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', function() {
      // Check if background color is white and text color is black
      if (this.style.backgroundColor === 'white' && this.style.color === 'black') {
        // Change background color to black and text color to white
        this.style.backgroundColor = '#222222';
        this.style.color = 'white';
      } else {
        // Revert background color to white and text color to black and border color to black
        this.style.backgroundColor = 'white';
        this.style.color = '#222222';
        this.style.borderColor = '#222222';
      }
    });
  });

// d. Ingredient Text Hover --------------------------------------------------------------------------------------
// Get all the info text containers
const infoContainers = document.querySelectorAll('.text');

// Iterate over each info text container
infoContainers.forEach(infoContainer => {
  // Get the original text content
  const originalText = infoContainer.innerHTML;

  // Add event listeners for mouseenter and mouseleave events
  infoContainer.addEventListener('mouseenter', function() {
    // Change the text content when hovered
    if (infoContainer.id === 'gaiyang-text') {
      infoContainer.innerHTML = 'Ingredients : Wheat flour 67%, Tapioca starch 20%, Palm oil 12%, Iodized Salt 0.5%, Seasoning 0.5%';
    } else if (infoContainer.id === 'euro-text') {
      infoContainer.innerHTML = 'Ingredients : Egg 40%, Glucose syrup 19%, Wheat flour 16%, Sugar 15%, Palm oil 9.5%, Milk powder 0.5%';
    } else if (infoContainer.id === 'puthai-text') {
      infoContainer.innerHTML = 'Ingredients : Wheat flour 52%, Palm oil 20%, Tapioca starch 16%, Sugar 5%, Cuttlefish powder 3%, Chilli powder 3%, Iodized salt 1%';
    } else if (infoContainer.id === 'jollystick-text') {
      infoContainer.innerHTML = 'Ingredients : Granulated sugar & artificial flavor 33%, Glucosed syrup 56%'
    } else if (infoContainer.id === 'luckycoco-text') {
        infoContainer.innerHTML = 'Ingredients : Sugar 50%, Glucose syrup 38%, Cocoa Powder 5%, Milk Powder 5%, Natural & Artificial Color'
    } else if (infoContainer.id === 'banana-text') {
        infoContainer.innerHTML = 'Ingredients : Fried banana 94.5%, Barbecue Seasoning 5.5%'
    } else if (infoContainer.id === 'tenjang-text') {
        infoContainer.innerHTML = 'Ingredients : Fish fillets 85%, BBQ seasoning 13%, Tapioca starch 7%, Wheat flour 3%, Iodized salt 2%, Soybean sauce 1%'
    } else if (infoContainer.id === 'ringpop-text') {
        infoContainer.innerHTML = 'Ingredients : Granulated sugar 59%, Glucose syrup 41%'
    } else if (infoContainer.id === 'yimyim-text') {
        infoContainer.innerHTML = 'Ingredients : Wheat flour 50%, Sugar 54%, Plain milk powder 3%, Palm fat 9%, Cocoa powder 2%, Salt 1%'
    } else if (infoContainer.id === 'kidkid-text') {
        infoContainer.innerHTML = 'Ingredients : Sugar 67%, Gumbase 21%, Glucose syrup 11%, Flavour 0.997%, Color'
    } else if (infoContainer.id === 'sanghai-text') {
        infoContainer.innerHTML = 'Ingredients : Palm fat 28.26%, Sugar 26.24%, Whey	powder 18.17%, Wheat flour 6.03%, Shortening 17.9%, Cocoa powder 1%, Tapioca starch 1.48%'
    } else if (infoContainer.id === 'fftomato-text') {
        infoContainer.innerHTML = 'Ingredients : Wheat flour 50%, Tapioca starch 20%, Palm oil 22%, Sugar 3%, Iodized salt 2.50%'
    }   
  });

  infoContainer.addEventListener('mouseleave', function() {
    // Reset the text content when mouse leaves
    infoContainer.innerHTML = originalText;
  });
});
  



// 5. Back to Top button functionality
const btn = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

