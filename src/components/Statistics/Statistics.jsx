import css from './Statistics.modules.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h3 className={css.title}>Statistics</h3>
      <p className={css.good}>Good: {good}</p>
      <p className={css.neutral}>Neutral: {neutral}</p>
      <p className={css.neutral}>Bad: {bad}</p>
      <p className={css.total}>Total: {total}</p>
      <p className={css.total}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
