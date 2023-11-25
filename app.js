angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens?authuser=0').
      success(function(data) {
          $scope.publicacoes = data;
          $scope.index = function (index) {
            window["num"] = index;
            localStorage.setItem("index", num);
        }
})})


angular.module('blogMax', []);
angular.module('blogMax').controller('RestMax', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens?authuser=0').
      success(function(data) {
          $scope.publicacoes = data[localStorage.getItem("index")];
      }
       )
});