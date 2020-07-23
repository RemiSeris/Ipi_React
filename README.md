# Aries_React

## Purpose

This is an Introduction to react, we will learn some core concept, providing strong basics.

* **JSX Syntax**
* **Functional Component**
* **Props**
* **State Manadgement**
* **Context** (advanced)

## Prerequisite

First of all, let's get some setup:

  * **VSCode**: https://code.visualstudio.com/ (optional) - Number 1 code editor on the market
  * **Git Bash**: https://gitforwindows.org/ (mandatory) - A Git manager bundled with a Unix Shell, allows you to run shell command including git
  * **Node JS**: https://nodejs.org/en/download/ (mandatory) - Javascript Runtime environement
  * **Yarn**: https://classic.yarnpkg.com/fr/docs/install/#windows-stable (mandatory) - Package manager
  
  **Clone The repository** : git clone https://github.com/RemiSeris/Ipi_React.git
  
  * **Get into the code folder**: cd Ipi_React
  
 * **Get into the code folder**: cd my-app
  
  * **Install dependecies**: yarn / npm install

 * **Run in developpement**: yarn start / npm start
 
 * **Open vsCode in CurrentDirectory**: code .

 * **Access to github**: Send github account mail or username to remiseris@gmail.com with obect 'Compte github Firstname Lastname' .

  
## Workshops

### 0 Did i git it ?

**Goals** :

* Asses your knowledge on react fundamental
* Familiarize with git

**Ressource** :

* Git documentation https://help.github.com/en/github/using-git/learning-about-git

**Instruction**:

1. Create a github account
2. Create your branch with *git checkout -b FirstNameLastname*
3. Add all repositorty files to your commit index *git add --all*
4. Commit your files *git commit -m "my commit msg"*
5. Push your commit to the remote repository *git push*
6. Check on github !

### 1 Hello scalability

**Goals** :

* Run a React based Project
* Create our First functional component
* Create and use a repetible components with props


**Instruction**:

1. Do all the the prerequisite
2. Clone the project
3. Run the project

*Exo 1*

1. Create a component named List with the props children, display children in the HTML
```javascript
const List = ({ children }) => {
    return (
        <div >
            {children}
        </div>
    )
}
```
2. Create A component named Item wich display "HELLO WORLD"
3. Display List and Item in App
4. Display a title to List "Ma list"
5. Display many Items in a List
6. Display Many List with many Items in App
7. (optional) Display List title as a props name 'title'
8. (optional) Display Item title as a props name 'title'

* End Exo 1*

4. Create a Functionnal component called **Item** with border, shadow, and a "Hello World" in the center .
5. Create a Functionnal component called **List** containing many **Item**
6. Pass down the **Item** content as Props from the **List** component (item should display "Hello World 1", "Hello World 2", ...) 


### 2 State of the art 

**Goals** :

* Meet the hooks notion
* Learn how to use State

**Ressource** :

* useState Hooks documentation https://fr.reactjs.org/docs/hooks-state.html
* Array documentation https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

**Instruction**:

1. Make a "List" component pilling the previously made "Item" components in column
2. Make a button component with a onClick prop and a title prop
3. Add two Button too your layout on with the string "Add" and one With the string "Delete" to The App Component
4. When the "Add" button is clicked an list is added to the lists, When the "Delete" button is clicked an list is deleted from the lists


**Instruction 2**:

1. Add a state to the compoent item
2. create a class css itemDone
3. when a item is clicked we apply the css class done at the item
4. when is clicked when done we remove the css class

### 3 Hello open world !

**Goals** :

* Discover the library system
* Discover an ui library

**Ressource** :

* Material-ui documentation https://material-ui.com/getting-started/installation/

**Instruction 1**:

1. add the @material-ui/core package
2. import the Button component from @material-ui/core in App.js
3. Replace the previous Button with the material-ui Button with the same string 'add' and 'delete' and the same onClick event

**Instruction 2**:

1. import the CheckBox component from @material-ui/core in Item.jsx
2. add the CheckBox component to html of the Item component
3. set the check props of the  CheckBox component to a state in the Item Component
4. Bind The onChange of the  main div in Item to a function called toogleCheck
5. Set the 'check' state respectively from true to false and from false to true in the toggleCheck function
6. Check if it works

### 4 Store !
*Goals** :

* Discover the local storage

**Ressource** :

* local storage documentation https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
* Json stringify documentation https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify

**Instruction 1**:

1. add A button Wich display the string save list in App
2. create a function called saveList in App
3. bind the function to the onClick props of the Button
4. in the function saveList Store your myLists state into the local storage (dont forget to use JSON.stringify())
5. go checkout in your webPage Stockage -> stockage local if your data have well been saved

### 5 Hooks Effect !
*Goals** :

* Parctice local storage
* Discover the useEffect hook

**Ressource** :

* local storage documentation https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
* useEffect Documentation   https://fr.reactjs.org/docs/hooks-effect.html

**Instruction 1**:

1. Import useEffect from React in App
2. Add a useEffect to the App Componenent
3. retrieve the data from local+Storage with localStorage.getItem
4. retrieve the data at the launch of the App (use useEffect)
5. Set the retrieved data as the default state of 'myLists'


