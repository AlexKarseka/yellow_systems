import css from './styles.module.css'
import SearchIcon from '../indexSvg'
import {useState} from "react";
import {NavLink} from "react-router-dom";

const MainInput = ({search}) => {
    const [count, setCount] = useState('');

    return (
        <form className={css.header_search}>
            <input  className={css.search_input}
                    type="text" placeholder="Поиск"
                    onChange={(event) => setCount(event.target.value)}
            />
            <NavLink to={'/search'} className={css.search_button} onClick={() => search(count)}> <SearchIcon/> </NavLink>
        </form>
    )
}

export {MainInput}