import React, { useState } from "react";  
import { motion } from "framer-motion";  
import { Leaf1, Leaf2 } from "../assets"; 
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../config/firebase.config";
import Alert from "./Alert";

const Contact = () => {  
  const [data, setData] = useState({  
    firstName: '',  
    lastName: '',  
    email: '',  
    message: '',  
  });  

  const handleTextChange = (e) => {  
    const { name, value } = e.target;  
    console.log(name, value);  
    
    // Update the state  
    setData((prevData) => ({  
      ...prevData,  
      [name]: value,  
    }));  
  };  
  const [alert,setAlert]=useState({
    isAlert:false,
    status:'',
    message:null
  })

  const sendMessage = async () => {
    if (data.email === '' || data.email === null) {
      setAlert({isAlert:true, message:"Empty Fields not allowed",status:"warning"})
      console.error("Email is required");
      setInterval(()=>{
       setAlert({
        isAlert:false,
        message:'',
        status:null
       });
      },4000)
    } else {
      try {
        await addDoc(collection(db, "messages"), { ...data });
        setAlert({isAlert:true, message:"Sucessfully!",status:"success"})
        
        setInterval(()=>{
         setAlert({
          isAlert:false,
          message:'',
          status:null
         });
        },4000)
        setData({ firstName: '', lastName: '', email: '', message: '' });
        console.log("Message sent successfully");
      } catch (error) {
        setAlert({isAlert:true, message:"Missing Eroor!",status:"danger"})
      console.error("Email is required");
      setInterval(()=>{
       setAlert({
        isAlert:false,
        message:'',
        status:null
       });
      },4000)
      }
    }
  };

  return (  
    <section  
      id="contact"  
      className="flex justify-center items-center flex-col gap-12  mt-12"  
    >  
    {alert.isAlert && (
      <Alert status={alert.status} message={alert.message}/>
    )} 
      <div className="w-full flex items-center justify-center pt-26">  
        <motion.div  
          initial={{ opacity: 0, width: 0 }}  
          animate={{ opacity: 1, width: 200 }}  
          exit={{ opacity: 0, width: 0 }}  
          transition={{ delay: 0.4 }}  
          className="flex items-center justify-around w-52"  
        >  
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="Leaf 1" />  
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">  
            Contact Me  
          </p>  
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf 2" />  
        </motion.div>  
      </div>  

      {/* Main section */}  
      <div className="w-full flex flex-col items-center justify-start gap-4 mt-10">  
        <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-center gap-4">  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-start">  
            <input  
              type="text"  
              value={data.firstName}  
              onChange={handleTextChange}  
              name="firstName"  
              placeholder="First Name"  
              className="w-full rounded-md px-4 py-3 border  
               border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight"  
            />  
            <input  
              type="text"  
              value={data.lastName}  
              onChange={handleTextChange}  
              name="lastName"  
              placeholder="Last Name"  
              className="w-full rounded-md px-4 py-3 border   
              border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight"  
            />  
          </div>  
          <input  
            type="email"  
            value={data.email}  
            onChange={handleTextChange}  
            name="email"  
            placeholder="Email"  
            className="w-[87%] rounded-md px-4 py-3 border  
             border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight"  
          />  
          <textarea  
            name="message"  
            value={data.message}  
            onChange={handleTextChange}  
            placeholder="Message Here.."  
            cols="0"  
            rows="10"  
            className="w-[90%] rounded-md px-4 py-3 border  
          border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none text-texlight"  
          ></textarea>  
          <div className="w-full flex items-center justify-center lg:justify-end lg:pr-8">  
            <button  
              className="w-full lg:w-auto bg-gradient-to-br from-primary to-secondary px-10 py-3 rounded-md text-black  
            hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-secondary"  
             onClick={sendMessage}>  
              Send  
            </button>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Contact;
