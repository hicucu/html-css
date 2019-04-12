# 시멘틱 마크업
```
article.term
    h2.term-head
    div.term-body
        h3.term-title
        img.term-img        
        span.term-content


section.term
    h2.section-heading{웹 관련 용어}
    dl.term_list
        div
            dt.term-list-subject
                a
            dl.term-list-thumbnail
                img
            dd.term-list-brief
                text
```    

# img
```html
<img src="경로" alt>
<img src="경로" alt="설명">
``` 
>  대체 text가 없으면 장식으로 인식(위)

# inline
>  base line 기준으로 아래 2px 정도의 descender발생

# input
>  1:1 label 필요, title=""을 이용하여 암묵적 label가능

# <main></main>
>  ie 버전에 따라 main 및 기타 html5 추가 태그를 지원하지 않음
>  html5 shiv
