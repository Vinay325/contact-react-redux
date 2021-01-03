import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteContact } from './redux/action/contactAction'
import edit from '../../images/pencil.svg'
import remove from '../../images/remove.svg'
import user from '../../images/user.svg'
import Avatar from 'react-avatar'


export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const { name, phone, email, id } = contact



    return (

        <tr>
            <td><Avatar className="mr-1" size="40" round={true} src={user} /> {name} </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="action">
                <span className="mr-1">
                    <Link to={`/contacts/edit/${id}`} >
                        <span ><img src={edit} alt="edit" /></span>
                    </Link>
                </span>
                <span className=" deleteContact ml-1" onClick={(e) => dispatch(deleteContact(id))}><img src={remove} alt="remove" /></span>
            </td>
        </tr>
    )
}
