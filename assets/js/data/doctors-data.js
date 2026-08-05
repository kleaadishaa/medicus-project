// assets/js/data/doctors-data.js

export const doctorsData = [
  {
    id: "D0001",
    name: "Dr. Jane Smith",
    title: "Senior Cardiologist",
    department: "Cardiology",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.9,
    reviewCount: 152,
    biography: "Dr. Jane Smith specializes in diagnosing and treating cardiovascular diseases with over 15 years of experience.",
    experience: [
      "15+ years in Cardiology",
      "Head of Cardiology Department (2020 - Present)"
    ],
    specializations: [
      "Interventional Cardiology",
      "Heart Failure",
      "Preventive Cardiology"
    ],
    education: [
      "MD - Harvard Medical School",
      "Cardiology Residency - Mayo Clinic"
    ],
    certificates: [
      "Board Certified Cardiologist"
    ],
    languages: ["English", "Albanian", "Italian"],
    workingHours: "Mon - Fri: 08:00 - 16:00",
    reviews: [
      { name: "Emily R.", rating: 5, comment: "Excellent doctor who explained everything clearly." }
    ]
  },
  {
    id: "D0002",
    name: "Dr. Michael Johnson",
    title: "Consultant Cardiologist",
    department: "Cardiology",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.8,
    reviewCount: 101,
    biography: "Experienced cardiologist focused on preventive care and cardiac imaging.",
    experience: ["12 years in Cardiology"],
    specializations: ["Echocardiography", "Hypertension", "Cardiac Imaging"],
    education: ["MD - Stanford University"],
    certificates: ["European Society of Cardiology"],
    languages: ["English", "Spanish"],
    workingHours: "Tue - Sat: 09:00 - 17:00",
    reviews: [
      { name: "James P.", rating: 5, comment: "Very professional and attentive." }
    ]
  },
  {
    id: "D0003",
    name: "Dr. Sarah Williams",
    title: "Pediatrician",
    department: "Pediatrics",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.9,
    reviewCount: 176,
    biography: "Dedicated pediatrician providing compassionate care for children of all ages.",
    experience: ["11 years in Pediatrics"],
    specializations: ["Child Development", "Vaccinations", "Newborn Care"],
    education: ["MD - Johns Hopkins University"],
    certificates: ["Board Certified Pediatrician"],
    languages: ["English", "French"],
    workingHours: "Mon - Fri: 09:00 - 15:00",
    reviews: [
      { name: "Sophia K.", rating: 5, comment: "Amazing with children." }
    ]
  },
  {
    id: "D0004",
    name: "Dr. Daniel Brown",
    title: "Pediatric Specialist",
    department: "Pediatrics",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.8,
    reviewCount: 98,
    biography: "Specialist in pediatric respiratory and infectious diseases.",
    experience: ["10 years in Pediatrics"],
    specializations: ["Respiratory Diseases", "Child Nutrition"],
    education: ["MD - University of Oxford"],
    certificates: ["Pediatric Advanced Life Support"],
    languages: ["English"],
    workingHours: "Mon - Thu: 08:00 - 14:00",
    reviews: [
      { name: "Linda M.", rating: 5, comment: "Very patient and caring." }
    ]
  },
  {
    id: "D0005",
    name: "Dr. Emma Davis",
    title: "Neurologist",
    department: "Neurology",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.9,
    reviewCount: 140,
    biography: "Neurologist specializing in stroke prevention and neurological disorders.",
    experience: ["14 years in Neurology"],
    specializations: ["Stroke", "Epilepsy", "Multiple Sclerosis"],
    education: ["MD - University of Cambridge"],
    certificates: ["Board Certified Neurologist"],
    languages: ["English", "German"],
    workingHours: "Mon - Fri: 08:30 - 16:30",
    reviews: [
      { name: "George T.", rating: 5, comment: "Outstanding expertise." }
    ]
  },
  {
    id: "D0006",
    name: "Dr. Alex Miller",
    title: "Orthopedic Surgeon",
    department: "Orthopedics",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.8,
    reviewCount: 119,
    biography: "Experienced orthopedic surgeon specializing in sports injuries and joint replacement.",
    experience: ["13 years in Orthopedics"],
    specializations: ["Sports Medicine", "Joint Replacement", "Trauma Surgery"],
    education: ["MD - UCLA School of Medicine"],
    certificates: ["American Board of Orthopedic Surgery"],
    languages: ["English"],
    workingHours: "Mon - Fri: 09:00 - 17:00",
    reviews: [
      { name: "Robert H.", rating: 5, comment: "Excellent surgeon and great follow-up care." }
    ]
  },
  {
    id: "D0007",
    name: "Dr. Olivia Thomas",
    title: "Dermatologist",
    department: "Dermatology",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.7,
    reviewCount: 88,
    biography: "Dermatologist focused on medical and cosmetic skin treatments.",
    experience: ["9 years in Dermatology"],
    specializations: ["Acne Treatment", "Skin Cancer Screening", "Laser Therapy"],
    education: ["MD - King's College London"],
    certificates: ["Board Certified Dermatologist"],
    languages: ["English", "Italian"],
    workingHours: "Tue - Sat: 09:00 - 16:00",
    reviews: [
      { name: "Anna S.", rating: 5, comment: "Very knowledgeable and kind." }
    ]
  },
  {
    id: "D0008",
    name: "Dr. David Clark",
    title: "General Physician",
    department: "General Medicine",
    photo: "assets/img/doctors/doctor.jpg",
    rating: 4.9,
    reviewCount: 204,
    biography: "General physician providing comprehensive healthcare for adults and families.",
    experience: ["18 years in General Medicine"],
    specializations: ["Preventive Medicine", "Chronic Disease Management", "Annual Checkups"],
    education: ["MD - University of Michigan"],
    certificates: ["Board Certified Internal Medicine"],
    languages: ["English", "Albanian"],
    workingHours: "Mon - Fri: 08:00 - 17:00",
    reviews: [
      { name: "Maria L.", rating: 5, comment: "Professional, caring and attentive." }
    ]
  }
];

// Helper function to find doctors by id and departament
export function getDoctorById(id) {
  return doctorsData.find(d => d.id === id);
}

export function getDoctorsByDepartment(department) {

    if (!department) {
        return doctorsData;
    }

    return doctorsData.filter(
        doctor => doctor.department === department
    );

}