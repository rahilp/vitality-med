'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { CTA } from '@/components/sections/CTA';
import { Search, Stethoscope, Calendar, Shield } from 'lucide-react';

import { treatments } from '@/lib/treatments';

const categories = Array.from(new Set(treatments.map(t => t.category))).sort();

export default function TreatmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTreatments = useMemo(() => {
    return treatments.filter(treatment => {
      const matchesSearch = 
        searchQuery === '' ||
        treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || treatment.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    treatments.forEach(t => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    counts['All'] = treatments.length;
    return counts;
  }, []);

  return (
    <>
      <Section 
        background="gradient" 
        spacing="lg"
        className="text-white"
        hero
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Comprehensive <span className="text-gold-primary">Medical Treatments</span>
          </h1>
          <p className="text-xl text-gray-200">
            Explore our extensive range of primary care services, from preventive care to chronic disease management. 
            Find the treatment or service you need.
          </p>
        </div>
      </Section>

      <Section background="white" spacing="lg">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search treatments, conditions, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-teal-primary focus:outline-none text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-teal-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({categoryCounts['All']})
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-teal-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category} ({categoryCounts[category]})
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <strong>{filteredTreatments.length}</strong> of <strong>{treatments.length}</strong> treatments
            </p>
          </div>

          {/* Treatments Grid */}
          {filteredTreatments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTreatments.map((treatment) => (
                <Link
                  key={treatment.id}
                  href={`/treatments/${treatment.id}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-teal-primary hover:shadow-lg transition-all duration-300 block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-teal-primary">
                      {treatment.name}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap ml-2">
                      {treatment.category}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {treatment.keywords.slice(0, 3).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                    {treatment.keywords.length > 3 && (
                      <span className="text-xs text-gray-400">+{treatment.keywords.length - 3} more</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No treatments found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Additional Information Section */}
      <Section background="gray" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-teal-primary">
            Questions About Our Treatments?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            All treatments and services listed are included in your Vitality membership. 
            We coordinate with specialists and facilities for services beyond primary care.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg">
              <Calendar className="w-10 h-10 text-teal-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Same-Day Appointments</h3>
              <p className="text-gray-600">
                Get the care you need when you need it, often the same day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Shield className="w-10 h-10 text-teal-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Insurance for Labs</h3>
              <p className="text-gray-600">
                We accept insurance for laboratory work and diagnostic testing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Stethoscope className="w-10 h-10 text-teal-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Comprehensive Care</h3>
              <p className="text-gray-600">
                From preventive care to chronic disease management, we cover it all.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}

