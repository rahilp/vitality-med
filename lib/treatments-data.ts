import type { Treatment } from './treatments';

export interface TreatmentDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  summary: string;
  howWeHelp: string[];
}

// Extended treatment data with summaries and how we help sections
const treatmentDetails: Record<string, Partial<TreatmentDetail>> = {
  'annual-wellness-exam': {
    summary: 'Many people skip annual wellness exams because they feel healthy, but these preventive visits are crucial for detecting health issues before symptoms appear. During an annual exam, your doctor checks vital signs, performs age-appropriate screenings (blood pressure, cholesterol, diabetes, cancer screenings), reviews your family history, and assesses your risk factors. Treatment options include lifestyle modifications, preventive medications, vaccinations, and early intervention strategies. Seeing a doctor annually is essential because conditions like high blood pressure, prediabetes, and early-stage cancers often show no symptoms but can be effectively managed or cured when caught early. Regular exams also help establish baseline health metrics and build a relationship with your doctor for better continuity of care.',
    howWeHelp: [
      '60-minute comprehensive wellness exams that include complete physical examination, vital signs assessment, and detailed health history review',
      'Age and gender-specific screening recommendations (mammograms, colonoscopies, bone density, prostate exams) based on your individual risk factors',
      'Baseline health metrics tracking including BMI, blood pressure, cholesterol, and blood sugar levels to monitor changes over time',
      'Family history analysis to identify genetic risk factors and create personalized prevention strategies',
      'Lifestyle counseling on nutrition, exercise, sleep, and stress management tailored to your wellness goals',
      'Same-day scheduling for your annual exam with no months-long wait times typical of traditional practices',
    ],
  },
  'diabetes-management': {
    summary: 'Diabetes occurs when your body cannot properly regulate blood sugar (glucose), leading to elevated levels that can damage organs over time. Type 2 diabetes, the most common form, develops when your body becomes resistant to insulin or doesn\'t produce enough. Left unmanaged, diabetes can cause heart disease, kidney failure, vision loss, nerve damage, and foot problems requiring amputation. Treatment options include oral medications (metformin, sulfonylureas), injectable medications (insulin, GLP-1 agonists), blood sugar monitoring, dietary modifications (carbohydrate counting, glycemic index awareness), regular exercise, and weight management. It\'s critical to see a doctor because uncontrolled diabetes leads to serious complications, and proper management can prevent or delay these outcomes. Your doctor will help you understand your A1C levels, adjust medications, and create a personalized management plan.',
    howWeHelp: [
      'Quarterly A1C monitoring and interpretation to track your long-term blood sugar control and adjust treatment plans accordingly',
      'Medication management including prescriptions for metformin, GLP-1 agonists, SGLT2 inhibitors, and insulin with regular dosage adjustments',
      'Personalized carbohydrate counting and meal planning guidance to help you maintain stable blood sugar levels throughout the day',
      'Diabetic foot exams and neuropathy screening to detect early signs of nerve damage and prevent serious complications',
      'Coordination of annual eye exams with ophthalmologists and kidney function testing to monitor for diabetic complications',
      '24/7 access for urgent blood sugar management questions, medication adjustments, and guidance during illness or high-stress periods',
    ],
  },
  'hypertension-management': {
    summary: 'Hypertension (high blood pressure) is often called the "silent killer" because it typically has no symptoms but significantly increases your risk of heart attack, stroke, kidney disease, and vision loss. Blood pressure above 130/80 mmHg is considered high and requires management. Contributing factors include genetics, age, obesity, high sodium intake, lack of exercise, stress, and excessive alcohol consumption. Treatment options include lifestyle changes (DASH diet, regular exercise, stress reduction, limiting alcohol), and medications such as ACE inhibitors, ARBs, diuretics, beta-blockers, or calcium channel blockers. Seeing a doctor is essential because untreated hypertension damages blood vessels and organs silently over years. Your doctor will determine the right medication combination, monitor for side effects, and help you achieve target blood pressure levels to prevent life-threatening complications.',
    howWeHelp: [
      'Regular blood pressure checks at every visit with home monitoring guidance to track your readings between appointments',
      'Medication management with ACE inhibitors, ARBs, diuretics, or combination therapy, adjusting dosages to achieve target BP below 130/80',
      'DASH diet counseling and sodium restriction education (targeting less than 2,300mg daily) to help lower blood pressure naturally',
      'Exercise prescription and stress management techniques including breathing exercises and relaxation strategies',
      'Monitoring for medication side effects like dizziness, fatigue, or electrolyte imbalances with prompt adjustments when needed',
      'Coordination with cardiologists for echocardiograms, EKGs, and advanced cardiovascular testing when blood pressure remains uncontrolled',
    ],
  },
  'cholesterol-management': {
    summary: 'High cholesterol occurs when you have too much LDL ("bad") cholesterol or too little HDL ("good") cholesterol in your blood, leading to plaque buildup in arteries that can cause heart attacks and strokes. Risk factors include genetics, diet high in saturated fats, lack of exercise, smoking, and certain medical conditions. Treatment options include statin medications (atorvastatin, rosuvastatin), lifestyle modifications (Mediterranean diet, omega-3 fatty acids, soluble fiber), regular exercise, and in some cases, newer medications like PCSK9 inhibitors. It\'s important to see a doctor because high cholesterol has no symptoms until it causes a cardiovascular event. Your doctor will interpret your lipid panel results, calculate your cardiovascular risk score, and determine if medication is needed based on your individual risk factors, family history, and other health conditions.',
    howWeHelp: [
      'Annual lipid panel testing with detailed interpretation of LDL, HDL, triglycerides, and total cholesterol levels',
      'Cardiovascular risk calculation using ASCVD risk score to determine if statin therapy is recommended based on your age, risk factors, and cholesterol levels',
      'Statin medication management (atorvastatin, rosuvastatin) with monitoring for muscle pain, liver function, and effectiveness',
      'Mediterranean diet counseling emphasizing omega-3 fatty acids, soluble fiber (oats, beans), and limiting saturated fats to lower LDL naturally',
      'Monitoring for statin side effects including muscle pain, liver enzyme elevations, and blood sugar changes with appropriate adjustments',
      'Coordination with cardiologists for advanced lipid testing (Lp(a), ApoB) or PCSK9 inhibitor therapy when statins aren\'t sufficient',
    ],
  },
  'weight-management': {
    summary: 'Excess weight and obesity increase your risk of diabetes, heart disease, high blood pressure, sleep apnea, joint problems, and certain cancers. Weight management challenges often stem from metabolic factors, hormonal imbalances, medications, stress, poor sleep, and lifestyle habits. Treatment options include personalized nutrition plans (calorie-controlled diets, intermittent fasting, low-carb approaches), exercise programs, behavioral therapy, medications (GLP-1 agonists like semaglutide, phentermine), and in some cases, bariatric surgery referral. Seeing a doctor is crucial because weight loss requires medical supervision to ensure it\'s done safely, address underlying medical causes (thyroid issues, PCOS, medications), prevent nutritional deficiencies, and manage co-existing conditions. Your doctor can help identify barriers to weight loss, prescribe appropriate medications, and create a sustainable plan tailored to your health status.',
    howWeHelp: [
      'Medical evaluation to identify underlying causes of weight gain including thyroid function, PCOS, medications, and hormonal imbalances',
      'Prescription weight loss medications including GLP-1 agonists (semaglutide, liraglutide) and appetite suppressants with regular monitoring for effectiveness and side effects',
      'Personalized calorie and macronutrient targets based on your metabolism, activity level, and weight loss goals with meal planning guidance',
      'Exercise prescription tailored to your current fitness level, joint health, and medical conditions to safely increase activity',
      'Behavioral modification strategies addressing emotional eating, stress management, sleep optimization, and habit formation',
      'Regular weight and body composition tracking with adjustments to your plan every 4-6 weeks to ensure continued progress',
    ],
  },
  'anxiety-depression': {
    summary: 'Anxiety and depression are serious mental health conditions that affect your mood, energy, sleep, appetite, and ability to function. Anxiety involves excessive worry, panic attacks, and physical symptoms like rapid heartbeat, while depression causes persistent sadness, loss of interest, fatigue, and feelings of hopelessness. These conditions often co-occur and can be triggered by genetics, life stressors, trauma, medical conditions, or medications. Treatment options include antidepressant medications (SSRIs, SNRIs), anti-anxiety medications, psychotherapy (CBT, talk therapy), lifestyle modifications (exercise, sleep hygiene, stress management), and in severe cases, referral to psychiatrists for advanced treatment. It\'s essential to see a doctor because untreated mental health conditions worsen over time, increase suicide risk, and can cause physical health problems. Your doctor can properly diagnose your condition, rule out medical causes (thyroid issues, vitamin deficiencies), prescribe appropriate medications with monitoring, and coordinate with therapists for comprehensive care.',
    howWeHelp: [
      'PHQ-9 and GAD-7 screening tools to assess depression and anxiety severity, track symptoms over time, and measure treatment effectiveness',
      'SSRI and SNRI medication management (sertraline, escitalopram, venlafaxine) with careful monitoring for side effects and dosage adjustments',
      'Medical evaluation to rule out physical causes like thyroid dysfunction, vitamin B12 deficiency, or medication side effects that can mimic depression',
      'Referrals to licensed therapists and psychiatrists for cognitive behavioral therapy (CBT) and specialized mental health treatment',
      'Regular follow-up appointments every 4-6 weeks to monitor medication response, adjust dosages, and assess for suicidal ideation',
      '24/7 crisis support and same-day appointments when you experience worsening symptoms, medication side effects, or mental health emergencies',
    ],
  },
  'well-woman-exam': {
    summary: 'Women\'s reproductive health requires regular monitoring to detect gynecological cancers, infections, hormonal imbalances, and other conditions early. Issues can include abnormal Pap smears indicating precancerous changes, breast lumps, irregular periods, pelvic pain, or symptoms of menopause. Treatment options depend on findings: abnormal cells may require colposcopy or LEEP procedures, infections need appropriate antibiotics or antifungals, hormonal imbalances may require birth control or hormone therapy, and breast abnormalities need imaging and possible biopsy. It\'s critical to see a doctor annually because cervical cancer is highly preventable with regular Pap smears, breast cancer survival rates improve dramatically with early detection, and many gynecological conditions are treatable when caught early. Your doctor will perform necessary screenings, discuss contraception options, address menstrual concerns, and coordinate mammography and other specialized care.',
    howWeHelp: [
      'Annual pelvic examinations including Pap smears (every 3 years for women 21-65) and HPV testing to detect cervical cancer and precancerous changes',
      'Clinical breast examinations with coordination of mammography screenings starting at age 40, or earlier based on family history and risk factors',
      'Contraception management including prescriptions for birth control pills, IUDs, implants, and counseling on effectiveness and side effects',
      'Menstrual health evaluation for irregular periods, heavy bleeding, or PMS symptoms with treatment options including hormonal therapy',
      'Menopause management including hormone replacement therapy (HRT) evaluation, hot flash treatment, and bone density screening coordination',
      'STI screening and treatment, vaginal health assessment, and coordination with OB/GYN specialists for colposcopies, biopsies, or specialized procedures',
    ],
  },
  'prostate-health': {
    summary: 'Prostate issues become more common as men age, including benign prostatic hyperplasia (BPH), prostatitis, and prostate cancer. Symptoms can include frequent urination, difficulty starting or stopping urination, weak stream, blood in urine or semen, and pelvic pain. Prostate cancer is the second most common cancer in men and is highly treatable when detected early. Treatment options vary: BPH may be managed with medications (alpha-blockers, 5-alpha reductase inhibitors) or procedures, prostatitis requires antibiotics, and prostate cancer treatment ranges from active surveillance to surgery, radiation, or hormone therapy depending on stage and grade. Seeing a doctor is vital because prostate cancer often has no early symptoms, and regular PSA testing and digital rectal exams can detect it before it spreads. Your doctor will interpret PSA levels in context of your age and risk factors, perform necessary exams, and coordinate with urologists for further evaluation or treatment when needed.',
    howWeHelp: [
      'Annual PSA (prostate-specific antigen) blood testing starting at age 50, or age 45 for African American men or those with family history, with interpretation of results in context of age and risk factors',
      'Digital rectal exams (DRE) to assess prostate size, texture, and detect abnormalities that may indicate cancer or BPH',
      'BPH symptom evaluation and medication management including alpha-blockers (tamsulosin) and 5-alpha reductase inhibitors (finasteride) to improve urinary flow',
      'Prostatitis diagnosis and antibiotic treatment for bacterial infections, or management of chronic pelvic pain syndrome',
      'Coordination with urologists for prostate biopsies, MRI imaging, or specialized procedures when PSA levels are elevated or abnormalities are detected',
      'Ongoing monitoring of PSA trends over time, with prompt referral for urological evaluation if levels rise significantly or exceed age-specific thresholds',
    ],
  },
  'virtual-visits': {
    summary: 'Many health concerns don\'t require an in-person visit but still need medical attention, such as medication refills, follow-up consultations, minor illnesses, chronic disease monitoring, and mental health check-ins. Virtual visits provide convenient access to care while reducing exposure to other illnesses and saving travel time. Treatment options available via telehealth include prescription management, treatment plan adjustments, health education, and triage to determine if in-person care is needed. It\'s important to see a doctor virtually because many conditions can be effectively managed remotely, medication adjustments can be made promptly, and your doctor can assess whether urgent in-person care is necessary. Virtual visits also allow for more frequent check-ins, better medication adherence monitoring, and convenient access for those with mobility issues or busy schedules.',
    howWeHelp: [
      'Secure HIPAA-compliant video consultations for medication refills, chronic disease follow-ups, and minor illness evaluation without leaving home',
      'Phone consultations for quick medication questions, dosage adjustments, and treatment plan clarifications',
      'Same-day virtual appointments for urgent but non-emergency concerns like rashes, minor infections, or medication side effects',
      'Prescription management via telehealth including new prescriptions, refills, and medication changes sent directly to your pharmacy',
      'Remote monitoring of chronic conditions like diabetes, hypertension, and mental health with virtual check-ins every 4-6 weeks',
      'Triage and assessment to determine if your condition requires in-person evaluation, emergency care, or can be managed virtually',
    ],
  },
  'preventive-health-screenings': {
    summary: 'Many serious health conditions develop silently without symptoms until they\'re advanced and harder to treat. Preventive screenings detect problems early when treatment is most effective. Key screenings include mammograms for breast cancer (starting at age 40-50), colonoscopies for colorectal cancer (starting at 45), Pap smears for cervical cancer, PSA tests for prostate cancer, blood pressure and cholesterol checks for cardiovascular disease, and diabetes screening. Treatment options depend on findings: early-stage cancers may require only surgery, while advanced cases need chemotherapy or radiation. It\'s crucial to see a doctor for screenings because early detection dramatically improves survival rates—for example, 5-year survival for localized breast cancer is 99% versus 30% for metastatic disease. Your doctor will determine which screenings you need based on age, gender, family history, and risk factors, coordinate the tests, interpret results, and create follow-up plans.',
    howWeHelp: [
      'Age and risk-based screening schedule including mammograms (age 40+), colonoscopies (age 45+), bone density scans (women 65+), and lung cancer screening for smokers',
      'Family history assessment to identify genetic risk factors and recommend earlier or more frequent screenings (e.g., colonoscopy at 40 if family history)',
      'Coordination with imaging centers, gastroenterologists, and specialists to schedule all recommended screenings and ensure proper follow-up',
      'Interpretation of screening results including mammogram BI-RADS scores, colonoscopy findings, and lab results with clear explanation of next steps',
      'Abnormal result management including coordination of biopsies, additional imaging, or specialist referrals when screening detects potential issues',
      'Screening reminder system and tracking to ensure you stay current with all age-appropriate preventive screenings based on your individual risk profile',
    ],
  },
  'immunizations-vaccinations': {
    summary: 'Vaccine-preventable diseases like influenza, COVID-19, pneumonia, shingles, and hepatitis can cause serious illness, hospitalization, or death, especially in vulnerable populations. Vaccines work by training your immune system to recognize and fight specific pathogens. Common vaccines include annual flu shots (protecting against current strains), COVID-19 vaccines and boosters, Tdap (tetanus, diphtheria, pertussis), shingles vaccine (for adults 50+), pneumococcal vaccines (for seniors and high-risk individuals), and travel vaccines (yellow fever, typhoid, hepatitis A/B). It\'s essential to see a doctor for vaccinations because they can assess your individual risk factors, determine which vaccines you need based on age, health status, and travel plans, monitor for contraindications, and ensure you\'re up-to-date on all recommended immunizations. Your doctor will also help you understand vaccine safety, address concerns, and maintain your vaccination records.',
    howWeHelp: [
      'Annual influenza vaccination with current season\'s formulation to protect against circulating flu strains',
      'COVID-19 vaccine and booster administration following CDC recommendations based on your age, health status, and previous vaccination history',
      'Age-appropriate routine vaccines including Tdap boosters (every 10 years), shingles vaccine (Shingrix for 50+), and pneumococcal vaccines (Pneumovax23 or Prevnar13 for 65+)',
      'Travel medicine consultations with destination-specific vaccine recommendations including yellow fever, typhoid, hepatitis A/B, and meningococcal vaccines',
      'Vaccination safety assessment to identify contraindications, allergies, or medical conditions that may affect vaccine recommendations',
      'Comprehensive vaccination record maintenance and tracking to ensure you\'re current on all recommended immunizations and boosters',
    ],
  },
  'health-maintenance': {
    summary: 'Maintaining good health requires ongoing attention to nutrition, exercise, sleep, stress management, and lifestyle factors that impact your well-being. Poor lifestyle choices can lead to chronic diseases, decreased energy, mental health issues, and reduced quality of life. Treatment options include personalized nutrition counseling, exercise prescriptions, sleep hygiene education, stress reduction techniques (meditation, breathing exercises), smoking cessation support, and alcohol moderation guidance. It\'s important to see a doctor for health maintenance because they can assess your current health status, identify risk factors, provide evidence-based recommendations tailored to your needs, and help you set and achieve realistic health goals. Your doctor will monitor your progress, adjust recommendations as needed, and provide accountability and support for sustainable lifestyle changes.',
    howWeHelp: [
      'Comprehensive health assessment including BMI, blood pressure, cholesterol, and blood sugar to establish baseline health metrics',
      'Personalized nutrition counseling with meal planning guidance, portion control strategies, and dietary modifications based on your health goals',
      'Exercise prescription tailored to your fitness level, medical conditions, and preferences with gradual progression plans',
      'Sleep hygiene education and strategies to improve sleep quality, including addressing sleep disorders like sleep apnea',
      'Stress management techniques including mindfulness, meditation, breathing exercises, and time management strategies',
      'Regular follow-up appointments every 3-6 months to track progress, adjust plans, and provide ongoing motivation and support',
    ],
  },
  'asthma-copd': {
    summary: 'Asthma and COPD (chronic obstructive pulmonary disease) are chronic respiratory conditions that cause breathing difficulties, wheezing, coughing, and reduced lung function. Asthma involves airway inflammation and bronchospasm triggered by allergens, exercise, or irritants, while COPD is typically caused by long-term exposure to irritants like cigarette smoke. Left unmanaged, these conditions can lead to severe breathing attacks, hospitalization, and reduced quality of life. Treatment options include inhaled bronchodilators (albuterol, salmeterol), inhaled corticosteroids (fluticasone, budesonide), combination inhalers, oral medications (montelukast, theophylline), and pulmonary rehabilitation. It\'s critical to see a doctor because proper medication management prevents severe attacks, improves daily functioning, and reduces emergency visits. Your doctor will assess your lung function, prescribe appropriate medications, teach proper inhaler technique, create an action plan for exacerbations, and monitor for complications.',
    howWeHelp: [
      'Spirometry and pulmonary function testing to assess lung capacity, diagnose severity, and monitor treatment effectiveness',
      'Inhaler medication management including short-acting bronchodilators (rescue inhalers) and long-acting controller medications with proper technique training',
      'Asthma action plan development with clear instructions for daily management and steps to take during breathing difficulties or attacks',
      'Trigger identification and avoidance strategies for allergens, irritants, exercise, and environmental factors that worsen symptoms',
      'Coordination with pulmonologists for advanced testing, pulmonary rehabilitation, or specialized treatment when needed',
      'Regular monitoring every 3-6 months to assess symptom control, adjust medications, and ensure optimal lung function',
    ],
  },
  'thyroid-disorders': {
    summary: 'Thyroid disorders occur when your thyroid gland produces too much (hyperthyroidism) or too little (hypothyroidism) thyroid hormone, affecting metabolism, energy, weight, mood, and many body functions. Hypothyroidism causes fatigue, weight gain, depression, and cold intolerance, while hyperthyroidism causes anxiety, weight loss, rapid heartbeat, and heat intolerance. Treatment options include thyroid hormone replacement (levothyroxine for hypothyroidism), anti-thyroid medications (methimazole, propylthiouracil for hyperthyroidism), beta-blockers for symptom control, and in some cases, radioactive iodine or surgery. It\'s essential to see a doctor because thyroid dysfunction affects multiple body systems, requires careful medication dosing, and needs regular monitoring. Your doctor will test TSH, T4, and T3 levels, diagnose the specific thyroid condition, prescribe appropriate medications, and monitor levels every 6-12 weeks until stable.',
    howWeHelp: [
      'Comprehensive thyroid function testing including TSH, free T4, and T3 levels to diagnose hypothyroidism, hyperthyroidism, or thyroid nodules',
      'Thyroid hormone replacement therapy (levothyroxine) for hypothyroidism with careful dosage titration based on TSH levels and symptom response',
      'Anti-thyroid medication management (methimazole, propylthiouracil) for hyperthyroidism with monitoring for side effects and effectiveness',
      'Regular TSH monitoring every 6-12 weeks during medication adjustments, then annually once stable, to ensure optimal thyroid hormone levels',
      'Symptom assessment and management for fatigue, weight changes, mood issues, hair loss, and other thyroid-related symptoms',
      'Coordination with endocrinologists for thyroid ultrasound, fine-needle aspiration biopsies, or specialized treatment for complex cases',
    ],
  },
  'arthritis-management': {
    summary: 'Arthritis involves joint inflammation, pain, stiffness, and reduced mobility that can significantly impact daily activities. Osteoarthritis (wear-and-tear) and rheumatoid arthritis (autoimmune) are the most common types, but there are many other forms. Left untreated, arthritis can cause joint damage, deformity, and disability. Treatment options include NSAIDs (ibuprofen, naproxen), prescription pain medications, disease-modifying antirheumatic drugs (DMARDs) for rheumatoid arthritis, corticosteroid injections, physical therapy, joint protection strategies, and in severe cases, joint replacement surgery. It\'s important to see a doctor because early treatment can slow disease progression, prevent joint damage, and improve quality of life. Your doctor will diagnose the type of arthritis, prescribe appropriate medications, coordinate physical therapy, and refer to rheumatologists for specialized care when needed.',
    howWeHelp: [
      'Comprehensive joint examination and assessment of pain, stiffness, swelling, and range of motion to diagnose arthritis type and severity',
      'Medication management including NSAIDs, prescription pain relievers, and disease-modifying drugs (DMARDs) for rheumatoid arthritis with monitoring for effectiveness and side effects',
      'Corticosteroid joint injections for targeted pain relief and inflammation reduction in specific affected joints',
      'Physical therapy referrals and exercise prescriptions tailored to your joint limitations to improve mobility and reduce pain',
      'Joint protection strategies and assistive device recommendations to reduce stress on affected joints and prevent further damage',
      'Coordination with rheumatologists for advanced treatment, biologic medications, or specialized care for complex or severe arthritis cases',
    ],
  },
  'common-cold-flu': {
    summary: 'Colds and influenza are viral respiratory infections that cause symptoms like runny nose, cough, sore throat, fever, body aches, and fatigue. While most cases resolve on their own, complications can include pneumonia, sinus infections, and worsening of chronic conditions. Treatment focuses on symptom relief and supportive care since antibiotics don\'t work for viral infections. Treatment options include over-the-counter medications (decongestants, cough suppressants, pain relievers), rest, hydration, and in some cases, antiviral medications (oseltamivir) for influenza if started early. It\'s important to see a doctor because they can distinguish between cold, flu, and bacterial infections, prescribe appropriate treatments, identify complications early, and provide guidance on when to seek emergency care. Your doctor can also recommend flu vaccination to prevent future infections.',
    howWeHelp: [
      'Rapid influenza testing to distinguish between cold and flu viruses, enabling appropriate treatment decisions and antiviral medication when indicated',
      'Symptom management with prescription-strength medications for severe congestion, cough, or pain that over-the-counter options don\'t adequately address',
      'Antiviral medication (oseltamivir, baloxavir) prescription for influenza when started within 48 hours of symptom onset to reduce severity and duration',
      'Complication assessment including checking for pneumonia, sinus infections, or worsening of chronic conditions like asthma or COPD',
      'Guidance on when symptoms require emergency care versus home management, and when to return for follow-up if symptoms worsen',
      'Flu vaccination recommendations and administration to prevent future influenza infections and reduce severity if you do get sick',
    ],
  },
  'sinus-infections': {
    summary: 'Sinus infections (sinusitis) occur when the sinuses become inflamed and infected, causing facial pain, pressure, nasal congestion, thick discharge, and sometimes fever. Acute sinusitis is often viral but can become bacterial, while chronic sinusitis lasts 12+ weeks. Untreated bacterial sinusitis can spread to nearby structures. Treatment options include antibiotics for bacterial infections (amoxicillin, amoxicillin-clavulanate), nasal decongestants, saline nasal irrigation, nasal corticosteroids, and in chronic cases, referral to ENT specialists. It\'s important to see a doctor because they can distinguish between viral and bacterial sinusitis, prescribe antibiotics only when needed (preventing antibiotic resistance), identify complications, and provide appropriate symptom relief. Your doctor will examine your sinuses, determine if antibiotics are necessary, and coordinate with ENT specialists for chronic or complicated cases.',
    howWeHelp: [
      'Clinical evaluation to distinguish between viral and bacterial sinusitis, determining if antibiotics are necessary or if supportive care is appropriate',
      'Antibiotic prescription (amoxicillin, amoxicillin-clavulanate, doxycycline) for confirmed bacterial sinusitis with appropriate duration and dosing',
      'Nasal corticosteroid prescriptions (fluticasone, mometasone) to reduce inflammation and improve sinus drainage in both acute and chronic cases',
      'Saline nasal irrigation guidance and recommendations for neti pots or saline sprays to help clear mucus and reduce congestion',
      'Complication assessment including checking for orbital cellulitis, meningitis, or chronic sinusitis requiring ENT specialist referral',
      'Follow-up care to ensure resolution of symptoms and prevent recurrence, with coordination to ENT specialists for chronic or refractory cases',
    ],
  },
  'ear-infections': {
    summary: 'Ear infections (otitis media or otitis externa) cause ear pain, pressure, hearing loss, and sometimes fever or drainage. Middle ear infections are common in children but can affect adults, while outer ear infections (swimmer\'s ear) affect the ear canal. Untreated infections can lead to hearing loss, eardrum perforation, or spread to nearby structures. Treatment options include antibiotics (amoxicillin, ciprofloxacin ear drops), pain relievers, and in some cases, ear tube placement for recurrent infections. It\'s important to see a doctor because they can properly diagnose the type and location of infection, prescribe appropriate antibiotics, assess for complications, and determine if specialist referral is needed. Your doctor will examine the ear with an otoscope, determine if antibiotics are necessary, and provide pain management.',
    howWeHelp: [
      'Otoscopic examination to visualize the eardrum and ear canal, diagnosing middle ear infections (otitis media) versus outer ear infections (otitis externa)',
      'Antibiotic prescription including oral antibiotics (amoxicillin, amoxicillin-clavulanate) for middle ear infections or antibiotic ear drops (ciprofloxacin, ofloxacin) for outer ear infections',
      'Pain management with prescription-strength pain relievers or numbing ear drops to provide relief while antibiotics take effect',
      'Follow-up evaluation to ensure infection resolution, assess for complications like eardrum perforation, and verify hearing has returned to normal',
      'Coordination with ENT specialists for recurrent infections, chronic ear problems, or cases requiring ear tube placement or specialized procedures',
      'Prevention counseling including strategies to reduce risk of future infections, especially for those prone to recurrent ear problems',
    ],
  },
  'strep-throat': {
    summary: 'Strep throat is a bacterial infection caused by Group A Streptococcus that causes severe sore throat, fever, swollen lymph nodes, and sometimes white patches on the tonsils. Unlike viral sore throats, strep throat requires antibiotic treatment to prevent complications like rheumatic fever, kidney inflammation, or abscess formation. Treatment options include antibiotics (penicillin, amoxicillin, or alternatives for allergies), pain relievers, and supportive care. It\'s critical to see a doctor because untreated strep can lead to serious complications, and antibiotics are necessary for proper treatment. Your doctor will perform a rapid strep test or throat culture, prescribe appropriate antibiotics, and ensure completion of treatment to prevent complications.',
    howWeHelp: [
      'Rapid strep testing with results in minutes to quickly diagnose Group A Streptococcus infection and determine if antibiotics are needed',
      'Throat culture when rapid test is negative but clinical suspicion is high, providing definitive diagnosis within 24-48 hours',
      'Antibiotic prescription (penicillin, amoxicillin, or alternatives like azithromycin for penicillin allergies) with appropriate duration to prevent complications',
      'Pain management with prescription-strength pain relievers and guidance on when it\'s safe to return to normal activities',
      'Complication monitoring and education about signs of rheumatic fever, kidney problems, or peritonsillar abscess requiring immediate medical attention',
      'Follow-up to ensure symptoms resolve and verify completion of antibiotic course to prevent recurrence and complications',
    ],
  },
  'skin-infections': {
    summary: 'Skin infections can be bacterial (cellulitis, impetigo), fungal (athlete\'s foot, ringworm), or viral (herpes, shingles), causing redness, swelling, pain, drainage, or rashes. Untreated bacterial infections can spread to deeper tissues or bloodstream, becoming serious. Treatment options include topical or oral antibiotics for bacterial infections, antifungal medications for fungal infections, and antiviral medications for viral infections. It\'s important to see a doctor because they can identify the type of infection, prescribe appropriate medications, assess severity, and determine if the infection is spreading or requires specialist care. Your doctor will examine the affected area, potentially culture the infection, and prescribe targeted treatment.',
    howWeHelp: [
      'Clinical examination to identify infection type (bacterial, fungal, or viral) and assess severity, including checking for signs of spreading or systemic infection',
      'Antibiotic prescription including topical antibiotics (mupirocin) for localized infections or oral antibiotics (cephalexin, doxycycline) for more extensive bacterial skin infections',
      'Antifungal medication management (topical or oral) for fungal infections like ringworm, athlete\'s foot, or yeast infections with appropriate duration',
      'Wound care instructions and dressing recommendations for infected wounds, cuts, or abrasions to promote healing and prevent further infection',
      'Culture and sensitivity testing when needed to identify the specific bacteria and determine the most effective antibiotic',
      'Coordination with dermatologists or infectious disease specialists for severe, recurrent, or complicated skin infections requiring specialized care',
    ],
  },
  'urinary-tract-infections': {
    summary: 'Urinary tract infections (UTIs) occur when bacteria enter the urinary system, causing burning with urination, frequent urination, urgency, lower abdominal pain, and sometimes blood in urine. Untreated UTIs can spread to the kidneys, causing serious complications like kidney infection or sepsis. Treatment options include antibiotics (nitrofurantoin, trimethoprim-sulfamethoxazole, ciprofloxacin), increased fluid intake, and pain management. It\'s important to see a doctor because UTIs require antibiotics, and untreated infections can become serious. Your doctor will test your urine, prescribe appropriate antibiotics based on the bacteria present, and ensure the infection clears completely.',
    howWeHelp: [
      'Urinalysis and urine culture to identify the specific bacteria causing your UTI and determine which antibiotics will be most effective',
      'Antibiotic prescription (nitrofurantoin, trimethoprim-sulfamethoxazole, ciprofloxacin) with appropriate duration based on infection severity and your medical history',
      'Pain management with prescription medications (phenazopyridine) to relieve burning and urgency while antibiotics take effect',
      'Follow-up urinalysis to confirm infection clearance, especially for recurrent UTIs or complicated cases',
      'Prevention counseling including strategies to reduce UTI risk such as proper hygiene, adequate hydration, and post-intercourse care',
      'Coordination with urologists for recurrent UTIs (3+ per year), complicated infections, or cases requiring specialized evaluation and treatment',
    ],
  },
  'gastrointestinal-issues': {
    summary: 'Gastrointestinal issues include nausea, vomiting, diarrhea, constipation, abdominal pain, bloating, and acid reflux that can significantly impact daily life. Causes range from infections and food poisoning to chronic conditions like IBS, GERD, or inflammatory bowel disease. Treatment options depend on the cause and may include anti-nausea medications, antidiarrheals, laxatives, acid reducers, dietary modifications, and in some cases, antibiotics for bacterial infections. It\'s important to see a doctor because GI symptoms can indicate serious conditions, require proper diagnosis, and need appropriate treatment. Your doctor will assess your symptoms, perform necessary examinations, determine the cause, and prescribe targeted treatments.',
    howWeHelp: [
      'Comprehensive evaluation to distinguish between acute GI issues (food poisoning, viral gastroenteritis) and chronic conditions (IBS, GERD, IBD) requiring different treatment approaches',
      'Medication management including anti-nausea drugs (ondansetron), antidiarrheals (loperamide), laxatives for constipation, and acid reducers (PPIs, H2 blockers) for GERD',
      'Stool testing for infections, parasites, or blood to identify bacterial causes requiring antibiotics or other specific treatments',
      'Dietary counseling and elimination diets to identify food triggers for conditions like IBS, lactose intolerance, or food sensitivities',
      'Hydration assessment and guidance, especially for severe vomiting or diarrhea, to prevent dehydration and determine if IV fluids are needed',
      'Coordination with gastroenterologists for chronic conditions, severe symptoms, or cases requiring endoscopy, colonoscopy, or specialized GI care',
    ],
  },
  'minor-injuries': {
    summary: 'Minor injuries include cuts, bruises, sprains, strains, and minor wounds that require proper care to prevent infection and promote healing. While not life-threatening, improper care can lead to infections, delayed healing, or complications. Treatment options include wound cleaning and dressing, suturing for deeper cuts, splinting for sprains, pain management, and tetanus vaccination updates. It\'s important to see a doctor because they can assess injury severity, determine if stitches are needed, prevent infection, update tetanus vaccination, and identify when specialist care is necessary. Your doctor will examine the injury, clean and dress wounds properly, and provide guidance on care and signs of complications.',
    howWeHelp: [
      'Wound assessment to determine injury severity, whether sutures are needed, and if specialist referral is required for complex wounds',
      'Wound cleaning, debridement, and proper dressing application to prevent infection and promote optimal healing',
      'Suturing for lacerations that require closure, with appropriate technique and follow-up care instructions',
      'Splinting and immobilization for sprains and strains to reduce pain, prevent further injury, and promote proper healing',
      'Tetanus vaccination update if needed based on wound type and your vaccination history to prevent tetanus infection',
      'Pain management with appropriate medications and guidance on when to return for follow-up or if signs of infection develop',
    ],
  },
  'contraception-counseling': {
    summary: 'Contraception counseling helps you choose the most appropriate birth control method based on your health, lifestyle, and reproductive goals. Different methods have varying effectiveness, side effects, and requirements. Options include hormonal methods (pills, patches, rings, IUDs, implants), barrier methods (condoms, diaphragms), and permanent methods (tubal ligation, vasectomy). It\'s important to see a doctor for contraception because they can assess your medical history for contraindications, prescribe appropriate methods, monitor for side effects, and ensure proper use. Your doctor will discuss your options, help you choose the best method, provide prescriptions, and coordinate insertion procedures when needed.',
    howWeHelp: [
      'Comprehensive contraception counseling to discuss all available options including effectiveness rates, side effects, and lifestyle considerations',
      'Medical history assessment to identify contraindications for specific methods (e.g., blood clots and estrogen-containing methods)',
      'Prescription management for birth control pills, patches, rings, and coordination of IUD or implant insertion procedures',
      'Follow-up appointments to monitor for side effects, assess satisfaction with chosen method, and make adjustments as needed',
      'Emergency contraception counseling and prescription when needed, with education on proper use and timing',
      'Coordination with gynecologists for IUD or implant insertion, or for permanent sterilization procedures if desired',
    ],
  },
  'menopause-management': {
    summary: 'Menopause is the natural transition when menstrual periods stop permanently, typically occurring around age 51, causing symptoms like hot flashes, night sweats, mood changes, sleep disturbances, vaginal dryness, and bone density loss. These symptoms can significantly impact quality of life. Treatment options include hormone replacement therapy (HRT), non-hormonal medications (SSRIs for hot flashes), vaginal estrogen for dryness, and lifestyle modifications. It\'s important to see a doctor because they can assess your symptoms, discuss HRT risks and benefits, prescribe appropriate treatments, and monitor for complications. Your doctor will evaluate your individual risk factors, help you decide if HRT is right for you, and coordinate bone density screening.',
    howWeHelp: [
      'Comprehensive menopause symptom assessment including hot flashes, night sweats, mood changes, sleep issues, and vaginal dryness',
      'Hormone replacement therapy (HRT) evaluation and prescription when appropriate, with discussion of risks, benefits, and individual risk factors',
      'Non-hormonal treatment options including SSRIs for hot flashes, vaginal lubricants and moisturizers, and medications for sleep disturbances',
      'Bone density screening coordination (DEXA scan) starting at age 65, or earlier if high risk, to assess osteoporosis risk',
      'Regular monitoring of HRT effectiveness and side effects, with adjustments to dosage or formulation as needed',
      'Lifestyle counseling on nutrition, exercise, and stress management to help manage symptoms and maintain bone and heart health during menopause',
    ],
  },
  'pregnancy-care': {
    summary: 'Pregnancy requires specialized medical care to monitor both maternal and fetal health, manage pregnancy-related conditions, and ensure a healthy delivery. Issues can include gestational diabetes, preeclampsia, anemia, infections, and pregnancy-related symptoms. Treatment options include prenatal vitamins, medications for pregnancy-related conditions, monitoring and testing, and coordination with OB/GYN specialists. It\'s critical to see a doctor during pregnancy because they can monitor your health and the baby\'s development, identify and treat complications early, and coordinate specialized care. Your doctor will provide prenatal care coordination, manage non-obstetric health issues, and work closely with your OB/GYN.',
    howWeHelp: [
      'Prenatal care coordination and collaboration with your OB/GYN to ensure comprehensive care throughout your pregnancy',
      'Management of non-obstetric health conditions during pregnancy including diabetes, hypertension, thyroid disorders, and mental health',
      'Prenatal vitamin and supplement recommendations including folic acid, iron, and other essential nutrients for healthy fetal development',
      'Medication review and adjustment for pre-existing conditions to ensure safety during pregnancy while maintaining your health',
      'Pregnancy-related symptom management including nausea, heartburn, back pain, and other common discomforts with safe treatment options',
      'Postpartum care including monitoring for postpartum depression, managing ongoing health conditions, and supporting your recovery',
    ],
  },
  'breast-health': {
    summary: 'Breast health requires regular monitoring to detect breast cancer and other breast conditions early when treatment is most effective. Issues can include breast lumps, pain, nipple discharge, or abnormal mammogram findings. Treatment options depend on findings and may include imaging (mammography, ultrasound), biopsies, and coordination with breast surgeons or oncologists. It\'s critical to see a doctor for breast health because early detection of breast cancer dramatically improves survival rates. Your doctor will perform clinical breast exams, coordinate mammography screenings, evaluate any concerns, and coordinate with specialists when needed.',
    howWeHelp: [
      'Clinical breast examinations to assess for lumps, changes, or abnormalities that may require further evaluation',
      'Mammography screening coordination starting at age 40 (or earlier based on family history) with interpretation of results and follow-up planning',
      'Breast ultrasound coordination when mammograms show abnormalities or for dense breast tissue to provide additional imaging',
      'Evaluation of breast pain, nipple discharge, or skin changes with appropriate testing and specialist referral when indicated',
      'Breast biopsy coordination with radiologists or surgeons when imaging reveals suspicious findings requiring tissue sampling',
      'Genetic counseling and testing coordination for high-risk individuals with family history of breast or ovarian cancer',
    ],
  },
  'testosterone-therapy': {
    summary: 'Low testosterone (hypogonadism) occurs when the body doesn\'t produce enough testosterone, causing symptoms like fatigue, decreased libido, erectile dysfunction, muscle loss, mood changes, and reduced bone density. Causes include aging, medical conditions, medications, or testicular issues. Treatment options include testosterone replacement therapy (injections, gels, patches, pellets) with careful monitoring. It\'s important to see a doctor because testosterone therapy requires proper diagnosis, monitoring for side effects (including prostate health and blood counts), and should only be used when medically indicated. Your doctor will test testosterone levels, assess symptoms, prescribe appropriate therapy, and monitor for complications.',
    howWeHelp: [
      'Comprehensive testosterone level testing including total and free testosterone, along with LH, FSH, and other hormone levels to diagnose hypogonadism',
      'Testosterone replacement therapy management including injections, gels, patches, or pellets with appropriate dosing and administration guidance',
      'Regular monitoring of testosterone levels every 3-6 months to ensure optimal levels and adjust dosing as needed',
      'Prostate health monitoring including PSA testing and digital rectal exams before and during testosterone therapy to ensure prostate safety',
      'Hematocrit and hemoglobin monitoring to detect polycythemia (elevated red blood cells), a potential side effect requiring dose adjustment or phlebotomy',
      'Symptom assessment and management to evaluate treatment effectiveness for libido, energy, mood, muscle mass, and overall quality of life',
    ],
  },
  'erectile-dysfunction': {
    summary: 'Erectile dysfunction (ED) is the inability to achieve or maintain an erection sufficient for sexual activity, affecting physical and emotional well-being. Causes include vascular issues, diabetes, medications, hormonal problems, psychological factors, or neurological conditions. Treatment options include medications (PDE5 inhibitors like sildenafil, tadalafil), lifestyle modifications, addressing underlying conditions, and in some cases, referral to urologists. It\'s important to see a doctor because ED can indicate underlying health problems (heart disease, diabetes), requires proper diagnosis, and needs appropriate treatment. Your doctor will assess causes, check for underlying conditions, prescribe medications, and coordinate with specialists when needed.',
    howWeHelp: [
      'Comprehensive evaluation to identify underlying causes including cardiovascular disease, diabetes, hormonal imbalances, medications, or psychological factors',
      'PDE5 inhibitor medication management (sildenafil, tadalafil, vardenafil) with appropriate dosing, timing instructions, and safety considerations',
      'Cardiovascular risk assessment since ED can be an early sign of heart disease, with appropriate testing and referral when indicated',
      'Hormone testing including testosterone levels to identify hormonal causes of ED that may require testosterone therapy',
      'Lifestyle counseling on exercise, weight management, smoking cessation, and alcohol moderation to improve vascular health and ED',
      'Coordination with urologists for advanced treatment options including penile injections, vacuum devices, or surgical interventions when medications aren\'t effective',
    ],
  },
  'stress-management': {
    summary: 'Chronic stress affects both physical and mental health, contributing to high blood pressure, heart disease, anxiety, depression, sleep problems, and weakened immune function. Stress can stem from work, relationships, financial concerns, health issues, or major life changes. Treatment options include stress reduction techniques (meditation, breathing exercises), counseling, lifestyle modifications, medications for anxiety if needed, and addressing underlying causes. It\'s important to see a doctor because chronic stress impacts health, may require medical intervention, and benefits from professional guidance. Your doctor will assess your stress levels, identify sources, provide coping strategies, and determine if additional treatment is needed.',
    howWeHelp: [
      'Comprehensive stress assessment to identify sources of stress, physical symptoms, and impact on your daily life and health',
      'Stress reduction techniques including mindfulness meditation, deep breathing exercises, progressive muscle relaxation, and guided imagery',
      'Lifestyle counseling on time management, work-life balance, sleep optimization, and healthy boundaries to reduce stress triggers',
      'Exercise prescription and physical activity recommendations, as regular exercise is one of the most effective stress management tools',
      'Referrals to therapists or counselors for cognitive behavioral therapy (CBT) or other therapeutic approaches when stress is severe or persistent',
      'Medication evaluation for anxiety or sleep issues related to stress, with prescriptions when appropriate and monitoring for effectiveness',
    ],
  },
  'geriatric-care': {
    summary: 'Geriatric care addresses the unique health needs of older adults, including multiple chronic conditions, medication management, fall prevention, cognitive health, and functional decline. Older adults face increased risks of falls, medication interactions, cognitive decline, and complications from chronic diseases. Treatment options include comprehensive medication reviews, fall risk assessment, cognitive screening, mobility aids, and coordination of multiple specialists. It\'s essential to see a doctor specializing in geriatric care because older adults have unique needs, require careful medication management, and benefit from preventive strategies. Your doctor will assess multiple health domains, optimize medications, prevent complications, and coordinate comprehensive care.',
    howWeHelp: [
      'Comprehensive geriatric assessment evaluating physical function, cognitive health, medication management, fall risk, and social support',
      'Medication review and deprescribing to identify unnecessary medications, drug interactions, and opportunities to simplify medication regimens',
      'Fall risk assessment including balance evaluation, home safety recommendations, and coordination of physical therapy or mobility aids',
      'Cognitive screening (Mini-Mental State Exam, MoCA) to detect early signs of dementia and coordinate with neurologists when needed',
      'Management of multiple chronic conditions with careful coordination to avoid treatment conflicts and optimize overall health',
      'Advanced care planning discussions including healthcare directives, living wills, and goals of care conversations with patients and families',
    ],
  },
  'memory-assessment': {
    summary: 'Memory problems and cognitive decline can range from normal age-related changes to mild cognitive impairment or dementia (Alzheimer\'s disease, vascular dementia). Early detection allows for treatment, planning, and potentially slowing progression. Symptoms include forgetfulness, confusion, difficulty with daily tasks, personality changes, and language problems. Treatment options include medications (donepezil, memantine for Alzheimer\'s), addressing underlying causes (vitamin deficiencies, thyroid issues), and supportive care. It\'s critical to see a doctor because memory problems can indicate treatable conditions, require proper diagnosis, and benefit from early intervention. Your doctor will perform cognitive screening, assess for reversible causes, and coordinate with neurologists for specialized evaluation.',
    howWeHelp: [
      'Comprehensive cognitive screening using validated tools (Mini-Mental State Exam, MoCA) to assess memory, attention, language, and executive function',
      'Medical evaluation to identify reversible causes of memory problems including vitamin B12 deficiency, thyroid disorders, medication side effects, or depression',
      'Medication management including prescriptions for Alzheimer\'s disease (donepezil, memantine) when appropriate, with monitoring for effectiveness and side effects',
      'Neurologist coordination for advanced neuropsychological testing, brain imaging (MRI, CT), and specialized dementia evaluation when indicated',
      'Family education and support resources including information about dementia, care planning, and community resources for patients and caregivers',
      'Regular follow-up to monitor cognitive changes over time, adjust medications, and provide ongoing support for patients and families',
    ],
  },
  'smoking-cessation': {
    summary: 'Smoking and tobacco use are leading causes of preventable death, contributing to cancer, heart disease, lung disease, and many other health problems. Quitting smoking significantly reduces these risks and improves health at any age. Treatment options include nicotine replacement therapy (patches, gum, lozenges), prescription medications (varenicline, bupropion), counseling, and support programs. It\'s important to see a doctor for smoking cessation because they can provide effective medications, support, and increase your chances of success. Your doctor will assess your readiness to quit, prescribe appropriate medications, provide counseling, and offer ongoing support.',
    howWeHelp: [
      'Comprehensive smoking cessation assessment including your smoking history, previous quit attempts, and readiness to quit',
      'Nicotine replacement therapy prescriptions including patches, gum, lozenges, or inhalers to manage withdrawal symptoms and cravings',
      'Prescription medication management including varenicline (Chantix) or bupropion (Wellbutrin) to reduce cravings and withdrawal symptoms',
      'Behavioral counseling and strategies to identify triggers, develop coping skills, and create a personalized quit plan',
      'Regular follow-up appointments to monitor progress, adjust medications, provide encouragement, and address challenges during the quitting process',
      'Coordination with smoking cessation programs, support groups, or specialized counselors for additional support and resources',
    ],
  },
  'sports-physicals': {
    summary: 'Sports physicals (pre-participation physical examinations) are required for athletes to assess fitness for sports participation, identify health risks, and prevent injuries. These exams evaluate cardiovascular health, musculoskeletal system, vision, and overall fitness. Issues identified may include heart conditions, asthma, previous injuries, or other conditions affecting sports participation. Treatment options include clearance for participation, recommendations for modifications, referrals for concerning findings, and injury prevention strategies. It\'s important to see a doctor for sports physicals because they can identify conditions that may be dangerous during sports, ensure safe participation, and provide injury prevention guidance. Your doctor will perform a comprehensive exam, assess fitness, and provide clearance or recommendations.',
    howWeHelp: [
      'Comprehensive pre-participation physical examination including cardiovascular assessment, musculoskeletal evaluation, and vision screening',
      'Cardiac screening to identify risk factors for sudden cardiac death including family history, symptoms, and physical examination findings',
      'Musculoskeletal assessment to evaluate previous injuries, joint stability, and identify areas at risk for sports-related injuries',
      'Asthma screening and management for exercise-induced asthma, including prescriptions for rescue inhalers when needed',
      'Clearance documentation for school or sports organizations with specific recommendations or restrictions based on findings',
      'Injury prevention counseling including proper warm-up, conditioning, and protective equipment recommendations for safe sports participation',
    ],
  },
  'travel-medicine': {
    summary: 'Travel medicine addresses health risks associated with international travel, including infectious diseases, altitude sickness, travel-related injuries, and management of chronic conditions while abroad. Different destinations pose different risks requiring specific vaccinations, medications, and precautions. Treatment options include travel vaccinations, malaria prophylaxis, traveler\'s diarrhea prevention, altitude sickness medications, and health planning for chronic conditions. It\'s important to see a doctor for travel medicine because they can assess destination-specific risks, provide necessary vaccinations, prescribe preventive medications, and ensure you\'re prepared for health issues while traveling. Your doctor will review your itinerary, recommend vaccinations, prescribe preventive medications, and provide health guidance.',
    howWeHelp: [
      'Destination-specific risk assessment based on your travel itinerary, including evaluation of disease risks, altitude, and healthcare availability',
      'Travel vaccination administration including yellow fever (required for some countries), typhoid, hepatitis A/B, meningococcal, and Japanese encephalitis vaccines',
      'Malaria prophylaxis prescriptions (atovaquone-proguanil, doxycycline, mefloquine) based on destination, resistance patterns, and your medical history',
      'Traveler\'s diarrhea prevention and treatment including prescriptions for antibiotics (azithromycin, ciprofloxacin) and antidiarrheal medications',
      'Altitude sickness prevention with medication prescriptions (acetazolamide) and guidance for high-altitude destinations',
      'Chronic condition management planning including ensuring adequate medication supplies, emergency action plans, and coordination with international healthcare if needed',
    ],
  },
  'minor-procedures': {
    summary: 'Minor office procedures include wart removal, mole removal, skin biopsies, suturing, and other in-office treatments that don\'t require hospital settings. These procedures address skin conditions, minor growths, and wounds requiring closure. Treatment options include cryotherapy (freezing), excision, shave biopsies, punch biopsies, and suturing techniques. It\'s important to see a doctor for these procedures because they require proper technique, sterile conditions, and appropriate follow-up. Your doctor will assess the condition, perform the procedure safely, and provide proper wound care instructions.',
    howWeHelp: [
      'Clinical evaluation to determine if a minor procedure is appropriate, assess lesion characteristics, and plan the best approach',
      'Cryotherapy (liquid nitrogen freezing) for wart removal and certain benign skin growths with minimal discomfort and quick recovery',
      'Skin biopsies including shave biopsies, punch biopsies, or excisional biopsies to diagnose suspicious moles or skin lesions',
      'Suturing for lacerations requiring closure, with appropriate technique, suture material selection, and follow-up care instructions',
      'Mole removal with proper technique to minimize scarring, with specimens sent for pathology when indicated',
      'Wound care instructions and follow-up to ensure proper healing, monitor for infection, and remove sutures at the appropriate time',
    ],
  },
  'ecg-ekg': {
    summary: 'ECG/EKG (electrocardiogram) testing records the electrical activity of your heart to detect rhythm abnormalities, heart attacks, and other cardiac conditions. This non-invasive test helps diagnose atrial fibrillation, heart block, heart attacks, and other issues. Treatment options depend on findings and may include medications, lifestyle changes, or referrals to cardiologists. It\'s important to see a doctor for ECG testing because they can interpret results, identify abnormalities, and determine if further cardiac evaluation is needed. Your doctor will perform the test, interpret results, and coordinate with cardiologists when specialized care is required.',
    howWeHelp: [
      'ECG/EKG testing to record your heart\'s electrical activity and detect rhythm abnormalities, conduction issues, or signs of heart disease',
      'Interpretation of ECG results including identification of atrial fibrillation, heart block, signs of previous heart attacks, or other abnormalities',
      'Assessment of symptoms like chest pain, palpitations, or shortness of breath in conjunction with ECG findings to guide diagnosis',
      'Coordination with cardiologists for abnormal findings requiring specialized evaluation, echocardiograms, stress tests, or advanced cardiac care',
      'Follow-up ECG monitoring for patients with known heart conditions, on certain medications, or to track changes over time',
      'Education about ECG findings, what they mean for your health, and any lifestyle modifications or medications recommended based on results',
    ],
  },
  'pulmonary-function': {
    summary: 'Pulmonary function testing (spirometry) measures how well your lungs work, assessing lung capacity, airflow, and breathing function. This testing helps diagnose asthma, COPD, restrictive lung diseases, and other respiratory conditions. Treatment options depend on findings and may include bronchodilators, inhaled corticosteroids, or referrals to pulmonologists. It\'s important to see a doctor for pulmonary function testing because they can interpret results, diagnose respiratory conditions, and prescribe appropriate treatments. Your doctor will perform the test, interpret results, and coordinate with pulmonologists for specialized care when needed.',
    howWeHelp: [
      'Spirometry and pulmonary function testing to measure lung capacity (FVC), forced expiratory volume (FEV1), and airflow rates',
      'Interpretation of pulmonary function results to diagnose asthma, COPD, restrictive lung disease, or other respiratory conditions',
      'Bronchodilator response testing to assess if your breathing improves with medication, helping guide treatment decisions',
      'Coordination with pulmonologists for advanced testing (full PFTs, diffusion capacity) or specialized treatment when needed',
      'Follow-up pulmonary function testing to monitor treatment effectiveness, track disease progression, or assess lung function over time',
      'Education about your lung function results, what they mean for your daily activities, and how to optimize your respiratory health',
    ],
  },
  'care-coordination': {
    summary: 'Care coordination ensures seamless communication and collaboration between your primary care doctor, specialists, hospitals, and other healthcare providers. This is essential for managing complex conditions, multiple medications, and ensuring all providers are informed. Treatment involves communication, medical record sharing, appointment coordination, and ensuring continuity of care. It\'s important to have care coordination because fragmented care leads to medication errors, duplicate testing, and poor outcomes. Your doctor will communicate with specialists, coordinate appointments, share medical records, and ensure all providers are working together.',
    howWeHelp: [
      'Communication with specialists, hospitals, and other healthcare providers to ensure all parties are informed about your care plan and treatment',
      'Medical record coordination including sharing test results, imaging studies, and treatment plans with all members of your healthcare team',
      'Appointment scheduling coordination to ensure timely specialist visits, follow-up care, and that all necessary appointments are completed',
      'Medication reconciliation to prevent drug interactions, duplicate prescriptions, and ensure all providers know your current medication list',
      'Care plan development and communication to ensure all providers understand your treatment goals, current medications, and ongoing health issues',
      'Follow-up after specialist visits or hospitalizations to integrate recommendations into your primary care plan and ensure continuity of care',
    ],
  },
  'medication-management': {
    summary: 'Medication management involves comprehensive review of all medications to ensure they\'re appropriate, effective, safe, and not causing interactions or side effects. This is especially important for patients taking multiple medications or those with chronic conditions. Treatment options include medication review, dosage adjustments, discontinuing unnecessary medications, and coordinating with specialists. It\'s critical to have medication management because polypharmacy (multiple medications) increases risk of interactions, side effects, and medication errors. Your doctor will review all medications, check for interactions, optimize dosages, and ensure medications are working effectively.',
    howWeHelp: [
      'Comprehensive medication review including all prescription medications, over-the-counter drugs, supplements, and vitamins you\'re taking',
      'Drug interaction screening to identify potentially dangerous interactions between medications that could cause serious side effects',
      'Medication optimization including dosage adjustments, switching to more effective alternatives, or discontinuing medications that are no longer needed',
      'Side effect monitoring and management, with adjustments to medications when side effects occur or become problematic',
      'Medication adherence support including simplifying regimens, addressing cost concerns, and helping you understand why each medication is important',
      'Coordination with specialists and pharmacists to ensure all providers are aware of medication changes and working together to optimize your medication therapy',
    ],
  },
};

