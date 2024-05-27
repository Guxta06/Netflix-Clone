
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })


function position(id){
  var card = document.getElementsByClassName('card')[id];
   card.style.transform = 'scale(1.5)';
  console.log(id)
}
const movies= [
  {
    clasificacion: 'A16',
    duracion: '3 Temporadas',
    match: '97% relevante',
    nombre: 'Yellowstone',
    portada: 'https://cafecomnerd.com.br/wp-content/uploads/2021/11/Yellowstone-Serie-com-Kevin-Costner-As-temporadas-1-a-4-vao-chegar-na-Netflix.jpg',
    tags: ['Envolvente', 'Impactante', 'Faroeste'],
    thumb: 'https://gamefera.com/wp-content/uploads/Yellowstone-Estreia-no-Catalogo-Netflix-Brasil-2.webp'
  },
  {
    clasificacion: 'A16',
    duracion: '4 temporadas',
    match: '85% relevante',
    nombre: 'True Dectetive',
    portada: 'https://jpimg.com.br/uploads/2017/04/1013958672-true-detective.jpg',
    tags: ['Mistério', 'Sci-Fi', 'Policial'],
    thumb: 'https://web.static.nowtv.com/images/NOWTV_2023/Design_assets/ENTERTAINMENT/splitpanel_with_TA/Highlights-true-detective-S1.jpg?downsize=1200:*&output-format=webp&output-quality=70'
  },
  {
    clasificacion: 'A16',
    duracion: '2 temporadas',
    match: '94% relevante',
    nombre: 'Halo',
    portada: 'https://i.guim.co.uk/img/media/30738c82bc05355751e626a81c1d71490c1e3594/12_58_2982_1789/master/2982.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b229c495756a4a01f60093be2a043545',
    tags: ['Ação', 'Suspense', 'Futurista'],
    thumb: 'https://br.web.img3.acsta.net/pictures/22/02/21/20/10/2589351.jpg'
  },
  {
    clasificacion: 'A16',
    duracion: '3 partes',
    match: '94% relevante',
    nombre: 'Invencível',
    portada: 'https://t.ctcdn.com.br/Lv1okUN2ySKr9_0DUSWjLvWP1rY=/1280x720/smart/i828381.jpeg',
    tags: ['Violencia', 'Ação', 'Animado'],
    thumb: 'https://www.imparcial.com.br//assets/images/galeria/1622574912.jpg'
  },
  {
    clasificacion: 'A16',
    duracion: 'Minisérie',
    match: '98% relevante',
    nombre: 'O sinal',
    portada: 'https://mixdeseries.com.br/wp-content/uploads/2024/03/serie-o-sinal-netflix.webp',
    tags: ['Psicológico', 'Suspense no ar', 'Mistério'],
    thumb: 'https://br.web.img2.acsta.net/pictures/24/02/27/20/31/1744367.jpg'
  },
  {
    clasificacion: '16',
    duracion: '3 temporadas',
    match: '98% relevante',
    nombre: 'Bridgerton',
    portada: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3513270:1715944090/Colin%20Bridgerton%20e%20Penelope%20Featherington%20Quando%20sai%20a%20segunda%20parte%20de%20Bridgerton.jpg?f=16x9&h=574&w=1020&$p$f$h$w=0c1951d',
    tags: ['Íntimo', 'Emotivo', 'Romántico'],
    thumb: 'https://assets.teenvogue.com/photos/6617b317dc045a48b0e6a1a5/master/w_1600%2Cc_limit/EN-US_Bridgerton_S3_Main_Pen&Colin_4x5_RGB_PRE.jpg'
  },
  {
    clasificacion: '16',
    duracion: 'Miniserie',
    match: '99% relevante',
    nombre: 'Bebê rena',
    portada: 'https://soubh.uai.com.br/uploads/post/image/14778/main_Casos_de_persegui%C3%A7%C3%A3o_crescem_em_Minas_e_s%C3%A9rie__Beb%C3%AA_Rena__traz_luz_ao_tema.jpg',
    tags: ['Excêntrico', 'Pscicológico', 'Humor ácido'],
    thumb: 'https://br.web.img3.acsta.net/c_310_420/img/7e/4c/7e4c344fb74884b9b176c411da08118d.PNG'
  },
  {
    clasificacion: 'TV-MA',
    duracion: '4 temporadas',
    match: '98% relevante',
    nombre: 'The crown',
    portada: 'https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdGhDCaJPGRXb1MylrkE_C1-mlns3o9wrQBCycbTn44j32VkXgtoAV93LvzmY0WZQm7Q_xRO6tvmH_K1F2qFT-c71QRka6OQZ8m4lYF0O9bZceVHV9eSR7mb-7tBRvwBD1WjfvvJsrEldniAy9yL3caNMlega3jyZAW-BexsqXB6Bnr-McTK3Bf8yydJsDPxXGK-Kv5GF16oK1C-j0hf9EJ2Lg.jpg?r=d3b',
    tags: ['Fabuloso', 'Íntimo', 'Drama'],
    thumb: 'https://occ-0-33-37.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQHxoDg-OXJyCqoSYJAXN33LQrwW8MJFQhLi65l5v5mcLW6Td97gGBomegzi4OGju0OszdIeuCfJSEo1M-rmgqoVXO-_WqvrOu5VSo3vpHQRlYKn5G6fPv6S-rlRACYXRPgESO4mD8NwsNroPZ-OrkDHwea9BWU.jpg?r=7e5'
  },
  {
    clasificacion: '14',
    duracion: '5 temporadas ',
    match: '96% relevante',
    nombre: 'S.W.A.T. Força de intervenção',
    portada: 'https://noticiasdatv.uol.com.br/media/uploads/artigos/swat-serie-assistir-globoplay-netflix-divulgacao-cbs_1.jpg',
    tags: ['Explosivo', 'Interessante', 'Ação'],
    thumb: 'https://m.media-amazon.com/images/I/611Srn2wXVL._AC_UF894,1000_QL80_.jpg'
  },
  {
    clasificacion: '16',
    duracion: '15 temporadas',
    match: '99% relevante',
    nombre: 'Supernatural',
    portada: 'https://noticiasdatv.uol.com.br/media/uploads/artigos_2021/cw-supernatural-jensen-ackles-jared-padalecki.jpg',
    tags: ['Sci-Fi', 'Mistério', 'Suspense'],
    thumb: 'https://m.media-amazon.com/images/I/91VI5oCnG+L._AC_UF894,1000_QL80_.jpg'
  }
];
const botones = [
  {
    clase: 'play',
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M6 2l52 30L6 62V2z"></path></svg>'
  },
  {
    clase: 'plus',
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 16v32m16-16H16"></path></svg>',
    tooltip: 'Adicionar a lista'
  },
  {
    clase: 'like',
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M54 35h2a4 4 0 1 0 0-8H34a81 81 0 0 0 2-18 4 4 0 0 0-8 0s-4 22-18 22H4v24h10c4 0 12 4 16 4h20a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8"></path></svg>',
    tooltip: 'Gostei'
  },
  {
    clase: 'dislike',
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M10 29H8a4 4 0 0 0 0 8h22a81 81 0 0 0-2 18 4 4 0 0 0 8 0s4-22 18-22h6V9H50c-4 0-12-4-16-4H14a4 4 0 0 0 0 8h-2a4 4 0 0 0 0 8h-2a4 4 0 0 0 0 8"></path></svg>',
    tooltip: 'Não Gostei'
  },
  {
    clase: 'arrow',
    icono: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path  d="M20 26l11.994 14L44 26"></path></svg>',
    tooltip: 'Mais informações'
  }
];
const wrapperMovies = document.querySelectorAll('.moviesWrapper');
const moviesSection = document.querySelectorAll('.moviesSection');
wrapperMovies.forEach((wrapper, i) => {
  movies.map((movie, j) => {
    wrapper.innerHTML += `
    <div class="movie ${moviesSection[i].classList.contains('top10') ? 'main': ''}">
      <div class="thumb" style="background-image: url(${movie.thumb})"></div>
    </div>`;
  })
})

