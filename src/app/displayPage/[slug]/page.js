"use client";
import { useState, useEffect } from "react";

const editorHtmli = require("editorjs-html");

export default function PrevStuff({ params }) {

  const [EditorHtmli, setEditorHtmli] = useState([]);
  const [thoughtsData, setThoughtsData] = useState({});
  const editori_id = params.slug;

  if (!editori_id) {
    return <div>404 your data not found or rather your data is now in the under-world of the internet hahaaha!!</div>
  }

  const editoriPaseri = editorHtmli();
  const htmlifi = editoriPaseri.parse;
  async function fetchingData() {
    const ress = await fetch(
      "/api/backendii/get_editor_data?editori_id=" + editori_id,
      {
        method: "GET",
      }
    );
    if (!ress.ok) {
      throw new Error(`halooo http error here!!`);
    }
    const thoughtsData_local = await ress.json()
    setThoughtsData(thoughtsData_local);
    console.log(thoughtsData_local);


    setEditorHtmli(await htmlifi(thoughtsData_local.editorjs_data));
  }

  useEffect(() => {
    fetchingData().catch((error) => {
      console.error("Error:", error);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-start ">
        <div className=" text-2xl m-3 p-2">
          Thoughts Saved =&gt;
        </div>
        <div>
          <div className="prose max-w-full prose-invert" key={editori_id}>
            {EditorHtmli.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
                );
              }
              return item;
            })}
          </div>

          <div className=" text-2xl m-3 p-2">
          Feelings Saved =&gt;
        </div>

        <div className="flex">

        { thoughtsData.feelings? thoughtsData.feelings.map(thought => {
          return <div className="p-2 m-3 border rounded-lg border-white">{thought}</div>
        }) : ""}
        </div>

        </div>
      </div>

    </>
  )
}