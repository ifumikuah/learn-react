import profilepic from '../assets/profile.jpg';
import card from './Card.module.css';
import PropTypes from 'prop-types'

function Card(prop) {
  return (
    <div className={card.card}>
      <img className={card.cardImg} src={profilepic} alt='profile' width="150" height="150"/>
      <h3 className={card.cardTitle}>{prop.name} ({prop.age})</h3>
      <p className={card.cardDesc}>{prop.hobby}</p>
    </div>
  )
};

Card.propTypes = {
  name: PropTypes.string,
  hobby: PropTypes.string,
  age: PropTypes.number
}

export default Card;

