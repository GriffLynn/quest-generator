
const Button = ({ handleClick }) => {

  const handleButtonClick = () => {
    handleClick(true);
  }

  return(
    <div className="button-container">
      <button className="button"
        onClick={handleButtonClick}>
        <b>Let's Go!</b>
      </button>
    </div>
  )

}


export default Button;