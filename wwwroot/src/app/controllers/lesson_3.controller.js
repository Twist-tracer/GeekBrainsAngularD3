(function (angular) {
    'use strict';
	
	var users = [
		{
			id: 1,
			name: 'Вася',
			age: 18,
			isActive: true,
			dateAdded: '10.09.2016'
		},
		{
			id: 2,
			name: 'Петя',
			age: 15,
			isActive: true,
			dateAdded: '14.09.2016'
		},
		{
			id: 3,
			name: 'Дима',
			age: 21,
			isActive: true,
			dateAdded: '18.09.2016'
		},
		{
			id: 4,
			name: 'Диана',
			age: 19,
			isActive: true,
			dateAdded: '18.09.2016'
		}
	];
	
	var names = ['Олег', 'Гавриил', 'Денис', 'Георгий', 'Пётр', 'Павел', 'Вадим', 'Руслан', 'Николай', 'Василий', 'Дарья', 'Зоя', 'Алла', 'Виктория', 'Елизавета', 'Любовь', 'Эмма', 'Галина', 'Евгения', 'Анна'];
	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function generateDate() {
		var start = 0; // 01.01.1970
		var time_zone = 3; // UTC+3:00
		var now = Math.ceil((new Date().getTime()) + (3600000 * time_zone)); // now
		var rand_date = new Date(getRandomInt(start, now));
		
		var day = rand_date.getDate() < 10? "0" + rand_date.getDate(): rand_date.getDate();
		var month = (rand_date.getMonth() + 1) < 10? "0" + (rand_date.getMonth() + 1): rand_date.getMonth() + 1;
		
		return day + "." + month + "." + rand_date.getFullYear();
	}
	
    angular
        .module('app')
        .controller('lesson_3.controller',
        ['$rootScope', '$scope',
            function($rootScope, $scope) {
				$scope.users = users;
				
				$scope.remove = function(e, user_id) {
					for(var user of users) {						
						if(user.id === user_id)
							user.isActive = false;
					}
				};
				
				$scope.generate = function(e) {
					users.push({
						id: users.length + 1,
						name: names[getRandomInt(0, names.length)],
						age: getRandomInt(0, 100),
						isActive: true,
						dateAdded: generateDate()
					});
				}
            }
        ]);
	
})(angular);