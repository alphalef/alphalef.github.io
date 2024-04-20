document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("modal");
  var btn = document.querySelector(".site-title__text--sub");
  var span = document.getElementsByClassName("close")[0];
  var title = document.querySelector(".site-title__wrapper"); // 타이틀을 선택하는 셀렉터

  btn.onclick = function() {
    modal.style.display = "block";
    title.classList.add("hidden"); // 모달이 열릴 때 타이틀 숨기기
    loadRecentPosts();
  }

  span.onclick = function() {
    modal.style.display = "none";
    title.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      title.classList.remove("hidden"); // 모달이 닫힐 때 타이틀 보이기
    }
  };
});

function loadRecentPosts() {
  // 포스트 로딩 로직
  document.getElementById("recent-posts").innerHTML = "<p>포스트1</p><p>포스트2</p>"; // 예시 데이터
}
