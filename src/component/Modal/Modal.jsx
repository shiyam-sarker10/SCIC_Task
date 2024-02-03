import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";


const Modal = () => {
  const { user, UserUpdate } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [showImage, setShowImage] = useState({});
  const [imagePreview, setImagePreview] = useState(""); // New state variable

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.files[0];
    const imageFile = { image: image };
     const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

     const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


    const imageRes = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const imageUrl = imageRes.data.data.display_url;
    UserUpdate(name, imageUrl)
      .then((result) => {
        toast.success("Profile Updated Successfully");
        window.location.reload()
      })
      .catch((error) => toast.success("Something went wrong"));

     
    const info = { name, image };
    console.log(info);

    
  };

  return (
    <div className="w-72 mx-auto flex items-center justify-center">
      {/* modal button  */}
      <button
        onClick={() => setOpenModal(true)}
        className="text-white p-2 rounded-lg"
      >
        <svg
          width={35}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
      {/* modal screen div  */}
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
      >
        {/* form div  */}
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "opacity-1 duration-300 translate-y-0"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form onSubmit={handleSubmit} className="p-12">
            <svg
              onClick={() => setOpenModal(false)}
              className="w-10 mx-auto mr-0 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <h1 className="backdrop-blur-sm text-4xl pb-8">Update Profile</h1>
            <div className="space-y-5">
              <label htmlFor="name" className="block">
                Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder={user?.displayName}
                  className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                  name="name"
                  required
                />
                <span className="absolute top-1/4 left-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
                        fill="#000000"
                      ></path>
                      <rect
                        x="2.5"
                        y="2.5"
                        width="19"
                        height="19"
                        rx="3.5"
                        stroke="#000000"
                      ></rect>
                    </g>
                  </svg>
                </span>
              </div>

              <label htmlFor="image" className="block">
                Image
              </label>
              <div className="flex w-full  mx-auto overflow-hidden  items-center justify-center bg-grey-lighter">
                <label className="w-full flex flex-col items-center px-4 py-10 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-slate-600">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    {showImage?.name ? showImage?.name : "select a file"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    name="image"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const imageFile = e.target.files[0];
                        const imageURL = URL.createObjectURL(imageFile);
                        setShowImage(imageFile);
                        setImagePreview(imageURL);
                      }
                    }}
                    required
                  />
                </label>
              </div>

              {/* Image preview */}
              {imagePreview && (
                <div className="my-4">
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    className="max-w-full h-[150px] rounded-lg"
                  />
                </div>
              )}

              <button
                type="submit"
                className="py-2 px-6 border border-black hover:bg-black hover:text-white duration-300 rounded-md "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
