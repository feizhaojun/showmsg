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
  s.minHeight = '100vh';
  s.zIndex = '999';
  var px2rem = document.documentElement.clientWidth / 7.5;
  s.fontSize = px2rem + 'px';
  var i = 0;
  var content = "<div class=\"showmsg-content\" style=\"font-size: 1em;width:5.83em;border-radius:.2em;background:#fff;position:fixed;top:50%;left:50%;font-family: PingFang-SC;color: #1E1E1E;transform: translate(-50%, -50%);padding-top: .44em;font-weight: 300;\">";
  i = 1;

  if (config.title) {
    content += "<div class=\"showmsg-title\" style=\"font-size: .4em;height: 1.4em;line-height: 1.4em;font-weight: 400;text-align: center;\">".concat(config.title, "</div>");
    i++;
  }

  content += "<div class=\"showmsg-content\" style=\"font-size: .3em;line-height: 1.6em;padding: .8em 1.87em 1.47em;\">".concat(config.content, "</div>");

  if (config.confirm) {
    content += "<div class=\"showmsg-cancel\" style=\"font-size: .32em;width: 50%;height: 2.8em;line-height: 2.8em;border-top: 1px solid #E3E3E3;color: #666;cursor:pointer;text-align: center;\">\u5FFD\u7565</div><div class=\"showmsg-cancel\" style=\"font-size: .32em;width: 50%;height: 2.8em;line-height: 2.8em;border-top: 1px solid #E3E3E3;border-left: 1px solid #E3E3E3;color:#1FB895;cursor:pointer;position: absolute;right: 0;bottom: 0;text-align: center;\">\u53BB\u770B\u770B</div>";
  } else {
    content += "<div class=\"showmsg-btn-close\" style=\"font-size: .32em;height: 2.8em;line-height: 2.8em;border-top: 1px solid #E3E3E3;text-align: center;cursor:pointer;\">\u5173\u95ED</div>";
  }

  content += '</div>';
  el.innerHTML = content;
  this.el = el;
  document.body.appendChild(el);
  var that = this;

  el.children[0].children[i++].onclick = function () {
    el.style.display = 'none';
    config.cancel && config.cancel();
    // toast
    var toast = document.createElement('div');
    var t = toast.style;
    t.width = '70%';
    t.textAlign = 'center';
    t.position = 'fixed';
    t.top = '50%';
    t.fontWeight = '300';
    t.left = '50%';
    t.padding = '.6em .2em';
    t.transform = 'translate(-50%, -50%)';
    t.borderRadius = '.2em';
    t.backgroundColor = 'rgba(0,0,0,.5)';
    t.fontSize = px2rem + 'px';
    t.transition = '.3s';
    s.zIndex = '999';
    document.body.appendChild(toast);
    toast.innerHTML = '<span style="display:block;line-height:1.8em;font-size: .32em;color: #fff;">您之后可以在学员列表中进行查看关联学员</span>';
    window.setTimeout(function() {
      t.opacity = '0';
      window.setTimeout(function() {
        toast.remove();
      }, 300);
    }, 4000);
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