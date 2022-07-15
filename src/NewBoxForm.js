import { React, useState } from 'react';

const NewBoxForm = ({ addBox }) => {
        const INITIAL_STATE = {
            color: '',
            width: '',
            height: ''
        };
        const [formData, setFormData] = useState(INITIAL_STATE);

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value });
        }
       
        const handleSubmit = (e) => {
            e.preventDefault();
            addBox(formData);
            setFormData(INITIAL_STATE);
        }
        
    return (
        <div className="NewBoxForm">
            <h1>New Box Form</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="color">
                    Color:
                    <input
                    type="text"
                    name="color"
                    value={ formData.color } 
                    onChange={ handleChange } />
                </label>
                <label htmlFor="width">
                    Width:
                    <input
                    type="text" 
                    name="width"
                    value={ formData.width } 
                    onChange={ handleChange } />
                </label>
                <label htmlFor="height">
                    Height:
                    <input 
                    type="text" 
                    name="height"
                    value={ formData.height } 
                    onChange={ handleChange } />
                </label>
                <button type="submit">Create Box</button>
            </form>
        </div>  
    );

}

export default NewBoxForm;