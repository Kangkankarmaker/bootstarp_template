/// owlCarousel Js /////
			$('.owl-carousel').owlCarousel({
				loop:true,
				margin:1,
				autoplay:true,
				autoplayTimeout:1000,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
						
					},
					600:{
						items:3,
						
					},
					1000:{
						items:5,
						
					}
				}
			})
			
			/// Counter Up Js /////
			$('.counter').counterUp({
				delay: 10,
				time: 2000
			});
			