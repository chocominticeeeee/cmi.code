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

// メインビジュアルパララックス
let pllxTarget = document.querySelector("#mainVisual img");
pllxTarget.classList.add("js-rellax");
var rellax = new Rellax(".js-rellax", {
  speed: -4,
  center: true,
});

//hamburger
function toggleHamburgerMenu() {
  const hamburgerMenuElem = document.querySelector(".hamburgerMenu");
  // 開く
  if (hamburgerMenuElem.style.display == "flex") {
    hamburgerMenuElem.style.display = "none";
  }
  // 閉じる
  else {
    hamburgerMenuElem.style.display = "flex";
  }
}
//監視対象格納
const target = document.querySelectorAll(".card");
const targetArray = Array.prototype.slice.call(target);

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
    if (entry.isIntersecting && !target.classList.contains("is-active")) {
      const delay = i * 100;
      setTimeout(function () {
        target.classList.add("cardload");
      }, delay);
    }
  });
}

// カードホバーで拡大
let cardElems = document.querySelectorAll(".card");
for (const value of cardElems) {
  value.addEventListener(
    "mouseover",
    function () {
      anime({
        targets: value,
        scale: 1.1,
        easing: "linear",
        duration: 100,
      });
    },
    false
  );
  value.addEventListener(
    "mouseleave",
    function () {
      anime({
        targets: value,
        scale: 1,
        easing: "linear",
        duration: 100,
      });
    },
    false
  );
}

// カード個別
// Animejsカードホバーアニメーション
let AnimecardElem = document.querySelector("#jslibrary1Animejs");
AnimecardElem.addEventListener(
  "mouseover",
  function () {
    anime({
      targets: "#jslibrary1Animejs .upperCard img",
      scale: 1.5,
      easing: "easeOutBounce",
      duration: 1000,
    });
    anime({
      targets: "#jslibrary1Animejs .lowerCard p",
      rotate: "1turn",
      easing: "linear",
    });
  },
  false
);
AnimecardElem.addEventListener(
  "mouseleave",
  function () {
    anime({
      targets: "#jslibrary1Animejs .upperCard img",
      scale: 1,
      easing: "easeOutBounce",
      duration: 1000,
    });
    anime({
      targets: "#jslibrary1Animejs .lowerCard p",
      rotate: "-1turn",
      easing: "linear",
    });
  },
  false
);

// ztextホバー
let ztextcardElem = document.querySelector("#jsLibrary2Ztext .upperCard img");
ztextcardElem.addEventListener(
  "mouseover",
  function () {
    var ztxt = new Ztextify("#jsLibrary2Ztext .lowerCard", {
      depth: "20px",
      layers: 8,
      fade: true,
      direction: "forwards",
      event: "pointer",
      eventRotation: "20deg",
    });
    var ztxt2 = new Ztextify("#jsLibrary2Ztext .upperCard", {
      depth: "20px",
      layers: 8,
      fade: true,
      direction: "forwards",
      event: "pointer",
      eventRotation: "20deg",
    });
  },
  false
);
ztextcardElem.addEventListener("mouseleave", function () {}, false);

// トップボタン
let moveTopBtnElem = document.querySelector(".moveTopBtn");
moveTopBtnElem.addEventListener(
  "mouseover",
  function () {
    anime({
      targets: "#moveTopBtn",
      scale: 1.05,
      easing: "easeOutElastic",
      duration: 1000,
    });
  },
  false
);

moveTopBtnElem.addEventListener(
  "mouseleave",
  function () {
    anime({
      targets: "#moveTopBtn",
      scale: 1,
      easing: "easeOutElastic",
      duration: 1000,
    });
  },
  false
);

moveTopBtnElem.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

$(function () {
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    // console.log(scroll);
    if (scroll >= 200) {
      $(".moveTopBtn").addClass("is-in");
    } else {
      $(".moveTopBtn").removeClass("is-in");
    }
  });
});

// リンク
function linkTwitter() {
  const url = "https://twitter.com/CS_EyKum";
  window.open(url, "_blank");
}

function linkLogin() {
  const url = "../html/html/done.html";
  window.open(url, "_blank");
}

function linkGoroku() {
  const url = "https://chocominticeeeee.github.io/chocomingoroku/";
  window.open(url, "_blank");
}

function linkCsgoCommands() {
  const url = "https://chocominticeeeee.github.io/csgocommands/";
  window.open(url, "_blank");
}

function linkClickgame() {
  const url = "https://chocominticeeeee.github.io/clickgame/";
  window.open(url, "_blank");
}
