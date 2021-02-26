// initialize plug-ins, preload or eager load
$(function () {
    $('#fullpage').fullpage({
        // set the colour of each section for testing
        sectionsColor: ['#060608', '#060608', '#060608', '#060608', '#060608'],
        // navigation dots on the right
        navigation: true,
        // set a corresponding anchor for each section
        anchors: ['home', 'about', 'skills', 'projects', 'contact'],
        // binding menu. with relevant attributes and the values of anchors set up, a scrolling menu is enabled.  eventListener is actually used
        menu: '#menu',
        // loop through the site
        continuousVertical: false,
        // effect curve
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
        // Three parameters, new syntax, index starts from 0, anchors are predefined above 
        afterLoad: function (origin, destination, _) {
            if (destination.anchor == 'home') {
                $('.greet').addClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
                $('.who').addClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
            }

            // if (origin.anchor == 'home') {
            //     $('.greet').addClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
            //     $('.who').addClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
            // }

            
        },
        // onLeave callback is fired once the user leaves a section, in the transition to the new section
        onLeave: function (origin, destination, _) {
            // var leavingSection = this;

            //onLeave destination
            // if (destination.anchor == 'home') {
            //     $('.greet').addClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
            //     $('.who').addClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
            // }

            if (origin.anchor == 'home') {
                $('.greet').removeClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
                $('.who').removeClass('animate__animated animate__swing -webkit-transform:transition3d(0,0,0');
            }

            if (destination.anchor == 'about') {
                $('.title').addClass('animate__animated animate__slideInRight -webkit-transform:transition3d(0,0,0');
                $('.headshot').addClass('animate__animated animate__fadeIn -webkit-transform:transition3d(0,0,0');
                $('.text').addClass('animate__animated animate__slideInUp -webkit-transform:transition3d(0,0,0');
            }

            if (origin.anchor == 'about') {
                $('.title').removeClass('animate__animated animate__slideInRight -webkit-transform:transition3d(0,0,0');
                $('.headshot').removeClass('animate__animated animate__fadeIn -webkit-transform:transition3d(0,0,0');
                $('.text').removeClass('animate__animated animate__slideInUp -webkit-transform:transition3d(0,0,0');
            }

            if (destination.anchor == 'skills') {
                $('.tech1').addClass('delay1 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech2').addClass('delay2 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech3').addClass('delay3 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech4').addClass('delay4 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech5').addClass('delay5 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech6').addClass('delay6 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech7').addClass('delay7 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech8').addClass('delay8 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech9').addClass('delay9 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech10').addClass('delay10 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
            }

            if (origin.anchor == 'skills') {
                $('.tech1').removeClass('delay1 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech2').removeClass('delay2 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech3').removeClass('delay3 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech4').removeClass('delay4 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech5').removeClass('delay5 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech6').removeClass('delay6 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech7').removeClass('delay7 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech8').removeClass('delay8 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech9').removeClass('delay9 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
                $('.tech10').removeClass('delay10 animate__animated animate__lightSpeedInRight -webkit-transform:transition3d(0,0,0');
            }

            if (destination.anchor == 'projects') {
                $('.works').addClass('animate__animated animate__flipInX -webkit-transform:transition3d(0,0,0');
            }

            if (origin.anchor == 'projects') {
                $('.works').removeClass('animate__animated animate__flipInX -webkit-transform:transition3d(0,0,0');
            }

            if (destination.anchor == 'contact') {
                $('.resume').addClass('animate__animated animate__bounceInDown -webkit-transform:transition3d(0,0,0');
                $('.email').addClass('animate__animated animate__bounceInRight -webkit-transform:transition3d(0,0,0');
                $('.linkedin').addClass('animate__animated animate__bounceInLeft -webkit-transform:transition3d(0,0,0');
                $('.github').addClass('animate__animated animate__bounceInRight -webkit-transform:transition3d(0,0,0');
            }

            if (origin.anchor == 'contact') {
                $('.resume').removeClass('animate__animated animate__bounceInDown -webkit-transform:transition3d(0,0,0');
                $('.email').removeClass('animate__animated animate__bounceInRight -webkit-transform:transition3d(0,0,0');
                $('.linkedin').removeClass('animate__animated animate__bounceInLeft -webkit-transform:transition3d(0,0,0');
                $('.github').removeClass('animate__animated animate__bounceInRight -webkit-transform:transition3d(0,0,0');
            }

        }
    });
})


