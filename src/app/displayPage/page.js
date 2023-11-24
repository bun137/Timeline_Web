'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function fuck_you(){
    const [thoughtComponents, setThoughtComponents] = useState([]);
    const router = useRouter();
    async function fetchData() {
        const response = await fetch(`/api/backendii/get_yevirithing`, {
            method: "get",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const yevirithing = await response.json();
        let thought_components_local = [];
        yevirithing.map((editori) => {
        thought_components_local.push(
                <button key={editori._id} onClick={() => router.push("/displayPage/"+editori._id)} className="p-2 m-3 border rounded-lg">{editori._id}</button>,
            );
        });
        setThoughtComponents(thought_components_local);
    }

    fetchData().catch((error) => {
        console.error("Error:", error);
    });


    return thoughtComponents
}