import{Link} from 'react-router-dom'
function Header() {

    return(<>
        <div className='header'>
            
            <span className='title-span'>
                <h3>Shop Ease</h3>
            </span>
            <div className='header-section'>    
                <Link to="/signin"><button className='btn btn-primary signin-btn'>Sign in </button></Link>
                <Link to="/signup"><button className='btn btn-secondary sign-btn'>Sign up</button></Link>
            </div>
            <div className='menu'>
                <label for="input-checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </label>
            </div>
            <input type="checkbox" id='input-checkbox'/>   
            <div className='header-mobile' >
                
                <span className='span-button'>
                    <label for="input-checkbox">
                        <Link to="/signin"><button className='btn btn-primary signin-btn sign-in' >Sign in</button></Link>
                    </label>
                    <label for="input-checkbox">
                        <br/>
                        <Link to="/signup"><button className='btn btn-secondary sign-btn sign-up'>Sign up</button></Link>
                    </label>
                </span>
                        
            </div>
            
        </div>
    </>)
    
}
export default Header;