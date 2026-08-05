// assets/js/data/services-data.js

export const servicesData = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Our Cardiology team offers comprehensive diagnosis, treatment, and long-term management of heart and vascular conditions, from hypertension and arrhythmias to coronary artery disease and heart failure. Using advanced diagnostic imaging and evidence-based treatment plans, our cardiologists partner with patients on both urgent cardiac issues and ongoing preventive heart care.",
    icon: "fa-heart-pulse",
    image: "service-1",
    category: "Internal Medicine",
    tag: "Heart & Vascular",
    doctorIds: ["D0001", "D0002"],
    quickFacts: { hours: "Mon - Sat: 08:00 - 17:00", location: "Main Building, Floor 3", insurance: "Most major plans accepted" },
    treatments: ["Echocardiography", "Stress Testing", "Cardiac Catheterization", "Pacemaker Implantation"],
    faqs: [
      { q: "When should I see a cardiologist?", a: "If you experience chest pain, shortness of breath, palpitations, dizziness, or swelling in your legs, or if you have risk factors like high blood pressure, high cholesterol, or a family history of heart disease." },
      { q: "Do I need a referral?", a: "A referral from your primary care physician is recommended but not always required." },
      { q: "What tests might I need at my first appointment?", a: "Common first-visit tests include an EKG and basic blood work; your cardiologist may also order an echocardiogram, stress test, or Holter monitor depending on your symptoms." }
    ]
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Our Neurology team diagnoses and manages disorders of the brain, spinal cord, and nervous system, including stroke, epilepsy, migraines, and multiple sclerosis. We combine detailed neurological exams with advanced imaging and monitoring to build treatment plans tailored to each patient's condition and goals.",
    icon: "fa-brain",
    image: "service-2",
    category: "Internal Medicine",
    tag: "Brain & Nerves",
    doctorIds: ["D0005"],
    quickFacts: { hours: "Mon - Fri: 08:30 - 16:30", location: "Main Building, Floor 4", insurance: "Most major plans accepted" },
    treatments: ["EEG Monitoring", "Stroke Management", "Migraine Treatment", "Epilepsy Care"],
    faqs: [
      { q: "What conditions do neurologists treat?", a: "Stroke, epilepsy, migraines, multiple sclerosis, and other disorders of the brain, spine, and nerves." },
      { q: "What should I bring to my first visit?", a: "A list of current medications, prior imaging or test results, and a summary of your symptoms and their onset." },
      { q: "How soon should I see a neurologist after new symptoms appear?", a: "Sudden symptoms such as facial drooping, one-sided weakness, slurred speech, or a severe sudden headache need emergency care immediately; gradual or recurring symptoms like migraines can be scheduled as a routine visit." }
    ]
  },
  {
    id: "endocrinology",
    title: "Endocrinology",
    description: "Our Endocrinology team provides expert care for hormonal and metabolic conditions, including diabetes, thyroid disorders, and adrenal or pituitary imbalances. We focus on individualized treatment plans that combine medication management, lifestyle guidance, and ongoing monitoring to support long-term hormonal health.",
    icon: "fa-vial",
    image: "service-3",
    category: "Internal Medicine",
    tag: "Hormones & Metabolism",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 09:00 - 16:00", location: "Main Building, Floor 3", insurance: "Most major plans accepted" },
    treatments: ["Diabetes Management", "Thyroid Disorder Treatment", "Hormone Therapy", "Metabolic Screening"],
    faqs: [
      { q: "Do you treat Type 1 and Type 2 diabetes?", a: "Yes, our endocrinologists manage both types along with related complications." },
      { q: "How often will I need follow-up visits?", a: "This depends on your condition, but many patients are seen every 3 to 6 months." },
      { q: "What symptoms suggest a hormonal imbalance?", a: "Unexplained weight changes, fatigue, mood changes, irregular periods, or changes in heart rate or body temperature can all signal a hormonal issue worth discussing with an endocrinologist." }
    ]
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Our Gastroenterology team diagnoses and treats conditions affecting the digestive system, including the stomach, intestines, liver, and pancreas. From routine screenings like colonoscopies to management of chronic conditions such as IBS, IBD, and liver disease, our specialists focus on both symptom relief and long-term digestive health.",
    icon: "fa-stethoscope",
    image: "service-4",
    category: "Internal Medicine",
    tag: "Digestive Health",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 08:00 - 16:00", location: "Main Building, Floor 2", insurance: "Most major plans accepted" },
    treatments: ["Colonoscopy", "Endoscopy", "Liver Disease Management", "IBS & IBD Treatment"],
    faqs: [
      { q: "How do I prepare for a colonoscopy?", a: "You'll receive detailed prep instructions, which typically include a special diet and a bowel-cleansing solution beforehand." },
      { q: "Is sedation used during procedures?", a: "Yes, most endoscopic procedures are performed with sedation for patient comfort." },
      { q: "At what age should I get my first colonoscopy?", a: "Routine screening is generally recommended starting at age 45 for average-risk patients, though your gastroenterologist may suggest earlier screening based on symptoms or family history." }
    ]
  },
  {
    id: "pulmonology",
    title: "Pulmonology",
    description: "Our Pulmonology team provides comprehensive respiratory care for conditions affecting the lungs and airways, including asthma, COPD, sleep apnea, and chronic lung infections. We use detailed pulmonary function testing and personalized treatment plans to help patients breathe easier and manage long-term respiratory health.",
    icon: "fa-lungs",
    image: "service-5",
    category: "Internal Medicine",
    tag: "Lungs & Breathing",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 08:00 - 16:00", location: "Main Building, Floor 3", insurance: "Most major plans accepted" },
    treatments: ["Pulmonary Function Testing", "Asthma & COPD Management", "Sleep Apnea Evaluation", "Bronchoscopy"],
    faqs: [
      { q: "What is a pulmonary function test?", a: "A non-invasive test that measures how well your lungs work by evaluating airflow and lung capacity." },
      { q: "Do you treat sleep-related breathing disorders?", a: "Yes, including sleep apnea evaluation and treatment coordination with our sleep lab." },
      { q: "What are signs I should see a pulmonologist?", a: "Persistent cough, shortness of breath, wheezing, or chest tightness that doesn't improve, especially if it interferes with daily activities or sleep." }
    ]
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Our General Medicine team offers comprehensive primary care for adults and families, focusing on preventive medicine, chronic disease management, and whole-person wellness. From annual checkups and vaccinations to coordinating referrals with specialists, our physicians serve as a trusted first point of contact for ongoing health needs.",
    icon: "fa-user-doctor",
    image: "service-25",
    category: "Internal Medicine",
    tag: "Primary Care",
    doctorIds: ["D0008"],
    quickFacts: { hours: "Mon - Fri: 08:00 - 17:00", location: "Main Building, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Annual Physical Exams", "Chronic Disease Management", "Preventive Screenings", "Vaccinations & Immunizations"],
    faqs: [
      { q: "How often should I schedule a checkup?", a: "Most healthy adults benefit from an annual physical, though your physician may recommend more frequent visits if you're managing a chronic condition." },
      { q: "Can my general physician refer me to a specialist?", a: "Yes, your general physician can coordinate referrals to cardiology, dermatology, and other specialists and help manage your care across providers." },
      { q: "Do you treat both acute and chronic conditions?", a: "Yes, our general physicians handle everything from colds and minor injuries to long-term management of conditions like diabetes and high blood pressure." }
    ]
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Our Orthopedics team diagnoses and treats conditions affecting bones, joints, muscles, and tendons, including sports injuries, arthritis, and fractures. We offer both surgical and non-surgical treatment options, from physical therapy and bracing to joint replacement, tailored to each patient's activity level and recovery goals.",
    icon: "fa-bone",
    image: "service-6",
    category: "Surgery",
    tag: "Bones & Joints",
    doctorIds: ["D0006"],
    quickFacts: { hours: "Mon - Fri: 09:00 - 17:00", location: "Surgical Wing, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Joint Replacement", "Sports Injury Repair", "Fracture Care", "Physical Rehabilitation"],
    faqs: [
      { q: "How long is recovery after joint replacement?", a: "Most patients return to daily activities within 6 to 12 weeks, depending on the joint and rehabilitation plan." },
      { q: "Do you offer non-surgical treatment options?", a: "Yes, including physical therapy, bracing, and injection-based treatments before surgery is considered." },
      { q: "Will I need surgery for my joint or sports injury?", a: "Not always — many orthopedic conditions improve with physical therapy, medication, or injections; surgery is typically considered when conservative treatment doesn't provide enough relief." }
    ]
  },
  {
    id: "general-surgery",
    title: "General Surgery",
    description: "Our General Surgery team performs a wide range of surgical procedures using minimally invasive techniques whenever possible to reduce recovery time and improve outcomes. From hernia repair to gallbladder removal, our surgeons prioritize patient safety and work closely with referring physicians throughout the surgical process.",
    icon: "fa-briefcase-medical",
    image: "service-7",
    category: "Surgery",
    tag: "Surgical Care",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 07:00 - 15:00", location: "Surgical Wing, Floor 2", insurance: "Most major plans accepted" },
    treatments: ["Laparoscopic Surgery", "Hernia Repair", "Gallbladder Removal", "Appendectomy"],
    faqs: [
      { q: "Is minimally invasive surgery always an option?", a: "It depends on the condition and patient factors; our surgeons will recommend the safest and most effective approach." },
      { q: "How long is the hospital stay after surgery?", a: "Many minimally invasive procedures allow same-day or next-day discharge." },
      { q: "How do I prepare for a scheduled surgery?", a: "Your surgical team will give you specific pre-operative instructions, typically including guidance on fasting, adjusting medications, and arranging help for after the procedure." }
    ]
  },
  {
    id: "plastic-surgery",
    title: "Plastic Surgery",
    description: "Our Plastic Surgery team provides both reconstructive and cosmetic procedures designed to restore function, address trauma or medical conditions, and support each patient's confidence and quality of life. We take an individualized approach, discussing goals, risks, and expected outcomes in detail before any procedure.",
    icon: "fa-wand-magic-sparkles",
    image: "service-8",
    category: "Surgery",
    tag: "Reconstructive Care",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 09:00 - 16:00", location: "Surgical Wing, Floor 2", insurance: "Cosmetic procedures may not be covered" },
    treatments: ["Reconstructive Surgery", "Scar Revision", "Cosmetic Procedures", "Post-Trauma Repair"],
    faqs: [
      { q: "Is a consultation required before scheduling surgery?", a: "Yes, an in-person consultation is required to discuss goals, risks, and the appropriate procedure." },
      { q: "Are reconstructive procedures covered by insurance?", a: "Reconstructive procedures related to injury or medical necessity are often covered; purely cosmetic ones typically are not." },
      { q: "What is the difference between reconstructive and cosmetic plastic surgery?", a: "Reconstructive surgery addresses function or appearance changes caused by injury, illness, or congenital conditions, while cosmetic surgery is elective and focused on enhancing appearance." }
    ]
  },
  {
    id: "vascular-surgery",
    title: "Vascular Surgery",
    description: "Our Vascular Surgery team treats diseases of the arteries and veins, including varicose veins, aneurysms, and blockages that restrict blood flow. Many procedures are performed using minimally invasive, catheter-based techniques that support faster recovery and reduced surgical risk.",
    icon: "fa-droplet",
    image: "service-9",
    category: "Surgery",
    tag: "Blood Vessels",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 08:00 - 16:00", location: "Surgical Wing, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Varicose Vein Treatment", "Aneurysm Repair", "Angioplasty", "Carotid Artery Surgery"],
    faqs: [
      { q: "What are signs I should see a vascular surgeon?", a: "Leg pain when walking, visible varicose veins, non-healing wounds, or a known aneurysm are common reasons for referral." },
      { q: "Are vascular procedures minimally invasive?", a: "Many are performed using catheter-based, minimally invasive techniques with shorter recovery times." },
      { q: "How is peripheral artery disease diagnosed?", a: "Diagnosis typically involves a physical exam along with non-invasive tests such as an ankle-brachial index or vascular ultrasound to assess blood flow in the legs." }
    ]
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Our Pediatrics team delivers compassionate, comprehensive care for infants, children, and adolescents, supporting healthy growth and development at every stage. From routine well-child visits and vaccinations to management of childhood illnesses, our pediatricians build lasting relationships with families.",
    icon: "fa-child",
    image: "service-10",
    category: "Women's & Children's Health",
    tag: "Child Health",
    doctorIds: ["D0003", "D0004"],
    quickFacts: { hours: "Mon - Fri: 08:00 - 15:00", location: "Children's Wing, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Well-Child Checkups", "Vaccinations", "Growth & Development Monitoring", "Acute Illness Care"],
    faqs: [
      { q: "How often should my child have a checkup?", a: "Well-child visits are typically recommended at regular intervals throughout infancy, childhood, and adolescence." },
      { q: "Can a parent stay in the room during exams?", a: "Yes, a parent or guardian is welcome and encouraged to stay throughout the visit." },
      { q: "What should I bring to my child's first appointment?", a: "Bring your child's vaccination records, a list of any current medications or allergies, and a note of any specific concerns you'd like to discuss." }
    ]
  },
  {
    id: "obstetrics-gynecology",
    title: "Obstetrics & Gynecology",
    description: "Our Obstetrics & Gynecology team supports women through every stage of reproductive health, from routine gynecological care to pregnancy, labor, and delivery. We provide personalized, evidence-based care in a supportive environment, whether you're planning a family or managing a gynecological condition.",
    icon: "fa-baby",
    image: "service-11",
    category: "Women's & Children's Health",
    tag: "Women's Care",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 08:00 - 16:00", location: "Children's Wing, Floor 2", insurance: "Most major plans accepted" },
    treatments: ["Prenatal Care", "Labor & Delivery", "Gynecological Exams", "Family Planning"],
    faqs: [
      { q: "When should I schedule my first prenatal visit?", a: "As soon as you know you're pregnant, ideally within the first 8 weeks." },
      { q: "Do you offer routine gynecological screenings?", a: "Yes, including annual exams, Pap smears, and reproductive health counseling." },
      { q: "How often should I have a gynecological exam?", a: "Most women benefit from an annual well-woman visit, though your provider may recommend a different schedule based on your history." }
    ]
  },
  {
    id: "neonatology",
    title: "Neonatology",
    description: "Our Neonatology team provides specialized round-the-clock care for premature and critically ill newborns in our NICU. Our neonatal specialists work closely with families to monitor development, manage complications, and support a safe transition home.",
    icon: "fa-baby-carriage",
    image: "service-12",
    category: "Women's & Children's Health",
    tag: "Newborn Care",
    doctorIds: [],
    quickFacts: { hours: "24/7 NICU Coverage", location: "Children's Wing, Floor 3", insurance: "Most major plans accepted" },
    treatments: ["NICU Care", "Premature Infant Monitoring", "Respiratory Support", "Feeding Support"],
    faqs: [
      { q: "When is a newborn admitted to the NICU?", a: "Common reasons include premature birth, low birth weight, breathing difficulties, or other complications requiring close monitoring." },
      { q: "Can parents visit the NICU at any time?", a: "Parents typically have extended visiting access; specific policies will be explained by the care team." },
      { q: "What is the difference between a NICU and a regular nursery?", a: "A NICU provides specialized equipment and 24/7 monitoring for newborns who need extra medical support beyond what a standard nursery offers." }
    ]
  },
  {
    id: "psychiatry",
    title: "Psychiatry",
    description: "Our Psychiatry team provides evaluation, diagnosis, and treatment for a wide range of mental health conditions, including mood disorders, anxiety, and psychiatric emergencies. Our psychiatrists offer medication management alongside coordinated care with therapists to support each patient's overall mental well-being.",
    icon: "fa-comment-medical",
    image: "service-13",
    category: "Mental Health",
    tag: "Mental Wellness",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 09:00 - 17:00", location: "Wellness Center, Floor 2", insurance: "Most major plans accepted" },
    treatments: ["Medication Management", "Diagnostic Evaluation", "Mood Disorder Treatment", "Anxiety Treatment"],
    faqs: [
      { q: "What's the difference between a psychiatrist and psychologist?", a: "Psychiatrists are medical doctors who can prescribe medication; psychologists focus on therapy and counseling." },
      { q: "How long is a typical course of treatment?", a: "This varies widely by condition and individual, ranging from a few sessions to ongoing long-term care." },
      { q: "Will I need to take medication?", a: "Not necessarily — treatment plans are individualized, and some patients benefit most from therapy alone, medication alone, or a combination of both." }
    ]
  },
  {
    id: "psychology",
    title: "Psychology",
    description: "Our Psychology team offers evidence-based counseling and therapy to support emotional well-being, resilience, and healthy relationships. From individual therapy to couples counseling, our psychologists create a supportive space to work through stress, life transitions, and ongoing mental health concerns.",
    icon: "fa-comments",
    image: "service-14",
    category: "Mental Health",
    tag: "Counseling",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 09:00 - 18:00", location: "Wellness Center, Floor 2", insurance: "Most major plans accepted" },
    treatments: ["Individual Therapy", "Cognitive Behavioral Therapy", "Couples Counseling", "Stress Management"],
    faqs: [
      { q: "How do I know if therapy is right for me?", a: "Therapy can help with stress, relationships, grief, or ongoing emotional challenges — a first session can help clarify your goals." },
      { q: "Are sessions confidential?", a: "Yes, sessions are confidential except in situations required by law, such as risk of harm to self or others." },
      { q: "How many therapy sessions will I need?", a: "This varies widely depending on your goals — some patients find a few sessions helpful for a specific issue, while others benefit from ongoing, longer-term therapy." }
    ]
  },
  {
    id: "addiction-medicine",
    title: "Addiction Medicine",
    description: "Our Addiction Medicine team provides comprehensive, compassionate treatment for substance dependence, combining medical care with counseling and long-term recovery support. We offer both outpatient programs and coordination with inpatient care when a higher level of support is needed.",
    icon: "fa-hand-holding-heart",
    image: "service-15",
    category: "Mental Health",
    tag: "Recovery Support",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 08:00 - 16:00", location: "Wellness Center, Floor 3", insurance: "Most major plans accepted" },
    treatments: ["Medically Assisted Detox", "Outpatient Recovery Programs", "Relapse Prevention", "Family Support Counseling"],
    faqs: [
      { q: "Is treatment confidential?", a: "Yes, addiction treatment records are held to strict confidentiality standards." },
      { q: "Do you offer outpatient programs?", a: "Yes, we offer both outpatient and referral-based inpatient program options depending on need." },
      { q: "What does medically assisted detox involve?", a: "Medically assisted detox provides monitored, medication-supported withdrawal management to help reduce symptoms and health risks as the first step before ongoing recovery treatment." }
    ]
  },
  {
    id: "dermatology",
    title: "Dermatology",
    description: "Our Dermatology team diagnoses and treats a wide range of skin, hair, and nail conditions, from acne and eczema to skin cancer screening and mole evaluation. We combine medical expertise with modern therapies to support both skin health and patient comfort.",
    icon: "fa-spa",
    image: "service-16",
    category: "Skin & Aesthetics",
    tag: "Skin & Hair",
    doctorIds: ["D0007"],
    quickFacts: { hours: "Tue - Sat: 09:00 - 16:00", location: "Wellness Center, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Skin Cancer Screening", "Acne Treatment", "Eczema & Psoriasis Care", "Mole Removal"],
    faqs: [
      { q: "How often should I get a skin cancer screening?", a: "Annually is generally recommended, or sooner if you notice new or changing spots." },
      { q: "Do you treat chronic skin conditions?", a: "Yes, including eczema, psoriasis, and other long-term dermatological conditions." },
      { q: "What does a skin cancer screening involve?", a: "A dermatologist will visually examine your skin from head to toe, looking for unusual moles, spots, or growths, and may recommend a biopsy for anything suspicious." }
    ]
  },
  {
    id: "cosmetic-dermatology",
    title: "Cosmetic Dermatology",
    description: "Our Cosmetic Dermatology team offers advanced aesthetic treatments designed to improve skin health and appearance using minimally invasive procedures. From injectables to skin resurfacing, our specialists tailor each treatment plan to the patient's goals and skin type.",
    icon: "fa-wand-sparkles",
    image: "service-17",
    category: "Skin & Aesthetics",
    tag: "Aesthetic Care",
    doctorIds: [],
    quickFacts: { hours: "Tue - Sat: 09:00 - 17:00", location: "Wellness Center, Floor 1", insurance: "Typically not covered by insurance" },
    treatments: ["Botox & Fillers", "Chemical Peels", "Microneedling", "Anti-Aging Treatments"],
    faqs: [
      { q: "Are cosmetic treatments covered by insurance?", a: "Generally no, cosmetic dermatology procedures are considered elective and are self-pay." },
      { q: "How long do results typically last?", a: "This varies by treatment — injectables often last several months, while skin resurfacing effects can last longer." },
      { q: "Is there any downtime after cosmetic treatments?", a: "Downtime varies by procedure — injectables typically have little to no downtime, while resurfacing treatments may involve several days of redness or peeling." }
    ]
  },
  {
    id: "laser-therapy",
    title: "Laser Therapy",
    description: "Our Laser Therapy team offers precision laser treatments for a range of dermatological concerns, including scarring, pigmentation, and unwanted hair. Treatment plans are customized to each patient's skin type and goals to achieve safe, effective results.",
    icon: "fa-bolt",
    image: "service-18",
    category: "Skin & Aesthetics",
    tag: "Skin Treatments",
    doctorIds: [],
    quickFacts: { hours: "Tue - Sat: 09:00 - 17:00", location: "Wellness Center, Floor 1", insurance: "Typically not covered by insurance" },
    treatments: ["Laser Skin Resurfacing", "Scar Reduction", "Pigmentation Treatment", "Laser Hair Removal"],
    faqs: [
      { q: "Is laser therapy painful?", a: "Most patients experience mild discomfort, often compared to a light snapping sensation; numbing cream can be used." },
      { q: "How many sessions are typically needed?", a: "This depends on the condition being treated, but most plans involve multiple sessions spaced several weeks apart." },
      { q: "How do I know which laser treatment is right for me?", a: "Your provider will evaluate your skin type, concern, and goals during a consultation to recommend the most appropriate treatment and number of sessions." }
    ]
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Our Oncology team provides comprehensive cancer care, combining advanced diagnostics with personalized treatment planning and compassionate support throughout every stage of care. From initial diagnosis through survivorship, our oncologists coordinate closely with radiology, pathology, and other specialists to guide each patient's care.",
    icon: "fa-ribbon",
    image: "service-19",
    category: "Oncology",
    tag: "Cancer Care",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 08:00 - 17:00", location: "Cancer Center, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Chemotherapy", "Personalized Treatment Planning", "Cancer Screening", "Survivorship Care"],
    faqs: [
      { q: "What happens during my first oncology visit?", a: "Your care team will review your diagnosis, imaging, and pathology to build a personalized treatment plan." },
      { q: "Is a second opinion available?", a: "Yes, we welcome and can help coordinate second opinions for a cancer diagnosis." },
      { q: "How is a cancer treatment plan decided?", a: "Your care team reviews your diagnosis, imaging, pathology results, and overall health to recommend a plan, which may include surgery, chemotherapy, radiation, or a combination." }
    ]
  },
  {
    id: "radiation-oncology",
    title: "Radiation Oncology",
    description: "Our Radiation Oncology team delivers state-of-the-art radiation therapy designed to target cancer precisely while minimizing impact on surrounding healthy tissue. Our team works closely with each patient to plan treatment and monitor progress and side effects throughout the course of care.",
    icon: "fa-radiation",
    image: "service-20",
    category: "Oncology",
    tag: "Cancer Treatment",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 07:30 - 16:00", location: "Cancer Center, Floor 2", insurance: "Most major plans accepted" },
    treatments: ["External Beam Radiation", "Brachytherapy", "Stereotactic Radiosurgery", "Treatment Planning & Simulation"],
    faqs: [
      { q: "How long does a course of radiation therapy last?", a: "Treatment courses vary from a single session to several weeks of daily sessions, depending on the cancer type and stage." },
      { q: "Are there side effects from radiation therapy?", a: "Side effects vary by treatment area and can include fatigue or skin irritation; your care team will discuss what to expect." },
      { q: "Is radiation therapy painful?", a: "Radiation treatment itself is painless, though some patients experience side effects like fatigue or skin irritation in the treated area as treatment progresses." }
    ]
  },
  {
    id: "hematology",
    title: "Hematology",
    description: "Our Hematology team diagnoses and manages blood disorders, including anemia, clotting conditions, and blood cancers. We work closely with oncology and other specialists to provide coordinated, comprehensive care for complex blood-related conditions.",
    icon: "fa-droplet",
    image: "service-21",
    category: "Oncology",
    tag: "Blood Disorders",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 08:00 - 16:00", location: "Cancer Center, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Anemia Treatment", "Clotting Disorder Management", "Blood Cancer Care", "Bone Marrow Evaluation"],
    faqs: [
      { q: "What symptoms suggest a blood disorder?", a: "Fatigue, unusual bruising or bleeding, frequent infections, or abnormal lab results are common signs prompting evaluation." },
      { q: "Do you coordinate care with oncology?", a: "Yes, hematology and oncology teams work closely together, especially for blood cancers." },
      { q: "What tests are used to diagnose a blood disorder?", a: "Diagnosis often starts with a complete blood count and additional blood tests, and may include a bone marrow biopsy for certain conditions." }
    ]
  },
  {
    id: "radiology",
    title: "Radiology",
    description: "Our Radiology team provides high-quality diagnostic imaging, including X-ray, CT, MRI, and ultrasound, to support accurate diagnosis across every specialty. Our radiologists work closely with your care team to ensure timely, precise interpretation of results.",
    icon: "fa-x-ray",
    image: "service-22",
    category: "Diagnostics",
    tag: "Imaging Services",
    doctorIds: [],
    quickFacts: { hours: "Mon - Sat: 07:00 - 19:00", location: "Diagnostics Center, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["X-Ray Imaging", "CT Scans", "MRI Scans", "Ultrasound"],
    faqs: [
      { q: "Do I need to prepare for an MRI or CT scan?", a: "Some scans require fasting or avoiding metal objects; specific instructions will be provided when you schedule." },
      { q: "How soon will results be available?", a: "Most imaging results are reviewed by a radiologist and shared with your referring physician within 24 to 48 hours." },
      { q: "Is imaging safe?", a: "Techniques like ultrasound and MRI don't use radiation, while X-rays and CT scans use small, carefully controlled doses; your care team will recommend the safest appropriate option." }
    ]
  },
  {
    id: "laboratory-medicine",
    title: "Laboratory Medicine",
    description: "Our Laboratory Medicine team provides accurate, timely testing to support diagnosis and treatment decisions across every department. From routine blood panels to specialized genetic testing, our lab combines modern technology with rigorous quality standards.",
    icon: "fa-flask",
    image: "service-23",
    category: "Diagnostics",
    tag: "Lab Testing",
    doctorIds: [],
    quickFacts: { hours: "Mon - Sat: 07:00 - 18:00", location: "Diagnostics Center, Floor 1", insurance: "Most major plans accepted" },
    treatments: ["Blood Panel Testing", "Microbiology Testing", "Genetic Testing", "Routine Lab Screening"],
    faqs: [
      { q: "Do I need to fast before a blood test?", a: "Some tests, like cholesterol or glucose panels, require fasting; you'll be notified in advance if needed." },
      { q: "How long does it take to get lab results?", a: "Most routine results are available within 24 to 72 hours, though some specialized tests take longer." },
      { q: "Can I get lab work done without a doctor's order?", a: "In most cases lab testing requires an order from your physician, though some routine screenings may be available directly — check with our lab for current options." }
    ]
  },
  {
    id: "pathology",
    title: "Pathology",
    description: "Our Pathology team performs detailed laboratory analysis of tissue and cell samples to support accurate disease diagnosis and treatment planning. Working closely with surgeons and oncologists, our pathologists play a key role in confirming diagnoses and guiding care.",
    icon: "fa-microscope",
    image: "service-24",
    category: "Diagnostics",
    tag: "Disease Diagnosis",
    doctorIds: [],
    quickFacts: { hours: "Mon - Fri: 07:00 - 17:00", location: "Diagnostics Center, Floor 2", insurance: "Most major plans accepted" },
    treatments: ["Biopsy Analysis", "Surgical Pathology", "Cytology", "Molecular Diagnostics"],
    faqs: [
      { q: "How long does a biopsy result take?", a: "Standard biopsy analysis typically takes 3 to 7 business days, depending on complexity." },
      { q: "Who reviews my pathology results?", a: "A board-certified pathologist analyzes the tissue sample and reports findings to your treating physician." },
      { q: "Will I meet with a pathologist directly?", a: "Typically not — pathologists work behind the scenes analyzing samples and reporting findings to your treating physician, who discusses the results with you." }
    ]
  }
];

// Convenience lookups
export function getServiceById(id) {
  return servicesData.find(s => s.id === id);
}

export function getServicesForDoctor(doctorId) {
  return servicesData.filter(s => s.doctorIds.includes(doctorId));
}


export function getServiceSummaries() {
  return servicesData.map(({ id, title, description, icon, image, category, tag, doctorIds }) => (
    { id, title, description, icon, image, category, tag, doctorIds }
  ));
}