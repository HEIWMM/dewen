function shadow() {
    var hotmanList = document.getElementById('hotman-list');
    var hotmanListLi = hotmanList.getElementsByTagName('li');
    var hotmanListP = hotmanList.getElementsByTagName('p');
    for (var i = 1; i < hotmanListLi.length; i++) {
        (function(j){
            hotmanListLi[j].onmouseout = function(){
                for(var k = 0;k<10;k++){
                    if (k!=j-1) {
                        hotmanListP[k].style.display = "none";
                    }
                    else{
                        hotmanListP[k].style.display = "block";
                    }
                };
                                              
                    };
        }(i));
        (function(j){
            hotmanListLi[j].onmouseover = function(){
                        hotmanListP[j-1].style.display = "block";
                    };
        }(i));
        
    }
    
}
function button() {
    var button = $(".map #newChange li");
    var a = $("#map-pic img");
    var b = $(".advice-information li");
    button[0].onmouseover=function(){
        $($(".map #newChange li")[1]).removeClass("deepbtn");
        $($(".map #newChange li")[0]).addClass("deepbtn");
        a[0].src = "image/123.gif";
    }
    button[1].onmouseover=function(){
        $($(".map #newChange li")[0]).removeClass("deepbtn");
        $($(".map #newChange li")[1]).addClass("deepbtn");
        a[0].src = "image/456.jpg";
    }
    button[0].onmouseout=function(){
        $($(".map #newChange li")[0]).addClass("deepbtn");
        $($(".map #newChange li")[1]).removeClass("deepbtn");
    }
    button[1].onmouseout=function(){
        $($(".map #newChange li")[0]).removeClass("deepbtn");
    }
    
    

   
}
function changeColor() {
    var a = $(".search-list li");
    var b = $(".search-form input");
    for(var i = 0;i<5;i++){
        (function(j){
                a[j].onclick=function(){
                    $(".search-list .changeColor").removeClass("changeColor");
                    $($(".search-list li")[j]).addClass("changeColor");
                    b[0].value = "例如：荷棠鱼坊烧鱼 或 樱花日本料理"+j*1000
            }
    }   (i));
    }
    $(b[0]).focus(function(){
        b[0].value = "";
        b[0].style.outline="none";
    });
}
function roll() {
    var a = $(".up");
    var b = $(".down");
    var c = document.getElementById("roll");
    var d = parseInt(c.style.top);
    var time = setInterval(function(){
        d-=22;
        if (d<-110) {
            d = 0;
        }
        c.style.top = d+"px";
    },3000);
    b[0].onclick=function(){
        d-=22;
        if (d<-110) {
            d = 0;
        }
        c.style.top = d+"px";
    }
    a[0].onclick=function(){
        d+=22;
        if (d>0) {
            d = 0;
        }
        c.style.top = d+"px";
    }

}

