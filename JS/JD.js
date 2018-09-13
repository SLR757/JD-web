{
    //二级导航
    $(document).ready(function(){
        var erji = document.getElementById("erji");
        var lii_1 = document.querySelectorAll("#lii_1");
        lii_1[0].onmouseenter = function(){
            erji.classList.remove("hide1");
        }
        lii_1[0].onmouseleave = function(){
            erji.classList.add("hide1");
        }
        erji.onmouseenter = function(){
            erji.classList.remove("hide1");
        }
        erji.onmouseleave = function(){
            erji.classList.add("hide1");
        }
        // console.log(lii_a);

        var erji2 = document.getElementById("erji2");
        var lii_2 = document.querySelectorAll("#lii_2");
        lii_2[0].onmouseenter = function(){
            erji2.classList.remove("hide1");
        }
        lii_2[0].onmouseleave = function(){
            erji2.classList.add("hide1");
        }
        erji2.onmouseenter = function(){
            erji2.classList.remove("hide1");
        }
        erji2.onmouseleave = function(){
            erji2.classList.add("hide1");
        }
    });
// }

//******************************************* */
// banner轮播图

    var pics = ["1.jpg", "2.jpg", "5.jpg", "4.jpg","1.jpg"];
     console.log(pics);
    // 循环数组，两个参数 一个是第几个 一个是一共几个
    pics.forEach(function (e, i) {

        // 创建div。装图片
        $("<div></div>")
            // 设置css样式
            .css({
                height: "100%",
                width: "100%",
                // 设置为背景图片  e为图片索引
                "background-image": "url(" + e + ")",
                // 设置图片大小
                "background-size": "100% 100%",
                // 利用图片个数加单张宽度计算div总宽度
                left: i * 590 + "px"
            })
            // 添加
            .addClass("second_middle-item")
            .appendTo($("#banner"));
    });

    //创建白点
    // pics.length-1  图片数组的个数
    for (var i = 0; i < pics.length - 1; i++) {
        $("<li></li>")
            .appendTo($("#points"))

            .attr("index", i)
            .on("click", function () {
                var index = $(this).attr("index") * 1;
                gotoPage(index);
            });
    }
    //.eq()方法，获取jq对象中第n个元素并放入一个新的jq对象。返回这个新的jq对象。
    $("#points li").eq(0).addClass("high-lighted");

    //记录当前显示第几张
    var currentPage = 0;

    function previous() {
        $("#points li").eq(currentPage).removeClass("high-lighted");
        currentPage--;
        if (currentPage < 0) {
            currentPage = 0;
        }
        $("#points li").eq(currentPage).addClass("high-lighted");

        $("#banner").css("left", -currentPage * 590 + "px");
    }

    function next() {
        // $("#banner").css("transition","all 0.7s");

        $("#points li").eq(currentPage).removeClass("high-lighted");
        currentPage++;
        $("#points li").eq(currentPage).addClass("high-lighted");

        if (currentPage >= pics.length) {
            currentPage = 0;
        }

        $("#banner").css("left", -currentPage * 590 + "px");
        if (currentPage == pics.length - 1) {
            // 当切换最后一张图片时，等切换动画昨晚，立刻回到第0张。
            currentPage = 0;
            $("#points li").eq(currentPage).addClass("high-lighted");
            setTimeout(function () {
                $("#banner").css("transition", "none");
                $("#banner").css("left", 0);

                //保证图片已经回到第一张之后在添加过渡效果。
                setTimeout(function () {
                    $("#banner").css("transition", "all 0.7s");
                }, 30);
            }, 700);
        }
    }

    //切换到第几页
    function gotoPage(page) {
        $("#points li").eq(currentPage).removeClass("high-lighted");
        currentPage = page;
        $("#points li").eq(currentPage).addClass("high-lighted");
        $("#banner").css("left", -currentPage * 590 + "px");
    }

    var timer = setInterval(next, 4000);

    $("#banner").css("left", "0");

    //------------------------------------------

    //mousemove事件，鼠标指针在元素上移动时触发。
    $("#second_middle").on("mousemove", function (e) {
        // console.log(e.pageX);
        // console.log($("#second_middle").width());
        if (e.pageX >= $("#second_middle").width() / 2 + $("#second_middle").offset().left) {
            $("#right").show();
            $("#left").hide();
        } else {
            $("#left").show();
            $("#right").hide();
        }
    });

    $("#second_middle").on("mouseleave", function () {
        $("#left").hide();
        $("#right").hide();
    });

    $("#right").on("click", function () {
        if (this.isMoving) {
            return;
        }
        next();
        clearInterval(timer);
        timer = setInterval(next, 4000);

        var that = this;
        that.isMoving = true;
        setTimeout(function () {
            that.isMoving = false;
        }, 700);
    });

    $("#left").on("click", function () {
        previous();
        clearInterval(timer);
        timer = setInterval(next, 4000);
    })


               
 }


//*********************************************** */
{
    $(document).ready(function(){
    //固定搜索框
    var time = setInterval(show,60);
    function show(){
    var top = $(document).scrollTop();
    if(top>1000){
        $('#such_box').show();
    }else{
        $('#such_box').hide();
    }
    }

    // 回到顶部
    $("#back_top").click(function(){
        //$('body,html').animate({scrollTop:0},1000);
    if ($('html').scrollTop()) {
        $('html').animate({ scrollTop: 0 }, 1000);
        return false;
    }
        $('body').animate({ scrollTop: 0 }, 1000);
         return false;            
   }); 
   
   $("#back_top").onmouseenter(function(){
       $("#b_top_h").show();
   })
   $("#back_top").onmouseleave(function(){
    $("#b_top_h").hide();
   })


  
})
}