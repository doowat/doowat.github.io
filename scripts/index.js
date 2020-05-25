(function() {
	if (window.location.pathname === '/' && !window.matchMedia('(display-mode:standalone)').matches) {
		return;
	}

	const random = items => items[Math.floor(Math.random() * items.length)];
	const keys = JSON.parse('["4afac749c9c57fb5ddef31ec8a9e6fe4","3377153631a3fad14ea89f03226ac423","4e70634a88371d5428a8db779dda4905","3a9eec169b3a84d13d37b68935866c52","1cf9ef0a4e8ee9526432ee6ece4a1012","43169a2852ce4bb1580df3855c63a78a","0d4496825e5361bc4d90932630101575","7d7573593b2f2dcd2ce6a0cfaf3d97e8","f575951784060ddb34821d33f0f1962d","25d0e3543e6dbd26d80a3124271e4090","1612b94892fbd066868fef0d0e026b82","bf779c185a56c3540d8f486c295b3e77","3212d31610fcf45aa630b4f1e54b9d3b","2ba4085f534b23493ee7d5c4b5d1a0fd","1cdcca69cacc7d1f988ddcfbc6e84fe1","7c6ba1abdad32bc82fc18862c349ff58","da9deb98e013f5af70b7278e95f4201d","d31cd72cae359caab89a51a4317844ef","8c079ac1cbf14053d4e419da78630b46","77c1522b8080cd6d79a9704ab16a7f6e","fc099f2a5b420253b5cde8aae8d6daa3","e7a466dfa994d98db3de2b90f3500160","0001518c4c79579c0d6cd364d82378ba","97849eb26ebd2561f4e032718f44e6ee","542109f70c1223a3843031c4fb98f083","570bdb0ee59c31c2790d400f13405007","2ef0490968b9e880ad6e80549136a404","8c9e7e28d0a503a98105768e1bd0767f","9a2e8a4c1ed87ee24c9b25a2af244d12","1275171b31f20c9f9ecc55e0b642929b","06364cfccd5bb9ce8e304ffb76164d0c","1747a2c8df619ec35084f7159e1d7e2a","54bfb5b25560324cfb84546223671081","83364c50fb5acaf2cc6ed8943b4760f3","857d7f5c2eae50d63cfefcc7b44a7967","754c0cb6e88eb22713df43ef65cccfda","a0662f37473028cf8042a268db34e6b2","02b3127c93141b95ab6a14cf185c05e6","b92dcb9e0f9f30056ba8d13a7d636019","842f2819f6ff1dcd0c2d38b80f89ef73","d4d86d8984c4ce3072911a1751b79e91","50c5e040d94c40ffc8ac319982d2bf4a","7b9bf214a6d16643580da0cdd4d1faf2","2df5a36d183db57a50c6bc912c836648","06a092299a1c789c564b0efaddc14ab7","74d1521cc2172194c5a167b52632e144","f5dc59b0f81b6f98802e322a529bbed0","716ce7b83503243b2122b5af89cc0431","461e70bd4c7b14e0f36f7f192dc6b767","bba4e1d3b3d31e4b587d100a6fb59c3a","f062c69caec46e7aba8ee9120ce607a3","5b23d0d9009a1e6c73dae98897dfe12b","fd48f8ddbd9992aef0b89d4e3edb9179","8e8cbb85aef4599dd0c91c936c100bd9","433a0cd9190f1e6e4846026839f20eeb","c4e1ba00a9daf0cf9834fac24a00e2be","eb0383de8c5e13b2222533b14664391b","a65c27759bd4f211d145050a4e2ceb9a","10196ab273d89c8e950557c94e81705f","a28363d32c1bb1f2de8de4940391481f","f7e64e06c601749a07500cecccafdf59","c9c4e03aef7c92ee4edf811b47c0bdbd","6dec71d5cd121b48802ff058095eb30c","81cbb2e10ba0e6da5fd0772a227ba8d6","1de6d2dfef17f2a197d9246aca1b8494","ff93de8ce531c899fbd28b72d45c4a20","fb5c251f4cdf73128d0d1d4700150c4e","9948a0568eb4e5030afc032a185aa65b","664670cf9ebb78d61ca6d94496e18162","3789bfaab90bd5c65d408a8f6e2be577","08e3659d1599d571171989ea02289bbc","49292aaf918538e0fa6ed8322ed7899c","8f0bc0a12ce51fb094223a45c8361eed","2c7462406d39c6f22a9b9a95a1ea7aff","65fc461869be0c825e14bd3b09d500f0","0869b5b48b6d416a1bfdae30f05d74a9","dd3ee4f3092d516666f71236e8b4725c","639847072ce2c6401eb3d062ce3b4078","03d6c2ebe63c26bd62e67861d7c0531b","2574248dc1799175a0f676810c14e886","42b99dc5ac68ef8ff307f2a7493302bc","00d2aace9da5487f2707638bb370c2a8","bb339a31d06f90cdbe9e9d52af7e8606","541e7a4cedc31d394fe18766c4b22b4a","7c0a0024ade175dfa210a9402675257c","31a23a46dd73fcfca53bc9c30b9d344a","de671184bef99dccd25262c2892a91a0","95d75260f789fac9928b24c366eb4528","8d6c5011c46ae7753fa3cbc750fbb163","dde58f6adc71b91bf8fcdcf3fbc176a5","b3447785a8fe388db9e16fa331faa8e6","681f66b5402431881bc028a4bdc3a697"]');
	window.location.href=`/${random(keys)}/`;
})();
