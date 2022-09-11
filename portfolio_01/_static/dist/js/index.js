$(function () {
  $(".typed").typed({
    strings: ["タカハシタカユキのポートフォリオ"],
    // strings: ["タカハシタカユキのポートフォリオ", "左の画像をクリック"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500,
  });
});

$(function () {
  $(".typed-about").typed({
    strings: ["タカハシタカユキについて"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500,
  });
});

$(function () {
  $(".typed-works").typed({
    strings: ["タカハシタカユキの制作物"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500,
  });
});

import barba from "@barba/core";
import gsap from "gsap";

// titleタグ以外のmetaタグの情報の書き換えを行う
const replaceHeadTags = (target) => {
  const head = document.head;
  const targetHead = target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
  const newPageHead = document.createElement("head");
  newPageHead.innerHTML = targetHead;
  const removeHeadTags = [
    "meta[name='keywords']",
    "meta[name='description']",
    "meta[property^='fb']",
    "meta[property^='og']",
    "meta[name^='twitter']",
    "meta[name='robots']",
    "meta[itemprop]",
    "link[itemprop]",
    "link[rel='prev']",
    "link[rel='next']",
    "link[rel='canonical']",
  ].join(",");
  const headTags = [...head.querySelectorAll(removeHeadTags)];
  headTags.forEach((item) => {
    head.removeChild(item);
  });
  const newHeadTags = [...newPageHead.querySelectorAll(removeHeadTags)];
  newHeadTags.forEach((item) => {
    head.appendChild(item);
  });
};

// Googleアナリティクスに情報を送る
barba.hooks.after(() => {
  ga("set", "page", window.location.pathname);
  ga("send", "pageview");
});

// アニメーション
function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  const transitionItem = document.querySelectorAll(".common-transition .item");
  const transitionContainer = document.querySelector(".common-transition");
  const tl = gsap.timeline();
  tl.to(transitionItem, {
    duration: 0.4,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.1,
    ease: "Expo.easeInOut",
  });
  tl.to(transitionContainer, {
    duration: 1,
    y: "-100%",
    ease: "Expo.easeInOut",
  });
  tl.to(transitionContainer, {
    duration: 0,
    y: 0,
  });
  tl.to(transitionItem, {
    duration: 0,
    scaleY: 0,
    scaleX: 1,
  });
}

function leaveAnimation() {
  const tl = gsap.timeline();
  tl.to(".container", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "Quart.easeOut",
  });
}

function enterAnimation() {
  const tl = gsap.timeline();
  tl.from(".container", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "Quart.easeOut",
  });
}

// barba設定
barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        leaveAnimation();
        pageTransition();
        await delay(1000);
        done();
      },
      beforeEnter({ next }) {
        replaceHeadTags(next);
      },
      async enter(data) {
        await delay(600);
        enterAnimation();
      },
    },
  ],
  views: [
    {
      namespace: "about",
      beforeEnter(data) {
        document.querySelector("#common-wrapper").classList.add("-about");
      },
      afterLeave(data) {
        document.querySelector("#common-wrapper").classList.remove("-about");
      },
    },
  ],
});
