import React from 'react';
import './home.css';
import image from '../assets/1.jpg';
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
          <h1 className="hero-title">
            Expert Jewelery Repairs & Restoration
          </h1>

          <a href="#how-it-works" className="hero-btn">
            Find out more
          </a>
        </div>
      </section>

      {/* 2. Top Intro Description */}
      <section className="intro-section">
        <div className="intro-container">
          <p>
            At Parekh Jewelers, we provide professional jewelery repairs
            and alterations for Gold, Platinum and Silver jewelery. Our
            experienced craftsmen combine traditional goldsmithing techniques
            with modern craftsmanship to carefully restore and repair your
            treasured pieces. From everyday repairs to detailed restorations
            and plating, we take pride in delivering quality workmanship and
            personal service.
          </p>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="how-it-works-container">

          <h2 className="section-title">
            How Our Jewelery Repair Service Works
          </h2>

          <div className="how-it-works-text">

            <p>
              We offer a free, no-obligation quote for your jewelery repair.
              Simply send us a few clear photos of your jewelery and our team
              will provide you with an estimate of the repair cost. Once we
              have inspected the item, if anything changes regarding the
              repair or price, we will contact you before any work begins.
            </p>

            <p>
              We understand that some jewelery repairs may be urgent. If you
              need your jewelery repaired within a particular timeframe,
              please let us know beforehand so that we can discuss the
              estimated completion time with you.
            </p>

            <p className="credentials">
              Our expertise is built on professional knowledge and quality
              craftsmanship. We are a{' '}
              <a href="#gia" className="gold-link">
                GIA Qualified Jewelers
              </a>{' '}
              and{' '}
              <a href="#aigs" className="gold-link">
                AIGS Accredited Gemologist
              </a>
              .
            </p>

            <p className="repair-types">
              <strong>What We Repair:</strong>
              <br />
              We repair jewelery made from Gold, Silver and Platinum,
              including rings, bracelets, fine chains and pendants. Our
              services include jewelery repairs, resizing, restoration,
              catches, plating and other professional jewelery alterations.
            </p>

          </div>

          {/* 3 Steps Cards */}
          <div className="steps-grid">

            <div className="step-card">
              <div className="step-badge">1</div>
              <p>
                Send us a few photos of your jewelery and receive a{' '}
                <a href="#estimate" className="gold-link">
                  free no-obligation estimate
                </a>{' '}
                for your repair.
              </p>
            </div>

            <div className="step-card">
              <div className="step-badge">2</div>
              <p>
                Send your jewelery to us by Insured Mail. We will message you
                as soon as your jewelery arrives safely.
              </p>
            </div>

            <div className="step-card">
              <div className="step-badge">3</div>
              <p>
                We will professionally repair your jewelery and return it to
                you safely by Tracked Mail.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Examples Gallery Section */}
      <section className="examples-section">
        <div className="examples-container">

          <h2 className="section-title">
            A Few Examples Of Our Repair Services
          </h2>

          <div className="gallery-grid">
            {repairServices.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="gallery-card"
              >
                <div className="image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="card-title">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
export default Home;