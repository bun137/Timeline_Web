'use client';
import SideThreeLinks from '@/app/components/sideThreeLinks';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const Editor = dynamic(() => import('@/editor/editor.js'), { ssr: false })

function savingData(data){
 if (!data) {
   console.error('No data to save');
   return;
 }
 console.log(data)
 let requestData = JSON.stringify(data);

 fetch("/api/backendii/save_data", {
  method: "POST",
  body: requestData,
  headers: {
    "Content-Type": "application/json",
  }
 }).catch(e => console.log(e));
}

export default function editingPage() {
 const [data, setData] = useState();
 const [clickedFeelings, setClickedFeelings] = useState(new Set());
 return (
   <>
     <div className="justify-center">
       <SideThreeLinks clickedFeelings={clickedFeelings} setClickedFeelings={setClickedFeelings}/>
       <Editor holder="editorsname" data={data} onChange={setData} />
       
       <div className='flex justify-center items-center'>
         {[...clickedFeelings].map((feeling, index) => (
                <p className='m-3 p-2 border border-[#B3B3B3] rounded-3xl ' key={index}>{feeling}</p>
          ))}
       </div>
       <div className=' flex justify-center items-center'><button onClick={() => savingData(data)} disabled={!data} className=' m-3 p-2 hover:border hover:border-spacing-2 hover:border-[#b6b4b4] hover:rounded-xl '>Submit!</button></div>
     </div>
   </>
 );
}
