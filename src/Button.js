function Button(props) {
  const event = () => props.onclick()
  return (
    <>
      <button onClick={event}>Click Me!</button>
    </>
  )
};

export default Button;