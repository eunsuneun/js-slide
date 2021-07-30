document.addEventListener("DOMContentLoaded", function () {
  // 변수 지정
  var $slideWrap = document.querySelector(".container"),
    $slideContainer = document.querySelector(".slider-container"),
    $slide = document.querySelectorAll(".slide"),
    $navPrev = document.getElementById("prev"),
    $navNext = document.getElementById("next"),
    $slideHeight = 0,
    $slideCount = $slide.length,
    $currentIndex = 0,
    $pager = document.querySelector(".pager"),
    $pagerBtn = document.querySelectorAll(".pager span");

  // 슬라이드의 최대 높이를 부모의 높이로 지정하기
  for (var i = 0; i < $slideCount; i++) {
    if ($slideHeight < $slide[i].offsetHeight) {
      $slideHeight = $slide[i].offsetHeight;
    }
  }
  $slideWrap.style.height = $slideHeight + "px";
  $slideContainer.style.height = $slideHeight + "px";

  // 슬라이드 2개 이상일 때 prev,next 생성하기
  if ($slideCount == 1) {
    $navNext.classList.add("disabled");
    $navPrev.classList.add("disabled");
  } else {
    $navNext.classList.remove("disabled");
    $navPrev.classList.remove("disabled");
  }

  // 슬라이드 가로로 배열하기
  for (var a = 0; a < $slideCount; a++) {
    $slide[a].style.left = a * 100 + "%";
  }

  // 슬라이드 이동 함수
  function goToSlide(idx) {
    $slideContainer.style.left = -100 * idx + "%";
    $currentIndex = idx;
  }
  goToSlide(0);

  // 버튼을 클릭이벤트
  // prev버튼
  $navPrev.addEventListener("click", function () {
    if ($currentIndex != 0) {
      // 현재 슬라이드가 첫 번째 슬라이드가 아닐 때
      // prev버튼 누르면현재 슬라이드에서 1뺀 슬라이드로
      goToSlide($currentIndex - 1);
    } else {
      // 첫번째 슬라이드 일 때 prev버튼 누르면 마지막 슬라이드로
      goToSlide($slideCount - 1);
    }
  });

  // next 버튼
  $navNext.addEventListener("click", function () {
    if ($currentIndex != $slideCount - 1) {
      //현재 슬라이드가 마지막슬라이드가 아닐 때
      goToSlide($currentIndex + 1);
    } else {
      //현재 슬라이드가 마지막 슬라이드 일 때
      goToSlide(0);
    }
  });
});
