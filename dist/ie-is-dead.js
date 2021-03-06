﻿if (
  navigator.userAgent.indexOf("MSIE ") > 0 ||
  navigator.userAgent.indexOf("Trident/") > 0
) {
  (function () {
    /**
     *  IE已死弹窗
     */

    var ieIsDead = {};

    if (!window.ieIsDead) {
      window.ieIsDead = {};
    }

    ieIsDead.delay = 0;
    if (!isNaN(parseInt(window.ieIsDead.delay))) {
      ieIsDead.delay = window.ieIsDead.delay;
    }

    ieIsDead.version = 10;
    if (!isNaN(parseInt(window.ieIsDead.version))) {
      ieIsDead.version = window.ieIsDead.version;
    }

    var recommendBrowsers = [
      {
        slug: "chrome",
        name: "谷歌浏览器",
        url: "https://www.google.cn/chrome/",
      },
      {
        slug: "firefox",
        name: "火狐浏览器",
        url: "https://www.mozilla.org/zh-CN/firefox/",
      },
      {
        slug: "edge",
        name: "微软浏览器",
        url: "https://www.microsoft.com/zh-cn/windows/microsoft-edge/",
      },
    ];

    if (
      /^\[object [^A]*Array\]$/.test(
        Object.prototype.toString.call(window.ieIsDead.recommendBrowsers)
      )
    ) {
      recommendBrowsers = window.ieIsDead.recommendBrowsers;
    }

    // 国产双核浏览器
    ieIsDead.browserNames = {
      "360SE": "360浏览器",
      Maxthon: "傲游浏览器",
      Sogou: "搜狗浏览器",
      LBBROWSER: "猎豹浏览器",
      QQBrowser: "QQ浏览器",
      UC: "UC浏览器",
    };

    // 示意图高度
    ieIsDead.imgHeight = {
      QQBrowser: 172,
      "360SE": 176,
      LBBROWSER: 220,
      Maxthon: 400,
      Sogou: 119,
      UC: 126,
    };

    ieIsDead.browser = function () {
      var u = navigator.userAgent;
      var browser = "IE";

      if (u.indexOf("QQBrowser") > -1) {
        browser = "QQBrowser";
      } else if (u.indexOf("MetaSr") > -1 || u.indexOf("Sogou") > -1) {
        browser = "Sogou";
      } else if (u.indexOf("UC") > -1 || u.indexOf(" UBrowser") > -1) {
        browser = "UC";
      } else if (
        u.indexOf("LBBROWSER") > -1 ||
        (!!window.external && !!window.external.LiebaoAutoFill_CopyToClipboard)
      ) {
        browser = "LBBROWSER";
      } else if (
        u.indexOf("Maxthon") > -1 ||
        !!window._MX$MF_6a39a14b_c884_4333_a26b_08330f10ab4aMxBIG
      ) {
        browser = "Maxthon";
      } else if (u.indexOf("360SE") > -1) {
        browser = "360SE";
      } else {
        // IE9、10
        if (!!u.match(/MSIE (9|10)/g)) {
          // 根据窗口标题栏、网址栏、收藏栏高度判断
          var navigator_top = window.screenTop - window.screenY;
          switch (navigator_top) {
            case 75:
            case 74:
            case 105:
            case 104:
              browser = "360SE";
              break;
          }
        }
      }

      return browser;
    };

    ieIsDead.load = function () {
      var css =
        '#ieisdead-box{text-align:center;display:block!important}\
            #ieisdead-box .ieisdead-wrap{position:absolute;z-index:2147483647;top:25px;left:0;right:0}\
            #ieisdead-box .ieisdead-box{width:800px;margin:0 auto 20px;overflow:hidden;border:1px solid #ededed}\
            #ieisdead-box .ieisdead-main{border:10px solid #fff;font-family:"宋体"}\
            #ieisdead-box .ieisdead-line{height:32px;line-height:32px;background-color:#ffeeba;color:#c4691f;text-align:center;font-size:12px}\
            #ieisdead-box .ieisdead-line a{color:#c4691f;text-decoration:none}\
            #ieisdead-box .ieisdead-notice{background-color:#fff8e5;padding:50px 55px 55px;text-align:left;color:#c4691f;font-size:16px}\
            #ieisdead-box .ieisdead-title{display:block;background-repeat:no-repeat;line-height:22px;height:22px;padding-left:26px;margin:50px 0 10px 0;font-weight:700}\
            #ieisdead-box .ieisdead-title_alert{margin:0 0 24px;padding:0;font-size:24px;line-height:28px;height:28px;color:#da2128}\
            #ieisdead-box .ieisdead-title_horn{background-image:url("data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAOVBMVEX/+OXhsIH03b/TjFD87tnp\
        wprLejf45svw1LPPg0PluY7EaR/HcSvty6bep3XWll3anmjWlVzPhESVsnVVAAAAc0lEQVQY05XQ\
        2wqAIAwGYN10Hsvq/R+2TUIlQ2gXjn0w+J1al/kwyHE2OjU3awezGbSgwdgtGMUoSq7KkRKb4Oa5\
        RTEX5K0IxCPK4LGhCryb3rjzPq1wXoeOENqIF5YnEkikHt4N4ZvS/E05SGkHmU73s24fMwKHV0sA\
        uQAAAABJRU5ErkJggg==")}\
            #ieisdead-box .ieisdead-title_browser{background-image:url("data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAP1BMVEX/+OXisIHTjFDPg0Pw1LPe\
        p3XanmjluY787tnty6banmnPhETLejf03b/Lejj45svWlVzHcCvpwprEaR/eqHXXrN+wAAAAvElE\
        QVQY022QC67EIAhF+QhatNp23v7X+kA7n0yGmIuecEGFFZfVx6PaBu/YGFtGzIz8wqIlI6CvXPTv\
        ZgcAQ8Di6cDpJSLTCUHND9GBCww+6Oz9pIPHLN8Ewh2V90Y20N0zLbg2u85UPmHIiYjWXYhcurmc\
        0FJKmVxUXTi7tGX4sn8N4hgkv68EVGDvxNQace07jLAlroqyKgWVawKPbPHW54doBpiUxiUB5Rq0\
        WHQgq+hRjcL7whKD5Eb/ef8FPxWgioAAAAAASUVORK5CYII=")}\
            #ieisdead-box .ieisdead-text{position:relative;margin:10px 2px;line-height:24px}\
            #ieisdead-box .ieisdead-text-muted, #ieisdead-box .ieisdead-text-muted a{color:#999}\
            #ieisdead-box a{color:#da2128;text-decoration:underline}\
            #ieisdead-browsers .ieisdead-browser-link{text-decoration:none;display:inline-block;width:90px;color:#c4691f}\
            #ieisdead-browsers .ieisdead-browser-dlink{text-decoration:none;background-color:#ffeeba;color:#c4691f;display:inline-block;width:60px;text-align:center}\
            #ieisdead-browsers .ieisdead-browser-dlink:hover{background-color:#dc3545;color:#fff}\
            #ieisdead-browsers .ieisdead-browser-clear{clear:left;width:100%;height:1px;content:""}\
            #ieisdead-browsers .ieisdead-browser{background-color:#fff;background-repeat:no-repeat;background-position:8px 5px;line-height:44px;padding-left:20px;float:left;margin:18px 18px 0 0}\
            #ieisdead-browsers .ieisdead-browser-mr0{margin-right:0}';

      var style = document.createElement("style");
      style.id = "ieIsDead_style";
      style.type = "text/css";

      if (style.styleSheet) style.styleSheet.cssText = css;
      else style.innerHTML = css;

      document.getElementsByTagName("head")[0].appendChild(style);

      var isXP = navigator.userAgent.indexOf("Windows NT 5") != -1;
      var is7or8 = navigator.userAgent.indexOf("Windows NT 6") != -1;
      var recommendBrowsersHtml = "";
      for (var i = 0; i < recommendBrowsers.length; i++) {
        var recommendBrowsersConfig = recommendBrowsers[i];
        var slug = recommendBrowsersConfig["slug"];

        var classes = "ieisdead-browser ieisdead-browser_" + slug;
        // 第三个右边距设置为0，必须用这个蠢办法，因为要支持IE6
        if ((i + 1) % 3 == 0) classes += " ieisdead-browser-mr0";

        if (isXP && slug.match(/(chrome|firefox|edge)/g)) {
          // 谷歌、火狐、微软浏览器都不支持 Windows XP

          var warningTitle =
            recommendBrowsersConfig["name"] +
            "已经停止支持 Windows XP 系统！请升级系统或者下载其他最新版本的现代浏览器。";
          if (slug == "edge")
            warningTitle =
              "Microsoft Edge 专属 Windows 10 ！请升级系统或者下载其他最新版本的现代浏览器。";

          recommendBrowsersHtml +=
            '<div class="' +
            classes +
            '">\
                                <a href="#" onclick="alert(\'' +
            warningTitle +
            '\');return false;" class="ieisdead-browser-link" style="color:#777">' +
            recommendBrowsersConfig["name"] +
            '</a>\
                                <a href="#" onclick="alert(\'' +
            warningTitle +
            '\');return false;" class="ieisdead-browser-dlink" style="color:#777;background:#ccc">不支持</a>\
                            </div>';
        } else if (is7or8 && slug == "edge") {
          /**
                     微软浏览器都不支持 Windows 7 和 8，提示下载 IE11

                     事实上可以装 Edge 的 Windows 10 的 IE 已经是11
                     也就是说，能看到升级提示的人的系统都用不了 Edge 而可以用的则都不会看到升级提示
                     那把 Edge 放到这里是多余的吗？
                     不，这是为了宣传 Windows 10 ，吸引用户升级系统
                     **/
          recommendBrowsersHtml +=
            '<div class="' +
            classes +
            '">\
                                <a href="#" onclick="alert(\'Microsoft Edge 专属 Windows 10 ！请升级系统或者下载其他最新版本的现代浏览器。\');return false;" class="ieisdead-browser-link" style="color:#777">' +
            recommendBrowsersConfig["name"] +
            '</a>\
                                <a href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" class="ieisdead-browser-dlink" target="_blank" title="下载' +
            recommendBrowsersConfig["name"] +
            '">IE11</a>\
                            </div>';
        } else {
          recommendBrowsersHtml +=
            '<div class="' +
            classes +
            '">\
                                <a href="' +
            recommendBrowsersConfig["url"] +
            '" class="ieisdead-browser-link" target="_blank">' +
            recommendBrowsersConfig["name"] +
            '</a>\
                                <a href="' +
            recommendBrowsersConfig["url"] +
            '" class="ieisdead-browser-dlink" target="_blank" title="点击下载' +
            recommendBrowsersConfig["name"] +
            '">下载</a>\
                            </div>';
        }
      }

      var currentBrowserHtml = "";
      currentBrowserHtml +=
        '<div class="ieisdead-text ieisdead-text-muted">您使用的不是IE浏览器？是 ';
      var i = 1;
      var count = 0;
      for (var prop in ieIsDead.browserNames) {
        count++;
      }
      for (var browser in ieIsDead.browserNames) {
        currentBrowserHtml +=
          '<a href="javascript:;" onclick="ieIsDead.browserAlert(\'' +
          browser +
          "')\">" +
          ieIsDead.browserNames[browser] +
          "</a>";
        if (i < count) {
          currentBrowserHtml += "、";
        }
        i++;
      }
      currentBrowserHtml +=
        " 等其他浏览器？请从IE兼容模式切换至极速模式浏览本站。</div>";

      var alertHtml =
        '<div id="ieisdead-box"><div class="ieisdead-wrap"><div class="ieisdead-box"><div class="ieisdead-main">\
                      <div class="ieisdead-line">\
                          <a href="https://support.dmeng.net/kill-old-versions-of-ie.html?utm_source=ieisdead" target="_blank">提示</a>\
                      </div>\
                      <div class="ieisdead-notice">\
                          <div class="ieisdead-title ieisdead-title_alert">您当前使用的IE' +
        (ieIsDead.currentIEVersion && ieIsDead.denyall === false
          ? ieIsDead.currentIEVersion
          : "") +
        '浏览器已被废弃，请立即升级！</div>\
                    <div class="ieisdead-text"><a href="https://www.microsoft.com/zh-cn/microsoft-365/windows/end-of-ie-support" target="_blank">自2016年1月12日起，Microsoft将不再为旧版本的Internet Explorer提供安全更新或技术支持。定期安全更新有助于保护设备，因此升级和保持最新状态非常重要。点击阅读完整的微软官方声明文档。</a></div>\
                    <div class="ieisdead-browser_alert" id="ieIsDead_browserAlert">\
                        <div class="ieisdead-text">当前浏览器无法正常浏览本站，请使用其他最新版本的现代浏览器。</div>\
                    </div>\
                    <div class="ieisdead-browseralert_new" id="ieIsDead_browserAlert_new">' +
        currentBrowserHtml +
        '</div>\
                    <div class="ieisdead-title ieisdead-title_browser">下载最新版本的现代浏览器</div>\
                    <div class="ieisdead-browsers" id="ieisdead-browsers">' +
        recommendBrowsersHtml +
        '<div class="ieisdead-browser-clear"></div>\
              </div>\
          </div>\
        </div></div></div></div>';

      var alertDiv = document.createElement("div");
      alertDiv.id = "ieIsDead_div";
      alertDiv.innerHTML = alertHtml;
      var bodyElement = document.getElementsByTagName("body")[0];
      while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
      }
      bodyElement.appendChild(alertDiv);

      // 延迟判断，因为傲游浏览器的属性是异步注入
      setTimeout(function () {
        ieIsDead.browserAlert();
      }, 1000);
    };

    ieIsDead.fixload = function (num) {
      if (
        document.getElementById("ieIsDead_div") === null &&
        document.getElementsByTagName("head").length > 0 &&
        document.getElementsByTagName("body").length > 0
      ) {
        ieIsDead.load();
      } else {
        if (num > 1) {
          setTimeout(function () {
            ieIsDead.fixload(num - 1);
          }, 1000);
        }
      }
    };

    ieIsDead.browserAlert = function (browser) {
      if (!browser) {
        browser = ieIsDead.browser();
      }
      var names = ieIsDead.browserNames;
      var alertHtml = "";

      if (!!names[browser]) {
        var browserName = names[browser];
        var imgHeight = ieIsDead.imgHeight[browser];

        alertHtml +=
          '<div class="ieisdead-title ieisdead-title_horn">您使用的是' +
          browserName +
          '吗？</div>\
                      <div class="ieisdead-text">您正在使用的可能是' +
          browserName +
          "IE兼容模式。请切换至浏览器极速模式浏览。</div>";

        document.getElementById("ieIsDead_browserAlert").style.display = "none";
        document.getElementById(
          "ieIsDead_browserAlert_new"
        ).innerHTML = alertHtml;
      }
    };

    ieIsDead.currentIEVersion = 0;

    var _jsver = 0;
    /*@cc_on
              _jsver = @_jscript_version;
          @*/

    if (_jsver == 0) {
      // IE11 或者不是 IE
      if (!!window.MSInputMethodContext && !!document.documentMode) {
        ieIsDead.currentIEVersion = 11;
      }
    } else {
      var docmode = document.documentMode;

      if (!!docmode && docmode > 5) {
        ieIsDead.currentIEVersion = docmode;
      } else if (_jsver == 5.7 && window.XMLHttpRequest) {
        ieIsDead.currentIEVersion = 7;
      } else if (_jsver == 5.6 || (_jsver == 5.7 && !window.XMLHttpRequest)) {
        ieIsDead.currentIEVersion = 6;
      } else {
        ieIsDead.currentIEVersion = 5;
      }
    }

    if (
      ieIsDead.currentIEVersion !== false &&
      ieIsDead.currentIEVersion <= ieIsDead.version
    ) {
      ieIsDead.denyall = ieIsDead.version >= 11;
      ieIsDead.show = true;
      if (!!ieIsDead.delay) {
        var cke = document.cookie.match(new RegExp("ieIsDead=([^;]+)"));
        if (cke && cke[1] == "delay") {
          ieIsDead.show = false;
        }
      }
      if (ieIsDead.show) {
        window.ieIsDead = ieIsDead;
        if (window.addEventListener) {
          window.addEventListener("load", ieIsDead.load, false);
        } else if (window.attachEvent) {
          window.attachEvent("onload", ieIsDead.load);
        }

        // fixed some sites event load error
        setTimeout(function () {
          ieIsDead.fixload(5);
        }, 1500);
      }
    }
  })();
}
