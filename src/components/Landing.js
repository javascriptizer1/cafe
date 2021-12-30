import {useState} from 'react'

const restaurants = [
    {
        title: 'КафеМонго',
        url: 'cafemongo',
        id: 1
    },
    {
        title: 'Кафешка-пельмешка',
        url: 'cafeshka-pelmeshka',
        id: 2
    },
    {
        title: 'Высокий дол',
        url: 'vysokiy-dol',
        id: 3
    },
]

const Landing = props => {

    const [display, toggleDisplay] = useState(false)
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const displayList = () => {
        toggleDisplay(!display)
    }

    const getTitle = restaurant => {
        const {title, url} = restaurant
        setTitle(title)
        setUrl(url)
        toggleDisplay(false)
    }

    const goToCafe = () => {
        props.history.push(`/restaurant/${url}`)
    }

        return (
            <div className="restaurant_select">
                <div className="restaurant_select_top" onClick={displayList}>
                    <div className="restaurant_select_top_header">
                        {title ? title : 'Выберите кафе'}
                    </div>
                    {!title &&
                        <div className="arrow_picker">
                            <div className="arrow_picker_up">ᐃ</div>
                            <div className="arrow_picker_down">ᐁ</div>
                        </div>
                    }
                </div>
                {display && <div className="restaurant_select_bottom">
                    <ul>
                        {restaurants.map(restaurant => {
                            return (
                                <li onClick={() => getTitle(restaurant)}
                                    key={restaurant.id}>{restaurant.title}</li>
                            )
                        })}
                    </ul>
                </div>}
                {title && !display ? <button onClick={goToCafe}>Перейти в кафе</button> : null}
            </div>
        )
}

export default Landing