# IPI_REACT_EXAM


## Prerequisite

  * **go to your room** : copy the link of your jitsi meet room into the url
  1. Group1: Théophile, D'Andria Tony, Romain, Lucas, Alexia https://meet.jit.si/Ipi_React_exam_Group1
  2. Group2: Baillau Quentin,Thomas, Manon, Joelle, Charlotte, Delavaloire Clément https://meet.jit.si/Ipi_React_exam_Group2
  3. Group3: André, Felix, Zakaria, Claire, Wauters Tony https://meet.jit.si/Ipi_React_exam_Group3
  4. Group4: Sofian, Stéphane, Bastien, Steven, Mazerin Quentin https://meet.jit.si/Ipi_React_exam_Group4

  * **Switch to Branch** :git checkout exam
  
  * **Create your branch**: git checkout -b exam/FirstnameLastName
  
 * **Exercice on React (1 to 4)**: cd my-app
  
  * **Exercice on React-native (5 to 6)**: cd my-react-native-app

 * **Run in developpement**: yarn start / npm start
 
 * **Push**: "git add --all" , "git commit -m "<my message>"", "git push"
 
 * **Styling** : on each exercises you have 1/2 bonus point for basic styling and 1 bonus point for awesome styling
 
  * **FR**: use https://www.deepl.com/fr/translator
 
## Exam

### Web: Launch with : yarn start or npm run start

### EXO 1 : components and props (3 points)

**Exercise**:

1. Create a Header component wich display the props 'appName'
2. Create a Footer component wich display the props 'legalMention'
3. Create a Content component wich display his 'children'
4. Make basic style with css (background-color, positionning, ...)

### EXO 2 : Array and useState (5 points)

**Exercise**:

1. Create a List component wich display the props 'title' and his 'children'
2. Create a Item component wich the props 'title'
3. Render the list (const list in Exo2.js) with the List component and Item component, Item are childrens of List 
4. When Item is clicked it's className change from 'item' to 'item itemActive' (manage it with a state)
5. Make basic style with css (background-color, positionning, ...)

### EXO 3 : Material-ui, localStorage and useEffect (5 points)

**Exercise**:

1. Add a TextField to Exo3
2. Add a Button wich display "Save" to Exo3
3. Manadge the TextField with a state ( the state is named inputValue)
4. When the button is clicked inputValue is store in localStorage (use the key KEY_LOCAL_STORAGE)
5. when the App is loaded or reloaded the inputValue is the one stored int the localStorage (!warning! when there is no value in local storage)
6. Make basic style with css (background-color, positionning, ...)


### EXO 4 : Context (5 points)

**Exercise**:

1. Create a CounterContext and a component CounterContextProvider with the state nb and a setter setNb (defaultValue is 0)
2. Create two method inCrementNb and decrementNb (guess what they do ...)
3. Create a component Counter wich display nb
4. Create a component CounterMore wich display a material-ui Button with the body '+', onClick it execute incrementNb 
5. Create a component CounteLess wich display a material-ui Button with the body '-', onClick it execute decrementNb 
6. Make basic style with css (background-color, positionning, ...)

### Mobile: Launch with : yarn web or npm run web

### EXO 5 : React-nativ Basics (3 points)

**Exercise**:

1. In Exo5 add a state named 'isConnected' (setter: setIsConnected)
2. In Exo5 add a Button 'connect/disconnect', when clicked it changes the state 'isConnected' from true => false and false => true
3. When the 'isConnected' state is true display in Exo5 'I'm connected'and when the 'isConnected' state is false 'I'm disconnected'


### EXO 6 : React-nativ Advanced (6 points)

**Exercise**:

1. Create a MessageCard component with props from and content, display from and under it content
1. Into Exo6 render each element of the messageList array as a MessageCard component (use a FlatList)
2. Make the MessageCard Touchable
3. When the MessageCard is Pressed it opens a Modal displayin the content of a message
4. The modal must have a Button 'close' to close it 
6. Make basic style with StyleSheet (background-color, positionning, ...)

 
<<<<<<< HEAD
=======

**Ressource 3** :

* React-native FlatList component https://reactnative.dev/docs/flatlist
* React-native TouchableHiglight component https://reactnative.dev/docs/touchablehighlight

**Instruction 3**:

0. Launch the App, after launch delete in ApContextProvider line 79 AsyncStorage.clear()
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
>>>>>>> ac3b2b88ca3e63f270c5703b1f95ce25bb73f98d
