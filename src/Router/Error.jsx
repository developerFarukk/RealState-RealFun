import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1500">
            <section className="flex items-center h-full p-16 bg-[#525252] dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-yellow-600">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-yellow-700">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;
