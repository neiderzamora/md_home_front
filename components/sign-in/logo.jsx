import Link from 'next/link';

const Logo = () => (
  <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-20">
    <Link href="/">
      <a className="flex text-5xl text-center justify-center font-semibold text-primary-100 hover:text-primary-200">
        <span className="text-secondary-100">MD</span>Home
      </a>
    </Link>
  </div>
);

export default Logo;
