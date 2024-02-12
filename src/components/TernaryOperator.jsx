import PropTypes from "prop-types";
const TernaryOperator = ({ task, isDone }) => {
  return (
    <li>
      {isDone ? "Leraning Finshed" : "Work on"} - {task}
    </li>
  );
};

TernaryOperator.propTypes = {
  isDone: PropTypes.string,
  task: PropTypes.string,
};

export default TernaryOperator;
