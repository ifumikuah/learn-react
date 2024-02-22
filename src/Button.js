function Button({executor, text}) {
  const styles = {
    margin: ".3rem",
    padding: ".6rem 1rem",
    backgroundColor: "#3d9956",
    color: "#fff",
    fontSize: "2rem",
    borderRadius: ".5rem",
    border: "none",
    cursor: "pointer"
  }

  return (
    <>
      <button onClick={executor} style={styles}>{text}</button>
    </>
  )
};

Button.defaultProps = {
  text: "Button"
}

export default Button;