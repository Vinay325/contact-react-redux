import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updateContact } from './redux/action/contactAction'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Button from '../reusableComponents/Button'
import Avatar from 'react-avatar'
import user from '../../images/user.png'

const EditContaact = () => {
    let { id } = useParams()
    let history = useHistory()
    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contact.contact);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    useEffect(() => {
        if (contact != null) {
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id))
    }, [contact, dispatch, id])
    const onUpdateContact = (e) => {
        e.preventDefault()

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        })
        dispatch(updateContact(update_contact))
        history.push("/")
    }
    return (
        <div className="col-{md,sm}-8 card border-0 shadow bg-light">
            <h5 className="  text-center">Update Contact</h5>
            <div className="d-flex justify-content-around card-header">
                <div className=" col-9 p-2 cord-body">
                    <form onSubmit={(e) => onUpdateContact(e)}>
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
                        <Button variant="warning text-white" size={"md"} name="Update" />
                    </form>
                </div>
                <div className="col-{md,sm}-3 cord-body">
                    <Avatar className="profile" name="profile" round={true} src={user} />
                    <h5 className="mt-2"> <span className="pl-3" >Update </span></h5>
                </div>
            </div>
        </div>
    )
}
export default EditContaact;