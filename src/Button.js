function Button() {
  const styles = {
    padding: ".6rem 1rem",
    backgroundColor: "#3d9956",
    color: "#fff",
    fontSize: "2rem",
    borderRadius: ".5rem",
    border: "none",
    cursor: "pointer"
  }

  const executor = (event, str) => {
    event.target.innerText = str;
  }
  
  return (
    <>
      <button onClick={(e) => executor(e, "Wooo!")} style={styles}>Touch Me!</button>
    </>
  )
};

export default Button;