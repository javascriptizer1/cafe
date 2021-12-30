import {Component} from "react";

class EditFoodForm extends Component {

    handleChange = (e) => {
        const updatedFood = {
            ...this.props.food,
            [e.currentTarget.name]: e.currentTarget.name === 'price'
                ? parseFloat(e.currentTarget.value) || 0
                : e.currentTarget.value
        }
        this.props.updateFood(this.props.index, updatedFood)
    }

    render() {
        return (
            <div className={'edit_food_form'}>
                <div className={'group_1'}>
                    <input onChange={this.handleChange} value={this.props.food.name} type="text" name={'name'}
                           placeholder={'Name'} autoComplete={'off'}/>
                    <input onChange={this.handleChange} value={this.props.food.price} type="text" name={'price'}
                           placeholder={'Price'} autoComplete={'off'}/>
                </div>
                <select onChange={this.handleChange} value={this.props.food.status} name={'status'}
                        className={'status'}>
                    <option value={'available'}>Доступно</option>
                    <option value={'unavailable'}>Убрать из меню</option>
                </select>
                <textarea onChange={this.handleChange} value={this.props.food.desc} name={'desc'}
                          placeholder={'Description'}/>
                <input onChange={this.handleChange} value={this.props.food.image} type="text" name={'image'}
                       placeholder={'Image'} autoComplete={'off'}/>
                <button className={'delete_btn_edit'} onClick={() => this.props.deleteFood(this.props.index)}>Удалить из меню</button>
            </div>
        )
    }
}

export default EditFoodForm