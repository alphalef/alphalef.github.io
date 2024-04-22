document.addEventListener('DOMContentLoaded', function() {
  var intro = document.getElementById("intro_modal");
  var blog = document.getElementById("blog_modal");
  var btn1 = document.querySelector("#intro");
  var btn2 = document.querySelector("#blog");
  var span1 = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close")[1];
  var title = document.querySelector(".site-title__wrapper"); // 타이틀을 선택하는 셀렉터
  var particle = document.querySelector(".particles-js-canvas-el");

  btn1.onclick = function() {
    intro.style.display = "block";
    title.classList.add("hidden"); // 모달이 열릴 때 타이틀 숨기기
    particle.classList.add("hidden"); // 모달이 열릴 때 타이틀 숨기기
  }

  btn2.onclick = function() {
    blog.style.display = "block";
    title.classList.add("hidden"); // 모달이 열릴 때 타이틀 숨기기
    particle.classList.add("hidden"); // 모달이 열릴 때 타이틀 숨기기
  }

  span1.onclick = function() {
    intro.style.display = "none";
    blog.style.display = "none";
    title.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
    particle.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
  }

  span2.onclick = function() {
    intro.style.display = "none";
    blog.style.display = "none";
    title.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
    particle.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
  }

  window.onclick = function(event) {
    if (event.target == intro || event.target == blog) {
      intro.style.display = "none";
      blog.style.display = "none";
      title.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
      particle.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
    }
  };
});
