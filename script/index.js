$().ready(function(){


	var usList = [
		"1.jpeg",
		"2.jpeg",
		"IMG_0005.jpeg",
		"IMG_0162.jpeg",
		"IMG_0176.jpeg",
		"IMG_0202.jpeg",
		"IMG_0209.jpeg",
		"IMG_0214.jpeg",
		"IMG_0229.jpeg",
		"IMG_0230.jpeg",
		"IMG_0231.jpeg",
		"IMG_0232.jpeg",
		"IMG_0233.jpeg",
		"IMG_0235.jpeg",
		"IMG_0256.jpeg",
		"IMG_0259.jpeg",
		"IMG_0273.jpeg",
		"IMG_0276.jpeg",
		"IMG_0277.jpeg",
		"IMG_0305.jpeg",
		"IMG_0311.jpeg",
		"IMG_0319.jpeg",
		"IMG_0326.jpeg",
		"IMG_0436.jpeg",
		"IMG_0441.jpeg",
		"IMG_0514.jpeg",
		"IMG_0515.jpeg",
		"IMG_0517.jpeg",
		"IMG_0518.jpeg",
		"IMG_0525.jpeg",
		"IMG_2916.jpeg"
	];

	var familyList = [
		"IMG_0030.jpeg",
		"IMG_0031.jpeg",
		"IMG_0032.jpeg",
		"IMG_0033.jpeg",
		"IMG_0034.jpeg",
		"IMG_0035.jpeg",
		"IMG_0042.jpeg",
		"IMG_0044.jpeg",
		"IMG_0048.jpeg",
		"IMG_0050.jpeg",
		"IMG_0051.jpeg",
		"IMG_0053.jpeg",
		"IMG_0057.jpeg",
		"IMG_0059.jpeg",
		"IMG_0061.jpeg",
		"IMG_0064.jpeg",
		"IMG_0065.jpeg",
		"IMG_0066.jpeg",
		"IMG_0069.jpeg",
		"IMG_0082.jpeg",
		"IMG_0083.jpeg",
		"IMG_0103.jpeg",
		"IMG_0106.jpeg",
		"IMG_0107.jpeg",
		"IMG_0110.jpeg",
		"IMG_0111.jpeg",
		"IMG_0112.jpeg",
		"IMG_0115.jpeg",
		"IMG_0116.jpeg",
		"IMG_0118.jpeg",
		"IMG_0120.jpeg",
		"IMG_0128.jpeg",
		"IMG_0130.jpeg",
		"IMG_0131.jpeg",
		"IMG_0133.jpeg",
		"IMG_0134.jpeg",
		"IMG_0135.jpeg",
		"IMG_0136.jpeg",
		"IMG_0137.jpeg",
		"IMG_0138.jpeg",
		"IMG_0139.jpeg",
		"IMG_0140.jpeg",
		"IMG_0141.jpeg",
		"IMG_0142.jpeg",
		"IMG_0143.jpeg",
		"IMG_0144.jpeg",
		"IMG_0145.jpeg",
		"IMG_0146.jpeg",
		"IMG_0147.jpeg"
	];

	var lifeList = [
		"3.jpeg",
		"4.jpeg",
		"5.jpeg",
		"6.jpeg",
		"IMG_0023.jpeg",
		"IMG_0024.jpeg",
		"IMG_0170.jpeg",
		"IMG_0182.jpeg",
		"IMG_0195.jpeg",
		"IMG_0198.jpeg",
		"IMG_0199.jpeg",
		"IMG_0224.jpeg",
		"IMG_0226.jpeg",
		"IMG_0227.jpeg",
		"IMG_0351.jpeg",
		"IMG_0353.jpeg",
		"IMG_0360.jpeg",
		"IMG_0513.jpeg",
		"IMG_2838.jpeg",
		"IMG_2859.jpeg",
		"IMG_2860.jpeg",
		"IMG_2897.jpeg",
		"IMG_2900.jpeg",
		"IMG_2908.jpeg",
		"IMG_2930.jpeg",
		"IMG_2931.jpeg",
		"IMG_2945.jpeg",
		"IMG_2966.jpeg",
		"IMG_2970.jpeg",
		"IMG_2975.jpeg"
	];

	


	var configs = {
		"us-photo": new Config(usList),
		"family-photo": new Config(familyList),
		"life-photo": new Config(lifeList)	
	};

	var elements = {
		"us-photo": $('.us-photo'),
		"family-photo": $('.family-photo'),
		"life-photo": $('.life-photo')	
	};

	function Config(photoSrcList) {
		this.srcList = photoSrcList;
		this.srcListLen = photoSrcList.length;
		this.count = 0;
		this.size = 15; //how many photos loading at one time
		this.MAX_COUNT = this.srcListLen < this.size ? 1 : parseInt(this.srcListLen/this.size) + 1;
	}

	function findActivedElement() {
		var actived = $('.actived');
		var activedId = actived.attr('id');
		return elements[activedId];
	}

	function loadPhoto(element, config) {
		if(config.count == config.MAX_COUNT) return;
		var start = config.count * config.size, type = element.attr('class'), end;
		if(config.MAX_COUNT - config.count == 1) {
			end = config.srcListLen - 1;
		} else {
			end = start + config.size;
		}
		for(var i = start;i < end; i++){
			var photoCell = $(
				'<div class="'+ type +'-cell">' +
	                '<img src="img/' + type + '/' + config.srcList[i] + '">' +
	                '<div class="photo-description">this is photo descrition</div>' +
	            '</div>'
	        );
	        element.append(photoCell);
		}
		config.count++;
	}

	
	//switch category(without loading)
	$('.category p').click(function() {
		var actived = $('.actived');
		var activedId = actived.attr('id');
		elements[activedId].css('display', 'none');
		var currentId = $(this).attr('id');
		var currentElement = elements[currentId];  
		currentElement.css('display', 'block');
		actived.removeClass('actived');
		$(this).addClass('actived');
		if(currentElement.children().length == 0) {
			$('#show-more').click();
		}
	});

	//click me show more
	$('#show-more').click(function() {
		var actived = $('.actived');
		var activedId = actived.attr('id');
		loadPhoto(elements[activedId], configs[activedId]);
	});

	$('#show-more').click();



















})