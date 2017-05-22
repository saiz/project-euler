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
    not_prime = set()
    primes = []

    for i in range(2, limitn):
        if i in not_prime:
            continue

        for f in range(i*2, limitn, i):
            not_prime.add(f)

        primes.append(i)

    return primes
limit =  10 ** 7
primes = primes_sieve(int(round(math.sqrt(limit))))
min =  math.inf
print min