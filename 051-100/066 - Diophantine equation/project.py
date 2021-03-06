import math
import sys
def a(d):
	return int(math.floor(math.sqrt(d)))
def a_n(a,P,Q):
	return int(math.floor((a + P)/Q))
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
		a0 = a(d)
		p0 = a0
		q0 = 1
		P0 = 0
		Q0 = 1
		P1 = a(d)
		Q1 = d - int(math.pow(a(d),2))
		a1 = a_n(a(d),P1,Q1)
		p1 = a0*a1 + 1
		q1 = a1
		if diophantine(p0,q0,d):
			x = p0
			y = q0
		else:
			x = p1
			y = q1
			while not diophantine(x,y,d):
				P0 = P1
				P1 = a1*Q1 - P1
				Q0 = Q1
				Q1 = (d - int(math.pow(P1,2)))/Q1
				a0 = a1
				a1 = a_n(a(d),P1,Q1)
				temp = a1*p1 + p0
				p0 = p1
				p1 = temp
				temp = a1*q1 + q0
				q0 = q1
				q1 = temp
				x = p1
				y = q1
		if max['x'] < x:
			max['x'] = x
			max['d'] = d
		d+=1;
	return max

print(main(sys.argv[1]))