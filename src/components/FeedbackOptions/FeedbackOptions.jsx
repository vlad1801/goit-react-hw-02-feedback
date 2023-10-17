import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        className={css.btn}
      >
        {option}
      </button>
    ))}
  </div>
);
