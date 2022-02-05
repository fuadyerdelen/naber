import img from './images/chat-box.png'
import img2 from './images/plus.png'
import Person from './person'
import img3 from './images/diary.png'

const Persons = () => {
    return (
        <section className="w-25 border p-2 d-flex flex-column">


            <div className='d-flex flex-row justify-content-between'>
                <div><h2 className="mb-4">Kisiler</h2></div>

                <div>
                    <button type='buttom' className='btn' data-bs-toggle="modal" data-bs-target="#add_person" >Add</button>
                    <div className='modal fade' id='add_person' tabIndex="-1" aria-hidden="true">
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header text-center'>
                                    <h5 className=''>Add New Person</h5>
                                </div>
                                <div className='modal-body'>
                                    <form className='d-flex flex-column'>

                                        <label htmlFor="person_id" className='form-label'>Person ID :
                                            <input type="text" id='person_id' className='form-control' />
                                        </label>
                                        <label htmlFor="person_name" className='form-label'>Name :
                                            <input type="text" id='person_name' className='form-control' />
                                        </label>

                                        <button className='btn btn-success' >Add</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Person name="fuad" img={img} />
            <Person name="yusuf" img={img2} />
            <Person name="zeyneb" img={img3} />

        </section>
    )
};

export default Persons;