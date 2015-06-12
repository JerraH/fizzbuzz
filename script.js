$(function() {
	var question = prompt("Input a number!");
	console.log(+question);
	var ans = parseInt(question);
	function check(x) {

	for (var i = 1; i <= x; i++) {
	if (i%3 === 0 && i%5 == 0) {
		$('body').append('<p>FizzBuzz</p>');
	}
	else if (i%5 === 0) {
		$('body').append('<p>Buzz</p>');
	}

	else if (i%3 === 0) {
		$('body').append('<p>Fizzfizz</p>');
	}

	else {
		$('body').append('<p>' + i + '</p>');
	};

};
};

check(ans);
});

