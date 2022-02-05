import img3 from './images/paper-plane.png'


const Writemsg = () => {
    return (
        <div id="write_msg" className="d-flex m-3 justify-content-end">
            <input id="text_message" className="me-3" type="text" />
            <img id="send" className="me-5"  src={img3} alt="" />
        </div>
    )
}

export default Writemsg;