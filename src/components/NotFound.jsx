import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center bg-primary h-screen">
            <h1 className="mb-4 font-bold text-4xl text-darkAccent">
                Oops! &lt;/&gt; Page Not Found...
            </h1>
            <p className="mb-6 text-lg text-secondary">
                The page you're looking for does not exist.
            </p>
            <Link
                to="/"
                className="bg-theme hover:bg-darkAccent px-6 py-2 rounded-lg font-semibold text-white transition duration-300"
            >
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;
