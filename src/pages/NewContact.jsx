import InputContact from '../components/InputContact';
import imgUser from '../assets/UserImage.png';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';

export default function NewContact() {
  const initialValues = {
    id: uuidv4(),
    name: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required*'),
    phone: Yup.string().required('Phone number is required*'),
    email: Yup.string().email('Invalid email').required('Email is required*'),
    avatar: Yup.string().url('Invalid URL').required('Avatar is required*'),
    gender: Yup.string()
      .oneOf(['male', 'female', 'other'], 'Invalid gender')
      .required('Gender is required*'),
    status: Yup.string()
      .oneOf(['friends', 'work', 'family', 'private'], 'Invalid status')
      .required('Status is required*'),
    favorite: Yup.boolean(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(true);
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-stone-400 h-screen">
      <div className="flex justify-start items-center mt-4 ml-4">
        <p className="text-stone-100">
          <i className="bx bxs-chevrons-left"></i>Go back to list
        </p>
      </div>

      <div className="">
        <h2 className="p-4 text-center text-3xl text-sky-800 font-bold">
          New Contact
        </h2>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="form">
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" id="name" placeholder="Enter name..." />
                <ErrorMessage name="name" component='p' className='text-red-800'/>
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <Field type="text" name="phone" id="phone" placeholder="Enter phone number..." />
                <ErrorMessage name="phone" component='p' className='text-red-800' />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" id="email" placeholder="Enter e-mail..." />
                <ErrorMessage name="email" component='p' className='text-red-800' />
              </div>
              <div>
                <label htmlFor="avatar">Avatar</label>
                <Field type="text" name="avatar" id="avatar" placeholder="Enter avatar link..." />
                <ErrorMessage name="avatar" component='p' className='text-red-800' />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <Field as="select" name="gender">
                  <option value="">Choose your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="gender" component='p' className='text-red-800' />
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <Field as="select" name="status">
                  <option value="">Choose your status</option>
                  <option value="work">Work</option>
                  <option value="friends">Friends</option>
                  <option value="family">Family</option>
                  <option value="privates">Privates</option>
                </Field>
                <ErrorMessage name="status" component='p' className='text-red-800' />
              </div>
              <div>
                <label htmlFor="favorite">Favorite</label>
                <Field type="checkbox" name="favorite" id="favorite" />
                <ErrorMessage name="favorite" component='p' className='text-red-800' />
              </div>
              <button
                type="submit"
                className="w-24 px-8 py-2 rounded-md bg-stone-500 hover:bg-stone-600"
                disabled={isSubmitting}
              >
                Add
              </button>
            </Form>
          )}
        </Formik>
        <div>
            <ul className='list-disc ml-16 text-xl text-stone-900'>
                <li>Please, provide correct data</li>
                <li>Required fields will be marked with <span className='text-2xl text-red-700'>*</span> sign</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
