import css from './styles.module.css'

const Button = ({text, onClick, }) => {
    return (
        <button className={css.button} onClick={onClick}>{text}</button>
    )
}

export { Button }