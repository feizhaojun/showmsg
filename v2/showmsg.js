/*
function ShowMsg(config) {
  if (!config.content) {
    return;
  }

  var createStyleSheet = function() {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.head.appendChild(style);
    return style.sheet;
  }
  var sheet = createStyleSheet();
  var addStyle = function(selector, rules, index) {
    index = index || 0;
    sheet.insertRule(selector + "{" + rules + "}", index);
  }

  var el = document.createElement('div');
  var s = el.style;

  s.background = 'rgba(0, 0, 0, 0.75)';
  s.width = '100%';
  s.height = document.documentElement.clientHeight + 'px';
  s.position = 'fixed';
  s.left = '0';
  s.top = '0';
  var px2rem = document.documentElement.clientWidth / 7.5;
  s.fontSize = (px2rem > 100 ? 100 : px2rem) + 'px';

  var i = 0;
  let content = `
    <div class="showmsg-content" style="
      font-size: 1em;
      width:5.83em;
      border-radius:.2em;
      background:#fff;
      position:fixed;
      top:50%;
      left:50%;
      font-family: PingFang-SC;
      color: #1E1E1E;
      transform: translate(-50%, -50%);
      padding-top: .44em;
      font-weight: 300;
    ">
  `;
  i = 1;
  if (config.title) {
    content += `
      <div class="showmsg-title" style="
        font-size: .4em;
        height: 1.4em;
        line-height: 1.4em;
        font-weight: 400;
        text-align: center;
      ">${config.title}</div>
    `;
    i++;
  }
  content += `
    <div class="showmsg-content" style="
      font-size: .3em;
      line-height: 1.6em;
      padding: .8em 1.87em 1.47em;
    ">${config.content}</div>
  `;
  if (config.confirm) {
    content += `
      <div class="showmsg-cancel" style="
        font-size: .32em;
        width: 50%;
        height: 2.8em;
        line-height: 2.8em;
        border-top: 1px solid #E3E3E3;
        color: #666;
        cursor:pointer;
        text-align: center;
      ">忽略</div>
      <div class="showmsg-cancel" style="
        font-size: .32em;
        width: 50%;
        height: 2.8em;
        line-height: 2.8em;
        border-top: 1px solid #E3E3E3;
        border-left: 1px solid #E3E3E3;
        color:#1FB895;
        cursor:pointer;
        position: absolute;
        right: 0;
        bottom: 0;
        text-align: center;
      ">去看看</div>
    `;
  } else {
    content += `
      <div class="showmsg-btn-close" style="
        font-size: .32em;
        height: 2.8em;
        line-height: 2.8em;
        border-top: 1px solid #E3E3E3;
        text-align: center;
        cursor:pointer;
      ">关闭</div>
    `;
  }
  content += '</div>';
  el.innerHTML = content;
  this.el = el;
  document.body.appendChild(el);
  var that = this;
  el.children[0].children[i++].onclick = function () {
    el.style.display = 'none';
  }
  if (config.confirm) {
    el.children[0].children[i++].onclick = function () {
      config.confirm();
    }
  }

  config.callback && config.callback();
}

ShowMsg.prototype.hide = function() {
  this.el.style.display = 'none';
}
ShowMsg.prototype.show = function() {
  this.el.style.display = 'block';
}
*/
"use strict";

