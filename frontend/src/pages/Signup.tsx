import Header from "../components/Header"
import LoginImage from '../assets/Login_image.png'

const Signup = () => {
  return (
    <div className="bg-gradient-to-b ">
      <Header/>
      <div className="flex items-center justify-center min-h-screen mt-11 pb-11 ">
      <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl">
        {/* Contenedor del fondo de la izquierda */}
        <img  className="w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg" src={LoginImage}/>
          
        
        {/* Contenedor del formulario de registro */}
        <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
          <h2 className="text-3xl text-white font-bold mb-6">Sign up</h2>
          <p className="text-gray-400 mb-8">
            Sign up now and gain access to exclusive content.
          </p>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email address"
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Repeat your Password"
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded font-bold hover:opacity-90 transition-opacity duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">
            By clicking sign up, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Signup
