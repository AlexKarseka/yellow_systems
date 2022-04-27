import css from './styles.module.css'
import { NavMenuItem } from './components/NavMenuItem'


const NavMenu = () => {
    return (
        <div className={css.nav_menu}>
            <nav>
                <ul>
                    <NavMenuItem way='/' text='🏆 Топ фильмов'/>
                    <NavMenuItem way='/comedy' text='Комедии'/>
                    <NavMenuItem way='/cartoons' text='Мультфильмы'/>
                    <NavMenuItem way='/horror' text='Ужасы'/>
                    <NavMenuItem way='/fantasy' text='Фантастика'/>
                    <NavMenuItem way='/militants' text='Боевики'/>
                    <NavMenuItem way='/melodramas' text='Мелодраммы'/>
                    <NavMenuItem way='/detectives' text='Детективы'/>
                </ul>
            </nav>
        </div>
    )
}

export { NavMenu }