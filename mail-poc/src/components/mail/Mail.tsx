import { EmailType } from '../mailslist/MailsList'
import './Mail.css'
import  bcb from '../../assets/Bcb.svg'
import Star from '../../assets/Star.svg'
import label_important from '../../assets/label_important.svg'

function Mail(props:EmailType) {
    let {name,subject,body,timestamp}=props;
  return (
    <div className='mail-container'>
         <div>
          <img src={bcb} alt="bar check box"/>
        </div> 
        <div>
          <img src={Star} alt="bar check box"/>
        </div> 
        <div>
          <img src={label_important} alt="bar check box"/>
        </div>
         <div className='mail-name'>{name}</div>
         <div><b>{subject}</b></div>
         <div>{body}</div>
         <div className='mail-time'><b>{timestamp}</b></div>
    </div>
  )
}

export default Mail