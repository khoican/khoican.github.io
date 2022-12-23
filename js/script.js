const display = document.querySelector('.main-dis')
const image = document.querySelectorAll('.img')

const btnShow = document.querySelector('.btn-show')
const navbar = document.querySelector('.nav-link')
const btnClose = document.querySelector('.btn-close')

document.addEventListener('DOMContentLoaded', () => {
    const imgLink1 = "https://assets.awwwards.com/awards/sites_of_the_day/2022/11/utah-jazz-purple-is-back-1.jpg"
    const imgLink2 = "https://assets.awwwards.com/awards/sites_of_the_day/2022/11/agence-cartier-1.jpg"
    const imgLink3 = "https://assets.awwwards.com/awards/sites_of_the_day/2022/11/MOONSLIDER-1.jpg"

    for (let i = 0; i < image.length; i++) {
        
        image[i].addEventListener('click', (e) => {

            if(image[i].src == imgLink1) {
                image[i].src = display.src
                display.src = imgLink1
            }else if(image[i].src == imgLink2) {
                image[i].src = display.src
                display.src = imgLink2
            }else if(image[i].src == imgLink3) {
                image[i].src = display.src
                display.src = imgLink3
            }else {
                display.src = imgLink1
            }

        })
    }

    btnShow.addEventListener('click', (e) => {
        navbar.classList.add('show')
    })

    btnClose.addEventListener('click', (e) => {
        navbar.classList.remove('show')
    })
})