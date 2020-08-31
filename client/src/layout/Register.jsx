import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [data, setData] = useState({
        name: '',
        email: '',
        number: '',
        type: '',
        descriptionn: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zipcode: ''
    });

    const [file, setFile] = useState('');

    const handleSubmit = async e => {

        console.log('here');

        e.preventDefault();

        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', data.name);
        formData.append('number', data.number);
        formData.append('email', data.email);
        formData.append('type', data.type);
        formData.append('description', data.description);
        formData.append('address', data.address);
        formData.append('address2', data.address2);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('zipcode', data.zipcode);

        console.log(formData.get('name'));
        console.log(formData.get('image'));

        try {
            const res = await axios.post('http://localhost:4000/pros/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('um');
        } catch (err) {
            console.log(err);
            console.log('ashh');
        }

    }

    function handleChange(e) {
        const { name, value } = e.target;

        setData(currData => {
            return {
                ...currData,
                [name]: value
            };
        });
    }

    const onChangeImage = e => {
        setFile(e.target.files[0]);
    }

    return (
        <Fragment>
            <Link to="/"><img id="formlogo" src="https://img.icons8.com/pastel-glyph/64/000000/home.png" /></Link>
            <div class="form">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Personal or Company Name" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="contact_email">Email address</label>
                        <input type="email" class="form-control" name="email" placeholder="name@example.com" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="contact_number">Phone number</label>
                        <input type="text" class="form-control" name="number" placeholder="1234567890" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="type">What type of professional are you?</label>
                        <select class="form-control" name="type" onChange={handleChange}>
                            <option selected hidden>Choose</option>
                            <option>Realtor</option>
                            <option>Inspector</option>
                            <option>Loan Manager</option>
                            <option>Title Company</option>
                            <option>Lawyers</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="image">Please submit a photo</label>
                        <input type="file" class="form-control-file" name="image" onChange={onChangeImage} />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" name="description" rows="5" cols="50" placeholder="What should customers know about you?" onChange={handleChange}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" name="address" placeholder="1234 Main St" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="address2">Address 2</label>
                        <input type="text" class="form-control" name="address2" placeholder="Apartment, studio, or floor" onChange={handleChange} />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="city">City</label>
                            <input type="text" class="form-control" name="city" onChange={handleChange} />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="state">State</label>
                            <select name="state" class="form-control" onChange={handleChange}>
                                <option selected>Choose...</option>
                                <option value="AL">AL</option>
                                <option value="AK">FL</option>
                                <option value="WV">NY</option>
                                <option value="WI">KY</option>
                                <option value="WY">GA</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="zipcode">Zip</label>
                            <input type="text" class="form-control" name="zipcode" onChange={handleChange} />
                        </div>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </Fragment>
    );
}

export default Register;