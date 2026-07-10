let score = 0;
let collectedIngredients = [];
let catchZone = document.getElementById("catchZone");
function showInstructions() {
  document.getElementById("homePage").style.display = "none";

  document.getElementById("instructionsScreen").style.display = "block";
}
let gameStarted = false;
function showGame() {
  document.getElementById("instructionsScreen").style.display = "none";

  document.getElementById("gamePage").style.display = "block";
   if (!gameStarted) {
    setInterval(createIngredient, 1000);
    gameStarted = true;
  }
}


function goHome() {
  document.getElementById("gamePage").style.display = "none";
  document.getElementById("instructionsScreen").style.display = "none";

  document.getElementById("homePage").style.display = "block";
}
let cup = document.getElementById("cup");

let cupx = 75; 

document.addEventListener("keydown", moveCup);

function moveCup(event) {
  
  if (event.key == "ArrowLeft") {
    if (cupx > -8) {
    cupx = cupx - 20;
    cup.style.left = cupx + "px";
    }
  }
  if (event.key == "ArrowRight") {
    if (cupx < 180) {
    cupx = cupx + 20;
    cup.style.left = cupx + "px";
    catchZone.style.left = (cupx + 35) + "px";
    }
  }
  
}

const normalIngredients  = [
  {
    name: "milk",
    image: "https://www.image2url.com/r2/default/images/1783710250470-03705d6c-9844-4668-8854-f9e9a86c37bf.png"
  },

  {
    name: "honey", 
    image:"https://www.image2url.com/r2/default/images/1783710238765-16e80c18-935e-4eea-b598-46d1c00d41a0.png"
  },

  {
    name: "lemon boba",
    image:"https://www.image2url.com/r2/default/images/1783710210127-53f95de5-0177-4144-b0fc-7d3eaced9700.png"
  },
  
  {
    name: "chocolate boba",
    image:"https://www.image2url.com/r2/default/images/1783710203690-4aceedd2-0a0e-4a38-afa0-6515bc9cdcc6.png"
  },
  
  {
    name: "matcha boba",
    image: "https://www.image2url.com/r2/default/images/1783710626875-4a47421b-f75a-440b-a846-291bb935b209.png"
  },

  {
    name: "cookies boba",
    image: "https://www.image2url.com/r2/default/images/1783710644549-2f38681f-74ba-4cfd-a587-42c2eb0521d5.png"
  },

  {
    name: "watermelon boba",
    image: "https://www.image2url.com/r2/default/images/1783710665020-d25fd2e6-a21d-4890-83af-56cc09456e85.png"
  },

  {  
    name: "brown sugar boba",
    image: "https://www.image2url.com/r2/default/images/1783710680741-521a85fe-0ca5-4766-a0e3-ac5eb80bd0aa.png"
  },
  {
    name: "black tea",
    image: "https://www.image2url.com/r2/default/images/1783710717561-b416546d-7bfc-42f1-97a4-b2a08fbb1a40.png"
  },
  {
    name: "green tea",
    image: "https://www.image2url.com/r2/default/images/1783710741470-b52c8f17-1ace-495b-b4d5-52b4b0bdf8d7.png"
  },

  {
    name: "coffee",
   image: "https://www.image2url.com/r2/default/images/1783710752822-262c8e11-a7df-46f6-820c-c3d6e4e11e90.png"
  },
  {
    name: "brown sugar syrup",
    image: "https://www.image2url.com/r2/default/images/1783710777501-89e2397b-9a15-4066-ae08-2b2c4136b877.png"
  },
  { 
    name: "vanilla",
    image: "https://www.image2url.com/r2/default/images/1783710828383-f0aa4aaa-64fe-4311-838c-8979fa6429d7.png"
  },
  {
    name: "caramel",
    image:"https://www.image2url.com/r2/default/images/1783710991785-faa2ea1f-62ad-49fb-9f87-0799a1c87ad5.png"
  },
];
const badIngredients = [
  {
    name: "chilli",
    image: "https://www.image2url.com/r2/default/images/1783711036788-bc6287fa-d644-48b6-9aad-bfd6a835d213.png"
  },
  {
    name: "salt",
    image: "https://www.image2url.com/r2/default/images/1783711089366-03528111-833b-41ba-be65-5a89f0d528cd.png"
  },
  {
    name: "onion",
    image: "https://www.image2url.com/r2/default/images/1783711117286-704e0e03-c90d-48c8-9c5c-8dfea41f4c43.png"
  },
 ];
 const specialIngredients = [
   {
     name: "diamond",
     image: "https://www.image2url.com/r2/default/images/1783711157062-c200c3c1-17e4-4092-81e3-86258af29f4a.png"
    },
  {
    name: "star",
    image:"https://www.image2url.com/r2/default/images/1783711171288-8bd1bcc6-ca9e-4375-b38d-503a622cdd98.png"
  },
  {
   name: "duck drinking boba",
    image: "https://www.image2url.com/r2/default/images/1783711210391-ea7ff0b6-89b6-4e21-b0b9-68758efdd3ba.png"
  },
  { 
    name: "DuBoba Tapioca",
    image: "https://www.image2url.com/r2/default/images/1783710225291-504f3cde-ff22-4ae8-8fc7-d04953e47904.png"
  },
];

