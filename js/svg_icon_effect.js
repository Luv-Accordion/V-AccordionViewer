/*
SVG ICON EFFECT

Copyright 2018 Luv-Accordion
This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/

/*
$(window).on("load",function(){
//$(function(){
    cssDeviceIcon();
    cssManualIcon();
    cssRotateIcon();
});
*/

var cssDeviceIcon = function() {
    var fig = document.getElementById('midi_icon').contentDocument;
    var $fig = $(fig);
    var $layer1 = $fig.find('#layer1');
    var $circle = $fig.find('#layer1 circle');
    var $rect = $fig.find('#layer1 rect');
    $layer1.hover(function () {
        $circle.css({
            'cursor': 'pointer',
            'fill': '#777',
            'stroke': '#e22',
        });
        $rect.css({
            'cursor': 'pointer',
            'fill': '#e22',
            'stroke': '#e22',
        });
    },
    function () {
        $circle.css({
            'fill': '#000000',
            'stroke': '#b00',
        });
        $rect.css({
            'fill': '#b00',
            'stroke': '#b00',
        });
    });

    $layer1.click(function () {
        $( "#deviceDialog" ).dialog( "open" );
        $circle.css({
            'fill': '#000000',
            'stroke': '#b00',
        });
        $rect.css({
            'fill': '#b00',
            'stroke': '#b00',
        });
    });
}

var cssManualIcon = function() {
    var fig = document.getElementById('manual_icon').contentDocument;
    var $fig = $(fig);
    var $layer = $fig.find('#layer2');
    var $path = $fig.find('#layer2 path');
    $layer.hover(function () {
        $path.css({
            'cursor': 'pointer',
            'fill': '#777',
            'stroke': '#e22',
        });
    },
    function () {
        $path.css({
            'fill': '#000000',
            'stroke': '#b00',
        });
    });

    $layer.click(function () {
        $( "#usageDialog" ).dialog( "open" );
        $path.css({
            'fill': '#000000',
            'stroke': '#b00',
        });
    });
}

var cssRotateIcon = function() {
    var fig = document.getElementById('rotate_icon').contentDocument;
    var $fig = $(fig);
    var $layer = $fig.find('#layer3');
    var $arc = $fig.find('#g919 path');
    var $tri = $fig.find('#g922 path');
    $layer.hover(function () {
        $arc.css({
            'cursor': 'pointer',
            'fill': '#777',
            'stroke': '#e22',
        });
        $tri.css({
            'cursor': 'pointer',
            'fill': '#e22',
            'stroke': '#e22',
        });
    },
    function () {
        $arc.css({
            'fill': '#000000',
            'stroke': '#b00',
        });
        $tri.css({
            'fill': '#b00',
            'stroke': '#b00',
        });
    });

    $layer.click(function () {
    });
}

var cssMirrorIcon = function() {
    var fig = document.getElementById('rotateY_icon').contentDocument;
    var $fig = $(fig);
    var $layer = $fig.find('#layer3');
    var $rect = $fig.find('#g1425 rect');

    $layer.hover(function () {
        $rect.css({
            'cursor': 'pointer',
            'fill': '#777',
            'stroke': '#e22',
        });
    },
    function () {
        $rect.css({
            'fill': '#000000',
            'stroke': '#b00',
        });
    });

    $layer.click(function () {
    });
}

var cssRightBtnSysIcon = function() {
    var fig = document.getElementById('right_btn_sys_icon').contentDocument;
    var $fig = $(fig);
    var $layer = $fig.find('#layer3');
    var $rect = $fig.find('#g24408 rect');

    $layer.hover(function () {
        $rect.css({
            'cursor': 'pointer',
            'fill': '#777',
            'stroke': '#e22',
        });
    },
    function () {
        $rect.css({
            'fill': '#000',
            'stroke': '#b00',
        });
    });

    $layer.click(function () {
    });
}

var cssKbdBtnIcon = function() {
    var fig = document.getElementById('kbd_btn_icon').contentDocument;
    var $fig = $(fig);
    var $layer = $fig.find('#layer3');
    var $flame_rect = $fig.find('#rect1466-9-8');
    var $eclipse = $fig.find('#g4848 eclipse');

    $layer.hover(function () {
        $flame_rect.css({
            'cursor': 'pointer',
            'fill': '#777',
            'stroke': '#e22',
        });
    },
    function () {
        $flame_rect.css({
            'fill': '#000',
            'stroke': '#b00',
        });

    });

    $layer.click(function () {
    });
}
