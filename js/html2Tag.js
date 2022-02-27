// animejs使い方
// https://tr.you84815.space/animejs/
// https://easings.net/ja

// Rellax使い方
// https://moshashugyo.com/media/rellax

// zText
// https://bennettfeely.com/ztext/

// 読み込み時実行
window.onload = function () {

  // 読み込み時アニメーション
  const mainVisualH2elem = document.querySelector("h2");
  mainVisualH2elem.classList.add("h2load");


};


//監視対象格納
const target = document.querySelectorAll("article");
const targetArray = Array.prototype.slice.call(target);
console.log(targetArray)

//オプション設定
const options = {
  root: null,
  rootMargin: "0px 0px",
  threshold: 0,
};

//Intersection Observer
const observer = new IntersectionObserver(callback, options);
targetArray.forEach((tgt) => {
  observer.observe(tgt);
});

//要素が交差したとき
function callback(entries) {
  entries.forEach(function (entry, i) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains("article")) {
      const delay = i * 100;
      setTimeout(function () {
        target.classList.add("is-active");
      }, delay);
      console.log("observed"+target)
    }
  });
}


// トップボタン
let moveTopBtnElem = document.querySelector('#moveTopBtn');
moveTopBtnElem.addEventListener('mouseover',function(){
    anime({
        targets: '#moveTopBtn',
        scale: 1.05,
        easing: 'easeOutElastic',
        duration:1000
    });
},false)

moveTopBtnElem.addEventListener('mouseleave',function(){
    anime({
        targets: '#moveTopBtn',
        scale: 1,
        easing: 'easeOutElastic',
        duration:1000
    });
},false);

moveTopBtnElem.addEventListener('click',function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

