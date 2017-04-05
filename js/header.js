/**
 * Created by Administrator on 2016/12/23.
 */

//选项文字的变化

$(function () {
    $("#filter a").on("click", function () {
        //红色
        $(this).parent().siblings().children().css({color: "#8e8e93"})
        $(this).css({color: "#f84e4e"});
    });
})

$(function () {
    //以下控制鼠标滑入变色
    $(".nav-block li").on("mouseenter", function () {
        $(this).addClass("active").siblings().removeClass();
    })
    ////以下控制鼠标滑入显示下拉框,并且给每个下拉框的li一个新类名,让鼠标滑入li变色
    $(".nav-block li:eq(1)").on("mouseenter", function () {
        $(".nav-none:eq(0)").stop().slideDown(0).mouseleave(function () {
            $(this).stop().slideUp("fast");
        });
        $(".nav-none:eq(0) li").mouseenter(function () {
            $(this).addClass("ch").siblings().removeClass("ch");
        }).mouseleave(function () {
            $(this).removeClass("ch");
        })
    })
    $(".nav-block li:eq(2)").on("mouseenter", function () {
        $(".nav-none:eq(1)").stop().slideDown(0).mouseleave(function () {
            $(this).stop().slideUp("fast");
        });
        $(".nav-none:eq(1) li").mouseenter(function () {
            $(this).addClass("ch").siblings().removeClass("ch");
        }).mouseleave(function () {
            $(this).removeClass("ch");
        })
    })
    $(".nav-block li:eq(3)").on("mouseenter", function () {
        $(".nav-none:eq(2)").stop().slideDown(0).mouseleave(function () {
            $(this).stop().slideUp("fast");
        });
        $(".nav-none:eq(2) li").mouseenter(function () {
            $(this).addClass("ch").siblings().removeClass("ch");
        }).mouseleave(function () {
            $(this).removeClass("ch");
        })
    })
});
//以下控制Android版下载
$(function () {
    $(".android-download").on("mouseenter", function () {
        $(".android-download-list").stop().slideDown("slow");
        $(".btn-android").addClass("bg");
    });
    $(".android-download").on("mouseleave", function () {
        $(".android-download-list").stop().slideUp(50);
        $(".btn-android").removeClass("bg");
    });
});
//中心内容块

$(function () {

    var height = $(".header").height();
    $(document).scroll(function () {
        var scrollHeight = $(document).scrollTop();
        if (scrollHeight > height) {
            $(".nav-wrapper").css({
                position: "fixed",
                width: "100%",
                backgroundColor: "#F84E4E",
                top: 0,
                zIndex: 9999
            })
            //显示固定导航栏
            $(".nav-wrapper .searchBar").css({
                display: "block",
                //right:"200px"
            });
            //显示回到顶部按钮
            $(".back-top").css({
                display: "block",
            })
            $(".banner-wrapper").css("marginTop", $(".nav-wrapper .searchBar").height());
        } else {
            $(".nav-wrapper").css({
                position: "relative",
                right: 0
            })
            //隐藏固定导航
            $(".nav-wrapper .searchBar").css({
                display: "none",
                //right:"200px"
            });
            //隐藏回到顶部按钮
            $(".back-top").css({
                display: "none",
            })
            $(".banner-wrapper").css("marginTop", 0);
        }
    })
});

//登陆部分

$(function () {
    $(".btn-login").on("click", function () {
        $(".modal").css({
            display: "block",
        })
        $(".modal-bg").css({
            display: "block"
        })
    })
    $(".modal-close").on("click", function () {
        $(".modal").css({
            display: "none",
        })
        $(".modal-bg").css({
            display: "none"
        })
    })
})

