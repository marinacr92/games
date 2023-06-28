const Button = ({ classIcon, textButton }) => {
  return (
    <>
      <div className="button__front">
        <i className={`fa-solid  button__i ${classIcon}`}></i>
      </div>
      <div className="button__back">
        <span>{textButton}</span>
      </div>
    </>
  );
};
export default Button;
