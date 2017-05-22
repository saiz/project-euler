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
def primes_sieve2(limit):
    a = [True] * limit                          # Initialize the primality list
    a[0] = a[1] = False

    for (i, isprime) in enumerate(a):
        if isprime:
            yield i
            for n in xrange(i*i, limit, i):     # Mark factors non-prime
                a[n] = False

print isperm('sadsa', 'sasad')
print primes_sieve2(100)