import s from './pagination.module.scss';
import { useState } from 'react';

const Pagination = () => {
  const [pagination, setPagination] = useState([1, 2, 3, 4]);
  const [current, setCurrent] = useState(1);

  const onClick = (e) => {
    setCurrent(Number(e.target.id))
  }

  const setActive = (e) => {
    if (e.target.id === "right" && current < pagination.length) {
      setCurrent(prev => {
        return prev + 1
      })
    } else if (e.target.id === "left" && current > 1)
    setCurrent(prev => {
      return prev - 1
    })
  }

  return (
    <nav className={s.pagination}>
      <span onClick={setActive} id ="left" className={s.btn}>left</span>
      <ul className={s.list}>
        {pagination.map(el => {
        return  current === el ? (
            <li onClick={onClick} id={el} className={s.active}>{el}</li>
          ) : (
            <li onClick={onClick} id={el} className={s.pageBtn}>{el}</li>
          );
        })}
      </ul>
      <span onClick={setActive} id="right" className={s.btn}>right</span>
    </nav>
  );
};

export default Pagination;
