
const Button = ({ handleClick }) => {

  const handleButtonClick = () => {
    handleClick(true);
  }

  return(
    <div className="button-div">
      <button className="button"
        onClick={handleButtonClick}>
        Fuck Yes!
      </button>
    </div>
  )

}


export default Button;