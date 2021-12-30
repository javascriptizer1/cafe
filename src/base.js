import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIcsL0B-MXxBTOaNCUtW7HqjRjUrF4hGw",
    authDomain: "cafe-awesome.firebaseapp.com",
    databaseURL: "https://cafe-awesome-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}

export default base