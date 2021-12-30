import './App.css';
import Header from "./components/Header";
import Order from "./components/Order";
import MenuAdmin from "./components/MenuAdmin";
import {Component} from "react";
import foodsObj from "./foods";
import Food from "./components/Food";
import base from "./base";
import SignIn from "./components/Auth/SignIn";
import firebase from 'firebase/app'

class App extends Component {

    state = {
        foods: {},
        order: {}
    }

    componentDidMount() {
        const {params} = this.props.match
        const localStorageRef = localStorage.getItem(params.restaurantId)
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
        this.ref = base.syncState(`${params.restaurantId}/foods`, {
            context: this,
            state: 'foods'
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {params} = this.props.match
        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    addFood = (food) => {
        const foods = {...this.state.foods}
        foods[`food${Date.now()}`] = food
        this.setState({
            foods
        })
    }

    loadFoods = () => {
        this.setState({
            foods: foodsObj
        })
    }

    addToOrder = key => {
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1
        this.setState({order})
    }

    updateFood = (key, updatedFood) => {
        const foods = {...this.state.foods}
        foods[key] = updatedFood
        this.setState({foods})
    }

    deleteFood = (key) => {
        const foods = {...this.state.foods}
        foods[key] = null
        this.setState({foods})
    }

    deleteFromOrder = key => {
        const order = {...this.state.order}
        delete order[key];
        this.setState({order})
    }

    handleLogout = async () => {
        await firebase.auth().signOut()
        window.location.reload()
    }

    render() {

        return (
            <SignIn>
                <div className="app">
                    <div className={'menu'}>
                        <Header title={'Nyam_Nyam'}/>
                        <ul className={'foods'}>
                            {Object.keys(this.state.foods).map(key => {
                                return <Food
                                    key={key}
                                    index={key}
                                    details={this.state.foods[key]}
                                    addToOrder={this.addToOrder}
                                />
                            })}
                        </ul>
                    </div>
                    <Order
                        foods={this.state.foods}
                        order={this.state.order}
                        deleteFromOrder={this.deleteFromOrder}
                    />
                    <MenuAdmin
                        addFood={this.addFood}
                        foods={this.state.foods}
                        loadFoods={this.loadFoods}
                        updateFood={this.updateFood}
                        deleteFood={this.deleteFood}
                        handleLogout={this.handleLogout}
                    />
                </div>
            </SignIn>
        )
    }
}

export default App
