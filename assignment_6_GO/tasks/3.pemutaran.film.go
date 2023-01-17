package tasks

import (
	"errors"
	"strconv"
)

func Hitung(penerbangan int, data []int) (string, error) {
	var result string

	//iterate each element of data
	for i, num := range data {
		// if num == penerbangan, continue to the next iteration
		if num == penerbangan {
			continue
		}

		// iterate each element of data from i+1. i+1 means i:=1 or the index starts from 1
		for j := i + 1; j < len(data); j++ {
			if num+data[j] == penerbangan {
				result = strconv.Itoa(num) + " dan " + strconv.Itoa(data[j])
			}
		}
	}

	if len(result) == 0 {
		return "", errors.New("Data not found")
	}

	// if a couple of numbers is not found, return 0, 0
	return result, nil
}
