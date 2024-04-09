// Make Cards
const sectionCards = document.querySelector('section.cards')

const card = document.querySelector('div.card')

const videos = [
  {
    title: 'Catedral Metropolitana Basílica Menor Nossa Senhora da Glória',
    duration: 'Maringá',
    thumb: 'images/catedral.png',
    video_id: '01'
  },
  {
    title: 'Parque do Ingá',
    duration: 'Maringá',
    thumb: 'images/inga.jfif',
    video_id: 'HN1UjzRSdBk'
  },
  {
    title: 'Parque do Japão',
    duration: 'Maringá',
    thumb: 'images/parque-japao.jfif',
    video_id: 'rAzHvYnQ8DY'
  }
]

videos.map(video => {
  const cardClone = card.cloneNode(true)
  cardClone.setAttribute('id', video.video_id)
  cardClone.querySelector('img').src = video.thumb
  cardClone.querySelector('.title').innerHTML = video.title
  cardClone.querySelector('.info > p.text--medium').innerHTML = video.duration
  sectionCards.appendChild(cardClone)
})

card.remove()

// Modal actions
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = [...document.querySelectorAll('.cards .card')]

cards.forEach(card => {
  card.addEventListener('click', () => {
    modal.querySelector(
      'iframe'
    ).src = `https://www.youtube.com/embed/${card.getAttribute('id')}`
    modalOverlay.classList.add('active')
    modal.classList.add('active')
    document.querySelector('body').style.overflow = 'hidden'
  })
})

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active')
  modal.classList.remove('active')
  modal.querySelector('iframe').src = ``
  document.querySelector('body').style.overflow = 'initial'
})

//menu responsivo
let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')
const link = document.querySelector('#menu nav ul li a')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)
  show = !show
})