function createIngredient() {
  let ingredient = document.createElement("img");
  let ingredientName = "";
  let isBad = false;

  let chance = Math.random();

  if (chance < 0.20) {
  let badNumber = Math.floor(Math.random() * badIngredients.length);
  let chosenIngredient = badIngredients[badNumber];
  ingredient.src = chosenIngredient.image;
  ingredientName = chosenIngredient.name;
  isBad = true;
  

} else if (chance < 0.10) {
  let specialNumber = Math.floor(Math.random() * specialIngredients.length);
  let chosenIngredient = specialIngredients[specialNumber];
  ingredient.src = chosenIngredient.image;
  ingredientName = chosenIngredient.name;

} else {
  let normalNumber = Math.floor(Math.random() * normalIngredients.length);
   let chosenIngredient = normalIngredients[normalNumber];

  ingredient.src = chosenIngredient.image;
  ingredientName = chosenIngredient.name;
}

  ingredient.style.width = "50px";
  ingredient.style.position = "absolute";
  ingredient.style.top = "0px";

  ingredient.style.left = Math.floor(Math.random() * 300) + "px";

  let container = document.getElementById("ingredientContainer");
  container.appendChild(ingredient);

  let ingredientY = 0;


  let falling = setInterval(function () {

    ingredientY = ingredientY + 5;

    ingredient.style.top = ingredientY + "px";

    let cupLeft = cup.offsetLeft + 35;
    let cupRight = cup.offsetLeft + cup.offsetWidth - 35;
    let catchTop = cup.offsetTop;
    let catchBottom = cup.offsetTop + 20;

    let ingredientLeft = ingredient.offsetLeft;
    let ingredientRight = ingredientLeft + ingredient.offsetWidth;

    if (
      ingredientY + ingredient.offsetHeight >= catchTop &&
      ingredientY <= catchBottom &&
      ingredientRight >= cupLeft &&
      ingredientLeft <= cupRight
    ) {
      ingredient.remove();
      clearInterval(falling);

      if (isBad) {
        alert("Game Over! Your score was " + score);
        location.reload();
      } else {
        collectedIngredients.push(ingredientName);
        score = score + 1;
        document.getElementById("score").textContent = "Score: " + score;
      }
    }

  }, 50);
}
function checkDrink() {

  if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("black tea") &&
    collectedIngredients.includes("DuBoba Tapioca")
  ) {
    alert("You made Classic Milk Tea! 🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("brown sugar syrup") &&
    collectedIngredients.includes("brown sugar boba") &&
    collectedIngredients.includes("DuBoba Tapioca")
  ) {
    alert("You made Brown Sugar Boba! 🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("chocolate boba") &&
    collectedIngredients.includes("cookies boba") &&
    collectedIngredients.includes("vanilla")
  ) {
    alert("You made Chocolate Cookie Boba! 🍫🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("matcha boba") &&
    collectedIngredients.includes("vanilla")
  ) {
    alert("You made Matcha Latte! 🍵🧋");
  }

  else if (
    collectedIngredients.includes("green tea") &&
    collectedIngredients.includes("lemon boba") &&
    collectedIngredients.includes("honey")
  ) {
    alert("You made Lemon Honey Tea! 🍋🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("watermelon boba") &&
    collectedIngredients.includes("honey")
  ) {
    alert("You made Watermelon Summer Boba! 🍉🧋");
  }

  else if (
    collectedIngredients.includes("coffee") &&
    collectedIngredients.includes("caramel") &&
    collectedIngredients.includes("DuBoba Tapioca")
  ) {
    alert("You made Caramel Coffee Boba! ☕🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("honey") &&
    collectedIngredients.includes("vanilla") &&
    collectedIngredients.includes("black tea")
  ) {
    alert("You made Vanilla Honey Milk Tea! 🍯🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("DuBoba Tapioca") &&
    collectedIngredients.includes("star")
  ) {
    alert("You made Starry Duboba! ⭐🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("brown sugar syrup") &&
    collectedIngredients.includes("DuBoba Tapioca") &&
    collectedIngredients.includes("diamond")
  ) {
    alert("You made Diamond Duboba! 💎🧋");
  }

  else if (
    collectedIngredients.includes("milk") &&
    collectedIngredients.includes("DuBoba Tapioca") &&
    collectedIngredients.includes("duck drinking boba")
  ) {
    alert("You made Duck's Favorite Boba! 🦆🧋");
  }

  else {
    alert("Hmm... this combination doesn't make a drink yet 🤔🧋");
  }

}