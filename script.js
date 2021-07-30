document.addEventListener("DOMContentLoaded", function () {
  // 변수 지정
  var $slideWrap = document.querySelector(".slide-wrap"),
    $slideContainer = document.querySelector(".slide-container"),
    $slide = document.querySelectorAll(".slide"),
    $prevBtn = document.getElementById("prev"),
    $nextBtn = document.getElementById("next"),
    $slideHeight = 0,
    $slideCount = $slide.length,
    $currentIndex = 0,
    $pagerHTML = "",
    $pager = document.querySelector(".pager"),
    timer = "";

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
    $nextBtn.classList.add("disabled");
    $prevBtn.classList.add("disabled");
  } else {
    $nextBtn.classList.remove("disabled");
    $prevBtn.classList.remove("disabled");
  }

  // 슬라이드 가로로 배열하기
  for (var a = 0; a < $slideCount; a++) {
    $slide[a].style.left = a * 100 + "%";
    $pagerHTML += "<button>" + a + "</button>";
    $pager.innerHTML = $pagerHTML;
  }
  var $pagerBtn = document.querySelectorAll(".pager button");

  // 슬라이드 이동 함수
  function goToSlide(idx) {
    $slideContainer.style.left = -100 * idx + "%";
    $currentIndex = idx;
    // 모든 $pagerBtn에서 active 삭제
    for (var i = 0; i < $pagerBtn.length; i++) {
      $pagerBtn[i].classList.remove("active");
    }
    // target $pagerBtn만 active 추가
    $pagerBtn[idx].classList.add("active");
  }
  goToSlide(0);

  // 버튼을 클릭이벤트
  // prev버튼
  $prevBtn.addEventListener("click", function () {
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
  $nextBtn.addEventListener("click", function () {
    if ($currentIndex != $slideCount - 1) {
      //현재 슬라이드가 마지막슬라이드가 아닐 때
      goToSlide($currentIndex + 1);
    } else {
      //현재 슬라이드가 마지막 슬라이드 일 때
      goToSlide(0);
    }
  });

  // 자동 재생
  function startautoSlide() {
    timer = setInterval(function () {
      var nextIdx = ($currentIndex + 1) % $slideCount;
      goToSlide(nextIdx);
    }, 4000);
  }
  function stopAutoSlide() {
    clearInterval(timer);
  }
  startautoSlide();
  $slideWrap.addEventListener("mouseenter", function () {
    stopAutoSlide();
  });
  $slideWrap.addEventListener("mouseleave", function () {
    startautoSlide();
  });

  // pager
  for (var p = 0; p < $pagerBtn.length; p++) {
    $pagerBtn[p].addEventListener("click", function (event) {
      // 태그 내부 숫자 활용
      var pagerNum = event.target.innerText;
      // data-idx 활용
      // var pagerNum = event.target.getAttribute("data-idx");
      goToSlide(pagerNum);
    });
  }
});
