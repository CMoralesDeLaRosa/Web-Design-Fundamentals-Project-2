import './style.css'

/* NAV */
const navPpal = document.createElement('nav')

const artImgNav = document.createElement('article')
const imgLogo1 = document.createElement('img')

const artImgLogo = document.createElement('article')
const imgLogo = document.createElement('img')

const artBotNav = document.createElement('article')
const botNavBuscar = document.createElement('button')
const botNavPerfil = document.createElement('button')
const botNavCesta = document.createElement('button')
const imgBotNavBuscar = document.createElement('img')
const imgBotNavPerfil = document.createElement('img')
const imgBotNavCesta = document.createElement('img')

navPpal.classList.add('navPpal', 'flex-container')
artImgNav.classList.add('artImgNav')
artImgLogo.classList.add('artImgLogo')
artBotNav.classList.add('artBotNav', 'flex-container')
botNavBuscar.classList.add('botBuscar')
botNavPerfil.classList.add('botPerfil')
botNavCesta.classList.add('botCesta')

header.appendChild(navPpal)
navPpal.appendChild(artImgNav)
navPpal.appendChild(artImgLogo)
artImgLogo.appendChild(imgLogo)
navPpal.appendChild(artBotNav)

artImgNav.appendChild(imgLogo1)

artBotNav.appendChild(botNavBuscar)
artBotNav.appendChild(botNavPerfil)
artBotNav.appendChild(botNavCesta)

botNavBuscar.appendChild(imgBotNavBuscar)
botNavPerfil.appendChild(imgBotNavPerfil)
botNavCesta.appendChild(imgBotNavCesta)

imgLogo.src = './Assets/Logo BK.png'
imgBotNavBuscar.src = './Assets/Icono Buscar.png'
imgBotNavPerfil.src = './Assets/Icono perfil.png'
imgBotNavCesta.src = './Assets/Icono Cesta.png'
imgLogo1.src = './Assets/Logo BK teen.png'

