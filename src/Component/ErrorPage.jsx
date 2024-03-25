import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <h1 className="text-4xl font-semibold">404</h1>
            <h1 className="text-4xl font-semibold">Oppss Page Not Found !!</h1>
            <button className="btn text-lg"><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;