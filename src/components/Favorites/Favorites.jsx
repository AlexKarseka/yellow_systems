import css from './styles.module.css'
import {FavoritesCards} from "./components/FavoritesCards";


const Favorites = ({props}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.title}> Избранное </div>
            <div className={css.main_content}>
                <FavoritesCards props={props} />
            </div>
        </div>
    )
}

export { Favorites }