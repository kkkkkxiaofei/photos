$().ready(function(){


	var usList = [
		"1.jpg",
		"2.jpg",
		"IMG_0005.jpg",
		"IMG_0162.jpg",
		"IMG_0176.jpg",
		"IMG_0202.jpg",
		"IMG_0209.jpg",
		"IMG_0214.jpg",
		"IMG_0229.jpg",
		"IMG_0230.jpg",
		"IMG_0231.jpg",
		"IMG_0232.jpg",
		"IMG_0233.jpg",
		"IMG_0235.jpg",
		"IMG_0256.jpg",
		"IMG_0259.jpg",
		"IMG_0273.jpg",
		"IMG_0276.jpg",
		"IMG_0277.jpg",
		"IMG_0305.jpg",
		"IMG_0311.jpg",
		"IMG_0319.jpg",
		"IMG_0326.jpg",
		"IMG_0436.jpg",
		"IMG_0441.jpg",
		"IMG_0514.jpg",
		"IMG_0515.jpg",
		"IMG_0517.jpg",
		"IMG_0518.jpg",
		"IMG_0525.jpg",
		"IMG_2916.jpg"
	];

	var familyList = [
		"IMG_0030.jpg",
		"IMG_0031.jpg",
		"IMG_0032.jpg",
		"IMG_0033.jpg",
		"IMG_0034.jpg",
		"IMG_0035.jpg",
		"IMG_0042.jpg",
		"IMG_0044.jpg",
		"IMG_0048.jpg",
		"IMG_0050.jpg",
		"IMG_0051.jpg",
		"IMG_0053.jpg",
		"IMG_0057.jpg",
		"IMG_0059.jpg",
		"IMG_0061.jpg",
		"IMG_0064.jpg",
		"IMG_0065.jpg",
		"IMG_0066.jpg",
		"IMG_0069.jpg",
		"IMG_0082.jpg",
		"IMG_0083.jpg",
		"IMG_0103.jpg",
		"IMG_0106.jpg",
		"IMG_0107.jpg",
		"IMG_0110.jpg",
		"IMG_0111.jpg",
		"IMG_0112.jpg",
		"IMG_0115.jpg",
		"IMG_0116.jpg",
		"IMG_0118.jpg",
		"IMG_0120.jpg",
		"IMG_0128.jpg",
		"IMG_0130.jpg",
		"IMG_0131.jpg",
		"IMG_0133.jpg",
		"IMG_0134.jpg",
		"IMG_0135.jpg",
		"IMG_0136.jpg",
		"IMG_0137.jpg",
		"IMG_0138.jpg",
		"IMG_0139.jpg",
		"IMG_0140.jpg",
		"IMG_0141.jpg",
		"IMG_0142.jpg",
		"IMG_0143.jpg",
		"IMG_0144.jpg",
		"IMG_0145.jpg",
		"IMG_0146.jpg",
		"IMG_0147.jpg"
	];

	var lifeList = [
		"3.jpg",
		"4.jpg",
		"5.jpg",
		"6.jpg",
		"IMG_0023.jpg",
		"IMG_0024.jpg",
		"IMG_0170.jpg",
		"IMG_0182.jpg",
		"IMG_0195.jpg",
		"IMG_0198.jpg",
		"IMG_0199.jpg",
		"IMG_0224.jpg",
		"IMG_0226.jpg",
		"IMG_0227.jpg",
		"IMG_0351.jpg",
		"IMG_0353.jpg",
		"IMG_0360.jpg",
		"IMG_0513.jpg",
		"IMG_2838.jpg",
		"IMG_2859.jpg",
		"IMG_2860.jpg",
		"IMG_2897.jpg",
		"IMG_2900.jpg",
		"IMG_2908.jpg",
		"IMG_2930.jpg",
		"IMG_2931.jpg",
		"IMG_2945.jpg",
		"IMG_2966.jpg",
		"IMG_2970.jpg",
		"IMG_2975.jpg"
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
	                '<img src="../img/' + type + '/' + config.srcList[i] + '">' +
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
		elements[currentId].css('display', 'block');
		actived.removeClass('actived');
		$(this).addClass('actived');
	});

	//click me show more
	$('#show-more').click(function() {
		var actived = $('.actived');
		var activedId = actived.attr('id');
		loadPhoto(elements[activedId], configs[activedId]);
	});

	$('#show-more').click();



















})