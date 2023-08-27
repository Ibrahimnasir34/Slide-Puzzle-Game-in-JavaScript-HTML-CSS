// // // var rows = 3;
// // // var columns = 3;

// // // var currTile;
// // // var otherTile; //blank tile

// // // var turns = 0;

// // // // List of character image URLs
// // // var characterImageURLs = [
// // //     "image_part_001.png",
// // //     "image_part_002.png",
// // //     "image_part_003.png",
// // //     "image_part_004.png",
// // //     "image_part_005.png",
// // //     "image_part_006.png",
// // //     "image_part_007.png",
// // //     "image_part_008.png",
// // //     "image_part_009.png",
// // //     // Add more URLs here
// // // ];

// // // function getRandomImageURL() {
// // //     return characterImageURLs[Math.floor(Math.random() * characterImageURLs.length)];
// // // }

// // // function startGame() {
// // //     for (let r = 0; r < rows; r++) {
// // //         for (let c = 0; c < columns; c++) {

// // //             //<img id="0-0" src="1.jpg">
// // //             let tile = document.createElement("img");
// // //             tile.id = r.toString() + "-" + c.toString();
// // //             tile.src = getRandomImageURL();

// // //             // DRAG FUNCTIONALITY
// // //             tile.addEventListener("dragstart", dragStart);
// // //             tile.addEventListener("dragover", dragOver);
// // //             tile.addEventListener("dragenter", dragEnter);
// // //             tile.addEventListener("dragleave", dragLeave);
// // //             tile.addEventListener("drop", dragDrop);
// // //             tile.addEventListener("dragend", dragEnd);

// // //             document.getElementById("board").append(tile);
// // //         }
// // //     }
// // // }

// // // function dragStart() {
// // //     currTile = this;
// // // }

// // // function dragOver(e) {
// // //     e.preventDefault();
// // // }

// // // function dragEnter(e) {
// // //     e.preventDefault();
// // // }

// // // function dragLeave() {}

// // // function dragDrop() {
// // //     otherTile = this;
// // // }

// // // function dragEnd() {
// // //     if (!otherTile.src.includes("3.jpg")) {
// // //         return;
// // //     }

// // //     let currCoords = currTile.id.split("-");
// // //     let r = parseInt(currCoords[0]);
// // //     let c = parseInt(currCoords[1]);

// // //     let otherCoords = otherTile.id.split("-");
// // //     let r2 = parseInt(otherCoords[0]);
// // //     let c2 = parseInt(otherCoords[1]);

// // //     let moveLeft = r == r2 && c2 == c - 1;
// // //     let moveRight = r == r2 && c2 == c + 1;
// // //     let moveUp = c == c2 && r2 == r - 1;
// // //     let moveDown = c == c2 && r2 == r + 1;
// // //     let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

// // //     if (isAdjacent) {
// // //         let currImg = currTile.src;
// // //         let otherImg = otherTile.src;

// // //         currTile.src = otherImg;
// // //         otherTile.src = currImg;

// // //         turns += 1;
// // //         document.getElementById("turns").innerText = turns;
// // //     }
// // // }

// // // function playAgain() {
// // //     let playAgain = confirm("Do you want to play again?");
// // //     if (playAgain) {
// // //         turns = 0;
// // //         document.getElementById("turns").innerText = turns;
// // //         document.getElementById("board").innerHTML = "";
// // //         startGame();
// // //     }
// // // }

// // // window.onload = function() {
// // //     startGame();
// // // };

// // // var rows = 3;
// // // var columns = 3;

// // // var currTile;
// // // var otherTile; // blank tile

// // // var turns = 0;

// // // // List of character image URLs
// // // var characterImageURLs = [
// // //     "image_part_001.png",
// // //     "image_part_002.png",
// // //     "image_part_003.png",
// // //     "image_part_004.png",
// // //     "image_part_005.png",
// // //     "image_part_006.png",
// // //     "image_part_007.png",
// // //     "image_part_008.png",
// // //     "image_part_009.png",
// // //     // Add more URLs here
// // // ];

// // // function getRandomImageURL() {
// // //     return characterImageURLs[Math.floor(Math.random() * characterImageURLs.length)];
// // // }

// // // function startGame() {
// // //     for (let r = 0; r < rows; r++) {
// // //         for (let c = 0; c < columns; c++) {

