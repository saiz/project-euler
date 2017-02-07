import math
maxX, maxD = 0, 0
for d in range(1, 1001):
	k = int(d**0.5)
	if k*k == d: continue
	a, b = k, 1
	hn, kn = k, 1
	hp, kp = 1, 0
	while hn*hn - d*kn*kn != 1:
		p = (d - a*a) / b
		q = int(b / (d**0.5 - a))
		r = p*q - a
		hn, hp = q*hn + hp, hn
		kn, kp = q*kn + kp, kn
		a, b = r, p
	if maxX < hn:
		maxX, maxD = hn, d

print maxX, maxD