import s from "./App.module.css";
import img1 from '/01.jpg';
import img2 from '/02.jpg';
import img3 from '/03.jpg';


function App() {
  return (
    <>
      {/* <nav>
        
        <span className={s.navitems}>
          <i class="fa-solid fa-house"></i>
          <a className={s.navwords} href="#s1">
            BMW
          </a>
        </span>

        <span className={s.navitems}>
          <i class="fa-solid fa-car"></i>
          <a className={s.navwords} href="#s2">
            Models
          </a>
        </span>

        <span className={s.navitems}>
          <i class="fa-solid fa-video"></i>
          <a className={s.navwords} href="#s3">
            Videos
          </a>
        </span>

        <span className={s.navitems}>
          <i class="fa-solid fa-address-book"></i>
          <a className={s.navwords} href="#s4">
            Contact
          </a>
        </span>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#s1">Home</a>
              <a className="nav-link"href="#s2">Modelos</a>
              <a className="nav-link"href="#s3">Videos</a>
              <a className="nav-link" href="#s4">Contato</a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <section className={s.s1} id="s1">
          <h1>BMW</h1>
          <h2>The balance of power and luxury</h2>
        </section>

        <section className={s.s2} id="s2">
          <div className={s.card}>
            <img src={img1} alt="BMW M3" />
            <div>
              <h4>BMW M3 Competition</h4>
              <p>O ícone da performance em sua forma mais pura.</p>
            </div>
          </div>

          <div className={s.card}>

            <img src={img2} alt="BMW Série 5" />
            <div>
              <h4>BMW Série 5 Sedã</h4>
              <p>A nova definição do luxo executivo.</p>
            </div>
          </div>

          <div className={s.card}>

            <img src={img3} alt="BMW X3" />
            <div>
              <h4>BMW X3 M50 xDrive</h4>
              <p>O SUV esportivo de nova geração.</p>
            </div>
          </div>
        </section>

        <section className={s.s3} id="s3">
          <iframe
            width="640"
            height="480"
            src="https://www.youtube.com/embed/vLy4l9lSBMQ"
            title="BMW"
            allowFullScreen
          ></iframe>
        </section>

        <section className={s.s4} id="s4">
          <h3>Contato</h3>
          <div className={s.formulario}>
            <label>Nome:</label>
            <input type="text" placeholder="Digite seu nome" />
            <label>Mensagem</label>
            <textarea placeholder="Digite sua mensagem"></textarea>
            <button>ENVIAR</button>
          </div>
        </section>
      </main>

      <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
}

export default App;