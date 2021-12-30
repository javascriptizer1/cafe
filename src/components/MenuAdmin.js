import {Component} from 'react'
import AddFoodForm from "./AddFoodForm";
import EditFoodForm from "./EditFoodForm";
import firebase from "firebase/app";

class MenuAdmin extends Component {

    state = {
        photo: '',
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
        const {email, photoURL} = authData.user
        this.setState({user: email, photo: photoURL})
    }

    render() {
        const {user, photo} = this.state
        const avatar = photo ? photo : 'https://www.peerq.com/profilepics/default-profile.png'
        return (
            <div className="menu-admin">
                {user
                    ? <div className="login_header">
                        <div className={'avatar'}>
                            <img src={avatar} alt={avatar}/>
                        </div>
                        <button className={'btn_logout'} onClick={this.props.handleLogout}>Выйти</button>
                    </div>
                    : null}
                <h3>Управление Меню</h3>
                {Object.keys(this.props.foods).map(key => {
                    return <EditFoodForm
                        updateFood={this.props.updateFood}
                        deleteFood={this.props.deleteFood}
                        key={key}
                        food={this.props.foods[key]}
                        index={key}
                    />
                })}
                <AddFoodForm addFood={this.props.addFood}/>
                <button onClick={this.props.loadFoods}>Загузить блюда</button>
            </div>
        )
    }
}

export default MenuAdmin