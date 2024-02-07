import PropTypes from "prop-types";

const Button = ({onClick, label, type, borderColor, width, height, backgroundColor, color, fontSize}) => {
  return (
    <button type={type}
            onClick={onClick}
            style={{borderRadius: "10",
                    borderColor,
                    width, 
                    height,
                    backgroundColor,
                    color, 
                    fontSize}}>{label}</button>
  );
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"])
};

Button.defaultProps = {
    type: "button",
};

export default Button;