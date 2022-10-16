import React, { useState, useEffect, useRef } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const {value : comment} = commentEl.current;
    const {value : name} = nameEl.current;
    const {value : email} = emailEl.current;
    const {checked : storeData} = storeDataEl.current;

    if(!comment  || !name  || !email){
      setError(true);
      return;
    }

    const commentObj = {name, email, comment, slug};

    if(storeData){
      localStorage.setItem('name', name);
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('name', name);
      localStorage.removeItem('email', email)

    }

  };

  return (
    <div className="bg-zinc-900 rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xk mb-8 font-semibold broder-b pb-4">
        Submit Comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-black"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-black"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-black"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"/>
            <label className="cursor-pointer ml-2" htmlFor="storeData">Save your email and name?</label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All Fields Are Required!</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-emerald-300 hover:text-black inline-block rounded-full bg-violet-600 text-lg px-8 py-3 cursor-pointer  "
        >
          Send Your Comment
        </button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500"> Your Comment Has Been Submitted For Review </span>}
      </div>
    </div>
  );
};

export default CommentsForm;
