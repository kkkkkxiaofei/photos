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

	var favoriteList = [
		"0dda7ba243f130c94aef66bc8f40bb34.jpg",
		"0f2ec8aab3e4031917e9713726822850.jpg",
		"0fc44e18a2d4120a0ea5a4f49e0607bd.jpg",
		"2c2a3eb593e5eb5c9cae2fcad1351623.jpg",
		"4db42e176c6d780dc73f4a00fe800660.jpg",
		"6b4545bc2996cfbe86e242128e4a33e3.jpg",
		"6d15069be9768163e04703c9e61b5120.jpg",
		"7c6fdf7390743f66757901814e0dff3b.jpg",
		"8ae0e061d72b417295698ec6f06227c7.jpg",
		"14cc77a6842c117cb78fd97e3ff33e97.jpg",
		"16ad3408c8afcf7015758a5e0c3c2ebf.jpg",
		"30cd0f75cb01f15321b9b410b8edd8f1.jpg",
		"0038d6278ff927f3f3193c26dfb458cd.jpg",
		"81eb7d2bfb99e21c4aeac83a94bab5d7.jpg",
		"92bb4578c568fedb69396f9a4c2c4d00.jpg",
		"097e11af0a0ef49dcc7fd35df618b8eb.jpg",
		"572cb30dafcbc39c8f45d143e2a5675a.jpg",
		"642330fde54011e3e17611657fbdf932.jpg",
		"4490036e15478b675367f114e1bf7771.jpg",
		"a08a781f2ef3c9229f5c6d4ac278d357.jpg",
		"ab24ede19a85921f58a3d48761aaa010.jpg",
		"b9eab279adc4e3a0a61e4aa4409aebb9.jpg",
		"b67cc0fa7010438b8d91935bb568860e.jpg",
		"c4be389b3186f0c92fb626a6290e3592.jpg",
		"ca1c4014da17513c01a399acb9b56c93.jpg",
		"cafdb4e8a8755198ed3a6c499d1eda3e.jpg",
		"cddeb06d31a8504333d66aa22d23ff3e.jpg",
		"d7c8c9e6c7d8ab0046d58f38fec3f494.jpg",
		"d6700c2ab76ad3566b77b85a316c5477.jpg",
		"d90624920e83a4e709a5a70cd80b93d5.jpg",
		"daae119f2f71bb025996fa95d1491c46.jpg",
		"dc29aaa3468bf963a3ca9fb783776e48.jpg",
		"fbf52fbcab918a33de9cd28e3e455ad0.jpg",
		"fe839fdf64de5f6753974edac39257d5.jpg"
	];


	var configs = {
		"us-photo": new Config(usList),
		"family-photo": new Config(familyList),
		"life-photo": new Config(lifeList),
		"favorite-photo": new Config(favoriteList)	
	};

	var elements = {
		"us-photo": $('.us-photo'),
		"family-photo": $('.family-photo'),
		"life-photo": $('.life-photo'),
		"favorite-photo": $('.favorite-photo')	
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
		//start loding class
		var showMoreBtn = $('#show-more');
		showMoreBtn.text('Loading...');
		showMoreBtn.addClass('loading');
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
		showMoreBtn.removeClass('loading');
		showMoreBtn.text('Click Me Show More');
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