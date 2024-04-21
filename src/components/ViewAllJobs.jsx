import {Link} from 'react-router-dom';
const ViewAllJobs = () => {
  return (
    <>
        <section className="max-w-lg my-10 m-auto px-6">
            <Link 
                to="/jobs"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"    
            >
                View All Jobs
            </Link>
        </section>
    </>
  )
}

export default ViewAllJobs