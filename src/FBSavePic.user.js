// ==UserScript==
// @name         FBSavePic (Shift+D)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Save the open Facebook image with a Shift-D shortcut (Mac)
// @author       Tom Lin (tomroy123@gmail.com)
// @match        https://www.facebook.com/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @grant        GM_download
// ==/UserScript==

(function($) {
    'use strict';
    function saveCurrentPic()
    {
        var imgTag = $("img[src^='https://scontent']:visible:first");
        var src = imgTag.prop("src");
        var jpgRe = /[^/]+\.jpg/
        var imgName = jpgRe.exec(src);
        var timestamp = Date.now();
        // 檔名範例: FBDownload_1715112345678_原檔名.jpg
        var savePath = 'FBDownload_' + timestamp + '_' + imgName;
        GM_download({url: src, name: savePath, saveAs: false});
    }
    document.onkeydown = function(e){
        // Shift + D
        if (e.shiftKey && e.keyCode == 68) {
            saveCurrentPic();
        }
    }
})(jQuery);
