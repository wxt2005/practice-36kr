'use strict';
/* global console */
/* global document */
/* global window */
/* global location */
/* jshint jquery:true */
/* jshint -W097 */

$(function() {
    var $window = $(window);
    
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
});
