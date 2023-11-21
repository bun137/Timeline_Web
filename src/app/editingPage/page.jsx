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
 return (
   <>
     <div className="grid grid-rows justify-center">
       <SideThreeLinks />
       <Editor holder="editorsnameig" data={data} onChange={setData} />
       <button onClick={() => savingData(data)} disabled={!data}>Submit!</button>
     </div>
   </>
 );
}
