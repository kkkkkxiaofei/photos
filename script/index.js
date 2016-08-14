$().ready(function(){

	$.get('./script/photos.json', function(data) {
		callback(data);
	});

	function getTypeHash() {
		return window.location.hash.substr(1);
	}

	function getPhotosByType(type, data) {
		var store = data[type];
		var dates = Object.keys(store).slice(1).sort().reverse();
		var photos = [];
		dates.forEach(function(date) {
			photos = photos.concat(store[date].array);
		});
		return photos;
	}

	function callback(data) {

		var usList = getPhotosByType("us-photo", data);
		var familyList = getPhotosByType("family-photo", data);
		var lifeList = getPhotosByType("life-photo", data);
		var favoriteList = getPhotosByType("favorite-photo", data);
		var configs = {
			"us-photo": new Config(usList),
			"family-photo": new Config(familyList),
			"life-photo": new Config(lifeList),
			"favorite-photo": new Config(favoriteList)
		};

		var elements = {
			"us-photo": '.us-photo',
			"family-photo": '.family-photo',
			"life-photo": '.life-photo',
			"favorite-photo": '.favorite-photo'
		};

		function Config(photoList) {
			this.list = photoList;
			this.listLen = photoList.length;
			this.count = 0;
			this.size = 15; //how many photos loading at one time
			this.MAX_COUNT = this.listLen < this.size ? 1 : parseInt(this.listLen/this.size) + 1;
		}

		function findActivedElement() {
			var actived = $('.actived');
			var activedId = actived.attr('id');
			return elements[activedId];
		}

		function loadPhoto(element, config) {
			if(config.count == config.MAX_COUNT) return;
			creaetFakeLoadingStyle();
			var start = config.count * config.size, type = element.attr('class'), end;
			if(config.MAX_COUNT - config.count == 1) {
				end = config.listLen - 1;
			} else {
				end = start + config.size;
			}
			for(var i = start;i < end; i++){
				var photoCell = $(
					'<div class="'+ type +'-cell">' +
		                '<img src="' + config.list[i].file_name + '">' +
		                '<div class="photo-description">'+
		                	'<div class="info">Posted on ' + config.list[i].created_at + '</div> ' +
		                	'<div class="tool count">' + config.list[i].like + '</div>' +
		                	'<div class="tool like"></div>' +
		                '</div>' +
		            '</div>'
		        );
		        element.append(photoCell);
			}
			config.count++;

		}

		function creaetFakeLoadingStyle() {
			var showMoreBtn = $('#show-more');
			showMoreBtn.text('Loading...');
			showMoreBtn.addClass('loading');
			setTimeout(function() {
				showMoreBtn.removeClass('loading');
				showMoreBtn.text('Click Me Show More');
			}, 3000);
		}

		//switch category(without loading)
		$('.category a').click(function() {
			var	activedId = $('.actived').attr('id');
			$(elements[activedId]).css('display', 'none');
			var currentId = $(this).attr('id');
			var currentElement = $(elements[currentId]);
			currentElement.css('display', 'block');
			window.location.hash = currentId;
			$('.actived').removeClass('actived');
			$(this).addClass('actived');
			if(currentElement.children().length == 0) {
				$('#show-more').click();
			}
		});

		//click me show more
		$('#show-more').click(function() {
			var hash = getTypeHash();
			var activedId;
			if(hash) {
				activedId = hash;
			} else {
				var actived = $('.actived');
				activedId = actived.attr('id');
			}
			var element = $('<div class=' + activedId + '></div>');
			loadPhoto(element, configs[activedId]);
			if(element.children().length > 0) {
				$('.photo-box').append(element);
			}
		});

		(function start() {
			var hash = getTypeHash();
			if(hash) {
					$('#' + hash).click();
			} else {
				$('#us-photo').click();
			}
		})()
	}

})
