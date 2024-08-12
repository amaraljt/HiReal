// component/SignInOptions.tsx

import React from 'react'

export default function SignInOptions() {
  return (
    <>
      <div className="size-64 border-2 p-10">
        <ul>
          <p> Email </p>
          <li> <input className="list-none" /> </li>
          <p> Password </p>
          <li> <input className="list-none" /> </li>
          <div className="">
            <button className="bg-white text-black m-3 p-0.5"> Button </button>
          </div>
        </ul>
      </div>
    </>
  );
}
