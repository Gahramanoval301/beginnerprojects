//TODO header hover
const star = document.querySelector('.star');
function hoverOverStar() {
    star.style.transform = "rotateY(360deg)"
}
function hoverOutStar() {
    setTimeout(() => {
        star.style.transform = "rotateX(180deg)"
    }, 200);
}
star.addEventListener("mouseover", hoverOverStar)
star.addEventListener("mouseout", hoverOutStar)
