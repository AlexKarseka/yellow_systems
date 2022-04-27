import css from './styles.module.css'
import {SimilarFilms} from "./components/SimilarFilms";
import {FavoritesButton} from "../common/FavoritesButton";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {libsTopMovie} from "../../api_libs/server";

const ItemList = () => {
    let {id} = useParams();

    const [count, setCount] = useState('');

    useEffect(() => {
        (async () => { return setCount(await libsTopMovie(id))})()
    })

    if (!count) return ''

    return (
        <div className={css.wrapper}>
            <div className={css.top_zone}>
                <img className={css.logo}
                     src={`https://image.tmdb.org/t/p/w500${count.poster_path}`}
                     alt={'logo'}/>
                <div className={css.right_top}>
                    <div className={css.name}>{count.title}</div>
                    <FavoritesButton margin={false} id={count.id}/>
                </div>
            </div>

            <div className={css.title}> О фильме</div>

            <div className={css.middle_zone}>
                <div className={css.middle_left}>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Год производства:</div>
                        <div className={css.description}> {count.release_date} </div>
                    </div>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Страна:</div>
                        <div className={css.description}> {count.production_companies[0].origin_country}</div>
                    </div>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Стедия производитель:</div>
                        <div className={css.description}>{count.production_companies[0].name}</div>
                    </div>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Жанр:</div>
                        <div className={css.description}> {count.genres[0].name} </div>
                    </div>
                </div>
                <div className={css.middle_right}>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Ограничения:</div>
                        <div className={css.description}>
                            {count.adult ? 'Запрещено для детей' : 'Разрешено для детей'}
                        </div>
                    </div>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Бюджет:</div>
                        <div className={css.description}> ${count.budget}</div>
                    </div>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Сборы в мире:</div>
                        <div className={css.description}> ${count.revenue}</div>
                    </div>
                    <div className={css.middle_cont}>
                        <div className={css.parameter}>Продолжительность:</div>
                        <div className={css.description}> {count.runtime} мин.</div>
                    </div>
                </div>
            </div>

            <div className={css.title}> Описание </div>
            <div className={css.overview}> {count.overview} </div>

            <div className={css.title}> Похожие фильмы</div>
            <div className={css.bottom_zone}>
                <SimilarFilms props={id}/>)
            </div>
        </div>
    )
}

export {ItemList}