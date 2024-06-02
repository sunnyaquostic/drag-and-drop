const king = document.querySelector(".chess-piece");
const squares = document.querySelectorAll(".square");
const infoDisplay  = document.querySelector("#info");

let beingDragged; 

// these event listers are to be added to object being dragged
king.addEventListener('drag', dragging);
king.addEventListener('dragstart', dragStart)

function dragStart(e) {
    beingDragged = e.target;
    console.log("dragging has started on " + beingDragged.id);
}

// these are events that can be added to containers on which the object is being dragged
squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragend', dragEnd)
});

function dragging() {
    infoDisplay.textContent = beingDragged.id + " is being dragged";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.target.classList.add("highlight")
}

function dragLeave(e) {
    e.target.classList.remove("highlight")
}

function dragDrop(e) {
    e.target.append(beingDragged);
    e.target.classList.remove("highlight")
}

function dragEnd(e) {
    e.target.classList.add("target")
    setTimeout(() => e.target.classList.remove("target"), 100)
    infoDisplay.textContent = ""
}