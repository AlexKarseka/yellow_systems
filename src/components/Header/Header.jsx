import css from './styles.module.css'
import {FavoritesButton} from "../common/FavoritesButton";
import {NavLink} from "react-router-dom";
import {MainInput} from "../common/MainInput";

const Header = ({search}) => {
    return (
        <div className={css.header}>
            <div className={css.header_left}>

                <NavLink to={'/'} className={css.header_logo}>
                    <span>In</span>
                    Movies
                </NavLink>

                <MainInput search={search}/>

            </div>
            <FavoritesButton forLink={true} margin={false} />
        </div>
    )
}

export { Header }