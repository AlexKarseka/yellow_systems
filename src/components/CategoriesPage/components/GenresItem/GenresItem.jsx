import css from './styles.module.css'

const GenresItem = ({genre, props}) => {
    if (!props) return ''

    const genresRow = (tree) => {
        const getRow = props.map((elem) => {
            if (tree === elem.id) {
                return (
                    <div className={css.genre_container} key={elem.id}>
                        {elem.name}
                    </div>
                )
            }
        })
        return getRow
    }

    return (
        genre.map(elem => genresRow(elem))
    )
}

export {GenresItem}