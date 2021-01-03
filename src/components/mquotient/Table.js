import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact'

export default function Table() {

    const contact = useSelector(state => state.contact.contactsList)
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(
            contact.filter((item) => {
                return item.name.toLowerCase().indexOf(search) > -1 || item.email.toLowerCase().indexOf(search) > -1 || item.phone.toLowerCase().indexOf(search) > -1
            })
        )
    }, [search, contact])
    // const contacts = contact.filter((item) => {
    //     return item.name.toLowerCase().indexOf(search) > -1 || item.email.toLowerCase().indexOf(search) > -1 || item.phone.toLowerCase().indexOf(search) > -1
    // })

    return (
        <>
            <div className="col p-0 ">
                <input type="text" className="form-control m-0" onChange={(e) => setSearch(e.target.value)} placeholder="Search Contact.. name, phone, email..." />
            </div>
            <table className="table mt-2">

                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((item, index) => (
                            <Contact contact={item} key={item.id} />
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
