import ContactItem from '../components/ContactItem';
import mockContactData from '../components/mockContactData';

export default function ContactList() {
  return (
    <div className="text-sky-300 max-w-screen-xl mx-auto bg-sky-800 rounded-xl">
      <div className="max-w-screen-xl mx-auto m-5 text-center">
        <h1 className='text-2xl p-4'>Contact List will be displayed here ...</h1>
        <div className="flex flex-wrap items-center justify-center">
          {mockContactData.map((item, index) => (
            <ContactItem key={index} phoneName={item.name} phoneNumber={item.phoneNumber} type={item.type}/>
          ))}
        </div>
      </div>
    </div>
  );
}
