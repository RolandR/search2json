

function search2json(){


	var search = location.search.trim().substring(1);
	var obj = {};

	if(search){
		
		search = search.split('&');

		for(var i = 0; i < search.length; i++){
			if(search[i]){
				search[i] = search[i].split('=');

				obj[search[i][0]] = search[i][1];
			}
		}
	}

	return obj;
	
}


