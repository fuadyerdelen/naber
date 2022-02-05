

const Person = (props) => {

    function handleClick() {
        console.log("naber");
    }

    return (

        <div onClick={handleClick} id="person_div" className="d-flex border m-1">
            <div className="w-25">
                <img src={props.img} alt="profil foto" className="w-75" />
            </div>
            
            <span>{props.name}</span>
        </div>
    )


}





export default Person;