//动态创建元素
$(function () {

    var obj = [
        {
            pic: "images/p1.jpg",
            title: '安全的温暖魔法，一举击退严寒攻击',
            content: '冬至依然悄悄过去，真正寒冷的时刻real来临了！',
            f: 82,
            t: 2,
            th: 37
        },
        {
            pic: "images/p2.jpg",
            title: '亲爱的新的一年里，让我们更加相亲相爱',
            content: '亲爱的，一不小心又一年了！在新的一年里，希望我们更加的相亲相爱，不吵不闹，不离不弃。我不需要你每天都对我说情话，也...',
            f: 1285,
            t: 2,
            th: 1115
        },
        {
            pic: "images/p3.jpg",
            title: '【12月23日】宜珍视，关键词：回忆',
            content: '分享自 @礼物说',
            f: 3112,
            t: 1,
            th: 1034
        },
        {
            pic: "images/p4.jpg",
            title: 'All in这些吃土色唇膏，就算吃土我也乐意！',
            content: '买买买的后果就是......又双叒吃土啦！不过有种颜色的口红即使买到吃土小编也愿意，那就是吃土色啦！它比大地色更纯...',
            f: 2783,
            t: 4,
            th: 652
        },
        {
            pic: "images/p5.jpg",
            title: '极简主义者，才是最有个性的人',
            content: '不是不喜欢复杂的装饰，只是不喜欢为了复杂而复杂的装饰，喜欢极端，爱极简。清新而又独具匠心的小设计，就很招人喜欢。赶...',
            f: 1193,
            t: 2,
            th: 1590
        },
        {
            pic: "images/p6.jpg",
            title: '当你的钱包装不下压岁钱的时候，不如换个新钱包',
            content: '年末了，是不是该给自己换个钱包涨涨财运呢？或者给重要的人挑个钱包，当作新年礼物。那么问题来了，哪家钱包工艺好、格调高',
            f: 1791,
            t: 4,
            th: 1341
        },
        {
            pic: "images/p7.jpg",
            title: '十二月的衣橱 | 你需要一点「圣诞红」',
            content: '啦啦啦~明天平安夜，宝宝们今天怎么过节？再过几天就是新年，一个个节日过的人家无心工作学习呢~',
            f: 2040,
            t: 5,
            th: 756
        },
        {
            pic: "images/p8.jpg",
            title: '高段位搭配小心机，原来都靠这些蝴蝶结！',
            content: '美腻了一整个春夏的蝴蝶结单品，在这个秋冬依然是必备元素。钟爱它的原因很简单，因为搭配上它，就能全身都是戏~好咯，各...',
            f: 1781,
            t: 2,
            th: 393
        },
        {
            pic: "images/p9.jpg",
            title: '新年新壳新风向，手机Case也要Chic风',
            content: '现在每家手机厂家们只会拼命把手机设计的再薄、再轻一点，而我们却只想加一堆bling bling的壳在上面。不过其实...',
            f: 1434,
            t: 1,
            th: 237
        },
        {
            pic: "images/p10.jpg",
            title: '元旦回家不空手，这些礼物送给家里的“父皇”和“母后”',
            content: '他们曾经陪伴我们整个童年，现在我们陪伴他们的时间却寥寥无几。每次元旦或是过年回家，看到爸妈鬓间的白发又多了一层，额...',
            f: 1426,
            t: 2,
            th: 3011
        },
        {pic: "images/p11.jpg", title: '【12月22日】宜自恋，关键词：态度', content: '分享自 @礼物说', f: 4084, t: 2, th: 3034},
        {
            pic: "images/p12.jpg",
            title: '2017年将这些礼物，送给可爱的鸡宝宝们',
            content: '马上就是要到鸡年啦，不知道你身边属鸡的宝宝多不多，想必礼物说也有很多属鸡的宝宝吧，快出来和我打个招呼啊，这新的一年...',
            f: 3297,
            t: 4,
            th: 1190
        },
        {
            pic: "images/p13.jpg",
            title: '除了MUJI，你必须拥有的岛国文具',
            content: '说到岛国文具，我相信每一个人首先想到的必定是性冷淡风的鼻祖--MUJI，但是作为“文具大国”的日本，他们不仅在文具...',
            f: 19119,
            t: 11,
            th: 1781
        },
        {
            pic: "images/p14.jpg",
            title: 'Pantone 年度流行色：草木绿 Greenery参上！',
            content: '最近Pantone刚刚发布的最新流行色：草木绿。这是一個充满着希望，并与大自然重新连结的象征，也有『振兴』、『再生...',
            f: 2677,
            t: 5,
            th: 2069
        },
        {
            pic: "images/p15.jpg",
            title: '不用忌口，在年前依旧可以瘦瘦瘦',
            content: '都说每逢佳节胖三斤，马上就要过节了，还没减肥怎么办。关键现在还是冬天，很容易饿，而且没事就喜欢吃点小零食，解解馋！...',
            f: 6488,
            t: 2,
            th: 1867
        },
        {
            pic: "images/p16.jpg",
            title: '你知道哪些又美又生僻的字词呢？|参与即得10积分',
            content: '一句话道出了，故人归里，人面不知何处在，桃花依旧笑春风的迷离唯美。',
            f: 16092,
            t: 7082,
            th: 2943
        },
        {
            pic: "images/p17.jpg",
            title: '植物系少女心，Ta的圣诞礼物理应别致 ',
            content: '口红粉底包包送了一遍，又到一年年末最大の送礼节日，我该怎么办？',
            f: 9208,
            t: 12,
            th: 3568
        },
        {
            pic: "images/p18.jpg",
            title: '小空间的圣诞气氛制胜锦囊',
            content: '圣诞气息越来越浓啦～不知道你家装扮的如何了呢？家里空间太小，不知道从何着手？不用担心，小礼君来激发你的创意灵感。',
            f: 5752,
            t: 5,
            th: 2702
        },
        {
            pic: "images/p19.jpg",
            title: '【12月21日】宜小众，关键词：品位',
            content: '分享自 @礼物说',
            f: 8659,
            t: 4,
            th: 2793
        },
        {
            pic: "images/p20.jpg",
            title: '最适合囤货 | 全球热卖面膜TOP10',
            content: '一到年底，就各种活动各种打折忙不停，小礼君汇总了今年卖得最好的10款面膜！功效品种齐全，价格也很美腻，没囤的妹纸赶...',
            f: 11161,
            t: 3,
            th: 1751
        },
        {
            pic: "images/p21.jpg",
            title: '又到年底啦，送同学一款2017貌美台历',
            content: '已经接近2016的尾声了，2017年也马上就要来啦。都大了一岁，是怎么样的心情呢？新的一年又有怎样的计划和目标呢？...',
            f: 5550,
            t: 4,
            th: 1152
        },
        {
            pic: "images/p22.jpg",
            title: '宅家没人做饭，也可以"酱"紫过啊',
            content: '有时候周末，家里没有人，外卖周边小吃都吃腻了，而且又懒的出门，又不会做饭怎么办好呢？这个时候你只需要有一瓶神奇的酱...',
            f: 786,
            t: 79,
            th: 897
        },
        {
            pic: "images/p23.jpg",
            title: '圣诞特惠高端数码办公款，剥夺你哭穷的权力',
            content: '越长大越发现从前的不认牌子的自己实在是太天真，像这种数码办公类的牌子，价格是一方面，关键要真正好用才行。如果上班上...',
            f: 777,
            t: 888,
            th: 6575
        },
        {
            pic: "images/p24.jpg",
            title: '日本圣诞版零食，包装就能引起你的注意',
            content: '这里都是日本零食，而且通通都是圣诞款的哦，不仅味道好，而且包装做的也十分的精致！送人真的非常适合，另外，部分商品是...',
            f: 3303,
            t: 34,
            th: 2345
        }
    ];

    var index = 0;
    var j = 24;
    var index1 = 1;
    createLi();
    function createLi() {
        for (var i = index; i < j * (index1 / 4); i++) {
            var lis = $("<li class='post-item'>" +
                "<a class='pitem' target='_self'>" +
                "<div class='pitem-top'><img src=" + obj[i].pic + " width='100%' height='100%'/></div>" +
                "<div class='pitem-title'>" + obj[i].title + "</div>" +
                "<div class='pitem-content'>" + obj[i].content + "</div>" +
                "<ul class='pitem-info'>" +
                "<li class='info-item fl'>" +
                "<i class='info-icon icon-like'></i>" +
                "<span class='f" + i + "'>" + obj[i].f + "</span>" +
                "</li>" +
                "<li class='info-item fl'>" +
                "<i class='info-icon icon-comment'></i>" +
                "<span class='t'>" + obj[i].t + "</span>" +
                "</li>" +
                "<li class='info-item fl'>" +
                "<i class='info-icon icon-share'></i>" +
                "<span class='th'>" + obj[i].th + "</span>" +
                "</li>" +
                "</ul>" +
                "</a>" +
                "</li>"
            )
            $("#reco-list").append(lis);
            //图片上浮阴影效果
            $('.post-item').mouseenter(function () {
                $(this).css({
                    position: 'relative',
                    boxShadow: '-1px 3px 5px 0px rgba(0,0,0,.4)'
                });
                $(this).stop().animate({
                    top: -5,
                })
            });
        }
        $('.post-item').mouseleave(function () {
            $(this).css({
                position: 'relative',
                boxShadow: '',
            });
            $(this).stop().animate({
                top: 0,
            })
            $(".post-item a .icon-like").on("dblclick", function () {
                var m = $(".post-item a span").attr("class");

                $(".post-item a span." + m + "").html(parseInt($(".post-item a span." + m + "").html()) + 1);
                $(this).css({
                    backgroundImage: "url('images/icon_favorites_selected_35f43f3.png')"
                });
            })
        })
    }

    $("#next a").on("click", function () {
        index += 6;
        index1++;
        createLi();
    })
});

