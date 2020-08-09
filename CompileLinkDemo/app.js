var app = angular.module("myApp", []);
app.controller("MyCtrl", function () {
    console.log("My Ctrl");
});
app.directive("myDirective", function () {
    return {
        compile: function (tElement, tAttributes) {
            console.log(tAttributes.text + " Compile")
            return {
                pre: function (scope, iElement, iAttrs) {
                    console.log(iAttrs.text+"  In pre")
                },
                post: function (scope, iElement, iAttrs) {
                        console.log(iAttrs.text + "  In post")
                    }
            };
        },
       
        controller: function ($scope, $element, $attrs) {
            console.log($attrs.text + "In conroller");
        }
    }
});

app.directive('dad', function () {
    return {
        restrict: 'E',
        template: '<div class="dad">{{greeting}}{{name}}'+
        '<son></son>'+
        '</div>',
        link: {
            post: function (scope, elem, attr) {
                console.log("dad link")
                scope.name = 'xyz';
                scope.greeting = 'Hey, I am ';
            }
        },       
    };
});
app.directive('son', function () {
    return {
        restrict: 'E',
        template: '<div class="son">{{sonSays}}</div>',
        link: function (scope, elem, attr) {
            console.log("son link")
            scope.sonSays = 'Hey, I am son, and my dad is '+ scope.name;
        }
    };
});