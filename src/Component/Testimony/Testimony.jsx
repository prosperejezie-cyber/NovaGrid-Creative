import { useState , useEffect } from 'react'
import card4 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import "./Testimony.css";
import axios from 'axios';


const Testimony = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try{
      const Res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(Res.data);
      console.log(Res.data);
    }catch (error) {
      console.log(error)

    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div> {/* <!-- TESTIMONY SECTION --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Students</h2>
        <div className="Testimonial-container">
          {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={card4}
            alt="student learning" />
            <h3>Name: {user.name}</h3>
            <p>
              Address:{user.address.street}</p>
              <p>Email:{user.email}</p>
          </div>
          ))}
      
        </div>
      </section></div>
  )
}

export default Testimony
