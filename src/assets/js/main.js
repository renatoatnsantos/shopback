
document.addEventListener('scroll' , ()=>{
    let squeezeContent = document.querySelector('.squeeze-content')
    let el = document.querySelector('#sticky')
    let leftPosition = document.querySelector('#main-info')

    if( window.scrollY > 100){
        squeezeContent.classList.add('top-position')
        squeezeContent.classList.remove('bottom-position')
        el.classList.add('sticky')
        leftPosition.classList.add('left-position')
        leftPosition.classList.remove('right-position')
    } else {
        squeezeContent.classList.remove('top-position')
        squeezeContent.classList.add('bottom-position')
        el.classList.remove('sticky')
        leftPosition.classList.remove('left-position')
        leftPosition.classList.add('right-position')
    }


})

