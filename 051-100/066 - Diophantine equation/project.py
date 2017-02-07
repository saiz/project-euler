import math
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

def main() :
	print("This line will be printed.")
	return;
