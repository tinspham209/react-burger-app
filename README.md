# Mini Project: Order Burger Application

## Date: 24 - Dec - 2019

### Functions
- Choose type of Burger
- Login
- Provide information order
- Confirm order
- Finish order
- View List of Orders

### Screenshot
<img src="https://i.imgur.com/3uwFxvd.jpg" />

### Tech-Stack
- React, Hooks
- Redux, Hooks
- Firebase
- axios

### Tutorials
https://www.udemy.com/course/react-the-complete-guide-incl-redux/

### Directory Structure
```
.
├── .gitignore
├── package.json
├── README.md
├── public
├── build
├── config
├── scripts
└── src
    ├── assets
        └── images
    ├── components
        ├── Burger
            ├── BuildControls
                └── BuldControl
            ├── BurgerIngredient
            └── OrderSummary
        ├── Logo
        ├── Navigation
            ├── NavigationItems
                └── NavigationItem
            ├── SideDrawer
                └── DrawerToggle
            └── Toolbar
        ├── Order
            └── CheckoutSummary
        └── UI
            ├── Backdrop
            ├── Button
            ├── Input
            ├── Modal
            └── Spinner
    ├── containers
        ├── Auth
            └── Logout
        ├── BurgerBuilder
        ├── Checkout
            └── ContactData
        └── Orders
    ├── hoc
        ├── Auxilary
        ├── Layout
        └── withErrorHandler
    ├── hooks
    ├── shared
    ├── store
        ├── actions
        ├── reducers
        └── sagas
    ├── App.js
    ├── axios-orders
    ├── index.css
    └── index.js
``` 
### Set up
Use the cmd line to clone repo to your computer
```
git clone [github_repo_url]
```
Use the cmd line to install dependencies.
```
npm install
```
Run in cmd for start the dependencies server
```
npm start
```
