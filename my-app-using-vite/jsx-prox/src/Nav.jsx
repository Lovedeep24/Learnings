import styles from "./Nav.module.css";
function Navbar(){
    return(
        <nav className={styles.Navitems}>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </nav>
    );
}

export default Navbar;