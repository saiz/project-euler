import math
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
def primes_sieve(limit):
    limitn = limit+1
    not_prime = False * limitn
    primes = []
    for i in range(2, limitn):
        if not_prime[i]:
            continue
        for f in xrange(i*2, limitn, i):
            not_prime[f] = True

        primes.append(i)

    return primes

limit =  10 ** 7
print limit
primes = primes_sieve(math.sqrt(limit))
print len(primes)