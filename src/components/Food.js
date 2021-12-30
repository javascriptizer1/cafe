import {Component} from 'react'

class Food extends Component {

    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }

    render() {
        const {name, price, desc, image, status} = this.props.details
        const isAvailable = status === 'available'
        return (
            <li>
                <div className="menu-food">
                    <div className="menu-food-top">
                        <div className="image">
                            <img src={image} alt={name}/>
                        </div>
                        <div className="food-details">
                            <div className={'price_name'}>
                                <h3 className={'details__name'}>{name}</h3>
                                <span className={'details__price'}>{price}₽</span>
                            </div>
                            <div className="desc">
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.handleClick} disabled={!isAvailable}>
                        {isAvailable ? 'Заказать' : 'Временно нет'}
                    </button>
                </div>
            </li>
        )
    }
}

export default Food