import '../../Style/Footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { ImYoutube2 } from 'react-icons/im';


const Footer = () => {





    return (
      <div className='footer'>
        <h5>Zawaj</h5>

        <p> something here about how great we are</p>

        <div class="socials">
            <BsInstagram className="icon"/>        
            <FaFacebookF className="icon"/>
            <GrTwitter className="icon"/>
            <FaLinkedinIn className="icon"/>
            <ImYoutube2 className="icon"/>
        </div>
        
      </div>
    );
  }
  
  export default Footer;

