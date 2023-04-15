const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        type="button"
        key={option}
        onClick={e => onLeaveFeedback(e, option)}
      >
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;
