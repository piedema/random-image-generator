let images, currentIndex

document.querySelector('input').addEventListener('change', e => {
  images = e.target.files
})

function setRandomImage(){

    if(images === undefined) return alert('Select folder first')

    const index = getRandomIndex()

    if(currentIndex === index) return setRandomImage()
    currentIndex = index

    document.querySelector('#image-title').innerHTML = images[index].name
    document.querySelector('#image-container').src = images[index].webkitRelativePath

}

function getRandomIndex(){

    const random = Math.random()
    const index = Math.floor(random * images.length)

    return index

}
