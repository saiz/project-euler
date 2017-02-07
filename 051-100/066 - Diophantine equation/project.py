import math
import sys
def a_n(a,P,Q):
	return int(math.floor((a + P)/Q))

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
		p = {}
		q = {}
		P = {}
		Q = {}
		# m = n-1 , n
		a_0 = int(math.floor(math.sqrt(d)))
		P['m'] = 0
		P['n'] = a_0
		Q['m'] = 1
		Q['n'] = d - int(math.pow(a_0,2))
		a['m'] = a_0
		a['n'] = a_n(a_0,P['n'],Q['n'])
		p['m'] = a_0
		p['n'] = a['m']*a['n'] + 1
		q['m'] = 0
		q['n'] = a['n']
		print ('a',a)
		print ('p',p)
		print ('q',q)
		print ('P',P)
		print ('Q',Q)
	return max

print(main(sys.argv[1]))