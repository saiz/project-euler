def isperm( str1, str2 ):
	if (len(str1) != len(str2)):
		return False
	i = 0
	bool = True
	_str = str2
	while( i < len(str1) and bool):
		if not(str1[i] in _str):
			bool = False
		_str = _str.replace(str1[i],"",1)
		i+=1;
	return bool

print isperm('sadsa', 'sasad')