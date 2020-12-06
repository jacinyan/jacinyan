// initialize plug-ins, preload or eager load
$(function () {
    $('#fullpage').fullpage({
        // set the colour of each section for testing
        sectionsColor: ['#060608', '#060608', '#060608', '#060608', '#060608'],
        // navigation dots on the right
        navigation: true,
        // set a corresponding anchor for each section
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        // binding menu. with relevant attributes and the values of anchors set up, a scrolling menu is enabled.  eventListener is actually used
        menu: '#menu',
        // loop through the site
        continuousVertical: false,
        // effect curve
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
        // Three parameters, new syntax, index starts from 0, anchors are predefined above 
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            //using anchorLink
            if (destination.anchor == 'page1') {
                // $('.greet').addClass('animate__animated animate__fadeIn');
                // $('.who').addClass('animate__animated animate__fadeIn');
            }

            if (destination.anchor == 'page2') {
                $('.title').addClass('animate__animated animate__slideInRight');
                $('.headshot').addClass('animate__animated animate__fadeIn');
                $('.text').addClass('animate__animated animate__slideInUp');
            }

            if (destination.anchor == 'page3') {
                $('.tech1').addClass('delay1 animate__animated animate__lightSpeedInRight');
                $('.tech2').addClass('delay2 animate__animated animate__lightSpeedInRight');
                $('.tech3').addClass('delay3 animate__animated animate__lightSpeedInRight');
                $('.tech4').addClass('delay4 animate__animated animate__lightSpeedInRight');
                $('.tech5').addClass('delay5 animate__animated animate__lightSpeedInRight');
                $('.tech6').addClass('delay6 animate__animated animate__lightSpeedInRight');
                $('.tech7').addClass('delay7 animate__animated animate__lightSpeedInRight');
                $('.tech8').addClass('delay8 animate__animated animate__lightSpeedInRight');
                $('.tech9').addClass('delay9 animate__animated animate__lightSpeedInRight');
                $('.tech10').addClass('delay10 animate__animated animate__lightSpeedInRight');
            }

            if (destination.anchor == 'page4') {
                $('.works').addClass('animate__animated animate__flipInX');
            }
        },
        // onLeave callback is fired once the user leaves a section, in the transition to the new section
        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            //after leaving section 2
            if (origin.anchor == 'page1') {
                // $('.greet').removeClass('animate__animated animate__fadeIn');
                // $('.who').removeClass('animate__animated animate__fadeIn');
            }

            if (origin.anchor == 'page2') {
                $('.title').removeClass('animate__animated animate__slideInRight');
                $('.headshot').removeClass('animate__animated animate__fadeIn');
                $('.text').removeClass('animate__animated animate__slideInUp');
            }

            if (origin.anchor == 'page3') {
                $('.tech1').removeClass('delay1 animate__animated animate__lightSpeedInRight');
                $('.tech2').removeClass('delay2 animate__animated animate__lightSpeedInRight');
                $('.tech3').removeClass('delay3 animate__animated animate__lightSpeedInRight');
                $('.tech4').removeClass('delay4 animate__animated animate__lightSpeedInRight');
                $('.tech5').removeClass('delay5 animate__animated animate__lightSpeedInRight');
                $('.tech6').removeClass('delay6 animate__animated animate__lightSpeedInRight');
                $('.tech7').removeClass('delay7 animate__animated animate__lightSpeedInRight');
                $('.tech8').removeClass('delay8 animate__animated animate__lightSpeedInRight');
                $('.tech9').removeClass('delay9 animate__animated animate__lightSpeedInRight');
                $('.tech10').removeClass('delay10 animate__animated animate__lightSpeedInRight');
            }

            if (origin.anchor == 'page4') {
                $('.works').removeClass('animate__animated animate__flipInX');
            }

        }
    });
})