// // //             let tile = document.createElement("img");
// // //             tile.id = r.toString() + "-" + c.toString();
// // //             tile.src = getRandomImageURL();

// // //             // DRAG FUNCTIONALITY
// // //             tile.addEventListener("dragstart", dragStart);
// // //             tile.addEventListener("dragover", dragOver);
// // //             tile.addEventListener("dragenter", dragEnter);
// // //             tile.addEventListener("dragleave", dragLeave);
// // //             tile.addEventListener("drop", dragDrop);
// // //             tile.addEventListener("dragend", dragEnd);

// // //             document.getElementById("board").append(tile);
// // //         }
// // //     }
// // // }

// // // function dragStart(e) {
// // //     e.dataTransfer.setData("text/plain", e.target.id);
// // // }

// // // function dragOver(e) {
// // //     e.preventDefault();
// // // }

// // // function dragEnter(e) {
// // //     e.preventDefault();
// // //     this.classList.add("highlight");
// // // }

// // // function dragLeave() {
// // //     this.classList.remove("highlight");
// // // }

// // // function dragDrop(e) {
// // //     e.preventDefault();
// // //     otherTile = e.target;
// // //     this.classList.remove("highlight");

// // //     // Swap the source of the tiles
// // //     let tempSrc = currTile.src;
// // //     currTile.src = otherTile.src;
// // //     otherTile.src = tempSrc;

// // //     turns += 1;
// // //     document.getElementById("turns").innerText = turns;
// // // }

// // // function dragEnd() {}

// // // function playAgain() {
// // //     let playAgain = confirm("Do you want to play again?");
// // //     if (playAgain) {
// // //         turns = 0;
// // //         document.getElementById("turns").innerText = turns;
// // //         document.getElementById("board").innerHTML = "";
// // //         startGame();
// // //     }
// // // }

// // // window.onload = function() {
// // //     startGame();
// // // };
// // var rows = 3;
// // var columns = 3;

// // var currTile;
// // var otherTile; // blank tile

// // var turns = 0;

// // // List of character image URLs
// // var characterImageURLs = [
// //     "image_part_001.png",
// //     "image_part_002.png",
// //     "image_part_003.png",
// //     "image_part_004.png",
// //     "image_part_005.png",
// //     "image_part_006.png",
// //     "image_part_007.png",
// //     "image_part_008.png",
// //     "image_part_009.png",
// //     // Add more URLs here
// // ];

// // function getRandomImageURL() {
// //     return characterImageURLs[Math.floor(Math.random() * characterImageURLs.length)];
// // }

// // function startGame() {
// //     for (let r = 0; r < rows; r++) {
// //         for (let c = 0; c < columns; c++) {

// //             let tile = document.createElement("img");
// //             tile.id = r.toString() + "-" + c.toString();
// //             tile.src = getRandomImageURL();

// //             // DRAG FUNCTIONALITY
// //             tile.addEventListener("dragstart", dragStart);
// //             tile.addEventListener("dragover", dragOver);
// //             tile.addEventListener("dragenter", dragEnter);
// //             tile.addEventListener("dragleave", dragLeave);
// //             tile.addEventListener("drop", dragDrop);
// //             tile.addEventListener("dragend", dragEnd);

// //             document.getElementById("board").append(tile);
// //         }
// //     }
// // }

// // function dragStart(e) {
// //     currTile = this;
// //     e.dataTransfer.setData("text/plain", e.target.id);
// // }

// // function dragOver(e) {
// //     e.preventDefault();
// // }

// // function dragEnter(e) {
// //     e.preventDefault();
// //     this.classList.add("highlight");
// // }

// // function dragLeave() {
// //     this.classList.remove("highlight");
// // }

// // function dragDrop(e) {
// //     e.preventDefault();
// //     otherTile = e.target;
// //     this.classList.remove("highlight");

// //     // Swap the source of the tiles
// //     let tempSrc = currTile.src;
// //     currTile.src = otherTile.src;
// //     otherTile.src = tempSrc;

// //     turns += 1;
// //     document.getElementById("turns").innerText = turns;
// // }

// // function dragEnd() {}

