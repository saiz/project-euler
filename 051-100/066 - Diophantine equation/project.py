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
				print()
		d+=1
	return max

print(main(sys.argv[1]))