function changeif(){
    var a = $(".shop-bottom img");
    var button2 = $(".shop #newChange li");
    button2[0].onmouseover=function(){
        $($(".shop #newChange li")[1]).removeClass("deepbtn");
        $($(".shop #newChange li")[0]).addClass("deepbtn");
        for (var i = 0; i < 3; i++) {
            a[i].src = "image/hot_list_pic1.gif";
        }
    }
    button2[1].onmouseover=function(){
        $($(".shop #newChange li")[0]).removeClass("deepbtn");
        $($(".shop #newChange li")[1]).addClass("deepbtn");
        for (var i = 0; i < 3; i++) {
            a[i].src = "image/hot_list_pic2.gif";
        }
    }
    button2[0].onmouseout=function(){
        $($(".shop #newChange li")[0]).addClass("deepbtn");
        $($(".shop #newChange li")[1]).removeClass("deepbtn");
    }
    button2[1].onmouseout=function(){
        $($(".shop #newChange li")[0]).removeClass("deepbtn");
    }

}
function changecps() {
    var button3 = $(".coupons #newChange li");
    var a = $(".coupons-list a");
    for(var i = 0;i < 3; i++) {
        (function(j){
            button3[j].onmouseover = function(){
                       if (j==0) {
                            $($(".coupons #newChange li")[j]).addClass("deepbtn");
                            $($(".coupons #newChange li")[1]).removeClass("deepbtn");
                            $($(".coupons #newChange li")[2]).removeClass("deepbtn");
                            for(var k = 0;k<5;k++){
                                a[k].innerHTML = "京都怀石花传美浓吉";
                            }
                            
                        }
                        else if (j==1) {
                            $($(".coupons #newChange li")[j]).addClass("deepbtn");
                            $($(".coupons #newChange li")[0]).removeClass("deepbtn");
                            $($(".coupons #newChange li")[2]).removeClass("deepbtn");
                            for(var k = 0;k<5;k++){
                                a[k].innerHTML = "外婆家(荟聚购物中)";
                            }
                        }
                        else if (j==2) {
                            $($(".coupons #newChange li")[j]).addClass("deepbtn");
                            $($(".coupons #newChange li")[0]).removeClass("deepbtn");
                            $($(".coupons #newChange li")[1]).removeClass("deepbtn");
                            for(var k = 0;k<5;k++){
                                a[k].innerHTML = "新荣记(金融大街店)";
                            }
                        }                        
                    };
        }(i));
        (function(j){
            button3[j].onmouseout = function(){
                        if (j==0) {
                            $($(".coupons #newChange li")[j]).addClass("deepbtn");
                            $($(".coupons #newChange li")[1]).removeClass("deepbtn");
                            $($(".coupons #newChange li")[2]).removeClass("deepbtn");
                        }
                        else if (j==1) {
                            $($(".coupons #newChange li")[j]).addClass("deepbtn");
                            $($(".coupons #newChange li")[0]).removeClass("deepbtn");
                            $($(".coupons #newChange li")[2]).removeClass("deepbtn");
                        }
                        else if (j==2) {
                            $($(".coupons #newChange li")[j]).addClass("deepbtn");
                            $($(".coupons #newChange li")[0]).removeClass("deepbtn");
                            $($(".coupons #newChange li")[1]).removeClass("deepbtn");
                        }
                    };
        }(i));
    }
}
function changeadv() {
    var button1 = $(".advice #newChange li");
    var a = $(".advice-information strong");
    for(var i = 0;i < 3; i++) {
        (function(j){
            button1[j].onmouseover = function(){
                       if (j==0) {
                            $($(".advice #newChange li")[j]).addClass("deepbtn");
                            $($(".advice #newChange li")[1]).removeClass("deepbtn");
                            $($(".advice #newChange li")[2]).removeClass("deepbtn");
                            for(var k = 0;k<5;k++){
                                a[k].innerHTML = "墨西哥鸡肉卷";
                            }
                        }
                        else if (j==1) {
                            $($(".advice #newChange li")[j]).addClass("deepbtn");
                            $($(".advice #newChange li")[0]).removeClass("deepbtn");
                            $($(".advice #newChange li")[2]).removeClass("deepbtn");
                            for(var k = 0;k<5;k++){
                                a[k].innerHTML = "老北京猪肉卷";
                            }
                        }
                        else if (j==2) {
                            $($(".advice #newChange li")[j]).addClass("deepbtn");
                            $($(".advice #newChange li")[0]).removeClass("deepbtn");
                            $($(".advice #newChange li")[1]).removeClass("deepbtn");
                            for(var k = 0;k<5;k++){
                                a[k].innerHTML = "老重庆牛肉卷";
                            }
                        }                        
                    };
        }(i));
        (function(j){
            button1[j].onmouseout = function(){
                        if (j==0) {
                            $($(".advice #newChange li")[j]).addClass("deepbtn");
                            $($(".advice #newChange li")[1]).removeClass("deepbtn");
                            $($(".advice #newChange li")[2]).removeClass("deepbtn");
                        }
                        else if (j==1) {
                            $($(".advice #newChange li")[j]).addClass("deepbtn");
                            $($(".advice #newChange li")[0]).removeClass("deepbtn");
                            $($(".advice #newChange li")[2]).removeClass("deepbtn");
                        }
                        else if (j==2) {
                            $($(".advice #newChange li")[j]).addClass("deepbtn");
                            $($(".advice #newChange li")[0]).removeClass("deepbtn");
                            $($(".advice #newChange li")[1]).removeClass("deepbtn");
                        }
                    };
        }(i));
    }
}
function bbs() {
    var a = $(".bbs-list li img");
    var b = $(".bbs-list li b");
    var c = $(".bbs-list li");
    var d = $(".bbs-list li a");
    var e = $(".bbs-list li em");
    for (var i = 0; i < a.length; i++) {
        (function(j){
            c[j].onmouseover=function(){
                b[j].style.display = "none";
                a[j].style.display = "inline-block";
                c[j].style.height = "70px";
                c[j].style.backgroundColor = "#d90000";
                d[j].style.color = "white";
                e[j].style.color = "white";
                for(var k = 0;k < 7;k++){
                    if (k!=j) {
                        b[k].style.display = "inline-block";
                        a[k].style.display = "none";
                        c[k].style.height = "30px";
                        c[k].style.backgroundColor = "#f8f8f8";
                        d[k].style.color = "#454545";
                        e[k].style.color = "#454545"; 
                    }
                }
            }
        }(i));
        
    }

}
function huantu() {
    var a =$(".yidong");
    var b =$(".tubiao li");
    var t = 0;
    var c = $(".yidong img");
    var e = $(".peiwen");
    var time = setInterval(function(){        
        if (t==3) {
            t=0;
        }
        for(var i = 0;i<3;i++){
            if(i!=t){
                 b[i].style.border = "none";
            }
        }
        b[t].style.border = "2px solid red";
        for(var i = 0;i<3;i++){
            if(b[i].style.border = "2px solid red"&&t==0){
                c[0].style.display = "none";
                $(c[0]).fadeIn(800);
                e[0].innerHTML = "<p>爸爸去哪儿~~~~</p>";
            }
            if(b[i].style.border = "2px solid red"&&t==1){
                c[0].style.display = "none";
                $(c[1]).fadeIn(800);
                e[0].innerHTML = "<p>妈妈去哪儿~~~~</p>";
            }
            if(b[i].style.border = "2px solid red"&&t==2){
                c[1].style.display = "none";
                $(c[2]).fadeIn(800);
                e[0].innerHTML = "<p>姐姐去哪儿~~~~</p>";
            }
        }
        console.log(t);
        t++;
    },3000);
    for(var i =0;i < 3;i++){
        (function(j){
            b[j].onclick=function(){
                b[j].style.border = "2px solid red";

                console.log(c);
                if (j==0) {
                    for(var i = 0;i<3;i++){
                        if (i!=j) {
                            b[i].style.border = "none";
                        }
                    }
                    c[0].style.display = "none";
                    $(c[0]).fadeIn(800);
                    e[0].innerHTML = "<p>爸爸去哪儿~~~~</p>";
                }
                if (j==1) {
                    for(var i = 0;i<3;i++){
                        if (i!=j) {
                            b[i].style.border = "none";
                        }
                    }
                    c[0].style.display = "none";
                    $(c[1]).fadeIn(800);
                    e[0].innerHTML = "<p>妈妈去哪儿~~~~</p>";
                }
                if (j==2) {
                    for(var i = 0;i<3;i++){
                        if (i!=j) {
                            b[i].style.border = "none";
                        }
                    }
                    c[1].style.display = "none";
                    $(c[2]).fadeIn(800);
                    e[0].innerHTML = "<p>姐姐去哪儿~~~~</p>";
                }
            }
        }(i));
    }
}
function ajax() {
    var pic = document.getElementById('hotman-list').getElementsByTagName('img');
    var xmlhttp = null;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
    }
