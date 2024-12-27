function Signin() {
    return (<>
    <div className="bg">
        <form id="form">
            <div className="username">
            <input className="input-decor" type="text" name="username" placeholder="Email/Username" required/>
            </div>
            <div className="username">
                <input className="input-decor" type="password" name="password" placeholder="password" required/>
            </div>
            <div>
                <button id="login" type="submit">Log in</button>
            </div>
        </form>
    </div>
    </>)
    

}
export default Signin;