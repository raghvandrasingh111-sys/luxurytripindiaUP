import React from 'react';
import { packages } from '@/data/packages';
import { notFound } from 'next/navigation';
import PackageDetailContent from '@/components/PackageDetailContent';

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

  return <PackageDetailContent pkg={pkg} />;
}
