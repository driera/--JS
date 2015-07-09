var print = '<ul>';
for (var i in data.users){
	print += '<li>'
			+ data.users[i].firstName
			+ ' '
			+ data.users[i].lastName
			+ ', '
			+ data.users[i].joined.month
			+ ' '
			+ data.users[i].joined.year
			+ '</li>'
};
print += '</ul>';
document.getElementById('container').innerHTML = print;