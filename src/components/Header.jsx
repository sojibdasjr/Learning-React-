import PropTypes from "prop-types";
const Header = ({ task, date }) => {
  return (
    <div>
      <h1>Subject: {task}</h1>
      <h1>Date : {date}</h1>
    </div>
  );
};

//PropTypes Comments
Header.propTypes = {
  task: PropTypes.string,
  date: PropTypes.string,
};

export default Header;
