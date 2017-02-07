import math
def a_n(n,d,a,P,Q):
	try:
		return a[n]
	except IndexError:
		pass
	if n == 0:
		return a[n] = math.floor( math.sqrt( d ) )
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

def main() :
	print("This line will be printed.")
	return;
