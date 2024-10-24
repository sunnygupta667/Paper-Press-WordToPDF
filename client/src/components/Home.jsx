import React, { useState } from 'react';
import { FaRegFileWord } from "react-icons/fa";
import axios from "axios";

function Home () {
const[selectedFile, setSelectedFile]=useState(null);
const[convert, setConvert]=useState("");
const[downloadError, setDownloadError]=useState("");

  const handleFileChange=(e)=>{
    setSelectedFile(e.target.files[0]);

  };

  const handleSubmit= async  (e)=>{
    e.preventDefault();
    if(!selectedFile){
      setConvert("Please Select a File...");
      return;

    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    try{
    const response= await axios.post("http://localhost:3000/convertFile" , formData,{
    responseType:"blob",
  });
  const url= window.URL.createObjectURL(new Blob([response.data]));
  const link=document.createElement("a");
  link.href=url;
  link.setAttribute("download",selectedFile.name.replace(/\.[^/.]+$/,"")+".pdf")
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
  setSelectedFile(null)
  setDownloadError("")
  setConvert("File Converted Successfully");


}
    catch(error){
      if(error.response && error.response.status===400){
     setDownloadError("Error Converting File");
    }
    else{
     setConvert("");
    }
    }
    };
  return (
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <div className='w-full px-6 py-4 md:px-40 fixed'>
        <div className='flex h-screen items-center justify-center '>
          <div className='border-2 border-dashed px-4 mb-32 md:px-8 md:py-6 border-r-violet-900 border-l-red-900  border-b-green-900 border-t-cyan-900 rounded-lg shadow-lg'>
          <h1 className="text-3xl font-bold text-center mb-4">
  <i class="fas fa-file-word text-blue-500"></i> Word2PDF Express 
  <i class="fas fa-file-pdf text-red-600"></i>
</h1>
<p className='text-sm  text-center pl-8 pr-8 font-bold  '>
  Instantly turn Word files into PDFs with a single click 
</p>
          
          <div className='flex flex-col items-center space-y-4 '>
             <input type="file"  accept='.doc, .docx' onChange={handleFileChange} className='hidden' id='FileInput'/>
            <label htmlFor="FileInput" className='w-full flex items-center justify-center px-8 py-3 bg-blue-700 text-white rounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-950 hover:text-white duration-300 '><FaRegFileWord className='text-3xl mr-1'/>
            <span className='text-2xl mr-2'>{selectedFile?selectedFile.name:"Choose Your File"}</span>
            </label>
            <button onClick={handleSubmit} disabled={!selectedFile} className='disabled:bg-slate-800 disblaed:pointer-events-none text-1xl bg-green-800 text-white px-4 rounded py-2 hover:bg-red-700 duration-300 disabled:scale-100 hover:scale-110'> Press PDF</button>
            {convert && (<div className='text-emerald-600 font-bold text-center'>{convert}</div>)}
            {downloadError && (<div className='text-red-600 text-center'>{downloadError}</div>)}
          </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Home