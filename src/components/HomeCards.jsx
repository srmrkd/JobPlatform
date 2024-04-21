import Card from './Card';
const HomeCards = () => {
  return (
    <>
        <section className="m-4">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid Example */}
                <Card>
                    <div className="pl-4 py-4">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">For Developers</h1>
                        <p className="font-bold text-gray-800 mb-2">Browse our React jobs and start your career today</p>
                        <button className="bg-black text-white font-bold p-3 rounded-md hover:bg-gray-700">Browse Jobs</button>
                    </div>
                </Card>
                <Card bg='bg-indigo-100'>
                    <div className="pl-4 py-4">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">For Employers</h1>
                        <p className="font-bold text-gray-800 mb-2">List your job to find the perfect developer for the role</p>
                        <button className="bg-indigo-500 text-white font-bold p-3 rounded-md hover:bg-indigo-600">Browse Jobs</button>
                    </div>
                </Card>
            </div>
        </section>
    </>
  )
}

export default HomeCards