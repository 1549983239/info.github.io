var ex = document.getElementById('exhibition');
var pic = ex.getElementsByTagName('img');
var ul = ex.getElementsByTagName('ul');
var lis = ul[0].getElementsByTagName('li');
var c = 0;
// 计时器调用的函数
function autorun() {
    c++;
    if (c == 4) {
        c = 0;
    }
    for (var i = 0; i < 4; i++) {
        pic[i].style.display = 'none';
        lis[i].style.background = '#61778B';
    }
    pic[c].style.display = 'block';
    lis[c].style.background = 'white';
    console.log(pic[c]);
    console.log(c);
}
var timer = setInterval(autorun, 2000);

for (var i = 0; i < lis.length; i++) {
    lis[i].xuhao = i;
    lis[i].onmouseover = function () {
        clearInterval(timer);
        c = this.xuhao;
        for (var i = 0; i < lis.length; i++) {
            pic[i].style.display = 'none';
            lis[i].style.background = '#61778B';
            lis[i].style.cursor = 'pointer';
        }
        pic[c].style.display = 'block';
        lis[c].style.background = 'white';
    }
    // 给li加鼠标移出事件
    lis[i].onmouseout = function () {
        timer = setInterval(autorun, 2000);
    }
}

//轮播图左侧导航栏部分
var aside = document.getElementById('aside');
var l = aside.getElementsByTagName('li');
var con = document.getElementsByClassName('aside-right');
var cont = document.getElementById('container');
var cl = cont.getElementsByTagName('li');


for (var i = 0; i < l.length; i++) {
    l[i].xuhao = i;
    l[i].onmouseover = function () {
        var c = this.xuhao;
        this.style.background = '#ff6700';
        for (var j = 0; j < con.length; j++) {
            con[j].style.display = 'none';
        }
        var that = this;
        con[c].style.display = 'block';
        con[c].onmouseover = function () {
            con[c].style.display = 'block';
            that.style.background = '#ff6700';
        }
        con[c].onmouseout = function () {
            con[c].style.display = 'none';
            that.style.background = '';
        }
    };
    l[i].onmouseout = function () {
        for (var i = 0; i < con.length; i++) {
            con[i].style.display = 'none';
            this.style.background = '';
        }
    }
}

// 活动倒计时
var auto = document.getElementById('auto');
var sp = auto.getElementsByTagName('span');

function djs() {
    var timenow = new Date();
    var timeday = new Date(2020, 10, 1, 0, 0, 0);

    var diff = timeday.getTime() - timenow.getTime();
    // 计算天数
    var days = parseInt(diff / (24 * 60 * 60 * 1000));
    diff = diff % (24 * 60 * 60 * 1000);
    // 计算小时
    var hours = parseInt(diff / (60 * 60 * 1000));
    // 计算完小时剩余的毫秒数
    diff = diff % (60 * 60 * 1000);
    // 计算分钟
    var minutes = parseInt(diff / (60 * 1000));
    // 计算完分钟剩余的毫秒数
    diff = diff % (60 * 1000);
    // 计算秒数
    var seconds = parseInt(diff / 1000);
    sp[0].innerHTML = hours;
    sp[1].innerHTML = minutes;
    sp[2].innerHTML = seconds;
}
setInterval(djs, 1000);