//下载手机版
$(function () {
    $('.phone a').eq(0).mouseenter(function () {
        $(this).addClass('ios-current')
    });
    $('.phone a').eq(0).mouseleave(function () {
        $(this).removeClass('ios-current')
    });
    $('.phone a').eq(1).mouseenter(function () {
        $(this).addClass('android-current')
    });
    $('.phone a').eq(1).mouseleave(function () {
        $(this).removeClass('android-current')
    });
    ///
//            $('.pic5 .ios').mouseenter(function () {
//                $(this).addClass('pic5-ios-on');
//            })
    ////
    $('.pic5-arrow a').eq(0).mouseenter(function () {
        $(this).addClass('pic5-ios-current')
    });
    $('.pic5-arrow a').eq(0).mouseleave(function () {
        $(this).removeClass('pic5-ios-current')
    })
    $('.pic5 a').eq(1).mouseenter(function () {
        $(this).addClass('pic5-android-current')
    });
    $('.pic5 a').eq(1).mouseleave(function () {
        $(this).removeClass('pic5-android-current')
    });
});


setSlider("slide-box", "imgs", "", "", "");
/**
 * Created by Administrator on 2016/12/12.
 */
function setSlider(boxid, ulid, arrowid, leftid, rightid) {
    //获取要操作的对象
    var box = document.getElementById(boxid);
    var ad = box.children[0];
    var ul = document.getElementById(ulid);
    var lis = ul.children;
    var imgWidth = ad.offsetWidth;
    //根据li标签的个数动态生成小方块
    //克隆第一张图片，放在最后面
    var firstImg = lis[0].cloneNode(true);
    ul.appendChild(firstImg);

    var pic = 0;
    setInterval(playNext, 2000);

    /**
     * 封装了一个匀速移动的动画函数
     * @param obj
     * @param target
     */
    function animate(obj, target) {
        clearInterval(obj.timerId); // 保证当前标签对象运动的时候，只会开启一个定时器
        obj.timerId = setInterval(function () {  // 开启定时器
            var leader = obj.offsetLeft; //获取标签对象的当前的位置
            var step = 20;//定义一个步长
            step = leader < target ? step : -step; //判断步长是正还是负
            if (Math.abs(leader - target) > Math.abs(step)) { //修改判断条件
                leader = leader + step;//在当前的位置加上步长
                obj.style.left = leader + 'px';
            } else {
                clearInterval(obj.timerId); //清除当前对象的定时器
                obj.style.left = target + 'px'; //最后不足一个步长的时候，不用迈那一步了，直接设置成目标位置即可
            }
        }, 15);
    }

    function playNext() {
        if (pic == lis.length - 1) {
            pic = 0;
            ul.style.left = "0px";
        }
        //console.log(pic);
        pic++;
        animate(ul, -imgWidth * pic);
    }
}


