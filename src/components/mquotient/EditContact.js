import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updateContact } from './redux/action/contactAction'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditContact = () => {
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
    }, [contact])
    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        })
        dispatch(updateContact(update_contact))
        history.push("/")
    }
    return (

        <div className="card border-0 shadow">
            <div className="card-header">
                Add Contact
                <div className="cord-body">
                    <form onSubmit={(e) => onUpdateContact(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter your email id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-warning">update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditContact;