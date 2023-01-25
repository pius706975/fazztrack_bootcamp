package tasks

import (
	"math"
)

func Pembulatan(N float64) float64 {
	var result float64 = math.Round(N*10) / 10

	return result
}

func HitungNilai(N1, N2, N3, N4 float64) (float32, string) {

	// if any of the numbers are > 100
	if N1 > 100 || N2 > 100 || N3 > 100 || N4 > 100 {
		return 0, "The maximum number of each element is 100"
	}

	// get the average number
	// average := (float64(N1) + float64(N2) + float64(N3) + float64(N4)) / 4
	result := (float64(N1) + float64(N2) + float64(N3) + float64(N4)) / 4

	// get the round number
	var average float64 = math.Round(result*10) / 10

	// validate a grade based on the average
	var grade string
	if average >= 90 {
		grade = "A"
	} else if average >= 80 {
		grade = "B"
	} else if average >= 70 {
		grade = "C"
	} else if average >= 60 {
		grade = "D"
	} else if average < 60 {
		grade = "E"
	}

	return float32(average), grade
}
