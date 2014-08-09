

angular.module('NewProject.Comments').controller('CommentsController', ['$scope', function($scope) {

	$scope.comments = [{
		email: 'asdf@asdf.com',
		comment: 'this is a comment!'
	}];

	function createComment(email, comment) {
		return {
			email: email,
			comment: comment
		};
	}

	$scope.insertComment = function(email, comment) {
		$scope.comments.push(createComment(email, comment));
	};

}]);