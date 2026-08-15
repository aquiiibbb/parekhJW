import React from 'react';
import './home.css';

function Home() {
  const repairServices = [
    {
      title: 'Ring Repairs',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2019/12/service-ring-repairs.jpg',
      link: '#ring-repairs',
    },
    {
      title: 'Ring Resizing',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/01/service-ring-resizing.jpg',
      link: '#ring-resizing',
    },
    {
      title: 'Ultra Fine Chain Repairs',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/01/service-chain-repairs.jpg',
      link: '#chain-repairs',
    },
    {
      title: 'Pendant Repairs',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/02/service-pendant-repairs.jpg',
      link: '#pendant-repairs',
    },
    {
      title: 'Bracelet Repairs',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/01/service-bracelet-repairs.jpg',
      link: '#bracelet-repairs',
    },
    {
      title: 'Earring Repairs',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/01/service-earring-repairs.jpg',
      link: '#earring-repairs',
    },
    {
      title: 'Catches Replaced',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/02/service-catches-replaced.jpg',
      link: '#catches-replaced',
    },
    {
      title: 'Necklace Resizing',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/02/service-necklace-resizing.jpg',
      link: '#necklace-resizing',
    },
    {
      title: 'Rhodium & Gold Plating',
      image:
        'https://www.jewellerychap.co.uk/wp-content/uploads/2020/02/service-rhodium-plating.jpg',
      link: '#rhodium-gold-plating',
    },
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Jewellery Repairs by Post</h1>
          <a href="#how-it-works" className="hero-btn">
            Find out more
          </a>
        </div>
      </section>

      {/* 2. Top Intro Description */}
      <section className="intro-section">
        <div className="intro-container">
          <p>
            Jewellery repairs and alterations by post. I can repair most items
            of Gold, Platinum &amp; Silver using traditional goldsmithing
            techniques and modern laser welding. I offer a postal only service
            with competitive prices for all sorts of repairs, restorations and
            plating. Post your jewellery to me by insured tracked post and I
            will professionally restore or repair it.
          </p>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="how-it-works-container">
          <h2 className="section-title">How It Works</h2>

          <div className="how-it-works-text">
            <p>
              I offer a free no obligation quote for all your jewellery
              repairs. Send me a few photos and I will send you an estimate of
              the repair cost. Should anything change when I have inspected
              the item I will contact you before proceeding. If you don’t want
              to go ahead I will return it free of charge by Insured &amp;
              Tracked Post.
            </p>

            <p>
              I always have a lot of work on so if you are in a rush for a
              repair please tell me beforehand so we can agree a time frame.
            </p>

            <p className="credentials">
              I am a{' '}
              <a href="#gia" className="gold-link">
                GIA qualified Jeweller
              </a>{' '}
              and{' '}
              <a href="#aigs" className="gold-link">
                AIGS Accredited Gemologist
              </a>
            </p>

            <p className="repair-types">
              <strong>What I repair:</strong>
              <br />
              I repair jewellery made from gold, silver and platinum, including
              rings, bracelets, fine chains and pendants. I do not repair
              watches or sun glasses.
            </p>
          </div>

          {/* 3 Steps Cards */}
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-badge">1</div>
              <p>
                Request an estimate{' '}
                <a href="#estimate" className="gold-link">
                  here
                </a>{' '}
                and attach a few photos of your jewellery
              </p>
            </div>

            <div className="step-card">
              <div className="step-badge">2</div>
              <p>
                Send your jewellery to me by Insured mail and I'll message you
                as soon as it arrives
              </p>
            </div>

            <div className="step-card">
              <div className="step-badge">3</div>
              <p>
                I will professionally repair your jewellery and return it by
                Tracked Mail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Examples Gallery Section */}
      <section className="examples-section">
        <div className="examples-container">
          <h2 className="section-title">
            A Few Examples Of My Repair Services
          </h2>

          <div className="gallery-grid">
            {repairServices.map((item, index) => (
              <a href={item.link} key={index} className="gallery-card">
                <div className="image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="card-title">{item.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;