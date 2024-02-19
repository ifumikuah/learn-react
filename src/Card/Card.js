import profilepic from '../assets/profile.jpg';
import card from './Card.module.css';

function Card() {
  return (
    <div className={card.card}>
      <img className={card.cardImg} src={profilepic} alt='profile' width="150" height="150"/>
      <h3 className={card.cardTitle}>John Doe</h3>
      <p className={card.cardDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
};

export default Card;