//连接服务器
    xmlhttp.open("GET","http://rapapi.org/mockjs/35158/mockjs/35158/?",true);
//发送数据或请求
    xmlhttp.send();
//监听响应状态
    xmlhttp.onreadystatechange=function(){  
        if(xmlhttp.readyState==4){ //连接服务器成功
            //判断服务器响应的HTTP状态码
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
            //解析响应文本 （json） content（js）
            var photo = JSON.parse(xmlhttp.responseText);//把JSON对象转化伟原生的JavaScript
            //document.getElementById("container").innerHTML = xmlhttp.responseText;  //以字符串的形式返回
            pic[0].src = photo[0].hot1;
            pic[1].src = photo[0].hot2;
            pic[2].src = photo[0].hot3;
            pic[3].src = photo[0].hot4;
            pic[4].src = photo[0].hot5;
            pic[5].src = photo[0].hot6;
            pic[6].src = photo[0].hot7;
            pic[7].src = photo[0].hot8;
            pic[8].src = photo[0].hot9;
            pic[9].src = photo[0].hot10;
            pic[10].src = photo[0].hot11;
            }else{
                alert("请求失败");
            }
        }
    }
}
window.onload=function(){
    changeadv();
    changeColor();
    changecps();
    changeif();
    bbs();
    huantu();
    button();
    shadow();
    roll();
    ajax();
}





// function test1() {
//         var arr = [];
//         for (var i = 0; i < 10; i++) {
//             arr[i] = function () {
//                 console.log(i);
//             }
            
//         }

//         return arr;
//     }
//     var mine = test1();
//     for (var j = 0; j < 10; j++) {
//         mine[j]();
//     }
//     