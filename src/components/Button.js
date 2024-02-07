import PropTypes from "prop-types";

const Button = ({onClick, label, type, borderColor, width, height, backgroundColor, color, fontSize, fontFamily, margin}) => {
  return (
    <button type={type}
            onClick={onClick}
            style={{borderRadius: "15px",
                    borderColor,
                    width, 
                    height,
                    backgroundColor,
                    color, 
                    fontSize, 
                    fontFamily,
                    margin}}>{label}</button>
  );
};

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"])
};

Button.defaultProps = {
    type: "button",
};

export default Button;