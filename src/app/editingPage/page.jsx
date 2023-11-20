'use client';

import SideThreeLinks from '@/app/components/sideThreeLinks';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Editor = dynamic(() => import('@/editor/editor.js'), { ssr: false });
export default function editingPage() {
  const [data, setData] = useState();
  return (
    <>
      <div className="grid grid-rows justify-center">
        <SideThreeLinks />
        <Editor holder="editorsnameig" data={data} onChange={setData} />
      </div>
    </>
  );
}
