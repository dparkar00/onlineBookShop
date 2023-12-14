import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import img from "../images/bookdesk.jpg"
import img1 from "../images/bookdesk1.jpg"
import img2 from "../images/bookdesk2.jpg"
import img3 from "../images/bookdesk3.jpg"
import img5 from "../images/bookdesk5.jpg"
const Genre = () => {
    
  const [name, setName] = useState('');
  const navigate = useNavigate();

    return (
        <div className="body">
        <div>
            <p> Search for books in a specific genre!</p>
            
      <input type='text' placeholder='' className="input-bar" onChange={(e)=>{setName(e.target.value)}}/><br/>
      <button className='hero-btn' onClick={()=>navigate("/genre/" + name)}>Search</button>
      </div>
        <div className='main'>
            <div className='genre1'>
                <img title='Fantasy' src={img}
                 alt="" onClick={()=>navigate("/genre/fantasy")}   />
                <img title='Love' src={img1}
                 alt="" onClick={()=>navigate("/genre/love")} />
                <img title='Drama' src={img2}
                 alt="" onClick={()=>navigate("/genre/drama")} />
                <img title='Action' src={img3}
                 alt="" onClick={()=>navigate("/genre/action")} />
                <img title='History' src={img2}
                 alt="" onClick={()=>navigate("/genre/history")} />
                <img title='Adventure' src={img5}
                 alt="" onClick={()=>navigate("/genre/adventure")} />
                <img title='Crime' src={img}
                 alt="" onClick={()=>navigate("/genre/comedy")} />
                <img title='Horror' src={img2}
                 alt="" onClick={()=>navigate("/genre/horror")} />
            </div>
        </div>
        </div>
    )
}

export default Genre