// // function playAgain() {
// //     let playAgain = confirm("Do you want to play again?");
// //     if (playAgain) {
// //         turns = 0;
// //         document.getElementById("turns").innerText = turns;
// //         document.getElementById("board").innerHTML = "";
// //         startGame();
// //     }
// // }

// // window.onload = function() {
// //     startGame();
// // };
// var rows = 3;
// var columns = 3;

// var currTile;
// var otherTile; // blank tile

// var turns = 0;

// // var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

// window.onload = function() {
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {

//             let tile = document.createElement("img");
//             tile.id = r.toString() + "-" + c.toString();
//             tile.src = imgOrder.shift() + ".jpg";

//             // DRAG FUNCTIONALITY
//             tile.addEventListener("dragstart", dragStart);
//             tile.addEventListener("dragover", dragOver);
//             tile.addEventListener("dragenter", dragEnter);
//             tile.addEventListener("dragleave", dragLeave);
//             tile.addEventListener("drop", dragDrop);
//             tile.addEventListener("dragend", dragEnd);

//             document.getElementById("board").append(tile);
//         }
//     }
// }

// function dragStart(e) {
//     currTile = this;
//     e.dataTransfer.setData("text/plain", e.target.id);
// }

// function dragOver(e) {
//     e.preventDefault();
// }

// function dragEnter(e) {
//     e.preventDefault();
//     this.classList.add("highlight");
// }

// function dragLeave() {
//     this.classList.remove("highlight");
// }

// function dragDrop(e) {
//     e.preventDefault();
//     otherTile = e.target;
//     this.classList.remove("highlight");

//     // Swap the source of the tiles
//     let tempSrc = currTile.src;
//     currTile.src = otherTile.src;
//     otherTile.src = tempSrc;

//     turns += 1;
//     document.getElementById("turns").innerText = turns;

//     checkForWin();
// }

// function dragEnd() {}

// function checkForWin() {
//     var currentOrder = getCurrentImageOrder();
//     var originalOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

//     if (arraysAreEqual(currentOrder, originalOrder)) {
//         var playAgain = confirm("Congratulations! You solved the puzzle. Do you want to play again?");
//         if (playAgain) {
//             resetGame();
//         }
//     }
// }

// function getCurrentImageOrder() {
//     var currentOrder = [];
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {
//             var tileId = r.toString() + "-" + c.toString();
//             var tileSrc = document.getElementById(tileId).src;
//             var tileNumber = tileSrc.substring(tileSrc.lastIndexOf("/") + 1, tileSrc.lastIndexOf("."));
//             currentOrder.push(tileNumber);
//         }
//     }
//     return currentOrder;
// }

// function arraysAreEqual(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }

//     for (var i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// function resetGame() {
//     turns = 0;
//     document.getElementById("turns").innerText = turns;
//     document.getElementById("board").innerHTML = "";
//     startGame();
// }
var rows = 3;
var columns = 3;

var currTile;
var otherTile; // blank tile

var turns = 0;

// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            // DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart(e) {
    currTile = this;
    e.dataTransfer.setData("text/plain", e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("highlight");
}

function dragLeave() {
    this.classList.remove("highlight");
}

function dragDrop(e) {
    e.preventDefault();
    otherTile = e.target;
    this.classList.remove("highlight");

    // Swap the source of the tiles
    let tempSrc = currTile.src;
    currTile.src = otherTile.src;
    otherTile.src = tempSrc;

    turns += 1;
    document.getElementById("turns").innerText = turns;

    checkForWin();
}

function dragEnd() {}

function checkForWin() {
    var currentOrder = getCurrentImageOrder();
    var originalOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

    if (arraysAreEqual(currentOrder, originalOrder)) {
        var playAgain = confirm("Congratulations! You solved the puzzle. Do you want to play again?");
        if (playAgain) {
            resetGame();
        }
    }
}

function getCurrentImageOrder() {
    var currentOrder = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            var tileId = r.toString() + "-" + c.toString();
            var tileSrc = document.getElementById(tileId).src;
            var tileNumber = tileSrc.substring(tileSrc.lastIndexOf("/") + 1, tileSrc.lastIndexOf("."));
            currentOrder.push(tileNumber);
        }
    }
    return currentOrder;
}

function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

function resetGame() {
    turns = 0;
    document.getElementById("turns").innerText = turns;
    document.getElementById("board").innerHTML = "";
    startGame();
}
