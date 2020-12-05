// initialize plug-ins, preload or eager load
$(function () {
    $('#fullpage').fullpage({
        // set the colour of each section for testing
        sectionsColor: ['#060608', '#060608', '#060608', '#060608', '#060608'],
        // navigation dots on the right
        navigation: true,
        // set a corresponding anchor for each section
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        // binding menu. with relevant attributes and the values of anchors set up, a scrolling menu is enabled. Used eventListener
        menu: '#menu',
        // loop through the site
        continuousVertical: true,
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
        // When loading a certain section a function is executed, link means the name of the anchor, index means the current view, index starts from 1
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            //using anchorLink
            if(destination.anchor == 'page1') {
                $('.greet').addClass('animate__animated animate__fadeInUp');
            }
        },
    });
})