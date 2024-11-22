import Link from "next/link";

const SignInForm = () => {
  const formFields = [
    {
      id: "email",
      name: "email",
      type: "email",
      label: "Correo electrónico",
      autoComplete: "email",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      label: "Contraseña",
      autoComplete: "current-password",
    },
  ];

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        {formFields.map(({ id, name, type, label, autoComplete }) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="block text-sm/6 font-medium text-gray-900"
            >
              {label}
            </label>
            <div className="mt-2">
              <input
                id={id}
                name={name}
                type={type}
                required
                autoComplete={autoComplete}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        ))}

        {/*
        <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div> */}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Iniciar Sesión
          </button>
        </div>
        <div>
          <Link
            href="/register"
            className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
