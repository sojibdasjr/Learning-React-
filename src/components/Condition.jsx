import PropTypes from "prop-types";

const Condition = ({ isDone, task }) => {
  if (isDone === true) {
    return <li>Finished: {task}</li>;
  } else {
    return <li>Work On: {task}</li>;
  }
};

Condition.propTypes = {
  isDone: PropTypes.string,
  task: PropTypes.string,
};

export default Condition;
