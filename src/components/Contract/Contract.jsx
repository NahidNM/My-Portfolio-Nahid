import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import contractImg from './../../../public/Image/contract/World Bicycle Day.gif'

const Contract = () => {

    const form = useRef();
const [isSending, setIsSending] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    setIsSending(true)

        emailjs.sendForm('service_ahfh2ik', 'template_8nqvfcu', form.current, 'Jjpwm5-wVtkApMDEb')
          .then((result) => {
              console.log(result.text);
              setIsSending(false)
              swal("Email send success", "success");
          }, (error) => {
              console.log(error.text);
              setIsSending(false)
              swal("Email not send")
          });
      };
// console.log(import.meta.env.VITE_PUBLIC);

    return (
        <div id='contract'>
           <div className='min-h-screen mt-10 hero'>
            <div className='grid grid-cols-1 gap-4 mx-0 md:mx-24 hero-content md:grid-cols-2'>
                <div className='ml-5 md:ml-0'>
                    <h1 data-aos="fade-up" data-aos-delay="500" className='text-5xl font-bold text-transparent mb-9 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Contract With Me</h1>
                    <img data-aos="zoom-in" data-aos-delay="800" className='w-72 h-72 lg:w-96 lg:h-96' src={contractImg} alt="" />
                </div>
                <div data-aos="fade-down" data-aos-delay="1000"    className='ml-5 w-80 mb-80 card md:ml-0 md:mb-0 lg:w-96 h-[60%] md:h-full shadow-2xl bg-gradient-to-r from-pink-900 via-indigo-800 to-purple-800'>
   <form ref={form} onSubmit={sendEmail}>
        <div className='card-body'>
            <div className='form-control'>
                <label>Name</label>
      <input 
      required
       type="text"
        name="user_name"
        placeholder='Name'
        className='input-bordered input'
         />    
            </div>
            
            <div className='form-control'>
            <label>Email</label>
      <input required 
      type="email" 
      name="user_email"
      placeholder='Email'
      className='input-bordered input'
       /> 
            </div>
            
            <div className='form-control'>
            <label>Message</label>
      <textarea required name="message" type="text" placeholder='Message' className='h-28 textarea textarea-bordered' />
            </div>
            <input type="submit" value={isSending ? "Sending..." : "Send"} disabled={isSending}  className='p-4 ml-2 font-semibold rounded cursor-pointer bg-gradient-to-r from-pink-700 to-indigo-600-xl hover: scale-[1.1] mt-3 transition'/>
            </div>            
    </form>
                </div>
                
            </div>

           </div>
           
        </div>
    );
};

export default Contract;