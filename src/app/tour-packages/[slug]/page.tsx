import React from 'react';
import { packages } from '@/data/packages';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageItinerary from '@/components/PackageItinerary';
import PackageSidebar from '@/components/PackageSidebar';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const pkg = packages.find(p => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      {/* Detail Hero */}
      <section className="detail-hero" style={{
        padding: '160px 5% 100px',
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${pkg.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}>
        <div className="container">
          <div className="badge" style={{ background: '#FF8C00', display: 'inline-block', padding: '5px 15px', borderRadius: '5px', marginBottom: '20px', fontWeight: 'bold' }}>
            {pkg.location} Tours
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '15px' }}>{pkg.name}</h1>
          <p style={{ fontSize: '1.2rem', opacity: '0.9', maxWidth: '800px' }}>{pkg.description}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ padding: '80px 5%', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '50px' }}>
        
        {/* Left Column: Itinerary */}
        <div className="main-content">
          <div className="intro-text">
             <h2 style={{ fontSize: '2.2rem', color: '#2B3036' }}>Experience {pkg.name}</h2>
             <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '15px', lineHeight: '1.8' }}>
               This carefully curated {pkg.duration} tour is designed to immerse you in the spiritual atmosphere and cultural richness of {pkg.location}. 
               From exploring ancient temples to experiencing the divine Sarayu Aarti, every moment is planned for your comfort and enlightenment.
             </p>
          </div>
          
          <PackageItinerary itinerary={pkg.itinerary} />
        </div>

        {/* Right Column: Sidebar */}
        <aside>
          <PackageSidebar 
            price={pkg.price}
            originalPrice={pkg.originalPrice}
            duration={pkg.duration}
            inclusions={pkg.inclusions}
          />
        </aside>

      </div>

      <Footer />

      <style jsx global>{`
        .detail-hero { min-height: 50vh; display: flex; align-items: center; }
        @media (max-width: 1024px) {
          .container { grid-template-columns: 1fr !important; }
          aside { order: 2; }
          .main-content { order: 1; }
        }
      `}</style>
    </>
  );
}
