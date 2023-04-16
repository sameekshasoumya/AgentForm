import React, { useState } from 'react';
import './Newhome.css';

const Newhome = () => {
    const [userInput,setUserInput] = useState({
        phone: "",
        cost:""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value})
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>Overhead Chagres Form</h2>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="phone">Consignment ID</label>
                        <input type="number" value={userInput.phone} onChange={handleInput} name="phone" id="phone" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="cost">Total Cost incurred</label>
                        <input type="number" value={userInput.phone} onChange={handleInput} name="cost" id="cost" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label>Detailed bill of the cost to agent</label>
                        <input type="file" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label>Please upload the condition of item finally, after mending</label>
                        <input type="file" required/>
                    </div>
                </div>
                <br/>

                <div class="btn">
                    <input type="submit" value="Submit Request"/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default Newhome