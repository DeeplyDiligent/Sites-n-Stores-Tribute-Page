$(document).ready(function () {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    
    $('.wrap-in-class').html(function (i, html) {
        return html.replace(/(\S)/g, '<div class="animateThis">$1</div>');
    });

    
    var isMobile = window.matchMedia("(max-width: 760px)");

    
    $(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
//            .staggerTo(".animateThis", 2, {scale:2},0.5)
//            .staggerTo(".animateThis", 2, {scale:1},0.5,0)
            .staggerTo("#panel-1 .animateThis", 0.1, {ease:Back.easeOut, x:100, cycle:{x:200},scale:1.5, opacity:0}, 0.03)
			.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
			.to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
			.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third panel
            .staggerFrom("#panel-2 .animateThis", 0.1, {y:-200, opacity:0, scale:3}, 0.005)
			.to("#slideContainer", 0.5, {z: -150})
			.to("#slideContainer", 1,   {x: "-50%"})
			.to("#slideContainer", 0.5, {z: 0})
            
			// animate to forth panel
            .staggerFrom("#panel-3 .animateThis", 0.1, {x:-200, opacity:0, scale:3}, 0.005)
			.to("#slideContainer", 0.5, {z: -150})
			.to("#slideContainer", 1,   {x: "-75%"})
			.to("#slideContainer", 0.5, {z: 0},"zoom-in-last")
            .from("#panel-4 #title-screen",2,{opacity:0, scale:0},"zoom-in-last");
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "600%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addTo(controller);
//        new ScrollMagic.Scene({triggerElement: "#pinContainer",
//				                triggerHook: "onLeave", duration: 100})
//                // animate color and top border in relation to scroll position
//                .setTween("#title-screen", {scale: 0}) // the tween durtion can be omitted and defaults to 1
//                .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
//                .addTo(controller);
	});
});
