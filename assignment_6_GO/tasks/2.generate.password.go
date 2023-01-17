package tasks

import (
	"math/rand"
	"time"
	"unicode"
)

func GeneratePassword(password string, level string) string {
	// characters are needed to generate password according the levels.
	var lowerCharSet string = "abcdefghijklmnopqrstuvwxyz"
	var upperCharSet string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var specialCharSet string = "~!@#$%^&*()_+-={}[]:;<>,.?/"
	var numberSet string = "0123456789" 

	var charSet string

	// validate password levels
	if level == "low" {
		charSet = lowerCharSet + numberSet
	} else if level == "medium" {
		charSet = upperCharSet + lowerCharSet + numberSet
	} else if level == "strong" {
		charSet = specialCharSet + upperCharSet + lowerCharSet + numberSet
	}

	// initializing new password named generatedPassword and will be returned as new value
	var generatedPassword string = password

	// validate password whether password length less than 6 or more than 6
	if len(password) < 6 {
		// random number
		rand.Seed(time.Now().UnixNano())

		// count the additional character as necessary
		var nChar int = 6 - len(password) + 2

		// add nChar to the new password
		for char:=0; char<nChar; char++ {
			generatedPassword += string(charSet[rand.Intn(len(charSet))])
		}
	}else if len(password) >= 6 {
		// random number
		rand.Seed(time.Now().UnixNano())

		// count the additional character as necessary
		var nChar int = 6 + len(password)

		// add nChar to the new password
		for char:=0; char<nChar; char++ {
			generatedPassword += string(charSet[rand.Intn(len(charSet))])
		}
		
	}

	// manipulation program
	var result string

	for _, r := range generatedPassword {
		if rand.Intn(2) == 0 {
			result += string(r)
		}else {
			result += string(unicode.ToUpper((r)))
		}
	}

	return result
}