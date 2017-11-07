function showMsg(param){
    /*
        param = {
            title : "提示",
            content : "请填写您的姓名！",
            close : [1,"确定"],
            layer_close : 1
        }
    */
    $("#layer_cover").remove();
    $("#layer_msg").remove();
    $("body").append("<div id='layer_cover'></div>");
    $("body").append("<div id='layer_msg'>" + (param.title ? "<h2>" + param.title + "</h2>" : "" ) + "<div class='content'>" + param.content +"</div></div>");
    $("#layer_cover").css({"height":$(document).height()});
    $("#layer_msg").css({"margin-left":-$("#layer_msg").width()/2 + "px","margin-top":-$("#layer_msg").height()/2 + "px"});
    //$("body").css({"overflow":"hidden"});

    if(param.close && param.close[0] == 1){
        $("#layer_msg").append("<a href='javascript:void(0);' class='close'>" + param.close[1] + "</a><div style='padding-bottom:10px;'></div>");
    }else if(param.close == 2){

    }

    if(param.layer_close == 1){
        $("#layer_cover").click(function(){
            $("#layer_cover").remove();
            $("#layer_msg").remove();
        });
    }

    $("#layer_msg .close").click(function(){
        if(param.href){
            window.location.href = param.href;
        }else{
            $("#layer_cover").remove();
            $("#layer_msg").remove();
            //$("body").css({"overflow":"auto"});
        }
    });
}