const Login = props => {
    return (
        <div className="login-container">
            <nav className="login">
                <h2>Авторизация</h2>
                <div className="auth">
                    <div className="git">
                        <p>Авторизуйтесь через GitHub</p>
                        <button onClick={() => props.authenticate()} className="github_btn">Войти</button>
                    </div>
                    <div className="anon">
                        <p>Или войдите</p>
                        <button onClick={() => props.authAnon()}>анонимно</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Login