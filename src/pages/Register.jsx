// import Navbar from "../components/navigation/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";
import { useState } from "react";

function Register() {
  const [errors, setErrors] = useState({});

  const funcCreate = async (e) => {
    e.preventDefault();

    const rol = "Cliente";
    const fname = e.target.Fname.value.trim();
    const lname = e.target.Lname.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const checkpassword = e.target.checkpassword.value.trim();

    const newErrors = {};

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@correo\.unimet\.edu\.ve$/; // Solo acepta correos de la unimet
    const phoneRegex = /^[0-9]+$/;

    // Validaciones de campos
    if (!fname || !nameRegex.test(fname)) {
      newErrors.fname = "Nombre inválido o vacío";
    }

    if (!lname || !nameRegex.test(lname)) {
      newErrors.lname = "Apellido inválido o vacío";
    }

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Correo electrónico debe ser @correo.unimet.edu.ve";
    }

    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Número de teléfono inválido o vacío";
    }

    if (!password) {
      newErrors.password = "Contraseña vacía";
    }

    if (password !== checkpassword) {
      newErrors.checkpassword = "Las contraseñas no coinciden";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Si no hay errores, procede a crear el usuario
  //   try {
  //     const infoUsuario = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     ).then((usuarioFirebase) => {
  //       return usuarioFirebase;
  //     });
  //     const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
  //     setDoc(docuRef, {
  //       email: email,
  //       rol: rol,
  //       fname: fname,
  //       lname: lname,
  //       phone: phone,
  //     });
  //     console.log(infoUsuario);
  //   } catch (error) {
  //     alert("Este Correo ya se encuentra registrado");
  //   }


    };

  return (
    <>
      <Header></Header>
      <div className="flex place-content-evenly flex-col items-center gap-4 w-full h-full bg-gradient-circle lg:p-4">
        <h2 className="text-center text-4xl mt-4 uppercase tracking-widest">
          Regístrate
        </h2>
        <div className="self-center border bg-slate-50 rounded-md shadow-lg backdrop-filter backdrop-blur-sm relative bg-opacity-10 flex flex-col">
          <div className="content-center align-middle font-montserrat">
            <form
              className="p-1 m-1 mb-2 w-72 flex flex-col gap-4"
              onSubmit={funcCreate}
            >
              <div>
                <label className="block text-sm font-bold text-zinc-700">
                  Nombre
                </label>
                <input
                  id="Fname"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.fname ? "border-red-500" : "border-zinc-300"
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.fname && (
                  <p className="text-red-500 text-xs mt-1">{errors.fname}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700">
                  Apellido
                </label>
                <input
                  id="Lname"
                  placeholder="Enter your last name"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.lname ? "border-red-500" : "border-zinc-300"
                  }`}
                />
                {errors.lname && (
                  <p className="text-red-500 text-xs mt-1">{errors.lname}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700">
                  Teléfono
                </label>
                <input
                  id="phone"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.phone ? "border-red-500" : "border-zinc-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.email ? "border-red-500" : "border-zinc-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.password ? "border-red-500" : "border-zinc-300"
                  }`}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="checkpassword"
                  className={`mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 ${
                    errors.checkpassword ? "border-red-500" : "border-zinc-300"
                  }`}
                  placeholder="Enter same password"
                />
                {errors.checkpassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.checkpassword}</p>
                )}
              </div>
              <button className="w-full py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Register;
