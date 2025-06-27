import { Link } from "react-router-dom";


function Login({funcAutentication}) {
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    funcAutentication(email, password);
  }
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center font-montserrat">
        <main className="flex flex-col items-center w-full max-w-md p-4 border border-orange-500 rounded-lg">
          <h1 className="text-2xl text-teal-600 mb-6">
            INICIAR SESIÓN
          </h1>
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-zinc-700 font-bold"
              >
                Correo
              </label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu correo electrónico"
                className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"

                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-zinc-700  font-bold"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white"
                
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600"
            >
              Ingresar
            </button>
            
          </form>
          <div className="my-6 w-full flex items-center">
            <div className="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div>
            <span className="mx-4 text-zinc-500 dark:text-zinc-400">o</span>
            <div className="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div>
          </div>

          <p className="text-center text-zinc-700 ">
            ¿Eres nuevo en MetroEventos?
          </p>

          <Link
            to="/register"
            className="w-full py-2 mt-2 border border-orange-500 text-orange-500 rounded-md text-center hover:bg-orange-100 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-600"
          >
            Regístrate
          </Link>
          {/* <div className="my-6 w-full flex items-center">
            <div className="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div>
            <span className="mx-4 text-zinc-500 dark:text-zinc-400">o</span>
            <div className="flex-grow border-t border-zinc-300 dark:border-zinc-600"></div>
          </div> */}
          {/* <Link
            to="/LoginAdmin"
            className="w-full py-2 mt-2 border border-orange-500 text-orange-500 rounded-md text-center hover:bg-orange-100 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-600"
          >
            Inicio Admin
          </Link> */}

          {/*<a href="#" className="w-full py-2 mt-2 border border-orange-500 text-orange-500 rounded-md text-center hover:bg-orange-100 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-600">Ingreso administrador</a> */}
        </main>
      </div>
    </>
  );
};

export default Login;
