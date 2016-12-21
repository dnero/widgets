function isValidCoordinates(coordinates){
	var latLong = coordinates.split(','),
		lat = Number(latLong[0]),
		long = Number(latLong[1]);

	if(
		( !/^[-]?(\d)+[.]?(\d)*/.test(lat) || !/^[-]?(\d)+[.]?(\d)*/.test(long) ) ||
		( latLong.length > 2 ) ||
		( isNaN(lat) || isNaN(long) ) ||
		( Math.abs(lat) > 90 || Math.abs(long) > 180 )
	){
		return false;
	}

	return true;
}