import Main from './main';
import Persons from './persons';


import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/compat/app';


const App = () => {

  return (

    <div className="d-flex w-100">
      
      <Persons />
      <Main />

    </div>


  )
}

export default App;