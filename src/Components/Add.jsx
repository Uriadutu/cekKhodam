import React, { useState } from "react";
import {db} from "../Config/Database";
import { ref, set, push } from "firebase/database";
import BG from "../img/bg-khodam.webp";
import { Link } from "react-router-dom";

const Add = () => {
  const [nama, setNama] = useState("");
  const [keunggulan, setKeunggulan] = useState("");

  const handleAdd = async () => {
    if (nama && keunggulan) {
      const newKhodamRef = push(ref(db, 'khodams'));
      await set(newKhodamRef, {
        nama,
        keunggulan,
      });
      setNama("");
      setKeunggulan("");
    } else {
      alert('Nama dan Keunggulan harus diisi');
    }
  };

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
                Tambah Khodam
              </h1>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Khodam
                </label>
                <input
                  type="text"
                  className="w-full input input-bordered p-3 uppercase rounded-sm border border-gray-600"
                  placeholder="Masukkan nama khodam"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Keunggulan
                </label>
                <textarea
                  className="w-full input input-bordered p-3 rounded-sm border border-gray-600"
                  placeholder="Masukkan keunggulan khodam"
                  value={keunggulan}
                  onChange={(e) => setKeunggulan(e.target.value)}
                />
              </div>
              <Link className=" w-full font-bold text-white hover:bg-gray-500 border-b border-b-white" to={"/list"}>
              list khodam
              </Link>
              <div className="justify-between flex items-center grid grid-cols-2 gap-4 pt-4">
                <button
                  title="Simpan"
                  className="btn bg-green-600 rounded-md p-3 w-full font-bold text-white hover:bg-green-500"
                  onClick={handleAdd}
                >
                  Simpan
                </button>
                <Link
                  to={"/"}
                  className="btn text-center bg-gray-600 rounded-md p-3 w-full font-bold text-white hover:bg-gray-500"
                >
                  Kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
