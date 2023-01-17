package main

import (
	"fmt"

	"github.com/pius706975/tasks/tasks"
)

func main() {
	// task 1
	tasks.PrintSegitiga(5)
	fmt.Println(" ")

	// task 2
	fmt.Println("Password = ", tasks.GeneratePassword("pius", "low"))
	fmt.Println(" ")

	// task 3
	var data = [...]int{1, 7, 3, 4, 8, 9}

	num1, error := tasks.Hitung(18, data[:])

	if error != nil {
		fmt.Print(error)
	}

	fmt.Print(num1)
}
