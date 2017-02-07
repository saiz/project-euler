def a_n(n,d,a,P,Q):
	try:
		print a[n]
	except IndexError:
		print "No item at ", n


	return;

def main() :
	print("This line will be printed.")
	return;

arr = []
main()
a_n(0,0,arr,0,0)