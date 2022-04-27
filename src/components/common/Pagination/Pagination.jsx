import css from './styles.module.css'
import {useState} from "react";

const Pagination = ({state, props}) => {
    const [count, setCount] = useState(1);

    if (!state || !props) return ''

    const forTest = () => {
        const testsss = []
        for (let i = count; i < props.total_pages; i++) {
            testsss.push(i)
        }
        return (
            testsss.map(elem => <button className={css.pagination_items} key={elem}
                                        onClick={() => state(elem)}>{elem}</button>)
        )
    }

    if (count < 0) {
        return setCount(1)
    }

    if (count > 964) {
        return setCount(964)
    }

    return (
        <div className={css.pagination}>
            <button onClick={() => setCount(count -10)}
                    className={css.pagination_next_left}> {`<<`} </button>
            {forTest()}
            <button onClick={() => setCount(count +10)}
                    className={css.pagination_next}> {`>>`} </button>
        </div>
    )
}

export {Pagination}