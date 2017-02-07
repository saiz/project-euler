import math
maxX, maxD = 0, 0
for d in range(1, 1001):
	k = int(d**0.5)
	if k*k == d: continue
	a, b = k, 1
	print a,b,k
print maxX, maxD