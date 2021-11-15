import s from './AdditionalInfo.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdditionalInfo = ({ state, url }) => {
  return (
    <>
      <div className={s.addInfo_wrapper}>
        <h4> Additional information</h4>
        <ul>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${url}/cast`,
                state:
                  state && state.prevPageParam
                    ? { prevPageParam: state.prevPageParam }
                    : { prevPageParam: '/' },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${url}/reviews`,
                state:
                  state && state.prevPageParam
                    ? { prevPageParam: state.prevPageParam }
                    : { prevPageParam: '/' },
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

AdditionalInfo.propTypes = {
  state: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default AdditionalInfo;