//music

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

window.onload = function () {
    var audio = document.getElementById('audio');
    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    var audioSrc = ctx.createMediaElementSource(audio);
    // we have to connect the MediaElementSource with the analyser
    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);
    // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
    // analyser.fftSize = 64;
    // frequencyBinCount tells you how many values you'll receive from the analyser
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // we're ready to receive some data!
    var canvas = document.getElementById('canvas'),
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 10, //width of the meters in the spectrum
        gap = 2, //gap between meters
        capHeight = 2,
        capStyle = '#fff',
        meterNum = 800 / (10 + 2), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
    ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(1, '#0f0');
    gradient.addColorStop(0.5, '#ff0');
    gradient.addColorStop(0, '#f00');
    // loop
    function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
            var value = array[i * step];
            if (capYPositionArray.length < Math.round(meterNum)) {
                capYPositionArray.push(value);
            }
            ;
            ctx.fillStyle = capStyle;
            //draw the cap, with transition effect
            if (value < capYPositionArray[i]) {
                ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
            } else {
                ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
                capYPositionArray[i] = value;
            }
            ;
            ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
            ctx.fillRect(i * 12 /*meterWidth+gap*/, cheight - value + capHeight, meterWidth, cheight); //the meter
        }
        requestAnimationFrame(renderFrame);
    }

    renderFrame();
    audio.play();
};


//音乐图标效果

$(function () {
    $(".music-icon").on("mouseenter", function () {
        $(".music").css({
            display: "block"
        })
        $(".music").on("mouseleave", function () {
            $(this).css({
                display: "none"
            })
        })
    })
})


