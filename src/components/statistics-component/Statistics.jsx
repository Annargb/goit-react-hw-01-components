import PropTypes from 'prop-types';
import { getRandomHexColor } from 'random-color';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            className={css.item}
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
              flexBasis: 500 / stats.length,
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
