package main

import (
	"fmt"

	"github.com/pius706975/tasks/tasks"
)

func main() {

	// Task 1
	hasilPembulatan := tasks.Pembulatan(4.37)
	fmt.Printf("%.2f", hasilPembulatan)

	average, grade := tasks.HitungNilai(82.5, 98, 87.5, 67.5)
	fmt.Println("\nThe Average = ", average)
	fmt.Println("The Grade = ", grade)
	fmt.Println("\n====================================================")

	// Task 2
	fmt.Println("\nNilai: ", int(average))

	tasks.Value = int(average)
	deret := tasks.Deret
	deret.Prima()
	deret.Ganjil()
	deret.Genap()
	deret.Fibonacci()
	fmt.Println("\n====================================================")

	// task 3
	tasks.Panjang = 10
	tasks.Lebar = 10
	tasks.Tinggi = 15
	tasks.Hitung.Hitung(&tasks.Hitung)
}
