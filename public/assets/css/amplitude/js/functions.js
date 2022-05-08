/*
	Initializes the player
	*/
	$(document).ready(function(){

	/*
		Equalizes the player heights for left and right side of the player
		*/
		adjustPlayerHeights();

	/*
		When the window resizes, ensure the left and right side of the player
		are equal.
		*/
		$(window).on('resize', function(){
			adjustPlayerHeights();
		});

	/*
		When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
		play the song.
		*/
		$('.bandcamp-link').on('click', function( e ){

			e.stopPropagation();
		});

	/*
		
	/*
		Show and hide the play button container on the song when the song is clicked.
		*/
		jQuery('.song').on('click', function(){
			jQuery(this).find('.play-button-container').css('display', 'none');
		});
	});

/*
	Adjusts the height of the left and right side of the players to be the same.
	*/
	function adjustPlayerHeights(){
		// var left = $('div#amplitude-left').innerHeight();
		// $('#amplitude-right .song-holder').css('height', ( left  )+'px');
	}
