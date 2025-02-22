import { BookOpen, Check, CircleUserRound, FolderCheck, UserRound, Wallet } from "lucide-react";
import ChevronDown from "../icons/chevronDown";

export default function PaperProcess ({donateState}) {
  const donateComponents = [
    UserRound,
    BookOpen,
    Wallet,
    FolderCheck
  ];

  const doneStep = [
    {text: "Membuat unggahan penulisan baru", status: true},
    {text: "Melengkapi data detail penulisan", status: true},
    {text: "Mengunggah berkas penulisan", status: false},
    {text: "Ajukan Validasi", status: false},
    {text: "Mendapatkan nomor induk penulisan", status: false}
  ];

  const paper = [
    {text:"SSM", status: true},
    {text:"SKRIPSI", status: false},
  ];
  
  return (
    <div>
      <span className="flex justify-between">
        <h1 className="font-semibold">Sumbang Buku SKRIPSI</h1>
        <ChevronDown />
      </span>
      <div className="flex items-center mt-5 mb-10">
        {
          donateComponents.map((Component, index) => (
            <>
              <span key={index} className={`border-2 border-white rounded-full w-10 h-10 p-1 ${donateState[index] ? "bg-purple-600" : "bg-purple-50"} flex items-center justify-center`}>
                <Component className={donateState[index] ? "text-white" : "text-purple-600"}/>
              </span>
              {
                index !== donateComponents.length - 1 && (
                  <div className={`w-16 h-2 ${donateState[index] ? "bg-purple-600" : "bg-purple-50"}`} />
                )
              }
            </>
          ))
        }
      </div>
      <h1 className="text-gray-400 font-semibold">LANGKAH PENYELESAIAN</h1>
      <div className="flex gap-y-2 flex-col mt-5 mb-5">
        {doneStep.map(({text, status}) => {
          return (
            <div className={`flex items-center gap-3 rounded-md p-2 ${status ? "bg-green-100" : "border-2 border-gray-200"}`}>
              {
                status 
                  ? <Check className="text-green-700"/>
                  : <span className={`rounded-full w-5 h-5 ${status ? "bg-purple-500" : "bg-gray-300"}`}></span>
              }
              <p className="font-semibold">{text}</p>
            </div>
          )
        })}
      </div>
      <h1 className="font-semibold mb-5">Unggah Penulisan</h1>
      <div className="flex gap-y-2 flex-col mt-5 mb-5">
        {paper.map(({text, status}) => {
            return (
              <div className={`flex items-center gap-3 rounded-md p-2 ${status ? "bg-green-100" : "border-2 border-gray-200"}`}>
                {
                  status 
                    ? <Check className="text-green-700"/>
                    : <span className={`rounded-full w-5 h-5 ${status ? "bg-purple-500" : "bg-gray-300"}`}></span>
                }
                <p className="font-semibold">{text}</p>
              </div>
            )
          })}
        </div>
    </div>
  );
}
