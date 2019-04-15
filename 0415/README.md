# footer
## img
>   ![image](https://user-images.githubusercontent.com/48123604/56102827-7e33b200-5f6a-11e9-8b80-1e12403bf194.png)

## 마크업
> 내 마크업
```
div.footer-bg
    footer.footer
        a
            img
        
        ul.footer-menu
            li
        div.copyright
            p
                a
            p
        div.badge
            img.badge-html
            img.badge-css    
```

> 강사님 마크업
```
.footer
    a.footer-logo
        img
     ul.guide
        li
            a
    address.address
        span
        span
        span
            a
    small.copyright
    div.badge
        img
        img
```

### address
> 주소, 연락처에 사용
> 본문에서는 사용하지 않음

### small & big
> small : 주변 보다 작게
> big : 주변 보다 크게

### copyright
> &copy\; 로 입력 

# iframe
> iframe 영상 및 지도 등의 크기를 반응형으로 적용
```html
<div class="rwd-container">
        <div class="rwd-iframe rwd-16">
            <iframe src="https://www.youtube.com/embed/hy0rMH2yeg8" allowfullscreen></iframe>
        </div>
    </div>

    <div class="rwd-container">
        <div class="rwd-iframe rwd-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9379386320716!2d127.0611832213358!3d37.54367132887278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca49534790c57%3A0xc115101cbaecb40e!2z7JWE7YGs67C466as7ISc67mE7Iqk!5e1!3m2!1sko!2skr!4v1555310307324!5m2!1sko!2skr" allowfullscreen></iframe>
        </div>
    </div>
```
```css
@charset "utf-8";

*{
    box-sizing: border-box;
}
.rwd-container{
    background: yellow;
    width: 50%;
    box-sizing: border-box;
    border: 10px solid #181818;
}

.rwd-container img{
    max-width: 100%;
    height: auto;
}

.rwd-iframe{
    width: 100%;
    position: relative;
    background: pink;
}
.rwd-iframe iframe{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}


.rwd-16{
    padding-top: calc(9/16*100%);
}

.rwd-4{
    padding-top: calc(3/4*100%);
}
```

```
div
    iframe
```
> div 아래 iframe이 바로 있는 경우 iframe에 max-width와 height의 값을 줘도 iframe이 div의 사이즈가 커지지 않는다.

```
div
    div
        iframe
```
> 가장 상위에 있는 div에 max-width와 height의 값을 주고 하위 div에 가로의 크기와 position을 relative로 설정, iframe의 가로 세로를 100%로 하여 absolute를 지정하면 iframe의 크기가 상위 div의 크기에 따라 변화
