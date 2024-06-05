import wind from '../src/assets/images/wind11.jpg';
import { FaSun } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="box_left">
          <div className="top">
            <FaSun className='sun' />
            <p className="top_p">Untitled UI</p>
          </div>
          <div className="orta">
            <h4 className="box_h4">Welcome back, Olivia</h4>
            <p className="orta_p">Continue with Google or enter your details </p>
            <button className="top_btn">
              <FaGoogle className='gogle' />
              <p className="tb_p">Login in with details.</p>
            </button>

            <div className="flex">
              <div className="bir1">
              <input type="text"  className="inp" maxLength={15}/>

              </div>
              <div className="bir2">or</div>
              <div className="bir1">
                <input type="text"  className="inp" maxLength={15} />
              </div>
            </div>

            <form className="form">
              <input type="email" placeholder='Email' minLength={8} maxLength={25} required className='pas_inp' />
              <input type="password" placeholder='Password' minLength={4} maxLength={25} required className='pas_inp' />
              <div className="ake">
                <div className="left">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                  />
                  <label className='check_p' for="myCheckbox">Remember for 30 days</label></div>
                <p className="forgot">Forgot password</p>
              </div>
              <button className="btn">Login</button>
            </form>
            <div className="bottom">
              <p className="bot_p1">Don't have an account?</p>
              <p className="bot_p2">Sign up for free</p>
            </div>
          </div>
        </div>
        <div className="box_right">
          <img src={wind} alt="sass" className='wind_img' />
        </div>
      </div>
    </div>
  );
}

export default App;
