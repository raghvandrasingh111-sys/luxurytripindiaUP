import { Metadata } from 'next';
import { packages } from '@/data/packages';
import PackageCard from '@/components/PackageCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Varanasi Tour Package 2026 | Kashi Vishwanath Darshan | Ram Kashi Yatra',
  description: 'Book your Varanasi tour package for 2026. Experience Ganga Aarti, Kashi Vishwanath VIP Darshan, and Sarnath tours with premium stay and transport.',
  keywords: ['varanasi tour package', 'kashi darshan package cost', 'varanasi itinerary'],
};

export default function VaranasiTourLanding() {
  const varanasiPackages = packages.filter(p => 
    p.location.toLowerCase().includes('varanasi') || 
    p.name.toLowerCase().includes('varanasi')
  );

  return (
    <main style={{ paddingTop: '100px' }}>
      <section style={{
        height: '40vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://www.ramkashiyatra.com/wp-content/uploads/Rectangle-5632.png.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Varanasi Tour Packages</h1>
        <p style={{ fontSize: '1.2rem' }}>Discover the spiritual heart of India along the sacred Ganges</p>
      </section>

      <div className="container section-padding">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Tour Packages', href: '/tour-packages' },
          { label: 'Varanasi Tours', href: '/varanasi-tour-package' }
        ]} />

        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Premium Varanasi & Kashi Vishwanath Packages</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {varanasiPackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} title={pkg.name} href={`/tour-packages/${pkg.slug}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
