import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default function Contact({ userRef, listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value)
  }

  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("could not get landlord data");
      }
    }
    getLandlord();
  }, [userRef]);

  return <>{landlord !== null && (
    <div className="flex flex-col w-full">
        <p>Contact {landlord.name} for the {listing.name.tolowerCase()}</p>
        <div className="mt-3 mb-6">
            <textarea className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600" name="message" id="message"  rows="2" value={message} onChange={onChange}></textarea>
        </div>
        <a href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}><button className="mb-6 px-7 py-3 bg-blue-600 text-white rounded text-sm shadow-md hover:bg-blue-700 hover:shadow-lg text-center" type="button">Send Message</button></a>
    </div>
  )}</>;
}
