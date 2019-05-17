// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// var bar = new ProgressBar.Circle(container, {
// 	color: '#aaa',
// 	// This has to be the same size as the maximum width to
// 	// prevent clipping
// 	strokeWidth: 4,
// 	trailWidth: 1,
// 	easing: 'easeInOut',
// 	duration: 1400,
// 	text: {
// 	  autoStyleContainer: false
// 	},
// 	from: { color: '#aaa', width: 1 },
// 	to: { color: '#333', width: 4 },
// 	// Set default step function for all animate calls
// 	step: function(state, circle) {
// 	  circle.path.setAttribute('stroke', state.color);
// 	  circle.path.setAttribute('stroke-width', state.width);
  
// 	  var value = Math.round(circle.value() * 100);
// 	  if (value === 0) {
// 		circle.setText('');
// 	  } else {
// 		circle.setText(value);
// 	  }
  
// 	}
//   });
//   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//   bar.text.style.fontSize = '2rem';
  
//   bar.animate(1.0);  // Number from 0.0 to 1.0




































/**
*Exampe from https://kottenator.github.io/jquery-circle-progress/
*/
// var script = document.createElement('script');
// script.src = 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.0.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

// var progressBarOptions = {
// 	startAngle: -1.55,
// 	size: 200,
//     value: 0.75,
//     fill: {
// 		color: '#ffa500'
// 	}
// }

// $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
// 	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
// });

// $('#circle-b').circleProgress({
// 	value : 0.25,
// 	fill: {
// 		color: '#FF0000'
// 	}
// });

// $('#circle-c').circleProgress({
// 	value : 0.92,
// 	fill: {
// 		color: '#008000'
// 	}
// });