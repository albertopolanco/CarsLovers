Car's Lovers

App for car lovers, who want to have a list of their cars or also for car's collectors who want to know at any time what cars they have.


User Stories

· 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.

· Signup: As an anon I can sign up in the platform so that I can start playing into competition.

· Login: As a user I can login to the platform so that I can play competitions.

· Logout: As a user I can logout from the platform so no one else can use it.

· Add car: The user can register his new cars.

· Edit car: He user can edit his car .

· Edit profile: As a user I can edit my user.

· View details: In this part you can see in detail the selected car.



backlog

· Create a buy/sell section.

· Generate internal chat between users.



REACT ROUTES :  

PATH                    COMPONENT                       PERMISIONS                  BEHAVIOR

/                       Home page                       User only                   Home page
                                                        <PrivateRoute>
----------------------------------------------------------------------------------------------------------------------------------
/signup                 Signup page                     anon only                   Signup form, link to login,
                                                        <AnonROute>                 navigate to home page after Signup
----------------------------------------------------------------------------------------------------------------------------------
/login                  Login page                      anon only                   Signup form, link to login,
                                                        <AnonRoute>                 navigate to home page after Signup
----------------------------------------------------------------------------------------------------------------------------------
/profile                Profile page                    User only                   Shows user profile, and links to edit it
                                                        <PrivateRoute>              Link to create cars
----------------------------------------------------------------------------------------------------------------------------------
/profile/:id/edit       Edit profile page               User only                   Edit user
                                                        <PrivateRoute>
----------------------------------------------------------------------------------------------------------------------------------
/garage/:id             Garage page                     User only                   Show garage, and link add your car     
                                                        <PrivaRoute>
----------------------------------------------------------------------------------------------------------------------------------
/garage/:id/addcar      Add car page                    User only                   Create a new car
                                                        <PrivateRoute>
----------------------------------------------------------------------------------------------------------------------------------
/cardetails/:id         Details car                     User only                   View car details
                                                        <PrivateRoutes>




Components

· Navbar.

· LoginPage.



· Auth Service:

    auth.login(user)
    auth.signup(user)
    auth.logout()
    auth.me()

· User:

    user.detail(id)
    user.add(id)
    user.delete(id)

· Cars:

    cars.detail(id)
    cars.add(id)
    cars.delete(id)


Server/Backend

Models

Model User

{
  username: String,
  password: String,
  age: String,
  country: String,
  city: String,
  image: String
}

Model cars

{
  brand: String,
  model: String,
  year: String,
  engine: String,
  power: String,
  traction: String,
  fuel: String,
  image: String
}


API endpoints (backend routes)

HTTP            URL                     REQ.BODY                SUCCES          ERROR           DESCRIPTION
METHOD                                                      STATUS          STATUS

GET             /auth/profile           Saved session           200             404             Check if user is logged in
                                                                                            and return profile page
--------------------------------------------------------------------------------------------------------------------------------------
POST            /auth/signup            {email,password}        201             404             Checks if fields not empty (422)
                                                                                                and user not exist (409). Then create user
                                                                                                with encrypted password, and store user in session
--------------------------------------------------------------------------------------------------------------------------------------
POST            /auth/login             {email,password}        200             401             Checks if fields not empty (422), if user 
                                                                                                exists (404), and if password matches (404), then stores user in session
--------------------------------------------------------------------------------------------------------------------------------------
POST            /auth/logout            {empty}                 204             400             Logs out the user
--------------------------------------------------------------------------------------------------------------------------------------
Get             /profile/:id            {id}                    200             404             Show user profile
--------------------------------------------------------------------------------------------------------------------------------------
PUT             /profile/:id/edit       {user model}            200             404             Edit user and car model
                                        {cars model}
--------------------------------------------------------------------------------------------------------------------------------------
POST            /profile/createcar      {cars model}            201             404             Add car
--------------------------------------------------------------------------------------------------------------------------------------
GET             /profile/:id/details    {id}                    200             404             Show specific car detail


Links 

Trello

·

Git

·Client: 

·Server:

Slide

·