import PropTypes from "prop-types";

export default function Actors(props) {
  const { actor } = props;
  return <h4>Actors Name: {actor} </h4>;
}

Actors.propTypes = {
  actor: PropTypes.string,
};
