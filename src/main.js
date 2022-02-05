import Writemsg from "./write";

function Main() {
    return (

        <main className="w-75 border d-flex flex-column">
            <div id="messages_content" className="d-flex ">
                <h2>Mesajlar</h2>
            </div>
            <Writemsg />

        </main>

    )
}

export default Main;