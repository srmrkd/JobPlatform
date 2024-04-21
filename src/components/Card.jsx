 /* We create this component to save the job-card style in it and pass in whereever needed */
const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <>
        <div className= {`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    </>
  )
}

export default Card