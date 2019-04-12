# css 중요도
> 상속
> <br> 겹침
> <br> 우선순위

# HTML 중요도 = box model
> position
> float
> display
> block

>> inline
>> <br> inline-block
>> <br> flex
>> <br> gird


# 상속
> - 배치와 관련된 항목은 상속X
> - 데코레이션 관련만 상속 / background 관련X
> - 속성값이 inherit이면 무조건 부모 상속
> - em 단위는 부모에게 상속 / rem은 root에게서 상속
 
# 우선순위
>  - e < c < i < inline-style 

# 선택자
> - [class^="box"] = box로 시작하는 모든 class
> - ^ : 시작 / $ 끝
```css
       [class^="box"]{
        background: pink;
        color: green !important;
    }
```
> - !important 강제로 우선순위 무시

# position
> - block으로 바뀜
> - absolute : [display: flex]는 내용이 겹치지 않아 lineguard가 가능하지만 absolute는 가림 / 상위 부모 요소 중 가장 가까운 static이 아닌 부모요소를 기준으로 움직임

#마진병합
> - 요소 사이의 마진의 병합, normal flow일때만 가능

# Noto sans = spoqa han sans
> - Noto : google
> - spoqa : adobe
> - Noto는 FF에서 정상 동작이 안되는 경우 발생                                                                

# inline 이슈
```html
<li><a href="#">홈</a></li><li><a href="#">로그인</a></li><li><a href="#">회원가입</a></li><li><a href="#">사이트맵</a></li><li><a href="#">english</a></li>
```

```html
<ul class="member">
    <li><a href="#">홈</a></li>
    <li><a href="#">로그인</a></li>
    <li><a href="#">회원가입</a></li>
    <li><a href="#">사이트맵</a></li>
    <li><a href="#">english</a></li>
</ul>
```
> - inline에서 enter값이 공백으로 인식됨
> - <li>의 부모인 member의 font-size를 0으로 하여 상속하고 li의 글자크기를 키우면 해결

# 구조선택자
> - http://nthmaster.com/

# tabindex=0
> - tab으로 마크업순서 이동가능

# 숨김
> - display:none = 처음부터 없던 것 처럼 / 화면 뿐 아니라 다른 보조기구로도 인식 불가
> - position: absolute = 절대값으로 화면 밖으로 옮김 / 모바일 환경에서 가상커서 문제 발생
> - opacity: 0 = 투명도 인지가 안되는 문제 발생 할 수 있음
> - 
```css
    .readable-hidden{
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        margin: -1px;
        clip: rect(0 0 0 0);
    }
```
> - https://seulbinim.github.io/WSA/float-position.html#clip-%EC%86%8D%EC%84%B1
> - spac out 예정
> - https://css-tricks.com/almanac/properties/c/clip/
