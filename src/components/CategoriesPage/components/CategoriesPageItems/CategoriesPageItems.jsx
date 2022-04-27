import css from './styles.module.css'
import {NavLink} from "react-router-dom";
import {FavoritesButton} from "../../../common/FavoritesButton";
import {useEffect, useState} from "react";
import {LibsGenres} from "../../../../api_libs/server";
import {GenresItem} from "../GenresItem";

const CategoriesPageItems = ({logo, alt, name, year, country, genre, link, id, favorite}) => {
    const [count, setCount] = useState('');

    useEffect(() => {
        (async () => { return setCount(await LibsGenres())})()
    })

    const addArray = () => {
        const newArray = [{logo: logo, name: name, id: id}]
        favorite(newArray)
    }

    return (
        <div className={css.card} onClick={addArray}>
            <img className={css.logo}
                 src={logo}
                 alt={alt}/>

            <div className={css.centre}>
                <NavLink to={`/list/${link}`}>
                    <div className={css.name}>{name}</div>
                    <div className={css.year}>{year}</div>
                    <div className={css.centre_wrapper}>
                        <div className={css.country}>{country}</div>
                        <div className={css.genre}>
                            <GenresItem genre={genre} props={count.genres}/>
                        </div>
                    </div>
                </NavLink>
                <FavoritesButton margin={true} id={id}/>
            </div>
        </div>
    )
}

export {CategoriesPageItems}