import css from './styles.module.css'
import {CategoriesPageItems} from "./components/CategoriesPageItems";

const CategoriesPage = ({title, props, id, favorite}) => {
    if (!props) return ''

    const categoriesValue = () => {
        const itemValue = props.map((elem) => {
                if (id === elem.genre_ids[0]) {
                    return (
                        <CategoriesPageItems
                            logo={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt={'logo'}
                            name={elem.title} country={elem.vote_average} genre={elem.genre_ids}
                            year={elem.release_date} key={elem.id} link={elem.id} id={elem.id}
                            favorite={favorite}/>
                    )
                } else if (id === elem.genre_ids[1]) {
                    return (
                        <CategoriesPageItems
                            logo={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt={'logo'}
                            name={elem.title} country={elem.vote_average} genre={elem.genre_ids}
                            year={elem.release_date} key={elem.id} link={elem.id} id={elem.id}
                            favorite={favorite}/>
                    )
                } else if (id === elem.genre_ids[2]) {
                    return (
                        <CategoriesPageItems
                            logo={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt={'logo'}
                            name={elem.title} country={elem.vote_average} genre={elem.genre_ids}
                            year={elem.release_date} key={elem.id} link={elem.id} id={elem.id}
                            favorite={favorite}/>
                    )
                } else if (id === elem.genre_ids[3]) {
                    return (
                        <CategoriesPageItems
                            logo={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt={'logo'}
                            name={elem.title} country={elem.vote_average} genre={elem.genre_ids}
                            year={elem.release_date} key={elem.id} link={elem.id} id={elem.id}
                            favorite={favorite}/>
                    )
                } else if (id === elem.genre_ids[4]) {
                    return (
                        <CategoriesPageItems
                            logo={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt={'logo'}
                            name={elem.title} country={elem.vote_average} genre={elem.genre_ids}
                            year={elem.release_date} key={elem.id} link={elem.id} id={elem.id}
                            favorite={favorite}/>
                    )
                } else if (id === 777)  {
                    return (
                        <CategoriesPageItems
                            logo={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt={'logo'}
                            name={elem.title} country={elem.vote_average} genre={elem.genre_ids}
                            year={elem.release_date} key={elem.id} link={elem.id} id={elem.id}
                            favorite={favorite}/>
                    )
                } else {
                    return null
                }
            }
        )
        return itemValue
    }

    return (
        <div>
            <div className={css.wrapper}>
                <div className={css.title}>{title}</div>
                <div className={css.main_content}>
                    {categoriesValue()}
                </div>
            </div>
        </div>

    )
}

export {CategoriesPage}