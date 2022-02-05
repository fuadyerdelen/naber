import Writemsg from "./write";
import personImg from "./images/plus.png"

function Main() {
    return (

        <main className="w-75 border d-flex flex-column">

            <div id="messages_content" className="d-flex justify-content-center">

                <div className="person-info d-flex flex-column ">
                    <div><img id="personImg" src={personImg} alt="" className="" /></div>
                    <div><h3>Yusuf</h3></div>
                    <div><span className="text-muted">#sleepTalker</span></div>

                    <div id="personMessages">
                        
                    </div>
                </div>



            </div>

            <Writemsg />

        </main>

    )
}

export default Main;