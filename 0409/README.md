section
    h2
    ul
        li 
            lable 
            radio
                ul
                    li
                        a
                            a  
                            time
            a
        li
            lable
            radio
                ul
                    li
                        a
                            a  
                            time
            a


# time
> ## datetime 필요
> ## time[datetime="2019-04-09T11:18:27"]


# aria 이용한 title
```css
<section class="notice board-act">
                        <h2 class="tab notice-heading" tabindex="0">공지사항</h2>
                        <ul class="board-list notice-list">
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                        </ul>
                        <a href="#" class="icon-plus board-more notice-more" title="공지사항" >더보기</a>
                    </section>
```
```css
<section class="notice board-act">
                        <h2 id="notice" class="tab notice-heading" tabindex="0">공지사항</h2>
                        <ul class="board-list notice-list">
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                            <li class="icon-dot-circled">
                                <a href="#"></a>
                                <time datetime="2019-04-09T11:18:27">2019.04.09</time>
                            </li>
                        </ul>
                        <a href="#" class="icon-plus board-more notice-more" title="공지사항" aria-labelledby="notice">더보기</a>
                    </section>
```

# javascritp
> ## defer
> > ### defer 속성은 HTML 구문 분석이 완전히 완료되면 스크립트 파일을 실행하도록 브라우저에 지시