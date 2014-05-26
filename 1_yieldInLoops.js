function *allEvenNumbers(){
	var i = 0;
	while(true){
		yield i;
		i += 2;
	}
};