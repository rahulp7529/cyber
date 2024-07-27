gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("cyber-intro");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 469;
const currentFrame = index => (
  `./images/models/${(index + 1).toString().padStart(4, '0')}.png`
);

const images = []
const cyberfiction = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(cyberfiction, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 1
  },
  onUpdate: render
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[cyberfiction.frame], 0, 0);
}

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-1", // ê°ì²´ê¸°ì¤€ë²”ìœ„
    // pin: true, // ê³ ì •
    start: "top top", // ì‹œìž‘ì 
    end: "top bottom", // ëì 
    end: "+=" + window.innerHeight * 1.4,
    scrub: 1, // ëª¨ì…˜ë°”ìš´ìŠ¤
    // markers: true, // ê°œë°œê°€ì´ë“œì„ 
  }
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2", // ê°ì²´ê¸°ì¤€ë²”ìœ„
    pin: true, // ê³ ì •
    start: "top top", // ì‹œìž‘ì 
    end: "top bottom", // ëì 
    end: "+=" + window.innerHeight * 1.4,
    scrub: 1, // ëª¨ì…˜ë°”ìš´ìŠ¤
    // markers: true, // ê°œë°œê°€ì´ë“œì„ 
  }
})
  // .to('.sec2_tit1', { duration: 0, delay: 1 })
  // .to('.sec2_tit1', { duration: 0.3, opacity: 0, x: -30 })

  // .to('.sec2_tit2', { duration: 0.3, opacity: 1, x: 0 })
  // .to('.sec2_tit2', { duration: 0, delay: 1 })
  // .to('.sec2_tit2', { duration: 0.3, opacity: 0, x: -30 })

  // .to('.sec2_tit3', { duration: 0.3, opacity: 1, x: 0 })
  // .to('.sec2_tit3', { duration: 0, delay: 1 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-3", // ê°ì²´ê¸°ì¤€ë²”ìœ„
    pin: true, // ê³ ì •
    start: "top top", // ì‹œìž‘ì 
    end: "top bottom", // ëì 
    end: "+=" + window.innerHeight * 1.4,
    scrub: 1, // ëª¨ì…˜ë°”ìš´ìŠ¤
    // markers: true, // ê°œë°œê°€ì´ë“œì„ 
  }
})
// .to('.sec3_tit1', { duration: 0, delay: 3 })

gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4", // ê°ì²´ê¸°ì¤€ë²”ìœ„
    pin: true, // ê³ ì •
    start: "top top", // ì‹œìž‘ì 
    end: "top bottom", // ëì 
    end: "+=" + window.innerHeight * 1.5,
    scrub: 1, // ëª¨ì…˜ë°”ìš´ìŠ¤
    // markers: true, // ê°œë°œê°€ì´ë“œì„ 
  }
})
// .to('.sec4_tit1', { duration: 0, delay: 3 })
.to('header', { color: '#fff' })
.to('.header-right svg', { fill: '#fff' })

gsap.timeline({
  scrollTrigger: {
    trigger: ".c-avatar", // ê°ì²´ê¸°ì¤€ë²”ìœ„
    start: "top top", // ì‹œìž‘ì 
    end: "top bottom", // ëì 
    scrub: 1, // ëª¨ì…˜ë°”ìš´ìŠ¤
    // markers: true, // ê°œë°œê°€ì´ë“œì„ 
  }
})
  // .to('#cyber-intro', { top: -(window.innerHeight * 1.3) })
  .to('#cyber-intro', { opacity: 0 })
  .to('header', { color: '#000' })
  .to('.header-right svg', { fill: '#000' })

gsap.timeline({
  scrollTrigger: {
    trigger: ".c-roadmap", // ê°ì²´ê¸°ì¤€ë²”ìœ„
    pin: false, // ê³ ì •
    start: "top top", // ì‹œìž‘ì 
    end: "top bottom", // ëì 
    // end: "+=" + window.innerHeight * 1.3,
    scrub: 1, // ëª¨ì…˜ë°”ìš´ìŠ¤
    // markers: true, // ê°œë°œê°€ì´ë“œì„ 
    // toggleClass: {targets: 'header', className: 'active'}
  }
})
  // .to('.c-roadmap', { color: '#fff', backgroundColor: '#171010' })
  .to('header', { color: '#fff' })
  .to('.header-right svg', { fill: '#fff' })

window.addEventListener('load', () => {
  document.body.classList.remove('before-load');
});

document.querySelector('.loading').addEventListener('transitionend', (e) => {
  document.body.removeChild(e.currentTarget);
});

// window.history.scrollRestoration = "manual"; // ìƒˆë¡œê³ ì¹¨ ì‹œ ì²˜ìŒìœ¼ë¡œ