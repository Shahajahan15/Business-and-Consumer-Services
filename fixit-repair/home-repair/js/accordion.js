// JavaScript Document

    jQuery(function ($) {
    "use strict";
    var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="fa fa-arrow-circle-down sign"></i>');
    $('#accordion .panel-heading').not($active).find('a').prepend('<i class="fa fa-arrow-circle-right sign"></i>');
    $('#accordion').on('show.bs.collapse', function (e) {
        $('#accordion .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-arrow-circle-right fa-arrow-circle-down');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-arrow-circle-right fa-arrow-circle-down');
    })
});