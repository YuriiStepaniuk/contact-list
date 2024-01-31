export default function ContactItem({ phoneName, phoneNumber, type }) {
  return (
    <div className="border w-1/4 m-4 rounded-md h-48 bg-slate-500 flex-col justify-center items-center">
      <p className="my-6">Should be image here</p>
      <h1>
        {phoneName} <span className="p-1 bg-stone-200 rounded-xl ">{type}</span>
      </h1>
      <p>{phoneNumber}</p>
      <button className="mt-4 w-5/6 h-8 hover:bg-green-400 ease-in duration-300 border rounded-xl">
        <i className="bx bxs-phone"></i>
      </button>
    </div>
  );
}
