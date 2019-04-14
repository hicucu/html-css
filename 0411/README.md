# 새소식
![image](https://user-images.githubusercontent.com/48123604/55924758-1ddd0180-5c46-11e9-8fdf-0d59d410b8b0.png)
## 마크업
> 내 마크업
```
section.news
    h2.news-header
    a.news-link
        article.news-item        
            h3.news-item-subject
            time
            p.news-item-brief                
                span
                img                
    a.news-more
```
> 강사님 마크업

```
section.news
    h2.news-heading
    article.news-item
        h3.news-item-subject
        time.news-item-date
        p.news-item-brief
        figure.news-item-thumbnail
            img
            figcaption
    a.news-more
```

## figure
> caption을 달기 위한 마크업<br>
> 적절한 예 <br>
> ![image](https://user-images.githubusercontent.com/48123604/55925870-043db900-5c4a-11e9-9d47-722cb463618e.png)
> 부적절한 예<br>
> ![image](https://user-images.githubusercontent.com/48123604/55925952-58489d80-5c4a-11e9-8166-f17de4f2fc89.png)


## html
```html
<section class="news clearfix">
    <h2 class="news-heading">새소식</h2>
    <article class="news-item clearfix">
        <a href="#">
            <h3 class="news-item-subject">W3C 사이트가 리뉴얼 되었습니다.</h3>
            <time class="news-item-date" datetime="2019-04-11T11:19:37">2019.04.11</time>
            <p class="news-item-brief">디자인 및 다양한 view 환경을 고려하여 구성되어 있으며, 기존보다 최신 정보 및 개발자를 위한 기술 가이드도 찾기
            쉽도록 구성되어 있습니다.
            </p>
            <figure class="news-item-thumbnail">
                <img src="./images/news.gif" alt="">
                <figcaption>W3C 리뉴얼</figcaption>
            </figure>
        </a>
    </article>
    <a href="#" class="news-more icon-plus" title="새소식" target="_blank">더보기</a>
</section>
```
## css
> 내 css
```css
/* news */
.news{    
    position: relative;    
}
.news-heading{    
    padding: 15px 0;
    color: #e25d2d;
    font-weight: 700;
}
.news-item{    
    position: relative;
    margin: 35px 0;
}
.news-item-subject{    
    float: right;    
    width: 245px;
    font-weight: 700;
}
.news-item-date{    
    float: right;    
    width: 245px;    
    margin-bottom: 10px;
}
.news-item-brief{    
    float: right;    
    width: 245px;
}
.news-item-thumbnail{
    
    float: left;
    position: absolute;
    top: 0;
    text-align: center;
}
.news-item-thumbnail>figcaption{
    margin-top: 10px;
}
.news>a{
    position: absolute;
    right: 0;
    top: 15px;
}
.news>a::before{
    color: darkgreen;
}
```
> <Br>
> 강사님 css
```css
.news{    
    margin-top: 20px;
    position: relative;
}
.news::before{
    content: "";
    position: absolute;
    top: 35px;
    left: 0;
    width: 80%;
    height: 1px;
    background: #aaa linear-gradient(to right, #aaa, #fff);

}
.news-heading{
    font-size: 1.5rem;
    font-weight: 700;
    color:#e25d2d; 
}
.news-item{
    
    margin-top: 35px;
    position: relative;
}
.news-item a{
    display: block;
    padding-left: 130px; 
}
.news-item-subject{
    font-size: 1.5rem;
}
.news-item-brief{
    margin-top: 10px;
    line-height: 1.5;
}
.news-item-thumbnail{    
    position: absolute;
    top: 3px;
    left: 0;
    text-align: center;    
}
.news-item-thumbnail img{
    margin-bottom: 15px;
    box-shadow: 0 10px 15px 5px #aaa                                                                                               ;
}
.news-more{
    position: absolute;
    padding: 8px;
    top: -8px;
    right: -8px;;
}
.news-more::before{
    color: hsla(110, 90%, 30%, 1);
}
```
> a tag에 여러 요소가 있을 때 a tag를 block으로 하면 선택 촛점 영역이 반듯해짐

# 이벤트 & 사이트
![image](https://user-images.githubusercontent.com/48123604/55933817-9f925680-5c69-11e9-9db9-82df1a486ca1.png)
## 마크업
> 내 마크업
```
div
    section.event
        h2.event-heading
            span
        div.event-content
            p
                img.event-thumbnail
            p.event-brief
        div.event-buttons
            button.event-pre
            button.event-next
    section.relation
        h2.relation-heading
            span
        ul.relation-site-list
            li.relation-site-item
                a.relation-site-item-text
```

## html


# IR
```html
<!DOCTYPE html>
<html lang="ko_KR">
<head>
    <meta charset="UTF-8">    
    <title>IR 기법 및 Sprite 이미지의 활용</title>
    <style>
    .btn-wrapper{
        background: yellow;
        margin: 50px;
    }
    .btn-wrapper span{
        background: pink;
        display: inline-block;
        width: 20px;
        height: 0;
        padding-top: 20px;
        overflow: hidden;
    }
    </style>
</head>
<body>
    <div class="btn-wrapper">
        <span class="btn-prev">이전</span>
        <span class="btn-prev">이전</span>
    </div>
</body>
</html>
```

```css
.btn-wrapper span{
        background: pink url("./css/images/backpage_forwardpage.png");
        display: inline-block;
        width: 20px;
        height: 0;
        padding-top: 20px;
        overflow: hidden;
    }
    .btn-wrapper .btn-next{
        background-position: -40px 0;
    }
```

```css
.btn-wrapper span{
        background-color: pink;
        background-image: url("./css/images/backpage_forwardpage.png");
        background-repeat: repeat;
        display: inline-block;
        width: 20px;
        height: 0;
        padding-top: 20px;
        overflow: hidden;
    }
    .btn-next{
        background-position: -40px 0;
    }
```
> 위 css는 .btn-wrapper span의 background를 대표속성을 사용하여 background-position이 자동으로 지정됨
> .btn-next의 선택자 우선순위가 더 낮아서 .btn-wrapper .btn-next로 선택해야 지정이 됨
> 아래 css는 대표속성을 사용하지 않아 .btn-next로 선택해도 동작

> https://windtale.net/blog/css-image-sprite-automation-with-grunt-spritesmith/