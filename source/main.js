'use strict';

angular.module('slickgridDemo', []);

angular.module('slickgridDemo')
	.controller('gridCtrl', ['$scope', function($scope) {

		function generateColumns(colNum) {
			var cols = [];
			var col;
			for (var i = 0; i < colNum; i++){
				col = {
					field: 'data_' + i,
					id: 'data_' + i, 
					name: "Data " + i, 
					visible: true,
	    			sortable: true,
	    			width: 100
				}
			cols.push(col);
			}
			return cols;
		}

		function generateData(rowNum, columns) {
			var data = [];
			for (var i = 0; i < rowNum; i++) {
				data[i] = {};
				for (var j =0; j < columns.length; j++){
					data[i][columns[j].field] = Math.random().toFixed(9);
				}
			}
			return data;
		}

		$scope.gridRowsNumber = 100;
		$scope.gridColumnsNumber = 20;

		$scope.gridOptions = {
			enableCellNavigation: true,
			enableColumnReorder: false
		};

		$scope.buildGrid  = function() {
			init();
			$scope.$broadcast('update-grid-data', $scope.gridColumns, $scope.data);
		}

		function init(){
			$scope.gridColumns = generateColumns($scope.gridColumnsNumber);
			$scope.data = generateData($scope.gridRowsNumber, $scope.gridColumns);
		}

		init();

	}]);