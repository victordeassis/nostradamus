app.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
	
	// Initial show state declaration
	$scope.show_initial = true;
	$scope.show_loading = false;
	$scope.show_complete = false;

	// Set the title text
	$scope.title = "Nostradamus";
	
	// Function that activates when the 'descobrir' button is clicked
	$scope.toggle = function() {
		$scope.show_initial = false;
		$scope.show_loading = true;
		$scope.title = "Consultando os astros";
		$timeout( function() {
			$scope.title = "Os números são"
			$scope.show_loading = false;
			$scope.show_complete = true;
			document.getElementById("result").innerHTML = randomNumbers();
			// alert(randomNumbers());
		}, 3000);
	}

	function randomNumbers() {

		var arr = [];
		var arrSort = [];
		var stringWithNumbers;

		while(arr.length < 6){

		  var randomnumber=Math.floor((Math.random() * 60) + 1);
		  var found=false;
		  for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){found=true;break}
		  }

		  if(!found)arr[arr.length]=randomnumber;

		}

		// Organizes the array in ascending order
		arrSort = arr.sort(function(a, b) {return a-b});

		return stringWithNumbers = arrSort[0].toString() + " - " +
		 arrSort[1].toString() + " - " + arrSort[2].toString() +
		  " - " + arrSort[3].toString() + " - " + arrSort[4].toString() +
		   " - " + arrSort[5].toString();

	}
}]);