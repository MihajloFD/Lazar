import React from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { Header } from '../../components/Header/Header';

const ProfilePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profileImage, setProfileImage] = React.useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setProfileImage(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = (data) => {
    // Handle form submission (including the image)
    console.log(data);
    console.log(profileImage); // You can send profileImage along with form data
  };

  return (
    <>
    <Header />
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-10">Profile Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-20">
          <div
            {...getRootProps()}
            className={`border rounded-full w-32 h-32 flex items-center justify-center mx-auto cursor-pointer ${
              isDragActive ? 'bg-gray-200' : 'bg-gray-100'
            }`}
          >
            {!profileImage && <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>}
            <input {...getInputProps()} />
            {profileImage && (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile"
                className="max-w-full max-h-full rounded-full"
              />
            )}
          </div>
        </div>
        <div className="mb-4">
        <div className="relative z-0">
          <input
            type="text"
            id="fullName"
            name="fullName"
            {...register('fullName')}
            placeholder=" " 
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
          />
        <label htmlFor="fullName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
        </div>
        </div>
        <button type="submit" className="w-full bg-black text-white p-2 rounded-3xl cursor-pointer">
          Save
        </button>
      </form>
    </div>
    </>
  );
};

export default ProfilePage;
