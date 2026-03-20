import React from 'react';
import { packages } from '@/data/packages';
import { notFound } from 'next/navigation';
import PackageDetailContent from '@/components/PackageDetailContent';

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailContent pkg={pkg} />;
}
