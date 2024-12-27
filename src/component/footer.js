import { Link } from "react-router-dom";
function Footer() {
    return(<>
    <div className="footer">
        <center>
        <div className="navAccessibility">
            <div className="navAccessibility">
                <h3 className="navAccessibility">Get Know with Us</h3>
            </div>
            <ul>
                <li><Link to="" className="footer-a">About Janaas</Link></li>
                <li><Link to="" className="footer-a">Careers</Link></li>
                <li><Link to="" className="footer-a">Press Releases</Link></li>
            </ul>
        </div>
        <div className="navAccessibility"></div>
        <div className="navAccessibility">
            <div className="navAccessibility">
                <h3 className="h3">Connect with us</h3>
            </div>
            <ul>
                <li><Link to="" className="footer-a">Facebook</Link></li>
                <li><Link to="" className="footer-a">twitter</Link></li>
                <li><Link to="" className="footer-a">Instagram</Link></li>
            </ul>
        </div>
        <div className="navAccessibility"></div>
        <div className="navAccessibility">
            <div className="navAccessibility">
                <h3>Make Money With Us</h3>
            </div>
            <ul>
                <li><Link to="" className="footer-a">sell on janaas</Link></li>
                <li><Link to="" className="footer-a">Protect and Build your Brand</Link></li>
                <li><Link to="" className="footer-a">Janaas global selling</Link></li>
                <li><Link to="" className="footer-a">Supply to janaas</Link></li>
                <li><Link to="" className="footer-a">Become an Affiliate</Link></li>
                <li><Link to="" className="footer-a">Fullfilment by janaas</Link></li>
                <li><Link to="" className="footer-a">janaas pay on Merchants</Link></li>
            </ul>
        </div>
        <div className="navAccessibility"></div>
        <div className="navAccessibility">
            <div className="navAccessibility">
                <h3>
                    Let Us Help You
                </h3>
            </div>
            <ul>
                <li><Link to="" className="footer-a">your Account</Link></li>
                <li><Link to="" className="footer-a">Returns Center</Link></li>
                <li><Link to="" className="footer-a">Recalls and Product Safety Alerts</Link></li>
                <li><Link to="" className="footer-a">100% Purchase Protection</Link></li>
                <li><Link to="" className="footer-a">Help</Link></li>
            </ul>
        </div>
        </center>
    </div>
    </>)
    
}
export default Footer;