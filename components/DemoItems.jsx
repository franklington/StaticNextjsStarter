export default function DemoItems() {
    const Hallo = ()=>{
        alert("Hallo");
    }

    return(
        <>
        <div>
            <input type="text" placeholder="Mein Text"></input>
            <input type="number" placeholder="45"></input>
            <input type="button" value={"Hallo"}></input>
            <input type="checkbox" onClick={Hallo}></input>
            <input type="radio"></input>
            <button>Button Element</button>
        </div>
        
        </>
    )
}

