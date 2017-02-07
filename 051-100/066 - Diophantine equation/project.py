import math
import sys
def a_n(a,P,Q):
	return int(Math.floor((a + p)/Q))

def diophantine (x,y,d):
	if x*x - d*y*y == 1:
		return True
	return False

def main(m) :
	m = int(m)
	d =2
	max = {
		'x':0,
		'd':0
	}
	while d <= m:
		if math.sqrt(d)%1 == 0:
			d+=1
			continue
		a = {}
		q = {}
		p = {}
		P = {}
		Q = {}
		# m = n-1 , n
		a_0 = int(math.floor(math.sqrt(d)))
		P['m'] = 0
		P['n'] = a['m']
		Q['m'] = 1
		q['n'] = d math.pow(a_0,2)
		a['m'] = a_0
		a['n'] = a_n(a_0,P['n'],Q['n'])
		p['m'] = 0
		p['n'] = a['m']
		while( not diophantine())
	return max

print(main(sys.argv[1]))