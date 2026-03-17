"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';

export default function TourPackages() {
  const allPackages = [
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp",
      duration: "1N Ayodhya",
      location: "Ayodhya",
      title: "Ayodhya Tour Package (1N/2D)",
      oldPrice: "9,000",
      newPrice: "7,499",
      href: "/enquire-now"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Ayodhya-Tour-ex-Bglre.webp",
      duration: "2N Ayodhya",
      location: "Bangalore to Ayodhya",
      title: "Ayodhya Tour ex-Bangalore (2N/3D)",
      oldPrice: "35,000",
      newPrice: "22,999",
      href: "/enquire-now"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632-1.png.webp",
      duration: "1N Varanasi | 1N Ayodhya",
      location: "Varanasi | Ayodhya",
      title: "Varanasi Ayodhya Tour (2N/3D)",
      oldPrice: "12,000",
      newPrice: "9,999",
      href: "/enquire-now"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Varanasi-Prayagraj-Ayodhya-Tour-Package.webp",
      duration: "1N Varanasi | 1N Prayagraj | 1N Ayodhya",
      location: "Varanasi | Prayagraj | Ayodhya",
      title: "Varanasi Prayagraj Ayodhya Tour (3N/4D)",
      oldPrice: "16,000",
      newPrice: "11,999",
      href: "/enquire-now"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png-2.webp",
      duration: "1N Varanasi",
      location: "Varanasi",
      title: "Varanasi Tour Package (1N/2D)",
      oldPrice: "9,000",
      newPrice: "7,499",
      href: "/enquire-now"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Rectangle-5635.png.webp",
      duration: "2N Varanasi | 1N Prayagraj | 1N Ayodhya",
      location: "UP Spiritual Essence",
      title: "Varanasi Prayagraj Ayodhya Tour (4N/5D)",
      oldPrice: "16,000",
      newPrice: "13,999",
      href: "/enquire-now"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Varanasi-Prayagraj-Chitrakoot-Ayodhya-Tour.webp",
      duration: "2N Varanasi | 1N Prayagraj | 1N Chitrakoot | 1N Ayodhya",
      location: "Extended UP Tour",
      title: "Varanasi Prayagraj Chitrakoot Ayodhya Tour (5N/6D)",
      oldPrice: "20,000",
      newPrice: "17,999",
      href: "/enquire-now"
    },
    {
      image: "https://varanasiayodhya.com/wp-content/uploads/Varanasi-Bodhgaya-Prayagraj-Ayodhya-Tour.webp",
      duration: "2N Varanasi | 1N Bodhgaya | 1N Prayagraj | 1N Ayodhya",
      location: "Bodhgaya Special",
      title: "Varanasi Bodhgaya Prayagraj Ayodhya Tour (5N/6D)",
      oldPrice: "20,000",
      newPrice: "17,999",
      href: "/enquire-now"
    },
    {
      image: "/images/buddhist-circuit.png",
      duration: "Buddhist Circuit",
      location: "Spiritual Heartland",
      title: "Buddhist Circuit Tour",
      oldPrice: "25,000",
      newPrice: "19,999",
      href: "/enquire-now"
    },
    {
      image: "/images/char-dham.png",
      duration: "Char Dham Yatra",
      location: "Uttarakhand",
      title: "Sacred Char Dham Yatra",
      oldPrice: "45,000",
      newPrice: "34,999",
      href: "/enquire-now"
    },
    {
      image: "/images/bihar-up.png",
      duration: "Bihar/UP",
      location: "Holiest Cities",
      title: "UP & Bihar Spiritual Tour",
      oldPrice: "18,000",
      newPrice: "14,999",
      href: "/enquire-now"
    },
    {
      image: "/images/golden-triangle.png",
      duration: "Golden Triangle",
      location: "Jaipur | Agra | Delhi",
      title: "Golden Triangle Heritage Tour",
      oldPrice: "22,000",
      newPrice: "16,999",
      href: "/enquire-now"
    },
    {
      image: "/images/rajasthan.png",
      duration: "Rajasthan",
      location: "Royal Heritage",
      title: "Royal Rajasthan Heritage Tour",
      oldPrice: "28,000",
      newPrice: "21,999",
      href: "/enquire-now"
    },
    {
      image: "/images/blissful-bihar.png",
      duration: "Blissful Bihar",
      location: "Bihar Culture",
      title: "Blissful Bihar Discovery",
      oldPrice: "15,000",
      newPrice: "11,999",
      href: "/enquire-now"
    },
    {
      image: "/images/uttarakhand.png",
      duration: "Uttarakhand",
      location: "Scenic Temples",
      title: "Lush Uttarakhand Escape",
      oldPrice: "18,000",
      newPrice: "13,999",
      href: "/enquire-now"
    },
    {
      image: "/images/himachal.png",
      duration: "Himachal",
      location: "Shimla | Manali",
      title: "Himachal Serenity Tour",
      oldPrice: "24,000",
      newPrice: "18,999",
      href: "/enquire-now"
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Banner */}
      <section style={{
        height: '45vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://varanasiayodhya.com/wp-content/uploads/Rectangle-5632.png.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingTop: '80px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Tour Packages</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', opacity: '0.9' }}>Explore the Spiritual Essence of Uttar Pradesh</h2>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-light" style={{ padding: '80px 5%' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px' 
          }}>
            {allPackages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
