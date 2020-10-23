import React, { useState } from 'react';
import './Modal.css'
export default function NewCustomer(props){
    const [id,setId] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [landline, setLandline] = useState("");
    const [isModal,setModal] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        const newObj = {
            id: 2,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            contact: contact,
            landline: landline,
        }
        props.create(newObj);
        setId(0);
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setContact("");
        setLandline("");
        setModal(false);
    }


    const DisplayModal = () => {
        return (
          <div className="modal-form">
                <form onSubmit={onSubmit} className = "modal-container" >
                    <div className="close-btn">
                        <div onClick={()=>setModal(false)}>
                            Close
                        </div>
                    </div>
                    <div className = "left">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                         <input className="form-control" id="firstName"  value = {firstName} onChange = {(e)=>setFirstName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="form-control" id="lastName"  value = {lastName} onChange = {(e)=>setLastName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input className="form-control" id="email"  value = {email} onChange = {(e)=>setEmail(e.target.value)} required/>
                    </div>
                    </div>
                   <div className="right">
                   <div className="form-group desc">
                        <label htmlFor="address">Address</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Enter Address here"
                            value = {address}
                            onChange = {(e)=>setAddress(e.target.value)}
                        />
                    </div>
                 
                    <div className="form-group">
                        <label htmlFor="contact">Contact: </label>
    
                        <input className="form-control" id="contact"  value = {contact} onChange = {(e)=>setContact(e.target.value)} required/>
                    
                    </div>
                    <div className="form-group">
                        <label htmlFor="landline">Landline</label>
                        <input className="form-control" id="landline"  value = {landline} onChange = {(e)=>setLandline(e.target.value)} required/>
                    </div>
                   </div>
                    
    
                    <div className="form-group">
                        <button className="form-control btn" type="submit">
                                Submit
                        </button>
                    </div>
                </form>
          
        </div>
        
        )
      }
    
      return (
        <>
            <button className="addbtn" onClick = {(e)=>setModal(true)}> Create New Customer</button>
         
          {isModal && DisplayModal()}
        </>
      );
    

}
