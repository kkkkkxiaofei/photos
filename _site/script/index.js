$().ready(function(){

	function getPhotos(url) {
		if(url) {
			$.get(url, function(data) {
				$('.wrapper').css('display', 'block');
				$('#pwd-container').css('display', 'none');
				callback(data);	
			});
		}
	}

	var pwd = window.location.search.split('&')[0].replace(/\?|\=/g, '');
	
	if(pwd) {
		getPhotos(pwd);
	} else {
		$('#pwd-container').css('display', 'block');
	}

	$('#entry').click(function() {
		var pwd = $('#pwd').val();
		getPhotos(pwd);
	});
	
	function callback(data) {
		
		var SCREEN_WIDTH = $('body').width();
		var ROW_IMG_SIZE = SCREEN_WIDTH > 768 ? 4 : 2;
		var CELL_SPACE = 3; //px
		var ROW_WIDTH = $('.photo-box').width();
		var LOAD_SIZE_ONE_TIME = 16;

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
			this.size = LOAD_SIZE_ONE_TIME; //how many photos loading at one time
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
			var rowCount = config.size / ROW_IMG_SIZE;
			var step = start;

			for (var j = 0;j < rowCount; j++) {
				var imgGroup = [];
				for(var i = 0;i < ROW_IMG_SIZE;i++) {
					var imgObj = config.list[step+i];
					if(imgObj) {
						imgGroup.push(imgObj);
					} else {
						var firstImgObjInPreviousRow = config.list[(step%ROW_IMG_SIZE)*ROW_IMG_SIZE];
						var placeHolder = {
							height: firstImgObjInPreviousRow.height,
							width: firstImgObjInPreviousRow.width
						};
						imgGroup.push(placeHolder);
					}
				}
				calculateImgSizeInGroup(imgGroup, ROW_WIDTH);
				step += ROW_IMG_SIZE;
			}

			for(var k = start;k < end;k++) {
				var file_name = config.list[k].file_name;
				if(file_name) {
					var width = config.list[k].width/ROW_WIDTH*100;
					var style = 'style="width:' + width + '%;height:' + config.list[k].height + 'px;"';
					var iconSrc = "./img/like.png";
					var createdAt = config.list[k].width > 270 ? "Posted on " + config.list[k].created_at : "Posted on...";
					var photoCell = $(
						'<div class="'+ type + '-cell" ' + style + '>' +
			                '<img src="' + config.list[k].file_name + '">' +
			                '<div class="photo-description">'+
			                	'<div class="info" title="Post on ' + config.list[k].created_at + '">' + createdAt + '</div> ' +
			                	'<div class="tool count">' + config.list[k].like + '</div>' +
			                	'<div class="tool"><img class="like" src=' + '"' + iconSrc + '" /></div>' +
			                '</div>' +
			            '</div>'
			        );
			        element.append(photoCell);
				}
			}
			
			config.count++;

		}

		function calculateImgSizeInGroup(imgGroup, rowWidth) {
			var minHeight = imgGroup[0].height;

			imgGroup.forEach(function(img) {
				if(img.height < minHeight) {
					minHeight = img.height;
				}
			});

			var totalWidth = 0; 

			imgGroup.forEach(function(img) {
				var heightRate = minHeight/img.height;
				img.width = img.width * heightRate; 
				totalWidth += img.width;
			});

			var zoomRate = rowWidth/totalWidth;

			imgGroup.forEach(function(img) {
				img.width = Math.floor(img.width * zoomRate) - CELL_SPACE * 2;
				img.height = Math.floor(minHeight * zoomRate) - CELL_SPACE * 2;
			});
			
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
			showMore();
		});

		function showMore() {
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
		}

		window.addEventListener('scroll', function(e) {
			var photoBoxHeight = $('.photo-box').height();
			var scrollY = window.scrollY;
			if(photoBoxHeight - scrollY < 600) {
				showMore();
			}
		});

		$('#top').click(function() {
			window.scrollTo(0, 0);
		});

		(function start() {
			var hash = getTypeHash();
			if(hash) {
				$('#' + hash).click();
			} else {
				$('#us-photo').click();
			}
		})();
	}

})
