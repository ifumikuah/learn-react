function WelcomeNotif(props) {
  const login = <h3 className="welcome-notif login-true">Welcome, {props.username}</h3>
  const nologin = <h3 className="welcome-notif login-false">Login required</h3>

  return props.login ? login : nologin;
};

WelcomeNotif.defaultProps = {
  login: false,
  username: "Guest"
}

export default WelcomeNotif;