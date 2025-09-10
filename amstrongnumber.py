 
num = int(input("Enter a number: "))

 
digits = str(num)
power = len(digits) 
 
total = sum(int(digit) ** power for digit in digits)

 
if total == num:
    print(f"{num} is an Armstrong number.")
else:
    print(f"{num} is not an Armstrong number.")
