const Hero = ({title='Become a React Dev', subtitle='Find the react job that fits your skill set'}) => {
  return (
    <>
        <section className="bg-indigo-700 py-20 mb-4"> {/* Colors and overall container */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center"> {/* Spacing and all content wraper */}
                <div className="text-center"> {/* Text-content-Wrapper */}
                    <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <p className="text-white my-4 text-xl ">
                       {subtitle}
                    </p>
                </div>
            </div>
        </section>
    </>
  );
}

export default Hero