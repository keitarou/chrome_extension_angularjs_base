$(function() {
    $("#clickme").click(function(){
        alert('Hello!!');
    });
});


function HelloCtrl($scope) {
    $scope.hellos = [
        {text:'Hello', lang:"en"},
        {text:'やあ', lang:"ja"}
    ];
}

