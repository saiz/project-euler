import math
import sys
def a_n(n,d,a,P,Q):
	if n in a:
		return a[n]
	if n == 0:
		a[n] = math.floor( math.sqrt( d ) )
		return a[n]
	a[n] = math.floor((a[0]+P[n])/Q[n])
	if n >= 5:
		del a[n-3]
	return a[n]

def p_n(n,a,p):
	if n in p:
		return p[n]
	if n == 0:
		p[n] = a[0]
		return p[n]
	if n == 1:
		p[n] = a[0]*a[1] +1;
		return p[n]
	if n >= 5:
		del p[n-3]
	p[n] = a[n]*p[n-1] + p[n-2];
	return p[n];

def q_n(n,a,q):
	if n in q:
		return a[n]
	if n == 0:
		q[n] = 1
		return q[n]
	if n == 1:
		q[n] = a[1]
		return q[n]
	if n >= 5:
		del q[n-3]
	q[n] = a[n]*q[n-1] + q[n-2]
	return q[n]

def Q_n(n,d,a,P,Q):
	if n in Q:
		return Q[n]
	if n == 0:
		Q[n] = 1;
		return Q[n]
	if n == 1:
		Q[n] = d - math.pow(a[0],2)
		return Q[n]
	if n >= 5:
		del Q[n-3]
	Q[n] = (d - math.pow(P[n],2))/Q[n-1]
	return Q[n]
def P_n(n,d,a,P,Q):
	if n in P:
		return P[n]
	if n == 0:
		P[n] = 0
		return P[n]
	if n == 1:
		P[n] = a[0]
		return P[n]
	if n >= 5:
		del P[n-3]
	P[n] = a[n-1]*Q[n-1] - P[n-1]
	return P[n]
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
		if math.sqrt(d)%1 != 0:
			n = 0
			a = {}
			p = {}
			q = {}
			P = {}
			Q = {}
			P_n(n,d,a,P,Q)
			Q_n(n,d,a,P,Q)
			a_n(n,d,a,P,Q)
			x = p_n(n,a,p)
			y = q_n(n,a,q)
			while(not diophantine(x,y,d)):
				# print(len(P))
				P_n(n,d,a,P,Q)
				Q_n(n,d,a,P,Q)
				a_n(n,d,a,P,Q)
				x = p_n(n,a,p)
				y = q_n(n,a,q)
				n+=1;
			if max['x'] < x:

				max['x'] = x
				max['d'] = d
		d+=1
	return max

print(main(sys.argv[1]))