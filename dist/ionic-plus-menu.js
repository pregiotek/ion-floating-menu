/*!
 * Copyright 2016 PREGIOTEK
 * http://pregiotek.com/
 *
 * ionic-menu-plus, v1.0.0
 * A menu Material UI - like for Ionic.
 *
 * By @ennedigi
 * 
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */


angular.module('ionic-plus-menu', [])

        .directive('ionicPlusButton', function () {

            return {
                restrict: 'E',
                scope: {
                    click: '&?',
                    buttonColor: '@?',
                    icon: '@?',
                    iconColor: '@?'},
                template: '<ul id="plus-button">' +
                        '<li ng-style="{\'background-color\': \'{{buttonColor}}\' }">' +
                        '<a><i ng-click="click()" class="icon menu-icon" ng-class="{ \'{{icon}}\' : true}" ng-style="{\'color\': \'{{iconColor}}\' }"></i></a>' +
                        '</li>' +
                        '</ul>',
                replace: true,
                transclude: true,
                controller: function ($scope) {
                    $scope.buttonColor = $scope.buttonColor || '#2AC9AA';
                    $scope.icon = $scope.icon || 'ion-plus';
                    $scope.iconColor = $scope.iconColor || '#fff';
                }
            };

        });
