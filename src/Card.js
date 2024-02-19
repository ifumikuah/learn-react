import profilepic from './assets/profile.jpg';

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilepic} alt='profile' width="150" height="150"/>
      <h3 className="card-title">John Doe</h3>
      <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
};

export default Card;