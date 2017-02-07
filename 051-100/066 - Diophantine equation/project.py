import math
def a_n(n,d,a,P,Q):
	try:
		return a[n]
	except IndexError:
		pass
	if n == 0:
		a[n] = math.floor( math.sqrt( d ) )
	return;

def main() :
	print("This line will be printed.")
	return;

arr = [1]
main()
print a_n(0,0,arr,0,0)