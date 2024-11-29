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
    <div className="mx-auto w-full max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        {formFields.map(({ id, name, type, label, autoComplete }) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="block text-lg font-medium text-gray-900"
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
                className="block border p-2 mt-2 w-full"
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
            className="flex w-full justify-center rounded-md bg-primary-100 px-3 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100"
          >
            Iniciar Sesión
          </button>
        </div>
        <div>
          <Link
            href="/register"
            className="flex w-full justify-center rounded-md bg-secondary-100 px-3 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-secondary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-100"
          >
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
