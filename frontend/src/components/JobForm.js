import React from 'react'
import {useState} from 'react'

const JobForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        link: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {//probably will put the actual data transfer to backend here
        e.preventDefault()
        setFormData({company: '', title: '', link: ''})
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Company:
                    <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Title:
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Link:
                    <input
                        type='text'
                        name='link'
                        value={formData.link}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
     )
}
 
export default JobForm;