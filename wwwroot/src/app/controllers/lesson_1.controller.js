(function (angular) {
    'use strict';	

    angular
        .module('app')
        .controller('lesson_1.controller',
        ['$rootScope', '$scope',
            function($rootScope, $scope) {
				var chess_board = d3.select('#chess_board'), // холст для шахматной доски
				chess_board_size = chess_board[0][0].viewBox.animVal.width, // ширина доски
				filed_size = 10, // размер поля
				field_fill = '', // цвет заливки поля
				count_in_line = chess_board_size / filed_size, // количество полей в строке
				data = []; // массив данных по полям

				// Собираем массив данных
				for (var i = 0; i < count_in_line; i++) {
					for (var j = 0; j < count_in_line; j++) {
						if ((i % 2) === 0) 
							field_fill = j % 2 ? 'black' : 'white';
						else 
							field_fill = j % 2 ? 'white' : 'black';		

						data.push({
							x: j * filed_size,
							y: i * filed_size,
							fill: field_fill
						});
					}

				}

				chess_board
					.selectAll('rect')
					.data(data)
					.enter()
					.append('rect')
					.attr({
						x: function(item) { return item.x },
						y: function(item) { return item.y },
						width: filed_size + 'px',
						height: filed_size + 'px',
						fill:  function(item) { return item.fill }
					});
            }
        ]);
	
})(angular);