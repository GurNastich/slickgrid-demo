(function(angular, module){
    'use strict';

    module.directive('slickgrid', function(){

        function linkFunction(scope, el, attr) {
            
            var grid = new Slick.Grid("#slickgrid", scope.gridData, scope.gridColumns, scope.gridOptions);

            scope.$on('update-grid-data', function(event, columns, data) {
                grid.setColumns(columns);
                grid.setData(data);
                grid.render();
            });
        }

        return {
            restrict: 'AE',
            replace: true,
            template: '<div id="slickgrid" style="width:80%;height:600px; border: 1px solid black"></div>',
            scope: {
                gridData : '=',
                gridColumns: '=',
                gridOptions : '='
            },
            link: linkFunction
        }
    });
})(angular, angular.module('slickgridDemo'));