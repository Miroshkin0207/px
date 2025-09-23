currentPhoto = 1
var photo = document.querySelector("#photo")

function left() {
    if (currentPhoto != 1) {
        currentPhoto--
    }
    else {
        currentPhoto = 22
    }
    photo.src = `photos/photo_${currentPhoto}_2025-09-23_20-06-03.jpg`
    console.log(photo.src)
}

function right() {
    if (currentPhoto != 22) {
        currentPhoto++
    }
    else {
        currentPhoto = 1
    }
    photo.src = `photos/photo_${currentPhoto}_2025-09-23_20-06-03.jpg`
    console.log(photo.src)
}