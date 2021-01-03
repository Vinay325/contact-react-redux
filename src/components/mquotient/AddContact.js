import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from './redux/action/contactAction'
import { useHistory } from 'react-router-dom'
import ShortId from 'shortid'
import Button from '../reusableComponents/Button'
import Avatar from 'react-avatar'
import user from '../../images/user.svg'



const AddContact = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // let template = {
    //     fields: [
    //         {
    //             name: "name",
    //             type: "text",
    //             placeholder: "Enter your name"
    //         },
    //         {
    //             name: "phone",
    //             type: "text",
    //             placeholder: "Enter your number"
    //         },
    //         {
    //             name: "email",
    //             type: "email",
    //             placeholder: "Enter your name"
    //         }
    //     ]
    // }

    const createContact = e => {
        e.preventDefault();
        const new_Contact = {
            id: ShortId.generate(),
            name,
            phone,
            email
        }

        dispatch(addContact(new_Contact))
        history.push('/')
    }

    return (
        <div className="col-{md,sm}-8 card border-0 shadow bg-light">
            <h5 className="  text-center">Add Contact</h5>
            <div className="d-flex justify-content-around card-header">
                <div className=" col-9 p-2 cord-body">
                    <form onSubmit={(e) => createContact(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <Button variant="primary" size={"md"} name="submit" />
                    </form>
                </div>
                <div className="col-{md,sm}-3 cord-body prodile">
                    <Avatar className="profile" round={true} src={user} />
                    <h5 className="mt-2"> <span className="pl-3" >Profile</span></h5>
                </div>
            </div>
        </div>
    )
}
export default AddContact;