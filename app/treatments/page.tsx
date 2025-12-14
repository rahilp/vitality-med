'use client';

import { useState, useMemo } from 'react';
import { Section } from '@/components/ui/Section';
import { CTA } from '@/components/sections/CTA';
import { Search, Stethoscope, Calendar, Shield } from 'lucide-react';

interface Treatment {
  id: string;
  name: string;
  category: string;
  description: string;
  keywords: string[];
}

const treatments: Treatment[] = [
  // Preventive Care
  {
    id: 'annual-wellness-exam',
    name: 'Annual Wellness Exam',
    category: 'Preventive Care',
    description: 'Comprehensive annual physical examination including health screenings, vital signs assessment, and personalized health recommendations.',
    keywords: ['annual physical', 'wellness checkup', 'preventive care', 'health screening', 'yearly exam'],
  },
  {
    id: 'preventive-health-screenings',
    name: 'Preventive Health Screenings',
    category: 'Preventive Care',
    description: 'Age-appropriate health screenings including blood pressure, cholesterol, diabetes, cancer screenings, and more.',
    keywords: ['health screening', 'cancer screening', 'preventive screening', 'early detection'],
  },
  {
    id: 'immunizations-vaccinations',
    name: 'Immunizations & Vaccinations',
    category: 'Preventive Care',
    description: 'All recommended vaccinations including flu shots, COVID-19 vaccines, travel vaccines, and routine immunizations.',
    keywords: ['vaccinations', 'immunizations', 'flu shot', 'covid vaccine', 'travel vaccines'],
  },
  {
    id: 'health-maintenance',
    name: 'Health Maintenance & Counseling',
    category: 'Preventive Care',
    description: 'Personalized health counseling on nutrition, exercise, stress management, and lifestyle modifications.',
    keywords: ['health counseling', 'nutrition counseling', 'lifestyle medicine', 'wellness coaching'],
  },
  
  // Chronic Disease Management
  {
    id: 'diabetes-management',
    name: 'Diabetes Management',
    category: 'Chronic Disease Management',
    description: 'Comprehensive diabetes care including blood sugar monitoring, medication management, dietary guidance, and complication prevention.',
    keywords: ['diabetes', 'type 2 diabetes', 'blood sugar control', 'diabetic care', 'glucose management'],
  },
  {
    id: 'hypertension-management',
    name: 'Hypertension Management',
    category: 'Chronic Disease Management',
    description: 'Blood pressure monitoring, medication management, and lifestyle modifications to control high blood pressure.',
    keywords: ['high blood pressure', 'hypertension', 'blood pressure control', 'cardiovascular health'],
  },
  {
    id: 'cholesterol-management',
    name: 'Cholesterol & Lipid Management',
    category: 'Chronic Disease Management',
    description: 'Comprehensive lipid panel analysis and management strategies to lower cholesterol and reduce cardiovascular risk.',
    keywords: ['cholesterol', 'high cholesterol', 'lipid panel', 'heart disease prevention'],
  },
  {
    id: 'asthma-copd',
    name: 'Asthma & COPD Management',
    category: 'Chronic Disease Management',
    description: 'Ongoing management of asthma and chronic obstructive pulmonary disease with medication optimization and monitoring.',
    keywords: ['asthma', 'COPD', 'respiratory care', 'breathing problems', 'lung disease'],
  },
  {
    id: 'thyroid-disorders',
    name: 'Thyroid Disorder Management',
    category: 'Chronic Disease Management',
    description: 'Diagnosis and treatment of thyroid conditions including hypothyroidism, hyperthyroidism, and thyroid nodules.',
    keywords: ['thyroid', 'hypothyroidism', 'hyperthyroidism', 'thyroid function', 'TSH'],
  },
  {
    id: 'arthritis-management',
    name: 'Arthritis & Joint Pain Management',
    category: 'Chronic Disease Management',
    description: 'Treatment of osteoarthritis, rheumatoid arthritis, and other joint conditions with medication and lifestyle interventions.',
    keywords: ['arthritis', 'joint pain', 'osteoarthritis', 'rheumatoid arthritis', 'joint inflammation'],
  },
  
  // Acute Care
  {
    id: 'common-cold-flu',
    name: 'Cold & Flu Treatment',
    category: 'Acute Care',
    description: 'Diagnosis and treatment of colds, influenza, and upper respiratory infections with symptomatic relief and supportive care.',
    keywords: ['cold', 'flu', 'influenza', 'upper respiratory infection', 'URI'],
  },
  {
    id: 'sinus-infections',
    name: 'Sinus Infection Treatment',
    category: 'Acute Care',
    description: 'Treatment of acute and chronic sinusitis with antibiotics when appropriate and supportive care measures.',
    keywords: ['sinus infection', 'sinusitis', 'nasal congestion', 'sinus pain'],
  },
  {
    id: 'ear-infections',
    name: 'Ear Infection Treatment',
    category: 'Acute Care',
    description: 'Diagnosis and treatment of ear infections including otitis media and otitis externa.',
    keywords: ['ear infection', 'otitis media', 'ear pain', 'earache'],
  },
  {
    id: 'strep-throat',
    name: 'Strep Throat Treatment',
    category: 'Acute Care',
    description: 'Rapid strep testing and antibiotic treatment for bacterial throat infections.',
    keywords: ['strep throat', 'sore throat', 'throat infection', 'strep test'],
  },
  {
    id: 'skin-infections',
    name: 'Skin Infection Treatment',
    category: 'Acute Care',
    description: 'Treatment of bacterial and fungal skin infections including cellulitis, impetigo, and fungal infections.',
    keywords: ['skin infection', 'cellulitis', 'impetigo', 'skin rash', 'bacterial skin infection'],
  },
  {
    id: 'urinary-tract-infections',
    name: 'Urinary Tract Infection (UTI) Treatment',
    category: 'Acute Care',
    description: 'Diagnosis and treatment of urinary tract infections with appropriate antibiotic therapy.',
    keywords: ['UTI', 'urinary tract infection', 'bladder infection', 'cystitis'],
  },
  {
    id: 'gastrointestinal-issues',
    name: 'Gastrointestinal Issues',
    category: 'Acute Care',
    description: 'Treatment of nausea, vomiting, diarrhea, constipation, and other digestive issues.',
    keywords: ['nausea', 'vomiting', 'diarrhea', 'constipation', 'stomach pain', 'digestive issues'],
  },
  {
    id: 'minor-injuries',
    name: 'Minor Injury Care',
    category: 'Acute Care',
    description: 'Treatment of minor cuts, bruises, sprains, and strains with wound care and pain management.',
    keywords: ['minor injury', 'wound care', 'sprain', 'strain', 'cuts', 'bruises'],
  },
  
  // Women's Health
  {
    id: 'well-woman-exam',
    name: 'Well-Woman Exam',
    category: "Women's Health",
    description: 'Annual gynecological examination including Pap smear, breast exam, and reproductive health assessment.',
    keywords: ['well woman exam', 'gynecological exam', 'pap smear', 'pelvic exam', 'women\'s health'],
  },
  {
    id: 'contraception-counseling',
    name: 'Contraception Counseling',
    category: "Women's Health",
    description: 'Comprehensive birth control counseling and prescription management for various contraceptive methods.',
    keywords: ['birth control', 'contraception', 'family planning', 'birth control pills'],
  },
  {
    id: 'menopause-management',
    name: 'Menopause Management',
    category: "Women's Health",
    description: 'Supportive care and treatment options for menopausal symptoms including hormone therapy when appropriate.',
    keywords: ['menopause', 'menopausal symptoms', 'hot flashes', 'hormone therapy'],
  },
  {
    id: 'pregnancy-care',
    name: 'Pregnancy Care & Prenatal Visits',
    category: "Women's Health",
    description: 'Prenatal care coordination and pregnancy-related health management in partnership with OB/GYN providers.',
    keywords: ['pregnancy', 'prenatal care', 'pregnant', 'maternity care'],
  },
  {
    id: 'breast-health',
    name: 'Breast Health Screening',
    category: "Women's Health",
    description: 'Clinical breast examinations and coordination of mammography screenings for breast cancer detection.',
    keywords: ['breast exam', 'mammogram', 'breast cancer screening', 'breast health'],
  },
  
  // Men's Health
  {
    id: 'prostate-health',
    name: 'Prostate Health Screening',
    category: "Men's Health",
    description: 'Prostate-specific antigen (PSA) testing and digital rectal exams for prostate cancer screening.',
    keywords: ['prostate', 'PSA test', 'prostate cancer screening', 'men\'s health'],
  },
  {
    id: 'testosterone-therapy',
    name: 'Testosterone Therapy',
    category: "Men's Health",
    description: 'Evaluation and treatment of low testosterone including hormone replacement therapy when indicated.',
    keywords: ['low testosterone', 'testosterone replacement', 'hormone therapy', 'testosterone deficiency'],
  },
  {
    id: 'erectile-dysfunction',
    name: 'Erectile Dysfunction Treatment',
    category: "Men's Health",
    description: 'Evaluation and treatment of erectile dysfunction with medication and lifestyle interventions.',
    keywords: ['erectile dysfunction', 'ED', 'impotence', 'sexual health'],
  },
  
  // Mental Health
  {
    id: 'anxiety-depression',
    name: 'Anxiety & Depression Management',
    category: 'Mental Health',
    description: 'Screening, diagnosis, and treatment of anxiety and depression with medication and referral to therapy when needed.',
    keywords: ['anxiety', 'depression', 'mental health', 'mood disorders', 'antidepressant'],
  },
  {
    id: 'stress-management',
    name: 'Stress Management',
    category: 'Mental Health',
    description: 'Counseling and strategies for managing stress, improving sleep, and enhancing overall mental wellness.',
    keywords: ['stress management', 'mental wellness', 'stress relief', 'sleep issues'],
  },
  
  // Senior Care
  {
    id: 'geriatric-care',
    name: 'Geriatric Care',
    category: 'Senior Care',
    description: 'Specialized care for older adults including fall prevention, medication review, and age-related health concerns.',
    keywords: ['geriatric care', 'senior health', 'elderly care', 'aging', 'fall prevention'],
  },
  {
    id: 'memory-assessment',
    name: 'Memory & Cognitive Assessment',
    category: 'Senior Care',
    description: 'Screening and evaluation for memory issues, cognitive decline, and early signs of dementia.',
    keywords: ['memory loss', 'dementia screening', 'cognitive assessment', 'Alzheimer\'s'],
  },
  
  // Additional Services
  {
    id: 'weight-management',
    name: 'Weight Management',
    category: 'Lifestyle Medicine',
    description: 'Comprehensive weight loss and weight management programs with personalized nutrition and exercise plans.',
    keywords: ['weight loss', 'weight management', 'obesity', 'diet counseling', 'nutrition'],
  },
  {
    id: 'smoking-cessation',
    name: 'Smoking Cessation',
    category: 'Lifestyle Medicine',
    description: 'Smoking cessation support including medication, counseling, and strategies to quit tobacco use.',
    keywords: ['quit smoking', 'smoking cessation', 'tobacco cessation', 'nicotine replacement'],
  },
  {
    id: 'sports-physicals',
    name: 'Sports Physicals',
    category: 'Preventive Care',
    description: 'Pre-participation physical examinations for athletes and sports clearance evaluations.',
    keywords: ['sports physical', 'athletic physical', 'sports clearance', 'pre-participation exam'],
  },
  {
    id: 'travel-medicine',
    name: 'Travel Medicine',
    category: 'Preventive Care',
    description: 'Travel health consultations, vaccinations, and preparation for international travel.',
    keywords: ['travel medicine', 'travel vaccines', 'travel health', 'international travel'],
  },
  {
    id: 'minor-procedures',
    name: 'Minor Office Procedures',
    category: 'Procedures',
    description: 'In-office procedures including wart removal, mole removal, skin biopsies, and suturing.',
    keywords: ['minor procedures', 'wart removal', 'mole removal', 'skin biopsy', 'sutures'],
  },
  {
    id: 'ecg-ekg',
    name: 'ECG/EKG Testing',
    category: 'Diagnostics',
    description: 'Electrocardiogram testing for heart rhythm and electrical activity evaluation.',
    keywords: ['ECG', 'EKG', 'electrocardiogram', 'heart rhythm', 'cardiac testing'],
  },
  {
    id: 'pulmonary-function',
    name: 'Pulmonary Function Testing',
    category: 'Diagnostics',
    description: 'Breathing tests to evaluate lung function and diagnose respiratory conditions.',
    keywords: ['pulmonary function test', 'lung function', 'spirometry', 'breathing test'],
  },
  {
    id: 'care-coordination',
    name: 'Care Coordination',
    category: 'Services',
    description: 'Coordination of care with specialists, hospitals, and other healthcare providers to ensure seamless treatment.',
    keywords: ['care coordination', 'specialist referral', 'healthcare coordination', 'medical care management'],
  },
  {
    id: 'medication-management',
    name: 'Medication Management',
    category: 'Services',
    description: 'Comprehensive medication review, prescription management, and optimization of drug therapy.',
    keywords: ['medication review', 'prescription management', 'pharmacy', 'drug interactions'],
  },
  {
    id: 'virtual-visits',
    name: 'Virtual Visits & Telemedicine',
    category: 'Services',
    description: 'Remote consultations via video or phone for convenient access to care from anywhere.',
    keywords: ['telemedicine', 'virtual visit', 'telehealth', 'online doctor', 'video consultation'],
  },
];

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
                <div
                  key={treatment.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-teal-primary hover:shadow-lg transition-all duration-300"
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
                </div>
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

