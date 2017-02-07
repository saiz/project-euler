import math
import sys
def a_n(a,P,Q):
	return int(math.floor((a + P)/Q))
def P_n(a,Q,P):
	return a*Q-P;
def Q_n(d,P,Q):
	return (d - int(math.pow(P,2)))/Q
def D(a,p1,p2):
	return a*p1 + p2
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
		x = p['n']
		y = q['n']
		while not diophantine(x,y,d):
			P['m'] = P['n']
			P['n'] = P_n(a['n'],Q['n'],P['m'])
			Q['m'] = Q['n']
			Q['n'] = Q_n(d,P['n'],Q['n'])
			a['m'] = a['n']
			a['n'] = a_n(a_0,P['n'],Q['n'])
			temp = D(a['n'],P['n'],P['m'])
			p['m'] = p['n']
			p['n'] = temp
			temp = D(a['n'],Q['n'],Q['m'])
			q['m'] = q['n']
			q['n'] = temp
			x = p['n']
			y = q['n']
			print x, y,d
		print(d)
		d+=1;
	return max

print(main(sys.argv[1]))