// import styles from './Pill.module.css'
// import { useContext } from 'react';
// import { GenreContext } from '../../contexts/GenreContext';

// let genresArr = [];
// export default function Pill({
//     value
// }) {
//     const { onChange } = useContext(GenreContext);


//     function onChangeHandler(e) {
//         let genre = e.target.nextSibling.textContent;

//         if (genresArr.includes(genre)) {
//             let index = genresArr.indexOf(genre);
//             genresArr.splice(index, 1);
//         } else {
//             genresArr.push(genre);
//         }
//         onChange(genresArr)
//     }

//     return (
//         <label className={styles.PillList_item}>
//             <input type="checkbox" name="genre" onChange={e => onChangeHandler(e)} />
//             <span className={styles.PillList_label} >{value}</span>
//         </label>
//     )
// }