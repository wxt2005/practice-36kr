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
    var $dropButtons = $header.find('li.drop');
    var $dropMenus = $header.find('li.drop .drop-menu');
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
        $sideBarTabContents.hide().eq(index).show();
        return false;
    });

    /**
     * 导航栏下拉菜单按钮事件
     */
    $dropButtons.find('> a').click(function() {
        var $button = $(this);
        if (!$(this).parent().hasClass('active')) {
            $dropButtons.removeClass('active');
            $(this).parent().addClass('active');
        } else {
            $dropButtons.removeClass('active');
        }
        return false;
    });

    /**
     * 页面点击关闭下拉菜单事件
     */
    $('html').click(function() {
        $dropButtons.removeClass('active');
    });
});
