//* HOW TO SET UP USECONTEXT (SIMPLE):

//* 1. In your app (or a separate component), import exactly as follows: "import React, { useState } from 'react';" 
//*    (it is important to have import React outside the curly brackets)

//* 2. Create the variable/data that you want to make global with useContext (this can be fetched data). Do this in the app where you create the context:
//*    let user = {name: 'John'}

//* 2. Wrap the components you want affected (all child components/Routes) with <userContext.Provider data={user}></nameWhatYouWant.Provider> 
//*    (userContext and data can be called anything you want; data={user} is what you'll be referencing to get the names out.)

//* 3. Add this line with the default export of the file (mine are always at the bottom): export const userContext = React.createContext()

//* 4. Go to the file(s) in which you want to access the useContext. Put this on the top line: import { userContext } from "./App";

//* 5. Make it easier for yourself, set up a variable with the useContext info: let user = useContext(userContext)

//* 6. Now you have access to the userContext data. You can interpolate it, like so:
//*    <h1>Hello, {user.data}.</h1> --> "Hello, John."

