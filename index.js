
let db; // Declare db globally

document.addEventListener("DOMContentLoaded", () => {
  // Open IndexedDB database
  const request = indexedDB.open("NumberDatabase", 1);

  request.onerror = function (event) {
    console.log("Database error: " + event.target.errorCode);
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database opened successfully");

    // Check if numberArray exists in IndexedDB, and retrieve it if it does
    const transaction = db.transaction(["numbers"], "readonly");
    const objectStore = transaction.objectStore("numbers");
    const getRequest = objectStore.get(1);

    getRequest.onsuccess = function (event) {
      if (event.target.result) {
        numberArray = event.target.result.value;
        console.log("Retrieved numberArray from IndexedDB:", numberArray);

        // Apply background colors based on the state information
        numberArray.forEach((number) => {
          if (number.state === "called") {
            document.getElementById(`num-${number.num}`).style.backgroundColor = "#FFF8CD";
          }
        });
      }
    };
  };

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("numbers", { keyPath: "id" });
    console.log("Object store created");
  };

  // Add event listener for the call button
  document.getElementById("call-button").addEventListener("click", testFunction);

  // Add event listener for the reset button
  document.getElementById("reset-button").addEventListener("click", resetGame);
});

// Define numberArray globally
let numberArray = [];

function testFunction() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 90) + 1;
  } while (numberArray.some((number) => number.num === randomNumber));

  numberArray.push({ num: randomNumber, state: "called" });
  console.log(numberArray);

  // Save numberArray to IndexedDB after adding a new number
  const transaction = db.transaction(["numbers"], "readwrite");
  const objectStore = transaction.objectStore("numbers");
  const addRequest = objectStore.put({ id: 1, value: numberArray });

  addRequest.onsuccess = function (event) {
    console.log("NumberArray added to IndexedDB");
  };

  // Rest of your code...
  // Transition of number and other code...
    let numberDisplay = document.getElementById("number");
  numberDisplay.style.opacity = 0; // Set opacity to 0 for the transition effect
  setTimeout(() => {
    numberDisplay.innerHTML = randomNumber;
    numberDisplay.style.opacity = 1; // Set opacity back to 1 to reveal the number
  }, 300);

  // Your switch statement and other code here...
  switch (randomNumber) {
    case 1:
      document.getElementById("num-1").style.backgroundColor = "#FFF8CD";
      let sound1 = new Audio("sounds/en_num_01.mp3");
      sound1.play();
      document.getElementById("number").innerHTML = "1";
      document.getElementById("number-text").innerHTML = "The beginning";
      break;
    case 2:
      document.getElementById("num-2").style.backgroundColor = "#FFF8CD";
      let sound2 = new Audio("sounds/en_num_02.mp3");
      sound2.play();
      document.getElementById("number").innerHTML = "2";
      document.getElementById("number-text").innerHTML = "kaala dhan";
      break;
    case 3:
      document.getElementById("num-3").style.backgroundColor = "#FFF8CD";
      let sound3 = new Audio("sounds/en_num_03.mp3");
      sound3.play();
      document.getElementById("number").innerHTML = "3";
      break;
    case 4:
      document.getElementById("num-4").style.backgroundColor = "#FFF8CD";
      let sound4 = new Audio("sounds/en_num_04.mp3");
      sound4.play();
      document.getElementById("number").innerHTML = "4";
      document.getElementById("number-text").innerHTML = "Knock at the door";
      break;
      case 5:
      document.getElementById("num-5").style.backgroundColor = "#FFF8CD";
      let sound5 = new Audio("sounds/en_num_05.mp3");
      sound5.play();
      document.getElementById("number").innerHTML = "5";
      document.getElementById("number-text").innerHTML = "Areb shaikh's birthday";
      break;
    case 6:
      document.getElementById("num-6").style.backgroundColor = "#FFF8CD";
      let sound6 = new Audio("sounds/en_num_06.mp3");
      sound6.play();
      document.getElementById("number").innerHTML = "6";
      document.getElementById("number-text").innerHTML = "Super sixer";
      break;
    case 7:
      document.getElementById("num-7").style.backgroundColor = "#FFF8CD";
      let sound7 = new Audio("sounds/en_num_07.mp3");
      sound7.play();
      document.getElementById("number").innerHTML = "7";
      document.getElementById("number-text").innerHTML = "Color's of Rainbow";
      break;
    case 8:
      document.getElementById("num-8").style.backgroundColor = "#FFF8CD";
      let sound8 = new Audio("sounds/en_num_08.mp3");
      sound8.play();
      document.getElementById("number").innerHTML = "8";
      document.getElementById("number-text").innerHTML = "Big fat lady number 8";
      break;
    case 9:
      document.getElementById("num-9").style.backgroundColor = "#FFF8CD";
      let sound9 = new Audio("sounds/en_num_09.mp3");
      sound9.play();
      document.getElementById("number").innerHTML = "9";
      document.getElementById("number-text").innerHTML = "Doctor's time";
      break;
    case 10:
      document.getElementById("num-10").style.backgroundColor = "#FFF8CD";
      let sound10 = new Audio("sounds/en_num_10.mp3");
      sound10.play();
      document.getElementById("number").innerHTML = "10";
      document.getElementById("number-text").innerHTML = "A big fan hat";
      break;
      case 11:
        document.getElementById("num-11").style.backgroundColor = "#FFF8CD";
        let sound11 = new Audio("sounds/en_num_11.mp3");
        sound11.play();
        document.getElementById("number").innerHTML = "11";
        document.getElementById("number-text").innerHTML = "1 and 1 eleven";
        break;
      case 12:
        document.getElementById("num-12").style.backgroundColor = "#FFF8CD";
        let sound12 = new Audio("sounds/en_num_12.mp3");
        sound12.play();
        document.getElementById("number").innerHTML = "12";
        document.getElementById("number-text").innerHTML = "One dozen";
        break;
      case 13:
        document.getElementById("num-13").style.backgroundColor = "#FFF8CD";
        let sound13 = new Audio("sounds/en_num_13.mp3");
        sound13.play();
        document.getElementById("number").innerHTML = "13";
        document.getElementById("number-text").innerHTML = "tera hai woh mera hai";
        break;
      case 14:
        document.getElementById("num-14").style.backgroundColor = "#FFF8CD";
        let sound14 = new Audio("sounds/en_num_14.mp3");
        sound14.play();
        document.getElementById("number").innerHTML = "14";
        document.getElementById("number-text").innerHTML = "Valentine Day";
        break;
      case 15:
        document.getElementById("num-15").style.backgroundColor = "#FFF8CD";
        let sound15 = new Audio("sounds/en_num_15.mp3");
        sound15.play();
        document.getElementById("number").innerHTML = "15";
        document.getElementById("number-text").innerHTML = "Yet to be kissed";
        break;
      case 16:
        document.getElementById("num-16").style.backgroundColor = "#FFF8CD";
        let sound16 = new Audio("sounds/en_num_16.mp3");
        sound16.play();
        document.getElementById("number").innerHTML = "16";
        document.getElementById("number-text").innerHTML = "Sweet 16";
        break;
      case 17:
        document.getElementById("num-17").style.backgroundColor = "#FFF8CD";
        let sound17 = new Audio("sounds/en_num_17.mp3");
        sound17.play();
        document.getElementById("number").innerHTML = "17";
        document.getElementById("number-text").innerHTML = "Dancing queen";
        break;
      case 18:
        document.getElementById("num-18").style.backgroundColor = "#FFF8CD";
        let sound18 = new Audio("sounds/en_num_18.mp3");
        sound18.play();
        document.getElementById("number").innerHTML = "18";
        document.getElementById("number-text").innerHTML = "Voting Age";
        break;
      case 19:
        document.getElementById("num-19").style.backgroundColor = "#FFF8CD";
        let sound19 = new Audio("sounds/en_num_19.mp3");
        sound19.play();
        document.getElementById("number").innerHTML = "19";
        document.getElementById("number-text").innerHTML = "End of the teens";
        break;
      case 20:
        document.getElementById("num-20").style.backgroundColor = "#FFF8CD";
        let sound20 = new Audio("sounds/en_num_20.mp3");
        sound20.play();
        document.getElementById("number").innerHTML = "20";
        document.getElementById("number-text").innerHTML = "Blind 20";
        break;
      case 21:
        document.getElementById("num-21").style.backgroundColor = "#FFF8CD";
        let sound21 = new Audio("sounds/en_num_21.mp3");
        sound21.play();
        document.getElementById("number").innerHTML = "21";
        document.getElementById("number-text").innerHTML = "President salute";
        break;
      case 22:
        document.getElementById("num-22").style.backgroundColor = "#FFF8CD";
        let sound22 = new Audio("sounds/en_num_22.mp3");
        sound22.play();
        document.getElementById("number").innerHTML = "22";
        document.getElementById("number-text").innerHTML = "Two little ducks";
        break;
      case 23:
        document.getElementById("num-23").style.backgroundColor = "#FFF8CD";
        let sound23 = new Audio("sounds/en_num_23.mp3");
        sound23.play();
        document.getElementById("number").innerHTML = "23";
        document.getElementById("number-text").innerHTML = "You and me";
        break;
      case 24:
        document.getElementById("num-24").style.backgroundColor = "#FFF8CD";
        let sound24 = new Audio("sounds/en_num_24.mp3");
        sound24.play();
        document.getElementById("number").innerHTML = "24";
        document.getElementById("number-text").innerHTML = "Two dozen";
        break;
      case 25:
        document.getElementById("num-25").style.backgroundColor = "#FFF8CD";
        let sound25 = new Audio("sounds/en_num_25.mp3");
        sound25.play();
        document.getElementById("number").innerHTML = "25";
        document.getElementById("number-text").innerHTML = "Silver Jubilee number";
        break;
      case 26:
        document.getElementById("num-26").style.backgroundColor = "#FFF8CD";
        let sound26 = new Audio("sounds/en_num_26.mp3");
        sound26.play();
        document.getElementById("number").innerHTML = "26";
        document.getElementById("number-text").innerHTML = "Republic Day";
        break;
      case 27:
        document.getElementById("num-27").style.backgroundColor = "#FFF8CD";
        let sound27 = new Audio("sounds/en_num_27.mp3");
        sound27.play();
        document.getElementById("number").innerHTML = "27";
        break;
      case 28:
        document.getElementById("num-28").style.backgroundColor = "#FFF8CD";
        let sound28 = new Audio("sounds/en_num_28.mp3");
        sound28.play();
        document.getElementById("number").innerHTML = "28";
        document.getElementById("number-text").innerHTML = "Duck and it's mate";
        break;
      case 29:
        document.getElementById("num-29").style.backgroundColor = "#FFF8CD";
        let sound29 = new Audio("sounds/en_num_29.mp3");
        sound29.play();
        document.getElementById("number").innerHTML = "29";
        break;
      case 30:
        document.getElementById("num-30").style.backgroundColor = "#FFF8CD";
        let sound30 = new Audio("sounds/en_num_30.mp3");
        sound30.play();
        document.getElementById("number").innerHTML = "30";
        document.getElementById("number-text").innerHTML = "It's middle Age";
        break;
      case 31:
        document.getElementById("num-31").style.backgroundColor = "#FFF8CD";
        let sound31 = new Audio("sounds/en_num_31.mp3");
        sound31.play();
        document.getElementById("number").innerHTML = "31";
        document.getElementById("number-text").innerHTML = "Time for fun";
        break;
      case 32:
        document.getElementById("num-32").style.backgroundColor = "#FFF8CD";
        let sound32 = new Audio("sounds/en_num_32.mp3");
        sound32.play();
        document.getElementById("number").innerHTML = "32";
        document.getElementById("number-text").innerHTML = "Mouth Full";
        break;
      case 33:
        document.getElementById("num-33").style.backgroundColor = "#FFF8CD";
        let sound33 = new Audio("sounds/en_num_33.mp3");
        sound33.play();
        document.getElementById("number").innerHTML = "33";
        document.getElementById("number-text").innerHTML = "All the 3s";
        break;
      case 34:
        document.getElementById("num-34").style.backgroundColor = "#FFF8CD";
        let sound34 = new Audio("sounds/en_num_34.mp3");
        sound34.play();
        document.getElementById("number").innerHTML = "34";
        document.getElementById("number-text").innerHTML = "Dil mange more";
        break;
      case 35:
        document.getElementById("num-35").style.backgroundColor = "#FFF8CD";
        let sound35 = new Audio("sounds/en_num_35.mp3");
        sound35.play();
        document.getElementById("number").innerHTML = "35";
        document.getElementById("number-text").innerHTML = "Flirty husband";
        break;
      case 36:
        document.getElementById("num-36").style.backgroundColor = "#FFF8CD";
        let sound36 = new Audio("sounds/en_num_36.mp3");
        sound36.play();
        document.getElementById("number").innerHTML = "36";
        document.getElementById("number-text").innerHTML = "Popular number";
        break;
      case 37:
        document.getElementById("num-37").style.backgroundColor = "#FFF8CD";
        let sound37 = new Audio("sounds/en_num_37.mp3");
        sound37.play();
        document.getElementById("number").innerHTML = "37";
        document.getElementById("number-text").innerHTML = "Mixed luck";
        break;
      case 38:
        document.getElementById("num-38").style.backgroundColor = "#FFF8CD";
        let sound38 = new Audio("sounds/en_num_38.mp3");
        sound38.play();
        document.getElementById("number").innerHTML = "38";
        document.getElementById("number-text").innerHTML = "Oversize";
        break;
      case 39:
        document.getElementById("num-39").style.backgroundColor = "#FFF8CD";
        let sound39 = new Audio("sounds/en_num_39.mp3");
        sound39.play();
        document.getElementById("number").innerHTML = "39";
        document.getElementById("number-text").innerHTML = "watch your waistline";
        break;
      case 40:
        document.getElementById("num-40").style.backgroundColor = "#FFF8CD";
        let sound40 = new Audio("sounds/en_num_40.mp3");
        sound40.play();
        document.getElementById("number").innerHTML = "40";
        document.getElementById("number-text").innerHTML = "Naughty at 40";
        break;
      case 41:
        document.getElementById("num-41").style.backgroundColor = "#FFF8CD";
        let sound41 = new Audio("sounds/en_num_41.mp3");
        sound41.play();
        document.getElementById("number").innerHTML = "41";
        document.getElementById("number-text").innerHTML = "Life begun at 41";
        break;
      case 42:
        document.getElementById("num-42").style.backgroundColor = "#FFF8CD";
        let sound42 = new Audio("sounds/en_num_42.mp3");
        sound42.play();
        document.getElementById("number").innerHTML = "42";
        document.getElementById("number-text").innerHTML = "Quit India Movement";
        break;
      case 43:
        document.getElementById("num-43").style.backgroundColor = "#FFF8CD";
        let sound43 = new Audio("sounds/en_num_43.mp3");
        sound43.play();
        document.getElementById("number").innerHTML = "43";
        document.getElementById("number-text").innerHTML = "Pain in the knee";
        break;
      case 44:
        document.getElementById("num-44").style.backgroundColor = "#FFF8CD";
        let sound44 = new Audio("sounds/en_num_44.mp3");
        sound44.play();
        document.getElementById("number").innerHTML = "44";
        document.getElementById("number-text").innerHTML = "All the fours";
        break;
      case 45:
        document.getElementById("num-45").style.backgroundColor = "#FFF8CD";
        let sound45 = new Audio("sounds/en_num_45.mp3");
        sound45.play();
        document.getElementById("number").innerHTML = "45";
        document.getElementById("number-text").innerHTML = "Halfway there";
        break;
      case 46:
        document.getElementById("num-46").style.backgroundColor = "#FFF8CD";
        let sound46 = new Audio("sounds/en_num_46.mp3");
        sound46.play();
        document.getElementById("number").innerHTML = "46";
        document.getElementById("number-text").innerHTML = "Up to tricks";
        break;
      case 47:
        document.getElementById("num-47").style.backgroundColor = "#FFF8CD";
        let sound47 = new Audio("sounds/en_num_47.mp3");
        sound47.play();
        document.getElementById("number").innerHTML = "47";
        document.getElementById("number-text").innerHTML = "year of Independence";
        break;
      case 48:
        document.getElementById("num-48").style.backgroundColor = "#FFF8CD";
        let sound48 = new Audio("sounds/en_num_48.mp3");
        sound48.play();
        document.getElementById("number").innerHTML = "48";
        document.getElementById("number-text").innerHTML = "Fout dozen";
        break;
      case 49:
        document.getElementById("num-49").style.backgroundColor = "#FFF8CD";
        let sound49 = new Audio("sounds/en_num_49.mp3");
        sound49.play();
        document.getElementById("number").innerHTML = "49";
        document.getElementById("number-text").innerHTML = "Rise and shine";
        break;
      case 50:
        document.getElementById("num-50").style.backgroundColor = "#FFF8CD";
        let sound50 = new Audio("sounds/en_num_50.mp3");
        sound50.play();
        document.getElementById("number").innerHTML = "50";
        document.getElementById("number-text").innerHTML = "Golden Jubilee number";
        break;
      case 51:
        document.getElementById("num-51").style.backgroundColor = "#FFF8CD";
        let sound51 = new Audio("sounds/en_num_51.mp3");
        sound51.play();
        document.getElementById("number").innerHTML = "51";
        document.getElementById("number-text").innerHTML = "Charity begin at 51";
        break;
      case 52:
        document.getElementById("num-52").style.backgroundColor = "#FFF8CD";
        let sound52 = new Audio("sounds/en_num_52.mp3");
        sound52.play();
        document.getElementById("number").innerHTML = "52";
        document.getElementById("number-text").innerHTML = "Pack of cards";
        break;
      case 53:
        document.getElementById("num-53").style.backgroundColor = "#FFF8CD";
        let sound53 = new Audio("sounds/en_num_53.mp3");
        sound53.play();
        document.getElementById("number").innerHTML = "53";
        document.getElementById("number-text").innerHTML = "Pack with a Joker";
        break;
      case 54:
        document.getElementById("num-54").style.backgroundColor = "#FFF8CD";
        let sound54 = new Audio("sounds/en_num_54.mp3");
        sound54.play();
        document.getElementById("number").innerHTML = "54";
        document.getElementById("number-text").innerHTML = "Pack with two jokers";
        break;
      case 55:
        document.getElementById("num-55").style.backgroundColor = "#FFF8CD";
        let sound55 = new Audio("sounds/en_num_55.mp3");
        sound55.play();
        document.getElementById("number").innerHTML = "55";
        document.getElementById("number-text").innerHTML = "All the fives";
        break;
      case 56:
        document.getElementById("num-56").style.backgroundColor = "#FFF8CD";
        let sound56 = new Audio("sounds/en_num_56.mp3");
        sound56.play();
        document.getElementById("number").innerHTML = "56";
        document.getElementById("number-text").innerHTML = "Pick up sticks";
        break;
      case 57:
        document.getElementById("num-57").style.backgroundColor = "#FFF8CD";
        let sound57 = new Audio("sounds/en_num_57.mp3");
        sound57.play();
        document.getElementById("number").innerHTML = "57";
        document.getElementById("number-text").innerHTML = "Mutiny year";
        break;
      case 58:
        document.getElementById("num-58").style.backgroundColor = "#FFF8CD";
        let sound58 = new Audio("sounds/en_num_58.mp3");
        sound58.play();
        document.getElementById("number").innerHTML = "58";
        document.getElementById("number-text").innerHTML = "Time to retire";
        break;
      case 59:
        document.getElementById("num-59").style.backgroundColor = "#FFF8CD";
        let sound59 = new Audio("sounds/en_num_59.mp3");
        sound59.play();
        document.getElementById("number").innerHTML = "59";
        document.getElementById("number-text").innerHTML = "Just Retired";
        break;
      case 60:
        document.getElementById("num-60").style.backgroundColor = "#FFF8CD";
        let sound60 = new Audio("sounds/en_num_60.mp3");
        sound60.play();
        document.getElementById("number").innerHTML = "60";
        document.getElementById("number-text").innerHTML = "Sweet 60";
        break;
      case 61:
        document.getElementById("num-61").style.backgroundColor = "#FFF8CD";
        let sound61 = new Audio("sounds/en_num_61.mp3");
        sound61.play();
        document.getElementById("number").innerHTML = "61";
        document.getElementById("number-text").innerHTML = "Bakers Bun";
        break;
      case 62:
        document.getElementById("num-62").style.backgroundColor = "#FFF8CD";
        let sound62 = new Audio("sounds/en_num_62.mp3");
        sound62.play();
        document.getElementById("number").innerHTML = "62";
        document.getElementById("number-text").innerHTML = "Click the two";
        break;
      case 63:
        document.getElementById("num-63").style.backgroundColor = "#FFF8CD";
        let sound63 = new Audio("sounds/en_num_63.mp3");
        sound63.play();
        document.getElementById("number").innerHTML = "63";
        document.getElementById("number-text").innerHTML = "Click the three";
        break;
      case 64:
        document.getElementById("num-64").style.backgroundColor = "#FFF8CD";
        let sound64 = new Audio("sounds/en_num_64.mp3");
        sound64.play();
        document.getElementById("number").innerHTML = "64";
        document.getElementById("number-text").innerHTML = "Catch the Chor";
        break;
      case 65:
        document.getElementById("num-65").style.backgroundColor = "#FFF8CD";
        let sound65 = new Audio("sounds/en_num_65.mp3");
        sound65.play();
        document.getElementById("number").innerHTML = "65";
        document.getElementById("number-text").innerHTML = "Old age pension";
        break;
      case 66:
        document.getElementById("num-66").style.backgroundColor = "#FFF8CD";
        let sound66 = new Audio("sounds/en_num_66.mp3");
        sound66.play();
        document.getElementById("number").innerHTML = "66";
        document.getElementById("number-text").innerHTML = "Chakke pe Chakka";
        break;
      case 67:
        document.getElementById("num-67").style.backgroundColor = "#FFF8CD";
        let sound67 = new Audio("sounds/en_num_67.mp3");
        sound67.play();
        document.getElementById("number").innerHTML = "67";
        document.getElementById("number-text").innerHTML = "Made in heaven";
        break;
      case 68:
        document.getElementById("num-68").style.backgroundColor = "#FFF8CD";
        let sound68 = new Audio("sounds/en_num_68.mp3");
        sound68.play();
        document.getElementById("number").innerHTML = "68";
        document.getElementById("number-text").innerHTML = "Saving grace";
        break;
      case 69:
        document.getElementById("num-69").style.backgroundColor = "#FFF8CD";
        let sound69 = new Audio("sounds/en_num_69.mp3");
        sound69.play();
        document.getElementById("number").innerHTML = "69";
        document.getElementById("number-text").innerHTML = "Ulta Pulta";
        break;
      case 70:
        document.getElementById("num-70").style.backgroundColor = "#FFF8CD";
        let sound70 = new Audio("sounds/en_num_70.mp3");
        sound70.play();
        document.getElementById("number").innerHTML = "70";
        document.getElementById("number-text").innerHTML = "Lucky blind";
        break;
      case 71:
        document.getElementById("num-71").style.backgroundColor = "#FFF8CD";
        let sound71 = new Audio("sounds/en_num_71.mp3");
        sound71.play();
        document.getElementById("number").innerHTML = "71";
        document.getElementById("number-text").innerHTML = "Lucky bachelor";
        break;
      case 72:
        document.getElementById("num-72").style.backgroundColor = "#FFF8CD";
        let sound72 = new Audio("sounds/en_num_72.mp3");
        sound72.play();
        document.getElementById("number").innerHTML = "72";
        document.getElementById("number-text").innerHTML = "Lucky couple";
        break;
      case 73:
        document.getElementById("num-73").style.backgroundColor = "#FFF8CD";
        let sound73 = new Audio("sounds/en_num_73.mp3");
        sound73.play();
        document.getElementById("number").innerHTML = "73";
        document.getElementById("number-text").innerHTML = "A crutch and a flea";
        break;
      case 74:
        document.getElementById("num-74").style.backgroundColor = "#FFF8CD";
        let sound74 = new Audio("sounds/en_num_74.mp3");
        sound74.play();
        document.getElementById("number").innerHTML = "74";
        document.getElementById("number-text").innerHTML = "Lucky chor";
        break;
      case 75:
        document.getElementById("num-75").style.backgroundColor = "#FFF8CD";
        let sound75 = new Audio("sounds/en_num_75.mp3");
        sound75.play();
        document.getElementById("number").innerHTML = "75";
        document.getElementById("number-text").innerHTML = "Diamond Jubilee number";
        break;
      case 76:
        document.getElementById("num-76").style.backgroundColor = "#FFF8CD";
        let sound76 = new Audio("sounds/en_num_76.mp3");
        sound76.play();
        document.getElementById("number").innerHTML = "76";
        document.getElementById("number-text").innerHTML = "lucky 6";
        break;
      case 77:
        document.getElementById("num-77").style.backgroundColor = "#FFF8CD";
        let sound77 = new Audio("sounds/en_num_77.mp3");
        sound77.play();
        document.getElementById("number").innerHTML = "77";
        document.getElementById("number-text").innerHTML = "Two hockey sticks";
        break;
      case 78:
        document.getElementById("num-78").style.backgroundColor = "#FFF8CD";
        let sound78 = new Audio("sounds/en_num_78.mp3");
        sound78.play();
        document.getElementById("number").innerHTML = "78";
        document.getElementById("number-text").innerHTML = "Heaven's Gate";
        break;
      case 79:
        document.getElementById("num-79").style.backgroundColor = "#FFF8CD";
        let sound79 = new Audio("sounds/en_num_79.mp3");
        sound79.play();
        document.getElementById("number").innerHTML = "79";
        document.getElementById("number-text").innerHTML = "Lucky nine";
        break;
      case 80:
        document.getElementById("num-80").style.backgroundColor = "#FFF8CD";
        let sound80 = new Audio("sounds/en_num_80.mp3");
        sound80.play();
        document.getElementById("number").innerHTML = "80";
        document.getElementById("number-text").innerHTML = "Gandhi's breakfast";
        break;
      case 81:
        document.getElementById("num-81").style.backgroundColor = "#FFF8CD";
        let sound81 = new Audio("sounds/en_num_81.mp3");
        sound81.play();
        document.getElementById("number").innerHTML = "81";
        document.getElementById("number-text").innerHTML = "Corner Shot";
        break;
      case 82:
        document.getElementById("num-82").style.backgroundColor = "#FFF8CD";
        let sound82 = new Audio("sounds/en_num_82.mp3");
        sound82.play();
        document.getElementById("number").innerHTML = "82";
        document.getElementById("number-text").innerHTML = "Last of the 2";
        break;
      case 83:
        document.getElementById("num-83").style.backgroundColor = "#FFF8CD";
        let sound83 = new Audio("sounds/en_num_83.mp3");
        sound83.play();
        document.getElementById("number").innerHTML = "83";
        document.getElementById("number-text").innerHTML = "India win cricket worldCup";
        break;
      case 84:
        document.getElementById("num-84").style.backgroundColor = "#FFF8CD";
        let sound84 = new Audio("sounds/en_num_84.mp3");
        sound84.play();
        document.getElementById("number").innerHTML = "84";
        document.getElementById("number-text").innerHTML = "Last of the Fours";
        break;
      case 85:
        document.getElementById("num-85").style.backgroundColor = "#FFF8CD";
        let sound85 = new Audio("sounds/en_num_85.mp3");
        sound85.play();
        document.getElementById("number").innerHTML = "85";
        document.getElementById("number-text").innerHTML = "Grandma";
        break;
      case 86:
        document.getElementById("num-86").style.backgroundColor = "#FFF8CD";
        let sound86 = new Audio("sounds/en_num_86.mp3");
        sound86.play();
        document.getElementById("number").innerHTML = "86";
        document.getElementById("number-text").innerHTML = "Last six";
        break;
      case 87:
        document.getElementById("num-87").style.backgroundColor = "#FFF8CD";
        let sound87 = new Audio("sounds/en_num_87.mp3");
        sound87.play();
        document.getElementById("number").innerHTML = "87";
        break;
      case 88:
        document.getElementById("num-88").style.backgroundColor = "#FFF8CD";
        let sound88 = new Audio("sounds/en_num_88.mp3");
        sound88.play();
        document.getElementById("number").innerHTML = "88";
        document.getElementById("number-text").innerHTML = "Two fat ladies";
        break;
      case 89:
        document.getElementById("num-89").style.backgroundColor = "#FFF8CD";
        let sound89 = new Audio("sounds/en_num_89.mp3");
        sound89.play();
        document.getElementById("number").innerHTML = "89";
        document.getElementById("number-text").innerHTML = "All but one";
        break;
    default:
      document.getElementById("num-90").style.backgroundColor = "#FFF8CD";
      let sound90 = new Audio("sounds/en_num_90.mp3");
      sound90.play();
      document.getElementById("number").innerHTML = "90";
      document.getElementById("number-text").innerHTML = "Top of the House";
      break;
  }
}

function resetGame() {
  // Clear numberArray
  numberArray = [];

  // Clear IndexedDB data
  const transaction = db.transaction(["numbers"], "readwrite");
  const objectStore = transaction.objectStore("numbers");
  const clearRequest = objectStore.clear();

  clearRequest.onsuccess = function (event) {
    console.log("IndexedDB data cleared");
  };

  // Reset background colors to normal
  document.querySelectorAll(".number").forEach((element) => {
    element.style.backgroundColor = "initial";
  });
}


