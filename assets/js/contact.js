// contact.js
import {
    doctorsData,
    getDoctorById,
    getDoctorsByDepartment
} from "./data/doctors-data.js";

const departmentSelect = document.querySelector("#departmentSelect");
const doctorSelect = document.querySelector("#doctorSelect");
const form = document.querySelector("#appointmentForm");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");

function validatePhone(phone) {
    // Heq hapësirat dhe vijat
    const cleaned = phone.replace(/[\s-]/g, "");

    // Pranon vetëm 9 shifra (p.sh. 691234567)
    return /^\d{9}$/.test(cleaned);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
    phoneInput.setCustomValidity("");
    emailInput.setCustomValidity("");

    if (!validatePhone(phoneInput.value)) {
        e.preventDefault();

        phoneInput.setCustomValidity(
            "Please enter a valid Albanian phone number. Enter exactly 9 digits (e.g. 69 123 4567)."
        );

        phoneInput.reportValidity();
        phoneInput.focus();
        return;
    }

    if (!validateEmail(emailInput.value)) {
        e.preventDefault();

        emailInput.setCustomValidity(
            "Please enter a valid email address."
        );

        emailInput.reportValidity();
        emailInput.focus();
        return;
    }
});

/* Departments */
getDepartments().forEach(dep => {
    const option = document.createElement("option");
    option.value = dep;
    option.textContent = dep;

    departmentSelect.appendChild(option);
});

export function getDepartments() {
    return [...new Set(
        doctorsData.map(doctor => doctor.department)
    )].sort();
}


/* Tom Select */
const doctorTom = new TomSelect("#doctorSelect",{
    create:false,
    sortField:{
        field:"text",
        direction:"asc"
    },
    placeholder:"Search for a doctor..."
});

/* Doctors */
function populateDoctors(department){
    doctorTom.clear();
    doctorTom.clearOptions();
    doctorTom.addOption({
        value:"",
        text:"Any available doctor"
    });

    const doctors = doctorsData.filter(d=>{
        if(!department) return true;
        return d.department===department;
    });

    doctors.forEach(d=>{
        doctorTom.addOption({
            value:d.id,
            text:d.name
        });
    });
    doctorTom.refreshOptions(false);
}
populateDoctors();

/* Department change */
departmentSelect.addEventListener("change",()=>{
    populateDoctors(
        departmentSelect.value
    );
});


/* takes doctor based on url — locked booking mode */
const params = new URLSearchParams(window.location.search);
const doctorId = params.get("doctor");

if(doctorId){
    const doctor = getDoctorById(doctorId);
    if(doctor){
        departmentSelect.value = doctor.department;
        document.getElementById("departmentField").classList.add("d-none");

        doctorTom.clear();
        doctorTom.clearOptions();
        doctorTom.addOption({ value: doctor.id, text: doctor.name });
        doctorTom.setValue(doctor.id);
        document.getElementById("doctorField").classList.add("d-none");

        document.getElementById("doctorLockedText").textContent =
            `Booking with ${doctor.name} — ${doctor.title}`;
        document.getElementById("doctorLockedBanner").classList.remove("d-none");
    }
}

/* Date */
const dateInput = document.querySelector("#appointmentDate");
if(dateInput){
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
}

