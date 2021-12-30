import {Component} from 'react'
import Shipment from "./Chipment"
import FlipMove from 'react-flip-move'

class Order extends Component {

    renderOrder = key => {
        const food = this.props.foods[key]
        const count = this.props.order[key]
        const isAvailable = food && food.status === 'available'
        if (!food) return null
        if (!isAvailable) {
            return <FlipMove typeName={'ul'} duration={500} type={'ease-in'} className={'order_food'}>
                <li key={key} className={'unavailable'}>Извините, блюдо {food ? food.name : ''} временно
                    недоступно
                </li>
            </FlipMove>
        }
        return <FlipMove typeName={'ul'} duration={500} type={'ease-in'} className={'order_food'}>

            <li key={key}>
            <span>
                <span>{count}</span>
                шт. <span className={'order_name'}>{food.name}</span>
                <span className={'price_count'}> {count * food.price}₽</span>
            </span>
                <button onClick={() => this.props.deleteFromOrder(key)} className={'deleteFood'}>&times;</button>
            </li>
        </FlipMove>
    }

    render() {
        const id = Date.now()
        const orderIds = Object.keys(this.props.order)
        const total = orderIds.reduce((prevTotal, key) => {
            const food = this.props.foods[key]
            const count = this.props.order[key]
            const isAvailable = food && food.status === 'available'
            if (isAvailable) {
                return prevTotal + food.price * count
            }
            return prevTotal
        }, 0)
        return (
            <div className="order">
                <h3>Ваш заказ</h3>
                <FlipMove typeName={'ul'} className={'orders'} duration={500} type={'ease-in'}>
                   <li key={id}>{orderIds.map(this.renderOrder)}</li>
                </FlipMove>
                {total > 0
                    ? <Shipment total={total}/>
                    : <div className={'nothing'}>Выберите блюда и добавьте их к заказу</div>
                }
            </div>
        )
    }
}

export default Order