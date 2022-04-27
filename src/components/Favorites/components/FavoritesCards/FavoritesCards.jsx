import css from './styles.module.css'
import {FavoritesButton} from "../../../common/FavoritesButton";
import {useEffect, useState} from "react";

const FavoritesCards = ({props}) => {
    const [favorite, setFavorite] = useState(props)
    const [count, setCount] = useState([])

    useEffect(() => {
        if (props.length === 0) {
            return undefined
        } else {
            return localStorage.setItem('favorite', JSON.stringify(favorite));
        }
    }, [favorite]);

    useEffect(() => {
        setCount(JSON.parse(localStorage.getItem('favorite')))
    }, []);

    return (
        count ?
        count.map(elem => {
            return (
                <div className={css.card} id={elem.id} key={elem.id}>
                    <img
                        className={css.logo}
                        src={elem.logo}
                        alt={'logo'}
                    />
                    <div className={css.name}>{elem.name}</div>
                    <FavoritesButton style={false}/>
                </div>
            )
        }) : <div className={css.no_favorite}> Нет избранного </div>
    )
}

export {FavoritesCards}


// useEffect(() => {
//     setFavorite(JSON.parse(localStorage.getItem('favorite')));
// }, []);



