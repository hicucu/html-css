# 인기 사이트
> ![image](https://user-images.githubusercontent.com/48123604/56009298-4fbf9800-5d1a-11e9-9030-248e5e3ff541.png)

## 마크업
> 내 마크업
```
section.favorite
    h2.favorite-heading
    ol.favorite-list
        li
            a
            strong            
    a.favorite-more
```
> 강사님 마크업
```
section.favorite
    h2.favorite=heading
    ol
        li.no1
            a
            em.up, em.down, em.stop
    favorite-more
```
# 인용구
![image](https://user-images.githubusercontent.com/48123604/56020245-a9878880-5d41-11e9-9d3f-480f3c4a8fce.png)
## 인용구 tag
```html
<q></q>
<blockquote></blockquote>
```
## 마크업
>
```
article.web-cafe
    h2
    p
    footer
```
> article에 footer를 숨김영역으로 하여 내용을 복사 할 때 같이 복사가 됨

## html
```html
<article class="slogan">
    <h2 class="slogan-heading" title="웹카페에서 웹표준을">슬로건</h2>
    <p class="slogan-content">
        <q site="http://w3.org">The power of the Web is in its universality, Access by everyone regardless of disability is an essential aspect." Tim Berners - Lee , W3C Director and inventor of the World Wide Web</q>
        <footer class="readable-hidden">
            출처 : Worl Wide Web Consortium
        </footer>
    </p>
</article>
```
```css
.slogan{    
    position: relative;
    padding:10px 70px 10px 180px;
}
.slogan-heading{           
    width: 110px;
    height: 83px;
    line-height: 83px;
    text-align: center;
    position: absolute;
    left: 35px;
    bottom: -35px;
}   
.slogan-heading::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("./images/coffee.png") no-repeat;
}
.slogan-content{
    color: #a09784;
}
.slogan-content q::before{
    content: '"';
    font-size: 3rem;
    position: relative;
    top:10px;
}
```