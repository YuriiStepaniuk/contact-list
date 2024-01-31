import { Link } from 'react-router-dom';

export default function Header() {
  const linkStyle = 'px-4 py-2 mr-2 hover:text-red-200 hover:bg-stone-700 ease-in duration-300 text-lg font-bold rounded-md';

  return (
    <>
      <div className=" bg-slate-600  max-w-screen-xl mx-auto rounded-xl">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
          <div className="navbar flex p-4 border-black ">
            <Link className={linkStyle} to="/">
              Contact List
            </Link>
            <Link className={linkStyle} to="/new-contact">
              Add new
            </Link>
          </div>
          <div className="form w-60 h-8 flex items-center justify-center ">
            <input className="rounded-md bg-white p-1.5" placeholder="Search..." />
          </div>
        </nav>
      </div>
    </>
  );
}
