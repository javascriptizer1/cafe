import {Component} from "react"

class Shipment extends Component {
    render() {
        const {total} = this.props
        const shipping = total > 0 && total < 500 ? 350 : 90
        return (
            <div className={'totalSum'}>
                <div className={'shipping'}>
                   Доставка: {total > 0 ? shipping : null}₽
                </div>
                <div className={'shipping_sale'}>
                    {total < 500 ? `Закажите еще на ${500 - total}₽, чтобы доставка стала 99₽` : null}
                </div>
                <div className={'total_ruble'}>
                    Итого: <span>{total}₽</span>
                </div>
            </div>
        )
    }
}

export default Shipment