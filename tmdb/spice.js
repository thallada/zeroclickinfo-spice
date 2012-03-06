function nrtm(tm) {
    var snippet = '';

    // For debugging.
    console.log(tm);

    // Validity check.
    if (tm[0]['url']) {
    // Snippet that gets shown in the 0-click box.
	snippet = '<b>' + tm[0]['name'] + '</b> ';
	if (tm[0]['released']) snippet += ' (' + tm[0]['released'].substring(0,4) + ')';
	if (tm[0]['certification']) snippet += ' ' + tm[0]['certification'];
	if (tm[0]['rating']) snippet += ' (Rated: ' + tm[0]['rating'] + '/10)';
	if (tm[0]['overview']) snippet += '; ' + tm[0]['overview'];

	items = new Array();
	items[0] = new Array();
	items[0]['a'] = snippet;

	items[0]['h'] = '';

    // Source name and url for the More at X link.
	items[0]['s'] = 'TMDb';
	if (tm[0]['url']) items[0]['u'] = tm[0]['url'];
    else items[0]['u'] = 'http://www.themoviedb.org/';
	nra(items);
    }
}
