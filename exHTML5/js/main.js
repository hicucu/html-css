var item = $(".menu-item");
var itemSubLink = $(".sub-menu a");
var tab = $(".tab");
var section = $(".notice, .pds");

item.attr("tabindex", "0");
itemSubLink.attr("class", "icon-dot-circled");
// 메인 메뉴의 하위 메뉴 제어를 위한 스크립트
item.on("mouseover focusin", function(){
    item.removeClass("menu-act");
    $(this).addClass("menu-act");
});
// 탭 컨텐츠 제어를 위한 스크립트
tab.on("keyup click", function(e){
    e.preventDefault();
    if(e.keyCode===32 || e.keyCode===13 || e.type==='click'){
        section.removeClass("board-act");
        $(this).parent().addClass("board-act");
    }
});
