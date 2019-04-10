# flex
> main에 display를 flex로 설정
> <br> flex-direction을 이용하여 가로로 정렬
> <br> justify-content를 이용하여 group1~3의 사이를 균등하게 분할
> <br> IE11에서 이용 불가
> <br> https://css-tricks.com/snippets/css/a-guide-to-flexbox/

# float
> IE11에서 flex의 사용이 불가하여 IE11 호환이 필요한 경우 사용가능
> <br> group에 float 속성을 주어 가로로 정렬
> <br> float 속성을 가진 group들이 공간을 차지하지 않아 아래 main 아래의 element들이 위로 당겨짐
> <br> 이를 해결하기 위하여 ::after를 이용하여 가상의 element를 만들어 clear 속성을 줌
