import firebase from "firebase/app"
import {firebaseApp} from "../../base"
import {Component} from "react"
import Login from "./Login";

class SignIn extends Component {
    state = {
        user: ''
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({user})
            }
        })
    }

    authHandler = async (authData) => {
         this.setState({user: authData.user.email || authData.user.uid })
    }


    authAnon = () => {
        firebase.auth().signInAnonymously()
            .then(this.authHandler)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    authenticate = () => {
        const authProvider = new firebase.auth['GithubAuthProvider']()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    }

    render() {
        if (!this.state.user) {
            return <Login authAnon={this.authAnon} authenticate={this.authenticate} />
        }
        return this.props.children
    }
}

export default SignIn