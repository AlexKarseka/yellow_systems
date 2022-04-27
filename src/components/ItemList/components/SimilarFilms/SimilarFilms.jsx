import css from './styles.module.css'
import {useEffect, useState} from "react";
import {LibsRecommendations} from "../../../../api_libs/server";

const SimilarFilms = ({props}) => {
    const [count, setCount] = useState('');

    useEffect(() => {
        (async () => {
            return setCount(await LibsRecommendations(props))
        })()
    })

    if (!count) return ''

    return (
        count.results.map(elem => {
            return (
                <div className={css.cards} key={elem.id}>
                    <img className={css.logo} src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
                         alt={'logo'}/>
                    <div className={css.name}>{elem.title}</div>
                </div>
            )
        })

    )
}

export {SimilarFilms}