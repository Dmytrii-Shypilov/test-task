import s from './job-list.module.scss';
import sprite from '../../images/sprite.svg';
import Pagination from 'components/Pagination';
import { useState } from 'react';

const JobList = ({ jobs }) => {
  const [page, setPage] = useState('')
  return (
    <div>
    <ul className={s.list}>
      {jobs.map(job => {
        return (
          <li className={s.listItem} key={job.id}>
            <div className={s.thumb}>
              <img className={s.img} src={job.pictures[2]} />
            </div>

            {/* <div className={s.centered}> */}
            <div className={s.textBlock}>
              <p className={s.titleText}>{job.title}</p>
              <div className={s.nameBlock}>
                <span className={s.nameTag}>Company name -</span>
                <span className={s.name}>{job.name}</span>
              </div>

              <div className={s.address}>
                <svg width="13" height="18" className={s.locIcon}>
                  <use href={sprite + '#location'} />
                </svg>
                <span>{job.address}</span>
              </div>
            </div>
            <div className={s.marksBlock}>
              <div className={s.stars}>
                <svg width="19" height="18" className={s.starIcon}>
                  <use href={sprite + '#star'} />
                </svg>
                <svg width="19" height="18" className={s.starIcon}>
                  <use href={sprite + '#star'} />
                </svg>
                <svg width="19" height="18" className={s.starIcon}>
                  <use href={sprite + '#star'} />
                </svg>
                <svg width="19" height="18" className={s.starIcon}>
                  <use href={sprite + '#star'} />
                </svg>
                <svg width="19" height="18" className={s.starIcon}>
                  <use href={sprite + '#star'} />
                </svg>
              </div>
              {/* </div> */}
              <svg width="19" height="18" className={s.flagIcon}>
                <use href={sprite + '#bookmark'} />
              </svg>
              <p className={s.date}>posted 2 days ago</p>
            </div>
          </li>
        );
      })}
    </ul>
    <Pagination/>
    </div>
  );
};

export default JobList;
