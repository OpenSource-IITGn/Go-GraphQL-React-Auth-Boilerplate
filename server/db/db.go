package db

import (
	"github.com/jinzhu/gorm"
	// gorm postgres dialect
	"fmt"

	_ "github.com/jinzhu/gorm/dialects/postgres"
)

// DB *grom.DB
type DB struct {
	*gorm.DB
}

// ConnectDB : connecting DB
func ConnectDB() (*DB, error) {
	db, err := gorm.Open("postgres", "host=localhost port=5432 user=go dbname=go password=go sslmode=disable")
	fmt.Println("connected Sucessfully.")
	if err != nil {
		panic(err)
	}

	return &DB{db}, nil
}
