import img from './images/chat-box.png'

const App = () => {

  return (
    <div className="d-flex">

      <section className="w-25 border p-2">
        <div className="d-flex ">
          <div className="w-25">
            <img src={img} alt="profil foto" className="w-75" />
          </div>

          <h4>name</h4>
        </div>
      </section>

      <main className="w-75 border">

      </main>


    </div>
  )
}

export default App;