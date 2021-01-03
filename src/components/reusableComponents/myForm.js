import React from 'react'
import { useForm } from 'react-hook-form';

function MyForm({ template }) {

    let { handleChange, handleSubmit } = useForm();
    let { fields } = template;

    const renderFields = (fields) => {
        return fields.map(fields => {
            let { placeholder, type, name } = fields
            return (
                <input type="text" className="form-control" name={name} onChange={handleChange} placeholder={placeholder} />
            )
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {renderFields(fields)}
            </form>
        </div>
    )
}

export default MyForm
