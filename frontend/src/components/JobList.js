import { useEffect, useState } from 'react'


const JobList = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('/api/jobs')
            const json = await response.json()

            if (response.ok) {
                setJobs(json)
                console.log(json)
            }
        }
        fetchJobs()
    })
    
    return ( 
        <div className="JobList">
            {jobs}
        </div>
     );
}
 
export default JobList;