export default function SideBar() {
  return (
    <div className="sidebar w-full bg-stone-800 h-screen flex flex-col items-center justify-start text-stone-50">
      <i className="bx bx-user-circle text-6xl my-8 hover:text-stone-400"></i>
      <ul className="flex flex-col text-2xl">
        <li>All contacts</li>
        <li>Family</li>
        <li>Friends</li>
        <li>Co-Workers</li>
        <li>Private</li>
      </ul>
      <div className="flex text-4xl mt-auto mb-8">
        <i className="bx bx-cog hover:text-stone-400 bg-stone-700 p-2"></i>
        <i className="bx bx-info-circle hover:text-stone-400 bg-stone-700 p-2"></i>
      </div>
    </div>
  );
}
