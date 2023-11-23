"use client";
import { useState, useEffect } from "react";

const editorHtmli = require("editorjs-html");

 export default function PrevStuff({paramis}) {

    const[editorHtmli, setEditorHtmli] = useState([]);
    const editori_id = paramis.slug;

    if(!editori_id){
        return <div>404 your data not found or rather your data is now in the under-world of the internet hahaaha!!</div>
    }

    const editoriPaseri = editorHtmli();
    const htmlifi = editorHtmli.parse;
    async function fetchingData(){
        const ress = await fetch(
            "/api/backendii/get_editor_data?editori_id=" + editori_id,
            {
                method: "GET",
            }
        );
        if (!ress.ok){
            throw new Error(`halooo http error here!!`);
        }

        const thoughtsData = await Response.json();
        setEditorHtmli(await htmlifi(recipe_data.editorjs_data));
  }

  useEffect(() => {
    fetchData().catch((error) => {
      console.error("Error:", error);
    });
  }, []);

    return (
        <>
            <div className="flex justify-start ">
                <div className=" text-2xl m-3 p-2">
                    Thoughts Saved =&gt;
                </div>
                <div>
                <div className="prose max-w-full prose-invert" key={editori_id}>
      {editorHtmli.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
                </div>
            </div> 
            <div className=" text-2xl m-3 p-2 justify-center items-center">
                Collage here:
            </div>
        </>
    )
  }