import css from './styles.module.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";

const FavoritesButton = ({margin, forLink, id, style=true}) => {
    const [count, setCount] = useState(style);

    const test = () => {
        return (
            localStorage.clear(),
            window.location.reload()
        )
    }


    return (count ? forLink ?
                <button id={id} className={margin ? css.favorites_margin : css.favorites}>
                    <NavLink to={'/favorites'}> ⭐ Избранное </NavLink>
                </button> :
                <button id={id} onClick={() => setCount(false)}
                        className={margin ? css.favorites_margin : css.favorites}>
                    ⭐ В избранное
                </button> :
            <button id={id} className={margin ? css.favorites_delete_margin : css.favorites_delete}
                    onClick={test}>
                Удалить из избранного
            </button>


    )
}

export {FavoritesButton}