function Button({executor}) {
  const styles = {
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
      <button onClick={executor} style={styles}>Touch Me!</button>
    </>
  )
};

export default Button;