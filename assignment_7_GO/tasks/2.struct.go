package tasks

import "fmt"

// this struct will save the limit value
type DeretBilangan struct {
	Limit *int
}

var Value int
var Deret = DeretBilangan{Limit: &Value}

// method for the primes
func (d *DeretBilangan) Prima() {
	fmt.Print("\nBilangan prima: ")

	// iterate from 1 to limit
	for i := 1; i <= *d.Limit; i++ {
		isPrime := true

		// check the divisible number by any numbers from 2
		for j := 2; j < i; j++ {
			if i%j == 0 {
				isPrime = false
				break
			}
		}

		// if the number is prime
		if isPrime {
			fmt.Print(i, "  ")
		}
	}

	fmt.Println() //new line
}

// Method for odd numbers
func (d *DeretBilangan) Ganjil() {
	fmt.Print("\nBilangan ganjil: ")

	// iterate from 1 to limit with step of 2
	for i := 1; i <= *d.Limit; i += 2 {
		fmt.Print(i, "  ")
	}

	fmt.Println() //new line
}

// method for even numbers
func (d *DeretBilangan) Genap() {
	fmt.Print("\nBilangan genap: ")

	// iterate from 1 to limit with step of 2
	for i := 2; i <= *d.Limit; i += 2 {
		fmt.Print(i, "  ")
	}

	fmt.Println() //new line
}

// method for fibonacci numbers
func (d *DeretBilangan) Fibonacci() {
	fmt.Print("\nBilangan fibonacci: ")

	// initialization values for fibonacci
	num1, num2 := 1, 1

	// iterate limit times
	for i := 0; i < *d.Limit; i++ {

		// check if number1 < d.limit
		if num1 <= *d.Limit {
			fmt.Print(num1, "  ")
		}

		// without any conditions
		// fmt.Print(num1, "  ")

		// calculate the next fibonacci number
		num1, num2 = num2, num1+num2
	}

	fmt.Println() //new line
}
