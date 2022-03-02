# Taulia: take-home coding challenge
Create a password validator


Requirements for this component:

● It is styled to look like the above mockup

● It has a toggle checkbox for showing and hiding the password text

● On each keystroke, it validates that the string

○ Is between 8 and 72 characters long

○ Contains at least 1 uppercase character

○ Contains at least 1 lowercase character

○ Contains at least 1 numeric character

○ Does not match the user’s email address (e.g. the email is bob@gmail.com and the password does not contain “bob” or “bob@gmail.com”) which is dynamically retrieved from this endpoint: https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813

● It adds strike out styling to the validation requirement when it is met


To run this project:
1. Fork & clone this repo
2. Open a terminal window and execute "npm start"
3. In a separate terminal window, execute "npm run react-dev"
4. In your browser, navigate to http://localhost:4500/
