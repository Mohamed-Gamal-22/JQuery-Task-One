// start nav action 

$(".openIcon").click(function(){
    $(".open").css("left" , "0")
})

$(".close").click(function(){
    $(".open").css("left" , "-270px")
})
// end nav action

// start accordion 

$(".acc h3").click(function(){
    $(this).next().slideToggle(500)
    $(".acc div").not($(this).next()).slideUp(500)
})

// end accordion

// start textarea

$("textarea").keyup(function(){
    let myLength = $(this).val().length;
    $("#num").text((Number(100) - myLength) <= 0 ? "your available character finished" : (Number(100) - myLength))
})

// end textarea 