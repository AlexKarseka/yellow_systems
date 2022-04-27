import css from './styles.module.css'
import {NavLink} from 'react-router-dom'

const NavMenuItem = ({ way, text }) => {
    return (
        <NavLink to={way}
            className={css.menu_items}
            activeClassName={css.active}>{text}</NavLink>
    )
}

export { NavMenuItem }