window.addEventListener('load', () => {
  moviesSection.forEach((section, index) => {
    section.style.transitionDelay = `${index * .1}s`;
    section.classList.remove('hidden');
  })
  document.querySelectorAll('.movie.main').forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
      if (window.innerWidth <= 500) return false;
      const modales = document.querySelectorAll('#movieModal');
      if (modales) modales.forEach(modal => {
        modal.classList.add('hidden');
        setTimeout(() => modal.remove(), 100);
      })
      const modal = document.createElement('div');
      modal.id = 'movieModal';
      modal.classList.add('hidden');
      let htmlBotones = '';
      let htmlTags = '';
      botones.map(boton => htmlBotones += `<div class="boton ${boton.clase}" ${boton.tooltip ? `data-tooltip="${boton.tooltip}"` : ''}>${boton.icono}</div>`);
      movies[index].tags.map(tag => htmlTags += `<div class="tag">${tag}</div>`);
      modal.innerHTML += `
      <div class="portada" style="background-image: url(${movies[index].portada})"></div>
      <div class="info">
        <div class="botones">${htmlBotones}</div>
        <div class="datos">
          <div class="match">${movies[index].match}</div>
          <div class="clasificacion">${movies[index].clasificacion}</div>
          <div class="duracion">${movies[index].duracion}</div>
        </div>
        <div class="tags">${htmlTags}</div>
      </div>`;
      if (element.getBoundingClientRect().x + 350 > window.innerWidth) {
        modal.classList.add('righted');
      } else if (element.getBoundingClientRect().x > (350 / 2)) {
        modal.classList.add('centered');
      }
      element.append(modal);
      setTimeout(() => modal.classList.remove('hidden'), 100);
    });
    element.addEventListener('mouseleave', () => {
      const modal = document.getElementById('movieModal');
      if (modal) {
        modal.classList.add('hidden');
        setTimeout(() => modal.remove(), 300);
      }
    });
  })
})
