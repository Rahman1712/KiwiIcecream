

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    // height: '390',
    height: '500',
    autoplay: 0,
    width: '100%',
    controls: 0,
    videoId: 'XVuQ1WdYJPo',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'autoplay': 0,
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}



// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
  
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});