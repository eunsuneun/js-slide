# Slider using JavaScript (자바스크립트를 활용한 슬라이더)<a name="TOP"></a>

<br>

이미 많은 웹서비스에서 널리 활용되고 있는 슬라이드 기능을 순수 JavaScript로 구현해 보았습니다.

JavaScript, jQuery 기반의 슬라이드 라이브러리를 이용하는 것이 기능면에서는 효율적이겠지만,  
이것 역시 작고 기초적인 슬라이드를 구현할 때 가볍게 사용하기 좋을 것 같습니다.

결과적으로 JavaScript의 기초를 다지고, 슬라이더의 기초적인 동작 원리를 파악하기에 좋았습니다. 😊

[완성 페이지](https://eunsuneun.github.io/js-slide)

<br>
<br>
<br>

## ✨ Features

<br>

### 1. Arrows

슬라이드가 2개 이상일 때 방향 키가 생성되고 1개일 때는 생성되지 않습니다. 이는 disabled 클래스를 생성하여 제어합니다.
또한, 좌우 방향 버튼에 클릭 이벤트를 주어 기본 동작을 구현하였습니다.

```javascript
if ($slideCount == 1) {
  $nextBtn.classList.add("disabled");
  $prevBtn.classList.add("disabled");
} else {
  $nextBtn.classList.remove("disabled");
  $prevBtn.classList.remove("disabled");
}
```

<br>

### 2. Loop

마지막 슬라이드에서 next 버튼 클릭 시 제일 첫 번째 슬라이드로,  
첫 번째 슬라이드에서 prev 버튼 클릭 시 제일 마지막 슬라이드로 이동합니다.

```javascript
// prev
$prevBtn.addEventListener("click", function () {
  if ($currentIndex != 0) {
    goToSlide($currentIndex - 1);
  } else {
    goToSlide($slideCount - 1);
  }
});
// next
$nextBtn.addEventListener("click", function () {
  if ($currentIndex != $slideCount - 1) {
    goToSlide($currentIndex + 1);
  } else {
    goToSlide(0);
  }
});
```

<br>

### 3. Paginations

JavaScript를 이용하여 동적으로 태그를 만들어줍니다.

```javascript
for (var a = 0; a < $slideCount; a++) {
  $pagerHTML += "<button>" + a + "</button>";
  $pager.innerHTML = $pagerHTML;
}
var $pagerBtn = document.querySelectorAll(".pager button");
```

<br>

### 4. Auto Play

5초 단위로 자동 재생됩니다.

```javascript
// 자동 재생
function startautoSlide() {
  timer = setInterval(function () {
    var nextIdx = ($currentIndex + 1) % $slideCount;
    goToSlide(nextIdx);
  }, 5000);
}
function stopAutoSlide() {
  clearInterval(timer);
}
```

<br>

### 5. Pause in mouseenter

슬라이더에 마우스가 올라가면 자동 재생이 멈추고, 마우스가 사라지면 다시 자동 재생됩니다.

```javascript
startautoSlide();
$slideWrap.addEventListener("mouseenter", function () {
  stopAutoSlide();
});
$slideWrap.addEventListener("mouseleave", function () {
  startautoSlide();
});
```

<br>
