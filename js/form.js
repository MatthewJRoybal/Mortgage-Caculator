function rateSelect() {
	var html = ('<option value="">- Select</option>');
	for(var i = 0; i < 161; i++) {
		var rawRate = i * 0.125;
		var rate = rawRate.toFixed(3);
		html += ('<option value="' + rate + '">' + rate + '%</option>');
	}
	return html;
}

function termSelect() {
	var html = ('<option value="">- Select</option>');
	for (var i = 0; i < 41; i++) {
		if (i !== 0) {
			html += ('<option value="' + (i * 12) + '">' + i + ' years</option>');
		}
	}
	return html;
}