**Instruction 2**:

1. Remove the button save list
2. Add a new useEffect to the App Componenent
2. Add "MyList" as an Effect Dependency to the new useEffect
3. In the new use Effect effect, save "myLists" in the localStorage 
4. Check in your web-browser if the lists are well saved when modification are done
5. Check in your web-browser if the lists does well persist when the page is reloaded



**On Git**:

* To switch branches git checkout *branch name*
* To push work *git push*
* To pull from master *git pull origin master*



### 6 (advanced version) It's all about context ?

**Goals** :

* Dicover the useContext Hooks
* Familiarize date managment

**Ressource** :

* Hooks documentation https://fr.reactjs.org/docs/hooks-reference.html#usecontext

**Instruction**:

1. Create a context called AppContext
2. Create a component called AppContextProvider
3. Return AppContext.Provider and children in the return statement of the AppContextProvider component 
3. Add the AppContextProvider to the index.js return statement
4. Move all the 'myLists' state manadgment from App to AppContext
5. Reproduce the same behaviour than previously (add List, delete list, save list in localStorage with useEffect, getList from localStorage with useEffect)
6. checkout if it works



### 6 It's all about context ?

**Goals** :

* Dicover the useContext Hooks
* Familiarize date managment

**Ressource** :

* Hooks documentation https://fr.reactjs.org/docs/hooks-reference.html#usecontext

**Instruction**:

1. Create a context called AppContext
2. Add The AppContextProviderto the index.js
3. Move the List manadgement from App to Appcontext (preserve the same behaviour)
4. Add the an addItem Button and a deleteItem Button to the List Component
5. Manadge with a your AppContext to add an Item ,delete an Item ,add a list, delete a list, save list whens the list Array or an item change


**Instruction 2**:

1. Create a Popup component, manadge is props 'open' with a state in AppContext or  directly get the state open from AppContext
2. The component Popup will display a <Dialog> component (https://material-ui.com/components/dialogs/#dialog) with the title "New List"
3. Add a TextField into the Dialog Component with label "name"
4. Manadge the TextField value with a state in the Popup Component
5. Add a Button Submit into the Popup Component
6. When the Button submit is clicked create a newList, it's title is the value of the input (use the Context !) and the Popup close (clear the input before closing) 
7. Checkout if it works

### 7 Swithing to react-nativ

**Goals** :

* Discover and Familiarize with the react-nativ librarie

**Ressource** :

* React-nativ documentation  https://reactnative.dev/
* React-nativ View component https://reactnative.dev/docs/view
* React-nativ Text component https://reactnative.dev/docs/text
* React-nativ Button component https://reactnative.dev/docs/button

**Instruction**:

1. Display List with Item using Text and View (List and item have a title props)
2. Add the buttons AddList and DeleteList into App
3. Bind the button DeleteList to removeList from context
4. Add the buttons AddItem DeleteItem
5. Bind the buttons with the context (addItem, remove item)
6. Checkout if it works
7. Style your components so it looks nice (border-shadow on list, some color, some placement with flex, some margin and padding)

**Ressource 2** :

* React-native Modal component https://reactnative.dev/docs/modal
* React-native TextInput Component https://reactnative.dev/docs/textinput

**Instruction 2**:

1. Display a Modal component in Popup
2. Add a TextInput into the Modal Component
3. Add the title "NewList" to the Modal and a button Submit
4. Mimic the previous Behaviour for the onPress of the Button AddList and Submit
 

**Ressource 3** :

* React-native FlatList component https://reactnative.dev/docs/flatlist
* React-native TouchableHiglight component https://reactnative.dev/docs/touchablehighlight

**Instruction 3**:

1. Use a FlatList to render your list
2. Make a component CheckBox wich has a props checked
3. Checkbox display a empty blue circle (use border and cornerRadius style) when checked is false and a blue plain circle when checked is true
4. Add a property checked to your items data
5. Add a Checkbox to each Item and display is state in the checkbox (checked true or false)
6. add a function toogleCheck(item) to the context , wich change the state of the item to check true => false, false => true
7. Bind toogleCheck to the Item OnPress (use ToochableHiglit)
 

### 7 Let's get on Fire(Base)

**Goals** :

* Familiarize with the firebase console
* Lear some noSQL notions

**Ressource** :

* Firebase Quick start https://firebase.google.com/docs/firestore/quickstart
* Firebase Console https://console.firebase.google.com/
* Cloud Firestore documentation https://rnfirebase.io/ and https://rnfirebase.io/firestore/usage
* firestore get data documentation https://firebase.google.com/docs/firestore/query-data/get-data
* Firestore add Data documentation https://firebase.google.com/docs/firestore/manage-data/add-data

**Instruction**:

1. Start a Project into firebase
2. Create a collection Items
3. Create a collection List
4. Create list from client into firestore
5. Create item in list from client into firestore
6. Get List from firestore

### Learn by yourself

* **React Documentation**: https://fr.reactjs.org/docs/components-and-props.html
* **Git**: https://medium.com/@onejohi/git-understanding-the-basics-ba004a20dacc
