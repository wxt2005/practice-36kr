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
    var $miniMenu = $header.find('.mini');
    var $miniSearchButton = $miniMenu.find('.search-button a');
    var $miniMenuButton = $miniMenu.find('.menu-button a');
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
    $(document).click(function(ev) {
        if ($dropMenus.has($(ev.target)).length === 0) {
            $dropButtons.removeClass('active');
        }
    });

    /**
     * mini搜索按钮点击事件
     */
    $miniSearchButton.click(function() {
        $header.find('div.search').toggle();
    });

    /**
     * mini菜单按钮点击事件
     */
    $miniMenuButton.click(function() {
        $header.find('nav.nav-left').toggle();
    });
});
