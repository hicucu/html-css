# 그라데이션
> background-image: linear-gradient(red, green) : 위에서 아래, 레드에서 그린
> background-image: linear-gradient(to right, red, green)
> https://webgradients.com/
> https://leaverou.github.io/css3patterns/
> http://www.colorzilla.com/gradient-editor/

# background
> 배경 다중 선언시 가장 먼저 선언 한 요소가 가장 위
> background: #e25d2d linear-gradient(...)
> > > 네트워크 이슈 등으로 그라데이션을 제대로 못 반영 하는 경우 앞에 속성의 값으로 색을 표시 - 콜백
> background: #fff url("./images/bg_flower.png") no-repeat;
> > > 배경이미지 반복 X
> > > 단축표기법은 마지막꺼만
> > > 이미지 반복 off : background-repeat: no-repeat;

# float, position, inline-block
> inline-block 사용시 공백 발생
> float 설정시 높이를 잊어버림, 부모가 높이를 가지고 있으면 해결됨
> position은 offset을 주지 않으면 본래 있던 자리에 위치
> 레이아웃은 가장 마지막에 마크업 한 요소가 가장 위로 올라옴
> flex는 줄바꿈을 허용하지 않음, 필요시 wrap 사용

# white-space: nowrap;    
> block에 사용
> block 속성의 부모에게 추가를 하여 block의 개행을 강제로 막음

# http://fontello.com/
> 가벼운 이미지폰트

# 특수문자
> https://www.w3schools.com/html/html_entities.asp

# 애니메이션
```html
<div class="visual">
    <p class="visual-text">
        Web Standards &amp; Accessibility
    </p>
</div>
```

```css
@keyframes textAni{
    0%{
        font-size: 12px;
        color: rgba(0, 0, 0, 0);
        /* padding: 0; */
        top: 0;
        left: 0;;
    }
    100%{
        font-size: 24px;
        color: rgba(0, 0, 0, 1);
        /* padding: 75px 0 0 400px; */
        top: 75px;
        left: 400px;
    }
}
.visual{    
    height: 120px;      
    position: relative;
}
/* 텍스트 에니메이션 */
.visual-text{
    position: absolute;
    background: yellow;
    animation-name: textAni;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
}
```
> >  브라우저가 애니메이션을 사용하면 다시 그리기 때문에 느려짐
```css
@keyframes textAni{
    0%{
        font-size: 12px;
        color: rgba(0, 0, 0, 0);
        transform: translate(0, 0);
    }
    100%{
        font-size: 24px;
        color: rgba(0, 0, 0, 1);
        transform: translate(400px, 75px);
    }
}
.visual{    
    height: 120px;      
    position: relative;
}
/* 텍스트 에니메이션 */
.visual-text{
    /* position: absolute; */
    display: inline-block;
    background: yellow;
    animation-name: textAni;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
}
```
> > 다시 그리지 않아서 속도가 더 빠름

```css
.visual::before, .visual::after{
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
}
.visual::before{
    background-image: url("./images/ani_flower_01.png"), url("./images/ani_flower_02.png");
    background-position: 0 -10px, 670px 0;    
}
```
> > background: url("./images/ani_flower_01.png"); 를 사용하면 repeat가 위에서 선언되어 아래에서 풀림, 대표가 아닌 background-image 사용으로 해결
> > .visual::before, .visual::after{ 와 .visual::before{ 위치를 변경해도 가능
