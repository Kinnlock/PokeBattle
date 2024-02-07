import PropTypes from "propTypes";

const Dropdown = ({title, arraw, onChange, value}) => {

  const handleChange = (e) => {
    if(onChange) {
      onChange(e.target.value);
    };
  };

  return (
    <>
      <div>
        {<label>{title}</label>}
        <select onChange={onChange} value={value}>
          {arraw.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  arraw: PropTypes.arrayOf(ProTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  })
  ).isRequired, 
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default Dropdown;