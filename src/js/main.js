let images1 = [], images2 = [], index

document.querySelector('#file-input1').addEventListener('change', e => {
  images1 = e.target.files
})
document.querySelector('#file-input2').addEventListener('change', e => {
  images2 = e.target.files
})

function generate(source, target){

    if(source.length === 0){

        return alert('Select folder containing images first')

    }

    index = getRandomUniqueIndex(index)

    //document.querySelector('#image-title').innerHTML = images[index].name
    setRandomImage(source[index], target)

}

function getRandomUniqueIndex(indexToBeSkipped){

    const random = Math.random()
    const index = Math.floor(random * images1.length)

    if(index === indexToBeSkipped) return getRandomUniqueIndex(indexToBeSkipped)

    return index

}

function setRandomImage(image, target){

    document.querySelector(target).src = image.webkitRelativePath

}
