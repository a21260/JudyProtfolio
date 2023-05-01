// 彈出側欄
function berger(){
  document.getElementById("nav").classList.toggle("menu-show");
}


//判斷pre按鈕和nex按鈕是否出現
function if_pre(){
    if(page>0){
    document.getElementById("hide").classList.remove("no_pre"); 
  }else{
    document.getElementById("hide").classList.add("no_pre");
  }
}

function if_nex(){
  var final_page = $("#" + passBig + " .list .final").index();
  if(page == final_page){
    document.getElementById("hide").classList.add("no_nex"); 
  }else{
    document.getElementById("hide").classList.remove("no_nex");
  }
}


// 大圖出現控制（寫完人生差點去了）
var passBig;
var page;

function detail(big){
  passBig=big; //告訴全世界現在收到哪個big
  page=0; //告訴全世界現在是哪個page
  document.getElementById("hide").classList.toggle("jump");
  document.getElementById(big).classList.toggle("none");
  
  //初始化
  $("#" + big+ " .list").css("margin-left", "0px");
  document.getElementById("hide").classList.add("no_pre");
  if_nex();
}


function close_detail(){
  document.getElementById(passBig).classList.toggle("none");
  document.getElementById("hide").classList.toggle("jump");
}

// 滑圖按鈕控制
function nex(){ 
  //翻頁
  page++;
  var list = $("#" + passBig + " .list");
  var margin = "-" + page + "00%";
  console.log(margin);
  list.animate({'margin-left':margin},500);

  if_pre();
  if_nex();
}

function pre(){
//翻頁
page--;
var list = $("#" + passBig + " .list");
var margin = "-" + (page) + "00%";
console.log(margin);
list.animate({'margin-left':margin},500);

if_pre();
if_nex();
}

//摺疊介紹
function intro_fold(){
  document.getElementById("hide").classList.toggle("intro_fold-show");
}



