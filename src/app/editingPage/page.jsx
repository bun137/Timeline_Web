'use client';
import SideThreeLinks from '@/app/components/sideThreeLinks';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const Editor = dynamic(() => import('@/editor/editor.js'), { ssr: false });

export default function editingPage() {
  const [data, setData] = useState();
  const [clickedFeelings, setClickedFeelings] = useState(new Set());
  const router = useRouter();

  const { user } = UserAuth();
  function savingData(data) {
    if (!data) {
      console.error('No data to save');
      return;
    }
    console.log(data);
    const _id = user.uid + Date.now();

    const request = {
      _id: _id,
      feelings: [...clickedFeelings],
      editorjs_data: data,
    };
    console.log(request);
    fetch('/api/backendii/save_data', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((e) => console.log(e));

    router.push('/');
  }

  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <SideThreeLinks
          clickedFeelings={clickedFeelings}
          setClickedFeelings={setClickedFeelings}
        />
        <Editor holder="editorsname" data={data} onChange={setData} />
      </div>
      <div className="flex justify-center items-center">
        {[...clickedFeelings].map((feeling, index) => (
          <p
            className="m-3 p-2 border border-[#B3B3B3] rounded-3xl "
            key={index}
          >
            {feeling}
          </p>
        ))}
      </div>
      <div className=" flex justify-center items-center">
        <button
          onClick={() => savingData(data)}
          disabled={!data}
          className=" m-3 p-2 hover:border hover:border-spacing-2 hover:border-[#b6b4b4] hover:rounded-xl "
        >
          Submit!
        </button>
      </div>
    </>
  );
}