/* SECCIÓN 2 - VESTIDOS */
const vestidosLargos = [
  {
    id: 1,
    name: 'Vestido rib tirantes',
    price: 15.99,
    stars: 4,
    type: 'Rib',
    colors: ['grey', 'black'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0622/443/812/9cc17f09eec0553fbb1e09d32016cdf5-0622443812_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 2,
    name: 'Vestido midi tirantes encaje',
    price: 35.99,
    stars: 3,
    type: 'Midi',
    colors: ['white', 'grey', 'red'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0779/187/250/99b981373e90ae6af7e65d542b3ff2a5-0779187250_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 3,
    name: 'Vestido midi satén',
    price: 29.99,
    stars: 5,
    type: 'Midi',
    colors: ['white', 'black'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0838/359/252/b650b1680a6143a7c11e745f4788720a-0838359252_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 4,
    name: 'Vestido midi sin mangas cuello polo',
    price: 27.99,
    stars: 2,
    type: 'Midi',
    colors: ['grey', 'red'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0750/645/712/0893d8c6f95a25bdf5a5e31993875b99-0750645712_2_1_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 5,
    name: 'Vestido midi bandeau asimétrico',
    price: 25.99,
    stars: 5,
    type: 'Midi',
    colors: ['red', 'black'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0640/187/800/5ba7567453175d096746a41f88a9a8e8-0640187800_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 6,
    name: 'Vestido manga larga cuello subido',
    price: 16.09,
    stars: 3,
    type: 'Manga',
    colors: ['grey', 'black'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0621/443/829/cd8997892abae17fc7000e7453641f31-0621443829_2_3_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 7,
    name: 'Vestido midi tirantes escote cuadrado',
    price: 15.99,
    stars: 1,
    type: 'Midi',
    colors: ['grey', 'blue', 'red'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0623/152/600/c6cfc85fc4a4cff3a9184ab542be3888-0623152600_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 8,
    name: 'Vestido largo rib tirantes drapeado',
    price: 25.99,
    stars: 2,
    type: 'Rib',
    colors: ['grey', 'black'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0780/187/800/b109b50f440dbe3afe4193057be22878-0780187800_1_1_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 9,
    name: 'Vestido largo tight tirantes chifón lunares',
    price: 29.99,
    stars: 5,
    type: 'Tight',
    colors: ['white', 'blue', 'black'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0782/359/800/00016cc02f31546997aa4a292893c74e-0782359800_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  },
  {
    id: 10,
    name: 'Vestido largo manga larga tul print',
    price: 35.99,
    stars: 4,
    type: 'Manga',
    colors: ['blue'],
    image:
      'https://static.bershka.net/4/photos2/2024/V/0/1/p/0635/256/400/bec9084f73276ac02bae0c3b4d23d091-0635256400_2_24_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=safari'
  }
]

const sectionFiltros = document.querySelector('#filtros')
const titulo = document.createElement('h2')

titulo.textContent = 'Vestidos'
sectionFiltros.classList.add('flex-container')

sectionFiltros.appendChild(titulo)

/* A/ Filtros*/
const TYPES = []
let TYPE = ''
const PRICES = []
let PRICE = ''

const filtrar = () => {
  const filtered = []
  const sectionVestidos = document.querySelector('#Vestidos')
  sectionVestidos.innerHTML = ''

  let noVestidos = true

  for (const vestido of vestidosLargos) {
    if (
      (TYPE === '' || TYPE === vestido.type) &&
      (PRICE === '' || vestido.price <= PRICE)
    ) {
      filtered.push(vestido)
      noVestidos = false
    }
  }

  if (noVestidos) {
    const p = document.createElement('p')
    p.classList.add('pAlert')
    p.innerText = 'No hay ningún artículo con esas características'
    sectionVestidos.appendChild(p)
  } else {
    printVestidos(filtered)
  }
}

const fillTypes = (vestidosLargos) => {
  TYPES.splice(0)
  PRICES.splice(0)
  for (const vestido of vestidosLargos) {
    if (!TYPES.includes(vestido.type)) {
      TYPES.push(vestido.type)
    }
    if (!PRICES.includes(vestido.price)) {
      PRICES.push(vestido.price)
    }
  }
}

fillTypes(vestidosLargos)

const createSelectModel = () => {
  const selectModel = document.createElement('select')
  selectModel.id = 'selectModel'
  const defaultOption = document.createElement('option')
  defaultOption.value = ''
  defaultOption.textContent = 'Selecciona un tipo'
  selectModel.appendChild(defaultOption)
  for (const type of TYPES) {
    const option = document.createElement('option')
    option.value = type
    option.textContent = type
    selectModel.appendChild(option)
  }
  sectionFiltros.appendChild(selectModel)

  selectModel.addEventListener('change', (event) => {
    TYPE = event.target.value
    filtrar()
  })
}

const createInputPrice = () => {
  const inputPrice = document.createElement('input')
  inputPrice.id = 'inputPrice'
  inputPrice.type = 'number'
  inputPrice.placeholder = 'Filtra por precio'
  sectionFiltros.appendChild(inputPrice)

  inputPrice.addEventListener('input', (event) => {
    PRICE = event.target.value
    filtrar()
  })
}

createSelectModel()
createInputPrice()

/* B/ Pintar todos los vestidos*/
const printVestidos = (vestidos) => {
  const sectionVestidos = document.querySelector('#Vestidos')
  sectionVestidos.innerHTML = ''

  for (const vestido of vestidos) {
    const artVestido = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const divEstrellas = document.createElement('div')
    const divColores = document.createElement('div')

    for (let i = 1; i < 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (vestido.stars >= i) {
        estrella.classList.add('rellena')
      }

      divEstrellas.appendChild(estrella)
    }

    for (const color of vestido.colors) {
      const colorHTML = document.createElement('div')

      colorHTML.classList.add('color')
      colorHTML.style.backgroundColor = color

      divColores.appendChild(colorHTML)
      artVestido.appendChild(divColores)
    }

    img.src = vestido.image
    nombre.textContent = vestido.name
    precio.textContent = `${vestido.price}  €`
    artVestido.classList.add('artVestido', 'flex-container')
    sectionVestidos.classList.add('flex-container')
    divEstrellas.classList.add('estrellas', 'flex-container')
    divColores.classList.add('colores', 'flex-container')

    artVestido.appendChild(divImg)
    divImg.appendChild(img)
    artVestido.appendChild(nombre)
    artVestido.appendChild(precio)
    artVestido.appendChild(divEstrellas)
    sectionVestidos.appendChild(artVestido)
  }
}

printVestidos(vestidosLargos)

/*C/ Restablecer filtros*/

const resetFiltros = () => {
  TYPE = ''
  PRICE = ''

  const selectModel = document.querySelector('#selectModel')
  selectModel.selectedIndex = 0

  const inputPrice = document.querySelector('#inputPrice')
  inputPrice.value = ''

  printVestidos(vestidosLargos)
}

const btnResetFiltros = document.createElement('button')
btnResetFiltros.classList.add('btnResetFiltros')
sectionFiltros.appendChild(btnResetFiltros)
btnResetFiltros.textContent = 'Restablecer'

btnResetFiltros.addEventListener('click', resetFiltros)

/* FOOTER*/
const ayuda = [
  'Comprar online',
  'Pago',
  'Envío',
  'Devoluciones',
  'Tarjeta regalo',
  'Ticket regalo',
  'Compra como invitado',
  'Ticket electrónico',
  'Solicitar factura'
]
const weAreBershka = [
  'Sobre Bershka',
  'Sostenibilidad',
  'Trabaja con nosotros ',
  'Affinity card',
  'Prensa',
  'Nuestras tiendas'
]
const tePuedeInteresar = [
  'Vestidos mujer',
  'Cazadoras mujer',
  'Abrigos mujer',
  'Jersey y punto mujer',
  'Baggy jeans',
  'Pantalones mujer',
  'Faldas muejer'
]

const mediaIcons = [
  {
    id: 1,
    name: 'Intagram',
    image: './Assets/Instagram Icon.png'
  },
  {
    id: 2,
    name: 'Facebook',
    image: './Assets/Facebook Icon.png'
  },
  {
    id: 3,
    name: 'Twitter',
    image: './Assets/Twitter Icon.png'
  },
  {
    id: 4,
    name: 'Tik Tok',
    image: './Assets/Tik Tok Icon.png'
  },
  {
    id: 5,
    name: 'Snapchat',
    image: './Assets/Snapchat Icon.png'
  },
  {
    id: 6,
    name: 'Youtube',
    image: './Assets/YouTube Icon.png'
  },
  { id: 7, name: 'Pinterest', image: './Assets/Pinterest Icon.png' },
  { id: 8, name: 'Spotify', image: './Assets/Spotify Icon.png' }
]

const footer = document.querySelector('#footer')

const contacto = document.createElement('section')
const opciones = document.createElement('section')
const media = document.createElement('section')

const tituloContacto = document.createElement('h2')
const artAyuda = document.createElement('article')
const tituloAyuda = document.createElement('h2')
const artWeAreBershka = document.createElement('article')
const tituloWeAreBershka = document.createElement('h2')
const artTePuedeInteresar = document.createElement('article')
const tituloTePuedeInteresar = document.createElement('h2')
const divWhatsapp = document.createElement('div')
const iconoWhatsapp = document.createElement('img')
const pWhatsapp = document.createElement('p')
const divLlamar = document.createElement('div')
const iconLlamar = document.createElement('img')
const pLlamar = document.createElement('p')
const ulAyuda = document.createElement('ul')
const ulWeAreBershka = document.createElement('ul')
const ulTePuedeInteresar = document.createElement('ul')
const divMediaIcons = document.createElement('div')

for (const element of ayuda) {
  const liElement = document.createElement('li')
  liElement.textContent = element
  ulAyuda.appendChild(liElement)
}

for (const element of weAreBershka) {
  const liElement = document.createElement('li')
  liElement.textContent = element
  ulWeAreBershka.appendChild(liElement)
}

for (const element of tePuedeInteresar) {
  const liElement = document.createElement('li')
  liElement.textContent = element
  ulTePuedeInteresar.appendChild(liElement)
}

for (const element of mediaIcons) {
  const iconImg = document.createElement('img')
  iconImg.src = element.image
  divMediaIcons.appendChild(iconImg)
}

tituloContacto.textContent = '¿Necesitas ayuda?'
pWhatsapp.textContent = 'Whatsapp'
pLlamar.textContent = 'Llamar 900 456 003'
iconoWhatsapp.src = './Assets/Whatsapp Icon.png'
iconLlamar.src = './Assets/Llamar Icon.png'
tituloAyuda.textContent = 'Ayuda'
tituloWeAreBershka.textContent = 'We are Bershka'
tituloTePuedeInteresar.textContent = 'Te Puede interesar'

footer.classList.add('flex-container')
contacto.classList.add('contacto', 'flex-container')
divWhatsapp.classList.add('divWhatsapp', 'flex-container')
divLlamar.classList.add('divLlamar', 'flex-container')
opciones.classList.add('opciones', 'flex-container')
media.classList.add('media', 'flex-container')
divMediaIcons.classList.add('flex-container')

footer.appendChild(contacto)
footer.appendChild(opciones)
footer.appendChild(media)
media.appendChild(divMediaIcons)
opciones.appendChild(artAyuda)
artAyuda.appendChild(tituloAyuda)
artAyuda.appendChild(ulAyuda)
opciones.appendChild(artWeAreBershka)
artWeAreBershka.appendChild(tituloWeAreBershka)
artWeAreBershka.appendChild(ulWeAreBershka)
opciones.appendChild(artTePuedeInteresar)
artTePuedeInteresar.appendChild(tituloTePuedeInteresar)
artTePuedeInteresar.appendChild(ulTePuedeInteresar)
footer.appendChild(media)
contacto.appendChild(tituloContacto)
contacto.appendChild(divWhatsapp)
contacto.appendChild(divLlamar)
divWhatsapp.appendChild(iconoWhatsapp)
divWhatsapp.appendChild(pWhatsapp)
divLlamar.appendChild(iconLlamar)
divLlamar.appendChild(pLlamar)
