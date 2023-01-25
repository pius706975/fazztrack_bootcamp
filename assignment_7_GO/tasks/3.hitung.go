package tasks

import (
	"fmt"

	interfaces "github.com/pius706975/tasks/tasks/interface"
)

type IniStruct struct {
	Panjang, Lebar, Tinggi *float64
}

var Panjang float64
var Lebar float64
var Tinggi float64

var Hitung = IniStruct{Panjang: &Panjang, Lebar: &Lebar, Tinggi: &Tinggi}

func (ini *IniStruct) Luas() float64 {
	panjang := *ini.Panjang
	lebar := *ini.Lebar

	result := panjang * lebar

	fmt.Println("Luas: ", result)
	return result
}

func (ini *IniStruct) Keliling() float64 {
	panjang := *ini.Panjang
	lebar := *ini.Lebar

	result := 2 * (panjang + lebar)

	fmt.Println("Keliling: ", result)
	return result
}

func (ini *IniStruct) Volume() float64 {
	panjang := *ini.Panjang
	lebar := *ini.Lebar
	tinggi := *ini.Tinggi

	result := panjang * lebar * tinggi

	fmt.Println("Volume: ", result)
	return result
}

func (ini *IniStruct) Hitung(result interfaces.Hitung) {
	result.Luas()
	result.Keliling()
	result.Volume()
}

func Hitung2d(hitung interfaces.Hitung2d) {
	hitung.Luas()
	hitung.Keliling()
}

func Hitung3d(hitung interfaces.Hitung3d) {
	hitung.Volume()
}
