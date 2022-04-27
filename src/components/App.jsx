import {Route, BrowserRouter} from 'react-router-dom';
import {Header} from "./Header";
import {NavMenu} from "./common/NavMenu";
import {CategoriesPage} from "./CategoriesPage";
import {Favorites} from "./Favorites";
import {ItemList} from "./ItemList";
import {useEffect, useState} from "react";
import {LibsSearch, libsTopMovie} from "../api_libs/server";
import {Pagination} from "./common/Pagination";

const App = () => {
    const [count, setCount] = useState('');
    const [page, setPage] = useState('1')
    const [search, setSearch] = useState('')
    const [searchValue, setSearchValue] = useState('11')
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        (async () => {
            return setSearch(await LibsSearch(searchValue))
        })()
    })

    useEffect(() => {
        (async () => {
            return setCount(await libsTopMovie('popular', page))
        })()
    })

    if (!search.results) return null

    return (
        <BrowserRouter>
            <div className='main_wrapper'>
                <Header search={setSearchValue}/>
                <NavMenu/>
                <div className='categories_content'>
                    <Route exact={true} path='/'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Топ фильмов'} id={777}/> </Route>
                    <Route path='/comedy'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Комедии'} id={35}/> </Route>
                    <Route path='/cartoons'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Мультфильмы'} id={16}/> </Route>
                    <Route path='/horror'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Ужасы'} id={27}/> </Route>
                    <Route path='/fantasy'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Фантастика'} id={878}/> </Route>
                    <Route path='/militants'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Боевики'} id={28}/> </Route>
                    <Route path='/melodramas'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Мелодраммы'} id={10749}/> </Route>
                    <Route path='/detectives'> <CategoriesPage favorite={setFavorite}
                        props={count.results} title={'Детективы'} id={9648}/> </Route>
                    <Route path='/search'> <CategoriesPage favorite={setFavorite}
                        props={search.results} title={'Результаты поиска'} id={777}/> </Route>
                    <Route path='/favorites'> <Favorites props={favorite}/> </Route>
                    <Route path={'/list/:id'}> <ItemList/> </Route>
                    <Pagination state={setPage} props={count}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export {App}