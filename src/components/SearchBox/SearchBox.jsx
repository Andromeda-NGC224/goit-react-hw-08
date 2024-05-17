import { useDispatch, useSelector } from 'react-redux'
import css from './SearchBox.module.css'
import { changeFilter, } from '../../redux/filters/slice'
import { selectFilter } from '../../redux/filters/selectors'




export default function SearchBox() {

    const dispatch = useDispatch()
    const value = useSelector(selectFilter)

    const handleSearch = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <div className={css.searchBox}>
            <label className={css.searchLabel} htmlFor="searchInput">Пошук контактів...</label>
            <input className={css.searchInput} type="text" name="searchInput" id="searchInput"
            value={value} onChange={handleSearch}
            />
        </div>
)
}