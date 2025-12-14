export interface Treatment {
  id: string;
  name: string;
  category: string;
  description: string;
  keywords: string[];
}

// This is the single source of truth for all treatments
// Update this file to keep footer and treatments page in sync
export const treatments: Treatment[] = [
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

// Helper to get treatment by ID
export function getTreatmentById(id: string): Treatment | undefined {
  return treatments.find(t => t.id === id);
}

// Get all treatment IDs for static generation
export function getAllTreatmentIds(): string[] {
  return treatments.map(t => t.id);
}

