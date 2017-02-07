import math
import sys

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
		a['m'] = a_0
		P['m'] = 0
		P['n'] = a['m']
		Q['m'] = 1
		q['n'] = d

		d+=1
	return max

print(main(sys.argv[1]))