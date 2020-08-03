package handler

import (
	"context"
	"fmt"
	"net/http"

	"github.com/mattdamon108/go-graphql-api-boilerplate/utils"
)

// ContextKey for the userID in context
type ContextKey string

// Authenticate for JWT
func Authenticate(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// var userID *string

		ctx := r.Context()
		userID, err := validateAuthHeader(ctx, r)
		if err != nil {
			// should do something here
		}

		if userID != nil {
			ctx = context.WithValue(ctx, ContextKey("userID"), *userID)
		}

		h.ServeHTTP(w, r.WithContext(ctx))
	})
}

func validateAuthHeader(ctx context.Context, r *http.Request) (*string, error) {
	tokenString := r.Header.Get("Authorization")
	fmt.Println(tokenString)
	if tokenString == "" {
		return nil, nil
	}

	userID, err := utils.ValidateJWT(&tokenString)
	return userID, err
}
