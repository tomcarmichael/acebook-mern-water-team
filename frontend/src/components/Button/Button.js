import "./Button.css";

const Button = ({ margin, color, text, onClick, id }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, marginBottom: margin }}
      className='btn'
      data-cy={id}
    >
      {text}
    </button>
  )
}

export default Button;