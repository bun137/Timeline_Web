
const SideThreeLinks = () => {
    const feelings = [
        "Happy",
        "Sad",
        "Angry",
        "Excited",
        "Nervous",
        "Confused",
        "Surprised",
        "Disgusted",
        "Content",
        "Lonely",
        "Loved",
        "Jealous",
        "Guilty",
        "Hopeful",
        "Proud",
        "Embarrassed",
        "Ashamed",
        "Frustrated",
        "Anxious",
        "Curious",
        "Bored",
        "Envious",
        "Grateful",
        "Insecure",
        "Overwhelmed",
        "Peaceful",
        "Relieved",
        "Satisfied",
        "Scared",
        "Shocked",
        "Sick",
        "Tired",
        "Worried"
    ];
    const colors = feelings.map(() => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    });

    return (
        <div>
            <div className="wrapper bg-[#1D1D1E] rounded-xl ">
                <div className="links flex justify-center items-center">
                    <div className="text-[#FFFFFF] text-2xl p-2 m-3">+ Add Feelings</div>
                    <div className="text-[#FFFFFF] text-2xl p-2 m-3 ">+ Add Notes</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    {feelings.map((feeling, index) => (
                        <div
                            key={feeling}
                            className="feelingss grid grid-col justify-center items-center border-2 border-[#B3B3B3] rounded-3xl m-3 p-2"
                            style={{ backgroundColor: colors[index] }}
                        >
                            {feeling}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}


export default SideThreeLinks;
