import s from './AdditionalInfo.module.css';
import { Link } from 'react-router-dom';

const AdditionalInfo = ({ state, url, movieId }) => {
  return (
    <>
      <div className={s.addInfo_wrapper}>
        <h4> Additional information</h4>
        <ul>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${url}/credits`,
                state: { prevPageParam: state.prevPageParam },
              }}
            >
              Credits
            </Link>
          </li>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${url}/reviews`,
                state: { prevPageParam: state.prevPageParam },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdditionalInfo;
