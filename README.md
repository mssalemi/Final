# sei-final-project-v2

*** Note from May 18th - 2022. 
*** This project was from my bootcamp that I attended, and is no longer maintained. 

### Sports League Management App

![Screen Shot 2021-12-03 at 8 23 19 PM](https://user-images.githubusercontent.com/16329347/144691529-51de6288-735c-4d39-99e3-802793d38746.png)

### Tech Stack
React, Express JS, Material UI, Bootstrap, MongoDB/Mongoose

## The Backend

### 4 Major Models (User, Team, League, Game)

![Screen Shot 2021-12-03 at 8 19 39 PM](https://user-images.githubusercontent.com/16329347/144691374-4c68c03f-c131-4a97-8692-914987ac6517.png)

![Screen Shot 2021-12-03 at 8 19 46 PM](https://user-images.githubusercontent.com/16329347/144691381-dea92407-e907-4636-b3d6-bd28fac60dae.png)

#### Routes: 
## Users
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all users|
| GET | /refs | get all users of type 'ref' |
| POST | /create | creates a new user |
| POST | /createRef | creates a new user of type ref |
| GET | /:id | gets user with id |
| PUT | /changepassword | changes users password |
| DELETE | /:id/delete | deletes user

## Teams
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all teams|
| POST | /create | creates a new team |
| GET | /:id | gets team with id |
| POST | /:id | edits team with id | 
| POST | /addPlayer| adds player (user) to tean |
| POST | /removePlayer| removes player (user) to team |
| POST | /editmanager| edits manage on team |

## Games
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all games |
| GET | /:id | get one game |
| POST | /create | creates a new game |
| POST | /score/:id | edit's score of game |
| POST | /ref/:id | edit's ref of game |

## Leagues
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all leagues|
| POST | /create | creates a new league |
| POST | /addgame | add game to league |
| POST | /addteam | add team to league |

# React Component

Home Page
- Your Teams 
- Your Leagues  
- Upcoming Games [Upcoming]
- User 
- Loggout 

Game Component
- Edit Game (Score)
- Delete Game
- View Games

League Compoents
- Leagues 
- League 
- Create League 
- Add Team to League 
- Add Game To League 

Team Components:
- Team 
- Teams 
- Create Team 
- Edit Team
- Add Player to Team 
- 
User Components:
- Profile
- Create Profile
- Edit Profile
- Change Password on Profile


### Planned Improvments:
- Build out User Model More
- Add more types of accounts (refs, coaches)
- Create full standings / score features
- Build outs Games Further
- Placeholder imgs everywhere
- Image Upload 