// Helper function to generate default content for treatments not in the details map
export function getTreatmentDetails(id: string, name: string, category: string, description: string): TreatmentDetail {
  const details = treatmentDetails[id];
  
  if (details) {
    return {
      id,
      name,
      category,
      description,
      summary: details.summary || `${name} is an important part of your primary healthcare. At Vitality Concierge Medicine, we provide comprehensive, personalized care for ${name.toLowerCase()} to help you maintain optimal health and well-being.`,
      howWeHelp: details.howWeHelp || [
        `Personalized ${name.toLowerCase()} care tailored to your unique needs`,
        'Extended appointment times to thoroughly address your concerns',
        'Same-day or next-day appointments when you need care',
        '24/7 access to your doctor for questions and support',
        'Comprehensive care coordination with specialists when needed',
        'Ongoing monitoring and follow-up to ensure the best outcomes',
      ],
    };
  }

  // Generate default content for treatments without custom details
  // Default summary focuses on the condition, treatment options, and importance of seeing a doctor
  return {
    id,
    name,
    category,
    description,
    summary: `${name} addresses important health concerns that require proper medical evaluation and management. Various treatment options are available depending on your specific condition, including medications, lifestyle modifications, procedures, or referrals to specialists. It's essential to see a doctor because self-diagnosis and treatment can be dangerous, many conditions have similar symptoms requiring professional evaluation, and early intervention often leads to better outcomes. Your doctor will properly diagnose your condition, recommend appropriate treatment options based on your individual health status, monitor your progress, and adjust your care plan as needed.`,
    howWeHelp: [
      `Personalized ${name.toLowerCase()} care tailored to your unique needs`,
      'Extended appointment times to thoroughly address your concerns',
      'Same-day or next-day appointments when you need care',
      '24/7 access to your doctor for questions and support',
      'Comprehensive care coordination with specialists when needed',
      'Ongoing monitoring and follow-up to ensure the best outcomes',
    ],
  };
}

export { treatmentDetails };

