- App (loggedInUser)
  - Navbar ()
  - Routes
    - (loggedInUser = true)
      - Greeter
      - List (Companies)
        - Company
          - Job
      - List (Jobs)
        - Job ()
      - ProfileForm
    - (loggedInUser=false)


issues:
- Auth
  - custom hook?
  - [loggedInUser, Login(user, password), Logout()]
  - includes a useEffect to check for user in localstorage?
  - use Context in App to store this