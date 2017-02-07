import math
import sys
def a_n(n,d,a,P,Q):
	try:
		return a[n]
	except IndexError:
		pass
	if n == 0:
		a[n] = math.floor( math.sqrt( d ) )
		return a[n]
	a[n] = math.floor((a[0]+P[n])/Q[n])
	return a[n]

def p_n(n,a,p):
	try:
		return p[n]
	except IndexError:
		pass
	if n == 0:
		p[n] = a[0]
		return p[n]
	if n == 1:
		p[n] = a[0]*a[1] +1;
		return p[n]
	p[n] = a[n]*p[n-1] +p[n-2];
	return p[n];

def q_n(n,a,q):
	try:
		return q[n]
	except IndexError:
		pass
	if n == 0:
		q[n] = 1
		return q[n]
	if n == 1:
		q[n] = a[1]
		return q[n]
	q[n] = a[n]*q[n-1] +q[n-2]
	return q[n]

def Q_n(n,d,a,P,Q):
	try:
		return Q[n]
	except IndexError:
		pass
	if n == 0:
		Q[n] = 1;
		return Q[n]
	if n == 1:
		Q[n] = d - math.pow(a[0],2)
		return Q[n]
	Q[n] = (d - math.pow(P[n],2))/Q[n-1]
	return Q[n]
def P_n(n,d,a,P,Q):
	try:
		return P[n]
	except IndexError:
		pass
	if n == 0:
		P[n] = 0
		return P[n]
	if n == 1:
		P[n] = a[0]
		return P[n]
	P[n] = a[n-1]*Q[n-1] - P[n-1]
	return P[n]
def diophantine (x,y,d):
	if x*x - d*y*y == 1:
		return true
	return false

def main(m) :
	d =2
	max = {
		'x':0,
		'd':0
	}
	print(max)

	return m

print(main(sys.argv[1]))