def isperm( str1, str2 ):
	if (len(str1) != len(str2)):
		return False
	i = 0
	while( i < len(str1)):
		print str1[i]
		i+=1;
	return True

print isperm('adsad', 'sasad')