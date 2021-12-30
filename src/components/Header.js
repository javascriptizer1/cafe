function Header(props) {
    return (
        <header className="header">
            <div className="header__rating">
                <span>Рейтинг:</span> <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="header__title">
                <h2>{props.title}</h2>
                <h3>Быстрая доставка вкусной</h3>
                <span>#еды</span>
            </div>
        </header>
    )
}

export default Header