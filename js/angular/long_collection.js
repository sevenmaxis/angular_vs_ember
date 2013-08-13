CheckboxController = function($scope) {
  $scope.numCheckbox = 100;
  $scope.checkboxes = [];

  $scope.renderCheckbox = function() {
    var numCheckbox = $scope.numCheckbox;
    var checkboxes = new Array(numCheckbox);

    for (var i=0; i < numCheckbox; i++) {
      checkboxes[i] = {};
    }
    $scope.checkboxes = checkboxes;
  };
}
