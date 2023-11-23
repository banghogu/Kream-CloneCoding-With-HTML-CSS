# kream-clone-coding-project


## 👀 자신이 원하는 사이트 레이아웃 클론
<hr>

**프로젝트 기간 : 2023/11/20 ~ 2023/11/23**

**클론한 사이트 : https://kream.co.kr**

**배포 사이트 : https://banghogu.github.io/kream-clone-coding-project/**


**참고**
**1. 구현하는 시점에서 클론 사이트의 프로모션 및 이벤트 상황이 달라져서 실제 사이트와 구현 사이트의 이미지 및 특정 카테고리 디자인은 다를 수 있다.** <br>
**2. 메인페이지만 구현 했으므로 a태그로 다른 페이지에 넘어가는 기능을 막았다**<br>
**3. 반응형 웹은 구현하지 않았다**<br>



<hr>

### 📍 화면 레이아웃
<hr>

### **📌HEADER**

실제 화면 HEADER
![](https://velog.velcdn.com/images/banghogu/post/bdff7950-b299-462f-8da4-cac9053d42a1/image.png)


구현 HEADER
![](https://velog.velcdn.com/images/banghogu/post/28bcce2d-8bb8-4ecc-869f-d7c45b22afb6/image.png)

❗ 실제 화면의 HEADER를 HEADER-TOP, HEADER-MID, HEADER-BOTTOM으로 구분짓고 안에 있는 요소 또한 다시 구분 지었다.

![](https://velog.velcdn.com/images/banghogu/post/3917aec5-6dc8-4b19-88c9-22adb834484e/image.png)


![](https://velog.velcdn.com/images/banghogu/post/1b1b3b71-6939-4f1c-915e-705b2d0055a6/image.png)

**HEADER-TOP**안에 ul태그가 있고 ul태그는 ``` display: flex;
    justify-content: flex-end;``` 를 사용하여 왼쪽 끝에서 부터 정렬해주었고, 각각의 li태그안에 a태그가 있어 실제 화면과 같이 다른 화면으로 넘어갈 수 있게 해주었다.

**HEADER-MID**은 로고와 카테고리 즉 left, right ``` display: flex;
    justify-content: space-between;```각각의 영역으로 양쪽 끝에 배치해두었고 right에는 HEADER-TOP의 ul태그와 같은 레이아웃이므로 다시 flex를 사용하여 구현했다.
    
**HEADER-BOTTOM**은 또 HEADER-TOP ul과 똑같이 사용하므로 flex로 구현했고, 
2번째 추천 요소 밑에 강조 밑줄 코드
``` 
.header--bottom ul .active a::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: black;
}
```

3번째 랭킹 요소 왼쪽 상단에 빨간색 점 코드
```
.header--bottom ul li:nth-child(3) a {
    position: relative;
}

.header--bottom ul li:nth-child(3) a::after {
    content: "";
    background-color: rgb(239, 98, 83);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
}
```
<br><br>
<hr>

### **📌section (promotion slide)**

<br>


실제 화면 section
![](https://velog.velcdn.com/images/banghogu/post/7c170584-8f01-4930-9178-df16f54baa42/image.png)

구현 section
![](https://velog.velcdn.com/images/banghogu/post/eda2d777-33da-41a2-ae3b-b0d91a778dfd/image.png)

❗ 실제 사이트 section 사진을 다운 받아 사용했고 Swiper js를 사용하여 각각의 슬라이드가 한장씩 자동으로 넘어가는 되는 코드, prev, next 버튼을 누를 시 넘어가는 코드, 사진 밑에 슬라이드 목록 코드를 작성했다. 

❗ 버튼 코드는 모두  ```position: absolute;``` 값으로 슬라이드 컨테이너 안에 적절한 위치에 삽입되었다.

❗ 실제 화면에서는 슬라이드가 양옆 끝까지 채워져 있길래 사진 사이즈가 container width 최대값을 가진 크기인줄 알았는데 구현 사이트 사진만큼의 크기를 가졌다. 실제 화면에서 슬라이드 요소를 살펴보니 
![](https://velog.velcdn.com/images/banghogu/post/f6d04b50-0aa9-445e-8549-b1877070d014/image.png)
img크기는 빨간색만큼의 크기였고 container의 배경색으로 img 양쪽 끝 색을 추출하여 배경색으로 넣어주고 있었다. 이 점은 디자인의 영역으로 남겨둬야 하나, 직접 구현을 해야 하나 고민해서 일단은 코드로 해보자 해서 억지로 img 크기를 컨테이너 width:100% 만큼으로 늘려봤지만 사진의 화질이 많이 깨지고, 비율 또한 이상해졌다. 그래서 일일이 사진 양쪽 끝 색을 추출하여 container의 배경색으로 설정해야 했지만, 시간 대비 학습 효율이 낮아 빈 여백으로 남겨뒀다.
<br><br>
<hr>

### **📌article1 (가운데 카테고리)**

<br>


실제 화면 article1
![](https://velog.velcdn.com/images/banghogu/post/3f45345c-3ffd-4e81-a293-544e64ba2aaf/image.png)

구현 article1
![](https://velog.velcdn.com/images/banghogu/post/c26a327c-e7e1-4d26-9f4e-e4b021b52c67/image.png)

❗ 역시 실제 사이트 사진을 다운 받아 사용했고, 각각의 아이템은 gird로 구현했다.
기본 그리드 구조이므로 딱히 어려운점 없이 진행했다.
<br><br>
<hr>

### **📌article2 (just dropped 발매상품)**

<br>


실제 화면 article2 (더보기 클릭 안할 시)
![](https://velog.velcdn.com/images/banghogu/post/e623ea1c-6a7e-4145-a035-cf1dc3c9fd5b/image.png)

실제 화면 article2 (더보기 클릭1)
![](https://velog.velcdn.com/images/banghogu/post/62c6857d-2295-4f3d-b56b-83ab48429d77/image.png)

실제 화면 article2 (더보기 클릭2)
![](https://velog.velcdn.com/images/banghogu/post/bed2af73-8659-4544-a938-437dd185d0b2/image.png)

구현 화면 article2 (더보기 클릭 안할 시)
![](https://velog.velcdn.com/images/banghogu/post/3a3aa198-e1d9-4947-acea-f21fe11722fd/image.png)

구현 화면 article2 (더보기 클릭1)
![](https://velog.velcdn.com/images/banghogu/post/cee7f276-e148-4127-a3e6-697e9b94e3b4/image.png)

구현 화면 article2 (더보기 클릭2)
![](https://velog.velcdn.com/images/banghogu/post/aa03901a-7e89-4860-99ad-236cdd5b949e/image.png)

❗ 각각의 아이템은 grid로 구현했다. 더보기 버튼을 클릭 안할 때 첫번 째 줄의 요소만 나타나지고, 더보기 클릭 시 2번째 줄 아이템까지 나오고, 다시 더보기 클릭 시 3번째 줄 아이템까지 모든 아이템 요소가 보여지고 더보기 버튼은 사라진다.

![](https://velog.velcdn.com/images/banghogu/post/53d1fee3-dd05-4c4a-988a-468b49d34167/image.png)

때문에 그리드 줄에 따라 요소들을 promotion1, promotion2, promotion3 으로 나눠줬고 초기 화면에서는 promotion2, promotion3에 hide 클래스를 줘서 사라진 상태로 있다가 버튼 클릭시 hide 클래스를 삭제하여 화면에 나타나지게 했다. 이 부분은 자바스크립트를 사용했는데,

```
const promotionEl1 = document.querySelectorAll('.promotion1')
const promotionEl2 = document.querySelectorAll('.promotion2')
const promotionEl3 = document.querySelectorAll('.promotion3')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = 1;
promotionToggleBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (isHidePromotion == 1) {
        for (let i = 0; i < promotionEl2.length; i++) {
            promotionEl2[i].classList.remove('hide')
        }
        isHidePromotion++
    }
    else if (isHidePromotion == 2) {
        for (let i = 0; i < promotionEl2.length; i++) {
            promotionEl3[i].classList.remove('hide')
        }
        isHidePromotion++
        if (isHidePromotion == 3) {
            promotionToggleBtn.classList.add('hide')
        }
    }
})
```
isHidePromotion = 1로 두어 초기 화면을 1번째 줄만 나타나지고
버튼에 이벤트 리스너를 달아 클릭시 querySelectorAll('.promotion2')의 모든 요소들에 hide 클래스를 삭제하고 isHidePromotion의 크기를 1 늘렸다.
다시 버튼을 클릭하면 isHidePromotion이 2이므로 querySelectorAll('.promotion3')의 모든 요소의 hide 클래스를 삭제하고 버튼 크기를 1늘려 3으로 만들고 버튼이 3이될 때  버튼에 hide 클래스를 추가하여 버튼이 사라지게 만들었다.

<hr>

![](https://velog.velcdn.com/images/banghogu/post/e2463e08-ae5c-4173-8579-a5b1198f73a8/image.png)
❗ 또한 각각의 아이템들은 빨간색 박스처럼 체크요소, 빠른배송 요소를 가지고 있는데 이 아이콘들은 https://getbootstrap.kr/ 부트스트랩 요소의 svg 코드를 복사하고 css로 요소를 변경해줬다.
<br><br>
<hr>

### **📌article3 (top bradn 탑 브랜드)**

<br>

실제 화면 article3
![](https://velog.velcdn.com/images/banghogu/post/e01e376b-ff60-4f25-8937-c1e6a4ce4dca/image.png)

구현 화면 article3
![](https://velog.velcdn.com/images/banghogu/post/2fbdd249-bc21-4d7c-a0f9-5eaa3769426f/image.png)

❗ article1처럼 기본 그리드 아이템 구조이므로 역시나 어렵지 않게 구현했다.

<br><br>
<hr>

### **📌article4 (프로모션 이미지)**

<br>

실제 화면 article4
![](https://velog.velcdn.com/images/banghogu/post/098f75a5-6477-4114-8f77-8481ec811b5f/image.png)

구현 화면 article4
![](https://velog.velcdn.com/images/banghogu/post/567405f1-566e-4f07-a8ca-9ef5cbe20cad/image.png)

❗ 실제 화면의 이미지가 section의 이미지처럼 빨간색 박스만큼의 크기를 갖고 있어서 이미지 양끝 색을 추출하여 img container 배경색을 지정하여 화면 양 끝까지 이미지가 나타날 수 있도록 해주었다.
![](https://velog.velcdn.com/images/banghogu/post/66919b31-e3ff-43d0-b185-ce1e76c5192f/image.png)

<br><br>
<hr>

### **📌article5 (most popular 인기 상품)**

<br>

실제 화면 article5
![](https://velog.velcdn.com/images/banghogu/post/6257e6f2-c362-4100-ab96-35e3729f0980/image.png)

구현 화면 article5
![](https://velog.velcdn.com/images/banghogu/post/cf7e1466-81de-4bd5-a840-ebdb6210d61a/image.png)

❗ article2와 마찬가지로 더보기 클릭 시 숨겨져있던 gird 아이템들이 한줄씩 나타나지는 구조이다. 이미 학습했던 내용이므로 더보기 버튼은 구현하지 않았고, 아이템 오른쪽 밑 북마크 요소를 추가해 사용해봤다.

<br><br>
<hr>

### **📌article6 (이번주 최대클릭 겨울 아우터)**
<br>

실제 화면 article6
![](https://velog.velcdn.com/images/banghogu/post/034f4bb8-d84f-4052-a9f6-3fcba9283d41/image.png)

구현 화면 article6
![](https://velog.velcdn.com/images/banghogu/post/ec1202b2-d4b7-4d96-80a2-8ebb868ad020/image.png)

❗ 화면 슬라이드 구조이고 다시 swiper js를 사용했다. section (promotion slide)과 다르게 한 화면에 6개의 슬라이드가 보여지고, 슬라이드에 마우스를 hover 할 때만 prev, next 버튼이 나타나진다.

![](https://velog.velcdn.com/images/banghogu/post/9c17e7bd-0530-4ed0-a03d-3a676595bc63/image.png)

❗ 각각의 슬라이드 아이템에는 사진이 들어가 있고 밑에 인스타그램 id가 써져있는데, 
흰색 화면에 흰색 글씨의 id를 배치하니 보이지 않았다.
```
box-shadow: inset 0 -20px 40px #6d6d6d;
```
때문에 슬라이드 이미지 컨테이너에 그림자를 안쪽으로 추가하여 흰색 글씨의 id가 보여지게 구현했다.

<br><br>
<hr>

### **📌footer**
<br>
실제 화면 footer

![](https://velog.velcdn.com/images/banghogu/post/549dc2c8-0271-4967-9ac7-af9b6ae5ca96/image.png)


구현 화면 footer
![](https://velog.velcdn.com/images/banghogu/post/578a7bb3-9103-4e21-8dcf-1d579a573d0e/image.png)

❗ 실제 화면의 footer를 service-area, corporation-area, notice-area1, notice-area2으로 구분짓고 안에 있는 요소 또한 다시 구분 지었다.

![](https://velog.velcdn.com/images/banghogu/post/d9c5501e-03fe-474f-bb29-7841a0abaad9/image.png)


![](https://velog.velcdn.com/images/banghogu/post/f040f236-5052-4206-bfd8-580878331bc2/image.png)


**service-area** 안에는 left, right로 다시 나눠주고 flex로 배치시켜줬다. left에는 2개의 ul태그, right는 div태그 요소가 포함되어 있다.

**corporation-area**는 top과 bottom으로 나눠주고 top에는 다시 right와 left로 flex로 배치시켜줬다.

**notice-area1, notice-area2**는 각각의 div태그로 기본 쌓임 특성을 이용하여 작성했다.
<br><br>
<hr>

### **📌to-top**
<br>
실제 화면 to-top

![](https://velog.velcdn.com/images/banghogu/post/734cb39a-62cf-4228-9c21-c5198c420b01/image.png)

구현 화면 to-top

![](https://velog.velcdn.com/images/banghogu/post/bb7e34b0-9b5c-4800-9cbb-edf708807b1e/image.png)

```
**html**
<!-- to-top -->
    <div id="to-top">
        <span class="material-symbols-outlined">
            vertical_align_top
        </span>
    </div>

**css**
#to-top {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    bottom: 24px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .1);
    height: 48px;
    padding-top: 4px;
    position: fixed;
    right: 24px;
    width: 44px;
    z-index: 1;
}

**js**
const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 300) {
        gsap.to(toTopEl, .2, {
            x: 0
        })

    } else {
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300))
toTopEl.addEventListener('click', function () {
    gsap.to(window, .2, {
        scrollTo: 0
    })
})
```


❗ gsap 라이브러리를 사용하여 윈도우의 일정 scrollY 축이 넘어갈 시 to-top 버튼이 보여지게 해주었다. 

<br><br>
<hr>

### **📍 느낀 점**
<br>

웹 사이트를 만들 때 어떻게 화면을 구분지을 것인지 가장 효율적인 방법을 고민했다. 또한 gird, flex를 사용 할 때 그 안에 요소 또한 grid, flex를 사용 할 수 있으므로 전체적으로 대충 구분짓는것이 아닌 내부 요소 또한 더 이상 나눠질 수 없을 정도로 구분지어야 div가 남발하는 html 구조 특성 상 나중에 구조를 바꿀때나, 수정할 때 정확한 위치에 접근 할 수 있을것이다. <br>

이번 kream 사이트에서는 padding, margin, font-size등과 같은 세부 크기등은 개발자 도구를 사용하여 참고했지만 나중에 내가 직접 사이트를 만들 때는 위와 같은 세부 요소의 크기등은 하나하나 고쳐나가며 적용해야 하기 때문에 시간이 많이 들 것 같다. 기본 골조를 짜는 것을 연습하여 빠르게 레이아웃을 완성시키고 세부 css 내용에 더 투자하여야 완성도 높은 사이트가 만들어 질 것 같다.

또한 이번 프로젝트를 진행하면서 다양한 js 라이브러리를 써봤는데 swiper, gsap 말고도 다양한 기능의 js 라이브러리가 존재할 것 이므로 꾸준히 다른 구조의 사이트 또한 클론코딩하여 js 라이브러리의 종류가 어떤 것이 있는지, 어떻게 사용하는지 학습해야겠다.
