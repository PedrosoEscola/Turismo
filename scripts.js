// Make Cards
const sectionCards = document.querySelector('section.cards')

const card = document.querySelector('div.card')

const videos = [
  {
    title: 'Catedral Metropolitana Basílica Menor Nossa Senhora da Glória',
    duration: 'Maringá',
    thumb: 'images/catedral.png',
    video_id: '01',
    text: 'A Catedral Basílica Menor Nossa Senhora da Glória, em Maringá, é um marco arquitetônico e religioso importante. Sua história remonta à década de 1940, quando a construção da catedral foi idealizada pelo arcebispo Dom Jaime Luiz Coelho. A obra teve início em 1959 e foi concluída em 1972. A catedral se destaca pela sua arquitetura moderna e imponente, com uma torre de 124 metros de altura que a torna um dos ícones da cidade.'
  },
  {
    title: 'Parque do Ingá',
    duration: 'Maringá',
    thumb: 'images/inga.jfif',
    video_id: 'HN1UjzRSdBk',
    text: 'O Parque do Ingá é um dos locais mais queridos e visitados em Maringá. Localizado no centro da cidade, o parque é uma área de preservação ambiental com uma grande diversidade de flora e fauna. Fundado em 1971, o Parque do Ingá é conhecido por sua beleza natural, trilhas para caminhadas, áreas de lazer e espaços para atividades ao ar livre.'
  },
  {
    title: 'Parque do Japão',
    duration: 'Maringá',
    thumb: 'images/parque-japao.jfif',
    video_id: 'rAzHvYnQ8DY',
    text: 'O Parque do Japão é uma atração única em Maringá que celebra a cultura japonesa. Inaugurado em 1993, o parque é um presente da colônia japonesa à cidade, simbolizando a amizade e cooperação entre Brasil e Japão. O parque é conhecido por seus belos jardins, lagos, pontes e um portal típico japonês, proporcionando aos visitantes uma experiência imersiva na cultura oriental. Além disso, o local abriga o Pavilhão Japonês, onde são realizados eventos culturais e exposições relacionadas à cultura japonesa.'
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

// Adiciona um ouvinte de eventos de clique a todos os cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    // Pega o conteúdo do card clicado
    const title = card.querySelector('.title').textContent
    const imageSrc = card.querySelector('.image img').src
    const duration = card.querySelector('.info p').textContent

    // Procura pelo objeto de vídeo correspondente
    const video = videos.find(video => video.title === title)

    // Preenche a modal com o conteúdo do card clicado
    const modalImage = document.getElementById('modalImage')
    const modalText = document.getElementsByClassName('modalText')
    const modalAdditionalText = document.getElementById('additionalText')

    modalImage.src = imageSrc
    modalText.textContent = title // ou qualquer texto que deseja exibir

    // Exibe o texto adicional apenas quando necessário
    if (video && video.text) {
      modalAdditionalText.textContent = video.text
      modalAdditionalText.style.display = 'block'
    } else {
      modalAdditionalText.style.display = 'none'
    }

    // Exibe a modal
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'

    // Fecha a modal ao clicar no botão de fechar (×)
    const closeModalButton = document.querySelector('.close')
    closeModalButton.addEventListener('click', () => {
      modal.style.display = 'none'
    })

    // Fecha a modal ao clicar fora da área da modal
    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = 'none'
      }
    })
  })
})
