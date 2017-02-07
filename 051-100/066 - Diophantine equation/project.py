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
		a_0 = int(math.floor(math.sqrt(d)))
		p_0 = a_0;
		q_0= 1
		print(a_0)
		d+=1
	return max

print(main(sys.argv[1]))