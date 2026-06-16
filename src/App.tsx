import { useState } from "react";

type ExperienceCategory = "mare" | "teide" | "adrenalina";
type FilterCategory = "all" | ExperienceCategory;

type Experience = {
  title: string;
  category: ExperienceCategory;
  image: string;
  description: string;
  price: string;
  rating: string;
};

type Room = {
  title: string;
  zone: string;
  image: string;
  description: string;
  price: string;
};

type Package = {
  title: string;
  duration: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const whatsappUrl =
  "https://wa.me/34000000000?text=Ciao%2C%20vorrei%20una%20proposta%20per%20Tenerife%20con%20motorino%2C%20escursione%20e%20camera.";

const experiences: Experience[] = [
  {
    title: "Whale & Dolphin Eco Cruise",
    category: "mare",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description: "3 ore, snack inclusi, partenza da Costa Adeje, cancellazione flessibile.",
    price: "Da 35 euro",
    rating: "4.8/5",
  },
  {
    title: "Teide Sunset & Stargazing",
    category: "teide",
    image: "https://images.unsplash.com/photo-1616430527856-1d7ca6f4a570?auto=format&fit=crop&w=1000&q=80",
    description: "Pickup hotel, guida locale, tramonto e osservazione stelle.",
    price: "Da 46 euro",
    rating: "4.7/5",
  },
  {
    title: "Quad Safari Volcano Route",
    category: "adrenalina",
    image: "https://images.unsplash.com/photo-1560317788-c6d422a167b5?auto=format&fit=crop&w=1000&q=80",
    description: "3.5 ore, guida, casco, percorso panoramico verso zone vulcaniche.",
    price: "Da 95 euro",
    rating: "4.7/5",
  },
  {
    title: "Kayak & Snorkeling Safari",
    category: "mare",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    description: "Attività guidata, foto ricordo, tartarughe e costa sud.",
    price: "Da 29 euro",
    rating: "4.6/5",
  },
];

const rooms: Room[] = [
  {
    title: "Suite Vista Mare",
    zone: "Los Cristianos",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80",
    description: "Bagno privato, balcone, Wi-Fi veloce, a 8 minuti dalla spiaggia.",
    price: "Da 74 euro/notte",
  },
  {
    title: "Studio Nomad",
    zone: "Costa Adeje",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    description: "Scrivania, cucina, aria condizionata, ideale per soggiorni settimanali.",
    price: "Da 58 euro/notte",
  },
  {
    title: "Villa Friends",
    zone: "Arona",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    description: "3 camere, piscina, parcheggio scooter, perfetta per gruppi.",
    price: "Da 210 euro/notte",
  },
];

const packages: Package[] = [
  {
    title: "Freedom Day",
    duration: "1 giorno",
    description: "Scooter 125cc, casco, itinerario spiagge, supporto WhatsApp e assicurazione base.",
    features: ["Consegna in hotel", "Mappa costa sud", "Extra casco passeggero"],
  },
  {
    title: "Teide Sunset Pack",
    duration: "3 giorni",
    description: "Camera, scooter, tour Teide al tramonto e stargazing con pickup organizzato.",
    features: ["Camera selezionata", "Scooter 125cc", "Escursione serale"],
    highlighted: true,
  },
  {
    title: "Digital Nomad Week",
    duration: "7 giorni",
    description: "Camera con Wi-Fi, scooter settimanale e due esperienze leggere nel weekend.",
    features: ["Wi-Fi veloce", "Noleggio lungo", "Tour mare incluso"],
  },
];

function App() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const visibleExperiences =
    filter === "all" ? experiences : experiences.filter((experience) => experience.category === filter);

  const openConcierge = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Il mio viaggio alle Canarie home">
          <img src="/assets/logo-il-mio-viaggio-alle-canarie.png" alt="Il mio viaggio alle Canarie" />
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Motorini, tour e stanze a Tenerife</p>
            <h1>Il mio viaggio alle Canarie.</h1>
            <p className="hero-copy">
              Arrivi sull'isola e trovi tutto pronto: noleggio scooter, escursioni selezionate e camere comode in
              un'unica esperienza, con supporto locale e pacchetti pronti per partire senza perdere tempo.
            </p>
            <div className="hero-actions" aria-label="Azioni principali">
              <a className="button primary" href="#booking">
                Organizza il viaggio
              </a>
              <a className="button ghost" href="#pacchetti">
                Vedi pacchetti
              </a>
            </div>
          </div>

          <form className="booking-panel" id="booking" aria-label="Ricerca disponibilita">
            <label>
              <span>Arrivo</span>
              <input type="date" name="arrivo" />
            </label>
            <label>
              <span>Durata</span>
              <select name="durata" defaultValue="1 giorno">
                <option>1 giorno</option>
                <option>3 giorni</option>
                <option>1 settimana</option>
                <option>Più di 1 settimana</option>
              </select>
            </label>
            <label>
              <span>Zona</span>
              <select name="zona" defaultValue="Sud Tenerife">
                <option>Sud Tenerife</option>
                <option>Los Cristianos</option>
                <option>Costa Adeje</option>
                <option>Puerto de la Cruz</option>
                <option>Santa Cruz</option>
              </select>
            </label>
            <label>
              <span>Voglio</span>
              <select name="servizio" defaultValue="Pacchetto completo">
                <option>Pacchetto completo</option>
                <option>Solo motorino</option>
                <option>Solo escursione</option>
                <option>Solo camera</option>
              </select>
            </label>
            <button type="button" onClick={openConcierge}>
              Controlla
            </button>
          </form>
        </section>

        <section className="trust-strip" aria-label="Punti di forza">
          <div>
            <strong>24/7</strong>
            <span>Assistenza viaggio</span>
          </div>
          <div>
            <strong>3 in 1</strong>
            <span>Mezzo, tour, camera</span>
          </div>
          <div>
            <strong>Pickup</strong>
            <span>Aeroporto o hotel</span>
          </div>
          <div>
            <strong>IT / EN / ES</strong>
            <span>Supporto multilingua</span>
          </div>
        </section>

        <section className="section intro-section">
          <div className="section-heading">
            <p className="eyebrow">La tua agenzia sull'isola</p>
            <h2>Un sito pensato per vendere giornate complete, non servizi separati.</h2>
          </div>
          <div className="intro-grid">
            {["Libertà immediata", "Esperienze selezionate", "Stanze comode"].map((title, index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>
                  {index === 0 &&
                    "Scegli scooter 50cc, 125cc o 300cc, aggiungi casco, assicurazione, itinerario e ritiro dove ti è più comodo."}
                  {index === 1 &&
                    "Teide al tramonto, whale watching, snorkeling, surf, jet ski e tour privati con informazioni chiare."}
                  {index === 2 &&
                    "Camere e suite con Wi-Fi, vista mare, zone strategiche e dettagli utili per coppie, amici e digital nomad."}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="motorini">
          <div className="split-copy">
            <p className="eyebrow">Noleggio motorini</p>
            <h2>Muoviti come un locale, con tutto già incluso.</h2>
            <p>
              Il turista vuole partire subito. Qui trova cilindrata, prezzo, patente richiesta, assicurazione, casco,
              deposito e consegna in hotel o aeroporto.
            </p>
            <ul className="check-list">
              <li>Modelli 50cc, 125cc, elettrico e premium 300cc.</li>
              <li>Online check-in, contratto digitale e assistenza stradale.</li>
              <li>Mappe Google con itinerari spiagge, Teide, Anaga e costa sud.</li>
            </ul>
            <a className="button secondary" href="#concierge">
              Prenota via concierge
            </a>
          </div>

          <div className="fleet-grid" aria-label="Flotta motorini">
            {[
              ["City 50cc", "Da 29 euro/giorno", "Perfetto per brevi distanze e zone costiere."],
              ["Island 125cc", "Da 39 euro/giorno", "La scelta migliore per scoprire l'isola con libertà."],
              ["Maxi 300cc", "Da 59 euro/giorno", "Più comfort per coppie, salite e itinerari lunghi."],
            ].map(([title, price, text], index) => (
              <article className={`fleet-card ${index === 1 ? "featured" : ""}`} key={title}>
                <img
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=900&q=80"
                      : index === 1
                        ? "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&w=900&q=80"
                        : "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80"
                  }
                  alt={title}
                />
                <div>
                  <span>{price}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section catalog-section" id="escursioni">
          <div className="section-heading with-action">
            <div>
              <p className="eyebrow">Escursioni</p>
              <h2>Le esperienze che cercano davvero i viaggiatori a Tenerife.</h2>
            </div>
            <div className="filter-tabs" aria-label="Filtra escursioni">
              {(["all", "mare", "teide", "adrenalina"] as FilterCategory[]).map((item) => (
                <button className={filter === item ? "active" : ""} type="button" onClick={() => setFilter(item)} key={item}>
                  {item === "all" ? "Tutte" : item[0].toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="experience-grid">
            {visibleExperiences.map((experience) => (
              <article className="experience-card" key={experience.title}>
                <img src={experience.image} alt={experience.title} />
                <div className="card-body">
                  <span className="tag">{experience.category}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  <div className="card-meta">
                    <strong>{experience.price}</strong>
                    <span>{experience.rating}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rooms-section" id="camere">
          <div className="section-heading">
            <p className="eyebrow">Camere e soggiorni</p>
            <h2>Dove dormire diventa parte dell'esperienza.</h2>
            <p>Foto grandi, dettagli chiari e zone strategiche: così il cliente capisce subito se la camera è giusta.</p>
          </div>
          <div className="room-grid">
            {rooms.map((room) => (
              <article className="room-card" key={room.title}>
                <img src={room.image} alt={room.title} />
                <div>
                  <span>{room.zone}</span>
                  <h3>{room.title}</h3>
                  <p>{room.description}</p>
                  <strong>{room.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="packages-section" id="pacchetti">
          <div className="section-heading">
            <p className="eyebrow">Pacchetti pronti</p>
            <h2>La parte più forte: vendere vacanze già organizzate.</h2>
          </div>
          <div className="package-grid">
            {packages.map((tripPackage) => (
              <article className={`package-card ${tripPackage.highlighted ? "highlight" : ""}`} key={tripPackage.title}>
                <span>{tripPackage.duration}</span>
                <h3>{tripPackage.title}</h3>
                <p>{tripPackage.description}</p>
                <ul>
                  {tripPackage.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#concierge">Richiedi</a>
              </article>
            ))}
          </div>
        </section>

        <section className="concierge-section" id="concierge">
          <div>
            <p className="eyebrow">Concierge WhatsApp</p>
            <h2>Scrivici. Ti organizziamo tutto in 10 minuti.</h2>
            <p>
              Racconta date, budget e stile di vacanza, e ricevi una proposta con scooter, camera ed escursione.
            </p>
          </div>
          <form className="lead-form" aria-label="Richiesta preventivo">
            <label>
              <span>Nome</span>
              <input type="text" placeholder="Il tuo nome" />
            </label>
            <label>
              <span>Periodo</span>
              <input type="text" placeholder="Es. 12-16 agosto" />
            </label>
            <label>
              <span>Budget</span>
              <select defaultValue="300-700 euro">
                <option>Fino a 300 euro</option>
                <option>300-700 euro</option>
                <option>700-1500 euro</option>
                <option>Esperienza premium</option>
              </select>
            </label>
            <label>
              <span>Stile viaggio</span>
              <select defaultValue="Avventura">
                <option>Avventura</option>
                <option>Coppia relax</option>
                <option>Gruppo amici</option>
                <option>Digital nomad</option>
              </select>
            </label>
            <button type="button" onClick={openConcierge}>
              Invia su WhatsApp
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Il mio viaggio alle Canarie</strong>
          <p>Noleggio motorini, escursioni e camere con assistenza locale.</p>
        </div>
        <div className="footer-links">
          <a href="#motorini">Motorini</a>
          <a href="#escursioni">Escursioni</a>
          <a href="#camere">Camere</a>
          <a href="#concierge">Contatti</a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Apri WhatsApp">
        WA
      </a>
    </>
  );
}

export default App;
