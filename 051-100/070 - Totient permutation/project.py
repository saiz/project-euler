def isperm( str1, str2 ):
	if (len(str1) != len(str2)):
		return False
	i = 0
	bool = True
	while( i < len(str1) and bool):
		print str1[i]
		if not(str1[i] in str2):
			bool = False
		str2.replace(str1[i],"",1)
		i+=1;
	return bool

print isperm('adsad', 'sasad')