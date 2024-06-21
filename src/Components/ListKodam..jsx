import React, { useEffect, useState } from "react";
import { db } from "../Config/Database";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import BG from "../img/bg-khodam.webp";

const KhodamList = () => {
  const [khodams, setKhodams] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const khodamsRef = ref(db, "khodams");
      onValue(khodamsRef, (snapshot) => {
        const data = snapshot.val();
        const khodamList = [];
        for (let id in data) {
          khodamList.push({ id, ...data[id] });
        }
        setKhodams(khodamList);
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center w-full min-h-screen flex flex-col justify-between"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="w-full flex justify-center items-center flex-grow relative">
          <div className="bg-white rounded-t-md bg-opacity-50 p-8 sm:p-10 md:p-12 lg:p-16 relative z-10 max-w-3xl w-full mx-auto">
            <div className="field">
              <h1 className="text-3xl mb-4 p-2 uppercase font-bold text-center">
                Daftar Khodam
              </h1>
              <ul className="bg-white rounded-t-md bg-opacity-50 p-8 sm:p-10 md:p-12 lg:p-16 max-h-96 overflow-y-auto">
                {khodams.map((khodam) => (
                  <li key={khodam.id} className="mb-4">
                    <h2 className="text-xl font-bold">{khodam.nama}</h2>
                    <p>{khodam.keunggulan}</p>
                  </li>
                ))}
              </ul>

              <div className="justify-between flex items-center grid grid-cols-1 gap-4 pt-4">
                <Link
                  to={"/add"}
                  className="btn text-center bg-green-600 rounded-md p-3 w-full font-bold text-white hover:bg-green-500"
                >
                  Tambah Khodam
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhodamList;
