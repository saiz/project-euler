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
	# print x*x - d*y*y
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
		a0 = int(math.floor(math.sqrt(d)))
		p0 = a0

		d+=1;
	return max

print(main(sys.argv[1]))