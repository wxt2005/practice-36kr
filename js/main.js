'use strict';
/* global console */
/* global document */
/* global window */
/* global location */
/* jshint jquery:true */
/* jshint -W097 */

$(function() {
    var $window = $(window);
    var $sideBarTab = $('.sidebar-tab .tabs');
    var $sideBarTabContents = $('.sidebar-tab .tabs-content');
    var $header = $('header');
    var $dropButtons = $header.find('li.drop a');
    var i = 0, l = 0;

    /**
     * 页面滚动事件
     */
    $window.scroll(function() {
        if ($('body').scrollTop() >= 40) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    /**
     * 侧边栏标签切换事件
     */
    $sideBarTab.click(function(ev) {
        var index = -1;
        var $target = $(ev.target);
        $(this).find('li').removeClass('selected');
        if ($target.is('a')) {
            index = $target.parent().index();
            $target.parent().addClass('selected');
        } else {
            index = $target.index();
            $target.addClass('selected');
        }
        for (i = 0, l = $sideBarTabContents.length; i < l; i++) {
            $sideBarTabContents[i].style.display = "none";
        }
        $sideBarTabContents[index].style.display = "block";
        return false;
    });

    $dropButtons.click(function() {
        $(this).next().toggle();
        return false;
    });
});
