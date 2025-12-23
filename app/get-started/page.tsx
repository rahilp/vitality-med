'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Check, Mail, Calendar, Shield, Zap, Settings, Plus, ArrowRight, Lock, ArrowLeft, Star, Phone, Clock, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { getIndividualPrice, getFamilyPrice } from '@/lib/pricing';

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<'individual' | 'family' | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
  });
  const [medicalData, setMedicalData] = useState({
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    primaryHealthConcerns: '',
  });

  const healthGoals = [
    { id: 'preventative', label: 'Preventative Care', icon: Shield },
    { id: 'energy', label: 'Energy & Fitness', icon: Zap },
    { id: 'mental', label: 'Mental Wellness', icon: Settings },
    { id: 'chronic', label: 'Chronic Management', icon: Plus },
  ];

  const individualPrice = getIndividualPrice();
  const familyPrice = getFamilyPrice();

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const formatDate = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply mm/dd/yyyy format
    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 4) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    } else {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
    }
  };

  const formatPhone = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply (XXX) XXX-XXXX format
    if (digits.length <= 3) {
      return digits.length > 0 ? `(${digits}` : digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (currentStep === 1) {
      let formattedValue = value;
      
      // Apply input masks
      if (name === 'dateOfBirth') {
        formattedValue = formatDate(value);
      } else if (name === 'phone') {
        formattedValue = formatPhone(value);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else if (currentStep === 2) {
      let formattedValue = value;
      
      // Apply phone mask for emergency contact phone
      if (name === 'emergencyContactPhone') {
        formattedValue = formatPhone(value);
      }
      
      setMedicalData(prev => ({
        ...prev,
        [name]: formattedValue,
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as 1 | 2 | 3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as 1 | 2 | 3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final form submission
    console.log('Form submitted:', { formData, medicalData, selectedGoals, selectedPlan });
    // TODO: Add actual form submission logic
  };

  const getProgressWidth = () => {
    return `${(currentStep / 3) * 100}%`;
  };

  return (
    <>
      <Section background="gray" spacing="xl" className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Information and Benefits */}
            <div className="space-y-8 lg:sticky lg:top-24">
              {/* Headline */}
              <div>
                <h1 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Your Health, <span className="text-teal-primary">Prioritized.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  Experience primary care designed entirely around you. No wait times, direct access to your doctor, and holistic plans.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: '24/7 Physician Access' },
                    { icon: Calendar, text: 'Same-day Appointments' },
                    { icon: Shield, text: 'Holistic Wellness Plans' },
                    { icon: DollarSign, text: 'No Hidden Fees' },
                  ].map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-primary flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-teal-primary to-teal-dark rounded-xl p-8 text-white">
                <h3 className="text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>No Commitment Required</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-100">Cancel anytime with 30 days notice</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-100">No long-term contracts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-100">Transparent pricing</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://i.pravatar.cc/150?img=47"
                      alt="Sarah J."
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-2 text-sm">
                      &quot;Vitality changed my life. I finally feel heard by my doctor and the app makes scheduling effortless.&quot;
                    </p>
                    <p className="text-xs text-gray-600">
                      Sarah J. • Member since 2023
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-lg text-teal-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Have Questions?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Our team is here to help.
                </p>
                <div className="space-y-2">
                  <a 
                    href="tel:865-333-6554" 
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-teal-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(865) 444-6227</span>
                  </a>
                  <a 
                    href="mailto:hello@vitality-med.com" 
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-teal-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>hello@vitality-med.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Account Setup Form */}
            <div className="bg-white rounded-2xl shadow-lg p-10 lg:p-12">
              {/* Account Setup Header */}
              <div className="mb-10">
                <h2 className="text-3xl text-teal-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {currentStep === 1 && 'Account Setup'}
                  {currentStep === 2 && 'Medical Profile'}
                  {currentStep === 3 && 'Select Your Plan'}
                </h2>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-primary rounded-full transition-all duration-300" style={{ width: getProgressWidth() }} />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">STEP {currentStep} OF 3</span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-8" onSubmit={currentStep === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                {/* Step 1 Content */}
                {currentStep === 1 && (
                  <>
                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Jane"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@example.com"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Date of Birth and Phone Number */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            placeholder="mm/dd/yyyy"
                            maxLength={10}
                            required
                            className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 000-0000"
                          maxLength={14}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                        />
                      </div>
                    </div>

                    {/* Primary Health Goals */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Primary Health Goals
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {healthGoals.map((goal) => {
                          const Icon = goal.icon;
                          const isSelected = selectedGoals.includes(goal.id);
                          return (
                            <button
                              key={goal.id}
                              type="button"
                              onClick={() => toggleGoal(goal.id)}
                              className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                                isSelected
                                  ? 'border-teal-primary bg-teal-primary/10 text-teal-primary'
                                  : 'border-gray-300 text-gray-700 hover:border-teal-primary/50'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span className="text-sm font-medium">{goal.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-primary focus:ring-teal-primary"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                        I agree to the{' '}
                        <Link href="/terms-of-service" className="text-teal-primary hover:text-teal-dark underline">
                          Terms of Service
                        </Link>
                        ,{' '}
                        <Link href="/privacy-policy" className="text-teal-primary hover:text-teal-dark underline">
                          Privacy Policy
                        </Link>
                        , and consent to HIPAA-compliant data processing.
                      </label>
                    </div>
                  </>
                )}

                {/* Step 2 Content - Medical Profile */}
                {currentStep === 2 && (
                  <>
                    <div>
                      <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
                        Medical History (Optional)
                      </label>
                      <textarea
                        id="medicalHistory"
                        name="medicalHistory"
                        value={medicalData.medicalHistory}
                        onChange={handleInputChange}
                        placeholder="List any past surgeries, chronic conditions, or significant medical events..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentMedications" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Medications (Optional)
                      </label>
                      <textarea
                        id="currentMedications"
                        name="currentMedications"
                        value={medicalData.currentMedications}
                        onChange={handleInputChange}
                        placeholder="List all current medications, dosages, and frequency..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">
                        Allergies (Optional)
                      </label>
                      <input
                        type="text"
                        id="allergies"
                        name="allergies"
                        value={medicalData.allergies}
                        onChange={handleInputChange}
                        placeholder="List any known allergies to medications, foods, or other substances..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Emergency Contact
                      </label>
                      <div className="space-y-4">
                        <input
                          type="text"
                          id="emergencyContactName"
                          name="emergencyContactName"
                          value={medicalData.emergencyContactName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="tel"
                            id="emergencyContactPhone"
                            name="emergencyContactPhone"
                            value={medicalData.emergencyContactPhone}
                            onChange={handleInputChange}
                            placeholder="(555) 000-0000"
                            maxLength={14}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                          />
                          <input
                            type="text"
                            id="emergencyContactRelation"
                            name="emergencyContactRelation"
                            value={medicalData.emergencyContactRelation}
                            onChange={handleInputChange}
                            placeholder="Relationship"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="primaryHealthConcerns" className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Health Concerns (Optional)
                      </label>
                      <textarea
                        id="primaryHealthConcerns"
                        name="primaryHealthConcerns"
                        value={medicalData.primaryHealthConcerns}
                        onChange={handleInputChange}
                        placeholder="What are your main health concerns or goals? This helps us personalize your care..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-primary focus:border-teal-primary transition-colors resize-none"
                      />
                    </div>
                  </>
                )}

                {/* Step 3 Content - Plan Selection */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Choose the plan that best fits your needs. You can always change or upgrade your plan later.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {/* Individual Plan */}
                      <div
                        onClick={() => setSelectedPlan('individual')}
                        className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all ${
                          selectedPlan === 'individual'
                            ? 'border-teal-primary bg-teal-primary/5 shadow-lg'
                            : 'border-gray-200 hover:border-teal-primary/50'
                        }`}
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-2xl mb-2 text-teal-primary" style={{ fontFamily: 'var(--font-heading)' }}>Individual</h3>
                          <div className="mb-4">
                            <span className="text-4xl text-teal-primary">
                              {individualPrice.formatted}
                            </span>
                            <span className="text-lg ml-2 text-gray-600">per month</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Perfect for individuals seeking direct access to quality healthcare
                          </p>
                        </div>

                        {selectedPlan === 'individual' && (
                          <div className="absolute top-4 right-4">
                            <div className="w-6 h-6 rounded-full bg-teal-primary flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Family Plan */}
                      <div
                        onClick={() => setSelectedPlan('family')}
                        className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all ${
                          selectedPlan === 'family'
                            ? 'border-teal-primary bg-gradient-to-br from-teal-primary to-teal-dark text-white shadow-2xl'
                            : 'border-gray-200 hover:border-teal-primary/50 bg-white'
                        }`}
                      >
                        {selectedPlan !== 'family' && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gold-primary text-teal-primary px-4 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                              <Star className="w-3 h-3 fill-current" />
                              <span>Most Popular</span>
                            </div>
                          </div>
                        )}
                        
                        <div className="text-center mb-6">
                          <h3 className={`text-2xl mb-2 ${selectedPlan === 'family' ? 'text-white' : 'text-teal-primary'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                            Family
                          </h3>
                          <div className="mb-4">
                            <span className={`text-4xl ${selectedPlan === 'family' ? 'text-gold-primary' : 'text-teal-primary'}`}>
                              {familyPrice.formatted}
                            </span>
                            <span className={`text-lg ml-2 ${selectedPlan === 'family' ? 'text-gray-300' : 'text-gray-600'}`}>
                              per month
                            </span>
                          </div>
                          <p className={selectedPlan === 'family' ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>
                            Comprehensive care for your entire household
                          </p>
                        </div>

                        {selectedPlan === 'family' && (
                          <div className="absolute top-4 right-4">
                            <div className="w-6 h-6 rounded-full bg-gold-primary flex items-center justify-center">
                              <Check className="w-4 h-4 text-teal-primary" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {!selectedPlan && (
                      <p className="text-sm text-red-600">Please select a plan to continue</p>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    icon={currentStep === 3 ? undefined : <ArrowRight className="w-5 h-5" />}
                    iconPosition={currentStep === 3 ? undefined : 'right'}
                    fullWidth
                    disabled={currentStep === 3 && !selectedPlan}
                  >
                    {currentStep === 1 && 'Continue to Medical Profile'}
                    {currentStep === 2 && 'Continue to Plan Selection'}
                    {currentStep === 3 && 'Complete Sign Up'}
                  </Button>
                  {currentStep > 1 && (
                    <Button
                      variant="outline"
                      size="md"
                      type="button"
                      onClick={handleBack}
                      icon={<ArrowLeft className="w-4 h-4" />}
                      iconPosition="left"
                      fullWidth
                    >
                      Back
                    </Button>
                  )}
                </div>

                {/* HIPAA Compliance Note */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span>Your data is encrypted and HIPAA compliant.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

