import { useState } from "react";
import Link from "next/link";
import Head from "../components/head";
import InfoIcon from "../components/icons/info";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Head title="Login" />
      <div className="bg-[url(../public/bg-login.png)] min-h-screen bg-cover">
        <div className="bg-black/25 min-h-screen flex flex-col items-center text-white pt-7">
          <span className="flex items-center gap-2 absolute right-7">
            Belum punya akun?
            <span
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <InfoIcon />
              <div
                className={`absolute top-10 right-3 ${
                  show ? "visible" : "invisible"
                } bg-white text-black h-auto w-64 p-3 rounded-lg`}
              >
                Anda dapat mendaftar akun perpustakaan dengan klik tombol
                <span className="font-semibold"> Studentsite</span>.
              </div>
            </span>
          </span>
          <section className="mb-7">
            <h2 className="font-semibold text-center text-lg">
              Selamat Datang Di Pelayanan
            </h2>
            <h1 className="font-semibold text-center text-3xl">
              Sistem Deposit Perpustakaan Gunadarma
            </h1>
          </section>
          <div className="bg-black/50 rounded-lg p-7 w-1/3 min-w-max">
            <form className="flex flex-col gap-2">
              <label htmlFor="user_id" className="font-semibold">
                NPM / NIP / NIDN / ID PSA
              </label>
              <input
                className="rounded-lg px-4 py-2 text-black focus:outline-purple-600 focus:border-0"
                type="text"
                placeholder="NPM / NIP / NIDN / ID PSA"
              />
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                className="rounded-lg px-4 py-2 text-black"
                type="password"
                placeholder="Password"
              />
              <input
                type="button"
                value="Masuk ke Deposit"
                className="bg-purple-600 rounded-lg p-2 font-semibold mt-3"
              />
            </form>
            <div className="inline-flex justify-center items-center w-full my-5">
              <hr className="w-24 h-px bg-gray-200 border-0" />
              <p className="mx-3 text-center">atau masuk dengan</p>
              <hr className="w-24 h-px bg-gray-200 border-0" />
            </div>
            <Link href="/beranda">
              <button className="bg-black rounded-lg p-2 font-semibold w-full">
                Studentsite
              </button>
            </Link>
          </div>
          <span className="text-center text-sm w-1/3 mt-3">
            Situs ini dilindungi oleh reCAPTCHA dan Kebijakan Privasi dan
            Persyaratan Layanan Google berlaku.
          </span>
        </div>
      </div>
    </>
  );
}
