import {Component, createRef} from 'react'

class AddFoodForm extends Component{

    nameRef = createRef()
    priceRef = createRef()
    descRef = createRef()
    statusRef = createRef()
    imageRef = createRef()

    createFood = (e) => {
        e.preventDefault()
        const food = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value) || 0,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFood(food)
        e.currentTarget.reset()
    }

    render() {
        return (
            <form action="" className="edit_food" onSubmit={this.createFood}>
                <input ref={this.nameRef} type="text" name={'name'} placeholder={'Name'} autoComplete={'off'}/>
                <input  ref={this.priceRef} type="text" name={'price'} placeholder={'Price'} autoComplete={'off'}/>
                <select ref={this.statusRef} name={'status'} className={'status'}>
                    <option value={'available'}>Доступно</option>
                    <option value={'unavailable'}>Убрать из меню</option>
                </select>
                <textarea ref={this.descRef} name={'desc'} placeholder={'Description'} />
                <input ref={this.imageRef} type="text" name={'image'} placeholder={'Image'} autoComplete={'off'}/>
                <button type={'submit'}>Добавить в меню</button>
            </form>
        )
    }
}

export default AddFoodForm