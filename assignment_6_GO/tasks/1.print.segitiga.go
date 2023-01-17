package tasks

import "fmt"

// func main() {
// 	printSegitiga(5)
// }

// segitiga
func PrintSegitiga(num int) {
	// before create the triangle, it's good to understand that the asterisk triangle, square, etc, have rows and columns. In this case, asterisk triangle will be used.

	// first loop will iterate each row of the codes
	for i:=num; i>=1; i-- {

		// second loop will iterate each column in each row.
		for j:=1; j<=2*num-1; j++ {

			// the conditional is needed to decide how many asterisk will be printed in a row
			if j > num-i && j < num+i {
				fmt.Print("*")
			} else {
				fmt.Print(" ")
			}
		}
		
		fmt.Println()
	}
}