function ShowMsg(config) {
  if (!config.content) {
    return;
  }

  var createStyleSheet = function createStyleSheet() {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.head.appendChild(style);
    return style.sheet;
  };

  var sheet = createStyleSheet();

  var addStyle = function addStyle(selector, rules, index) {
    index = index || 0;
    sheet.insertRule(selector + "{" + rules + "}", index);
  };

  var el = document.createElement('div');
  var s = el.style;
  s.background = 'rgba(0, 0, 0, 0.75)';
  s.width = '100%';
  s.height = document.documentElement.clientHeight + 'px';
  s.position = 'fixed';
  s.left = '0';
  s.top = '0';
  var px2rem = document.documentElement.clientWidth / 7.5;
  s.fontSize = (px2rem > 100 ? 100 : px2rem) + 'px';
  var i = 0;
  var content = "\n    <div class=\"showmsg-content\" style=\"\n      font-size: 1em;\n      width:5.83em;\n      border-radius:.2em;\n      background:#fff;\n      position:fixed;\n      top:50%;\n      left:50%;\n      font-family: PingFang-SC;\n      color: #1E1E1E;\n      transform: translate(-50%, -50%);\n      padding-top: .44em;\n      font-weight: 300;\n    \">\n  ";
  i = 1;

  if (config.title) {
    content += "\n      <div class=\"showmsg-title\" style=\"\n        font-size: .4em;\n        height: 1.4em;\n        line-height: 1.4em;\n        font-weight: 400;\n        text-align: center;\n      \">".concat(config.title, "</div>\n    ");
    i++;
  }

  content += "\n    <div class=\"showmsg-content\" style=\"\n      font-size: .3em;\n      line-height: 1.6em;\n      padding: .8em 1.87em 1.47em;\n    \">".concat(config.content, "</div>\n  ");

  if (config.confirm) {
    content += "\n      <div class=\"showmsg-cancel\" style=\"\n        font-size: .32em;\n        width: 50%;\n        height: 2.8em;\n        line-height: 2.8em;\n        border-top: 1px solid #E3E3E3;\n        color: #666;\n        cursor:pointer;\n        text-align: center;\n      \">\u5FFD\u7565</div>\n      <div class=\"showmsg-cancel\" style=\"\n        font-size: .32em;\n        width: 50%;\n        height: 2.8em;\n        line-height: 2.8em;\n        border-top: 1px solid #E3E3E3;\n        border-left: 1px solid #E3E3E3;\n        color:#1FB895;\n        cursor:pointer;\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        text-align: center;\n      \">\u53BB\u770B\u770B</div>\n    ";
  } else {
    content += "\n      <div class=\"showmsg-btn-close\" style=\"\n        font-size: .32em;\n        height: 2.8em;\n        line-height: 2.8em;\n        border-top: 1px solid #E3E3E3;\n        text-align: center;\n        cursor:pointer;\n      \">\u5173\u95ED</div>\n    ";
  }

  content += '</div>';
  el.innerHTML = content;
  this.el = el;
  document.body.appendChild(el);
  var that = this;

  el.children[0].children[i++].onclick = function () {
    el.style.display = 'none';
  };

  if (config.confirm) {
    el.children[0].children[i++].onclick = function () {
      config.confirm();
    };
  }

  config.callback && config.callback();
}

ShowMsg.prototype.hide = function () {
  this.el.style.display = 'none';
};

ShowMsg.prototype.show = function () {
  this.el.style.display = 'block';
};


// function ShowMsg(b){if(!b.content){return}var j=function j(){var i=document.createElement("style");i.type="text/css";document.head.appendChild(i);return i.sheet};var g=j();var c=function c(i,m,l){l=l||0;g.insertRule(i+"{"+m+"}",l)};var a=document.createElement("div");var k=a.style;k.background="rgba(0, 0, 0, 0.75)";k.width="100%";k.height=document.documentElement.clientHeight+"px";k.position="fixed";k.left="0";k.top="0";var h=document.documentElement.clientWidth/7.5;k.fontSize=(h>100?100:h)+"px";var d=0;var f='<div class="showmsg-content" style="font-size:1em;width:5.83em;border-radius:.2em;background:#fff;position:fixed;top:50%;left:50%;font-family:PingFang-SC;color:#1E1E1E;transform:translate(-50%, -50%);padding-top:.44em;font-weight:300;">';d=1;if(b.title){f+='<div class="showmsg-title" style="  font-size:.4em;  height:1.4em;  line-height:1.4em;  font-weight:400;  text-align:center;">'.concat(b.title,"</div>");d++}f+='<div class="showmsg-content" style="font-size:.3em;line-height:1.6em;padding:.8em 1.87em 1.47em;">'.concat(b.content,"</div>");if(b.confirm){f+='<div class="showmsg-cancel" style="  font-size:.32em;  width:50%;  height:2.8em;  line-height:2.8em;  border-top:1px solid #E3E3E3;  color:#666;  cursor:pointer;  text-align:center;">\u5FFD\u7565</div><div class="showmsg-cancel" style="  font-size:.32em;  width:50%;  height:2.8em;  line-height:2.8em;  border-top:1px solid #E3E3E3;  border-left:1px solid #E3E3E3;  color:#1FB895;  cursor:pointer;  position:absolute;  right:0;  bottom:0;  text-align:center;">\u53BB\u770B\u770B</div>'}else{f+='<div class="showmsg-btn-close" style="  font-size:.32em;  height:2.8em;  line-height:2.8em;  border-top:1px solid #E3E3E3;  text-align:center;  cursor:pointer;">\u5173\u95ED</div>'}f+="</div>";a.innerHTML=f;this.el=a;document.body.appendChild(a);var e=this;a.children[0].children[d++].onclick=function(){a.style.display="none"};if(b.confirm){a.children[0].children[d++].onclick=function(){b.confirm()}}b.callback&&b.callback()}ShowMsg.prototype.hide=function(){this.el.style.display="none"};ShowMsg.prototype.show=function(){this.el.style.display="block"};
