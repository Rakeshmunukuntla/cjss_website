import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-neutral-950">
      <div className="text-center animate-fade-in">
        {/* Large 404 */}
        <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 leading-none">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off into the
          digital void.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-500 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <p className="text-gray-500 mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/about")}
              className="text-purple-400 hover:text-purple-300 underline"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/careers")}
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Careers
            </button>
            <button
              onClick={() => navigate("/resources")}
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
