# Slider using JavaScript (자바스크립트를 활용한 슬라이더)<a name="TOP"></a>

<br>

이미 많은 웹서비스에서 널리 활용되고 있는 슬라이드 기능을 순수 JavaScript로 구현해 보았습니다.

JavaScript, jQuery 기반의 슬라이드 라이브러리를 이용하는 것이 기능면에서는 효율적이겠지만,  
이것 역시 작고 기초적인 슬라이드를 구현할 때 가볍게 사용하기 좋을 것 같습니다.

결과적으로 JavaScript의 기초를 다지고, 슬라이더의 기초적인 동작 원리를 파악하기에 좋았습니다.

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

### 2. loop

마지막 슬라이드에서 next 버튼 클릭 시 제일 첫 번째 슬라이드로,
첫 번째 슬라이드에서 prev 버튼 클릭 시 제일 마지막 슬라이드로 이동합니다.
<br>

### 3. paginations

<br>

### 4. Auto Slider

<br>

### 5. pause in mouseenter

<br>

### 7. 자동 높이 설정
