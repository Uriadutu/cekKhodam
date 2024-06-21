import React, { useState, useEffect } from "react";
import BG from "../img/bg-khodam.webp";
import { Link } from "react-router-dom";
import { db } from "../Config/Database";
import { onValue, ref } from "firebase/database";

const Chek = () => {
  const [khodam, setKhodam] = useState("");
  const [keunggulan, setKeunggulan] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    handleCheck(); // Load data pertama kali saat komponen dimount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheck = (e) => {
    if (e) e.preventDefault(); // Mencegah default action form submit jika ada

    const khodamRef = ref(db, "/khodams");
    onValue(khodamRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Ambil data secara acak dari array hasil snapshot
        const khodamKeys = Object.keys(data);
        let randomKey =
          khodamKeys[Math.floor(Math.random() * khodamKeys.length)];
        const randomKhodam = data[randomKey];

        const randomNumber = Math.random();
        if (randomNumber <= 0.3) {
          randomKey = "khodam_tidak_ada"; // Key khusus untuk "Khodam tidak ada"
          setKhodam("tidak Ada");
          setKeunggulan("");
        } else {
          setKhodam(randomKhodam.nama);
          setKeunggulan(randomKhodam.keunggulan);
        }
      } else {
      }
    });

    // Reset nilai input setelah klik check
    setInputValue("");
  };

  return (
    <div>
      <div
        className="bg-cover bg-center w-full min-h-screen flex flex-col justify-between"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="w-full flex justify-center items-center flex-grow relative">
          <div className="bg-white rounded-t-md bg-opacity-50 p-8 sm:p-10 md:p-12 lg:p-16 relative z-10 max-w-3xl w-full mx-auto">
            <form onSubmit={handleCheck}>
              <div className="field">
                <h1 className="text-3xl mb-4 p-2 uppercase font-bold text-center">
                  Cek Khodam
                </h1>
                <input
                  type="text"
                  className="w-full input input-bordered p-3 uppercase rounded-sm border border-gray-600"
                  value={inputValue}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="justify-between flex items-center grid grid-cols-2 gap-4 pt-4">
                <button
                  title="Klik Enter"
                  className="btn bg-blue-600 rounded-md p-3 w-full font-bold text-white hover:bg-blue-500"
                  type="submit"
                >
                  Check
                </button>
                <Link
                  to={"/add"}
                  className="btn text-center bg-green-600 rounded-md p-3 w-full font-bold text-white hover:bg-green-500"
                >
                  Tambah
                </Link>
                <h1 className="absolute bottom-0 right-2 text-white">
                  By : Celcius•TM
                </h1>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-gray-300 w-full flex justify-center p-2 text-center text-2xl mb-3">
          <div className="">
            <h1 className="border-b-2 border-red-600 font-bold p-3">
              Khodam : {khodam}
            </h1>
            <h1 className="max-w-2xl mx-auto break-words">
              Keunggulan : {keunggulan}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chek;
