// ======================================
// نظام إدارة العقود الأكاديمية
// قاعدة البيانات الكاملة - 445 عقد
// ======================================

const contractsData = [
    {
        university: "الجامعة الإسلامية",
        program: "الاقتصاد",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-03-07",
        endDate: "2025-03-06",
        status: "تحت الإجراء",
        progress: "40% - زيارة التحقق",
        docReceiveDate: "2025-01-23",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "2025-05-15",
        updatedDocStatus: "تم التسليم متأخر",
        verificationVisitDate: "2025-05-15",
        reviewersVisitDate: "2026-01-25",
        reviewersVisitStatus: "تم جدولة الزيارة - متأخر"
    },
    {
        university: "الجامعة الإسلامية",
        program: "الإعلام والاتصال",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-03-07",
        endDate: "2025-03-06",
        status: "تحت الإجراء",
        progress: "40% - زيارة التحقق",
        docReceiveDate: "2025-01-23",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "2025-08-31",
        updatedDocStatus: "تم التسليم متأخر",
        verificationVisitDate: "2025-09-04",
        reviewersVisitDate: "2026-02-01",
        reviewersVisitStatus: "تم جدولة الزيارة - متأخر"
    },
    {
        university: "الجامعة الإسلامية",
        program: "أصول التربية الإسلامية",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-03-07",
        endDate: "2025-03-06",
        status: "تحت الإجراء",
        progress: "40% - زيارة التحقق",
        docReceiveDate: "2025-01-23",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "2025-04-13",
        updatedDocStatus: "تم التسليم متأخر",
        verificationVisitDate: "2025-04-16",
        reviewersVisitDate: "2025-11-30",
        reviewersVisitStatus: "تم جدولة الزيارة - متأخر"
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في إدارة هندسة التشييد",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "التصميم الصناعي",
        degree: "بكالوريوس",
        department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في الإدارة الهندسية",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في الهندسة البيئية",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في نظم المعلومات وتحليل البيانات",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العمارة",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الهندسية وعلوم الحاسب",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في جودة الرعاية الصحية وسلامة المرضى",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "40% - زيارة التحقق",
        docReceiveDate: "2025-01-15",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "2025-06-05",
        updatedDocStatus: "تم التسليم متأخر",
        verificationVisitDate: "2025-04-28",
        reviewersVisitDate: "",
        reviewersVisitStatus: "لم تتم جدولة الزيارة"
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الصحة العامة",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في التقنية الحيوية",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في تقنية متناهية الصغر",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "تقنية القلب",
        degree: "بكالوريوس",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "30% - العقود الجديدة - دراسة الوثائق",
        docReceiveDate: "2025-08-14",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "2025-12-16",
        reviewersVisitDate: "2026-01-25",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الرعاية الطبية الطارئة",
        degree: "بكالوريوس",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "2025-10-15",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "صحة البيئة",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في الهندسة الطبية الحيوية",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في العلاج الطبيعي",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الصحية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في الكيمياء",
        degree: "ماجستير",
        department: "إدارة برامج التخصصات العلمية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "40% - زيارة التحقق",
        docReceiveDate: "2025-08-06",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "2025-10-01",
        updatedDocStatus: "تم التسليم متأخر",
        verificationVisitDate: "2025-10-07",
        reviewersVisitDate: "",
        reviewersVisitStatus: "لم تتم جدولة الزيارة"
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في الرياضيات",
        degree: "ماجستير",
        department: "إدارة برامج التخصصات العلمية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العلوم في الفيزياء والطاقة المتجددة",
        degree: "بكالوريوس",
        department: "إدارة برامج التخصصات العلمية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "5% - العقود الجديدة - اللقاء التعريفي",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الشريعة",
        degree: "بكالوريوس",
        department: "إدارة برامج العلوم الإسلامية والعربية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "0%",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الفقه وأصوله",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإسلامية والعربية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "التفسير وعلوم القرآن",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإسلامية والعربية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "العقيدة والمذاهب المعاصرة",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإسلامية والعربية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الحديث وعلومه",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإسلامية والعربية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الآداب في الأدب الإنجليزي",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "30% - العقود الجديدة - دراسة الوثائق",
        docReceiveDate: "2025-10-12",
        docReceiveStatus: "تم التسليم متأخر",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "2025-12-10",
        reviewersVisitDate: "2026-02-15",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الآداب في الجغرافيا ونظم المعلومات الجغرافية",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "0%",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الآداب في التاريخ الاقتصادي والاجتماعي",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "0%",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الآداب في علم الاجتماع",
        degree: "بكالوريوس",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "0%",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "الآداب في الخدمة الاجتماعية",
        degree: "بكالوريوس",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "0%",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    },
    {
        university: "جامعة الإمام عبد الرحمن بن فيصل",
        program: "التربية في المناهج وطرق التدريس",
        degree: "ماجستير",
        department: "إدارة برامج العلوم الإنسانية والتربوية",
        startDate: "2024-06-20",
        endDate: "2026-01-31",
        status: "تحت الإجراء",
        progress: "0%",
        docReceiveDate: "",
        docReceiveStatus: "لم يتم التسليم",
        updatedDocDate: "",
        updatedDocStatus: "لم يتم التسليم",
        verificationVisitDate: "",
        reviewersVisitDate: "",
        reviewersVisitStatus: ""
    }
];

// تابع البيانات في الجزء الثاني...
let allContracts = [];
let currentPage = 1;
const itemsPerPage = 20;

// ======================================
// Initialize Application
// ======================================
document.addEventListener('DOMContentLoaded', function() {
    // Load all contracts data
    loadContractsData();
    
    // Setup navigation
    setupNavigation();
    
    // Setup search and filters
    setupSearchAndFilters();
    
    // Setup modal
    setupModal();
    
    // Initialize displays
    updateDashboard();
});

// ======================================
// Load All Contracts Data
// ======================================
function loadContractsData() {
    // هنا سيتم تحميل جميع البيانات
    allContracts = contractsData; // البيانات المبدئية
    
    // سنضيف باقي البيانات هنا
    console.log(`تم تحميل ${allContracts.length} عقد`);
}

// ======================================
// Navigation Setup
// ======================================
function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all buttons and tabs
            navBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Refresh content for the active tab
            refreshTabContent(targetTab);
        });
    });
}

// ======================================
// Update Dashboard
// ======================================
function updateDashboard() {
    updateContractsByExpiry();
    updateUniversitiesList();
    updateSpecializationCounts();
    updateDepartmentCounts();
    updateAllContractsTable();
    populateFilters();
}

// ======================================
// Update Contracts by Expiry
// ======================================
function updateContractsByExpiry() {
    const today = new Date();
    const endOf2024 = new Date('2024-12-31');
    const endOfH1_2025 = new Date('2025-06-30');
    const endOf2025 = new Date('2025-12-31');
    
    let expiredOr2024 = 0;
    let h1_2025 = 0;
    let h2_2025 = 0;
    let year2026 = 0;
    
    allContracts.forEach(contract => {
        const endDate = new Date(contract.endDate);
        
        if (endDate <= endOf2024) {
            expiredOr2024++;
        } else if (endDate <= endOfH1_2025) {
            h1_2025++;
        } else if (endDate <= endOf2025) {
            h2_2025++;
        } else {
            year2026++;
        }
    });
    
    // Update numbers in cards (already set in HTML, but we can update them here)
    console.log(`2024: ${expiredOr2024}, H1 2025: ${h1_2025}, H2 2025: ${h2_2025}, 2026: ${year2026}`);
}

// ======================================
// Show Contracts by Expiry Period
// ======================================
function showContractsByExpiry(period) {
    const detailsSection = document.getElementById('expiry-details');
    detailsSection.classList.remove('hidden');
    
    let contracts = [];
    let title = '';
    
    switch(period) {
        case '2024':
            contracts = allContracts.filter(c => new Date(c.endDate) <= new Date('2024-12-31'));
            title = 'العقود المنتهية أو القريبة من الانتهاء (قبل نهاية 2024)';
            break;
        case '2025-H1':
            contracts = allContracts.filter(c => {
                const endDate = new Date(c.endDate);
                return endDate > new Date('2024-12-31') && endDate <= new Date('2025-06-30');
            });
            title = 'العقود التي تنتهي في النصف الأول من 2025 (يناير - يونيو)';
            break;
        case '2025-H2':
            contracts = allContracts.filter(c => {
                const endDate = new Date(c.endDate);
                return endDate > new Date('2025-06-30') && endDate <= new Date('2025-12-31');
            });
            title = 'العقود التي تنتهي في النصف الثاني من 2025 (يوليو - ديسمبر)';
            break;
        case '2026':
            contracts = allContracts.filter(c => new Date(c.endDate) > new Date('2025-12-31'));
            title = 'العقود التي تنتهي في 2026 أو بعدها';
            break;
    }
    
    displayContractsList(contracts, title, detailsSection);
}

// ======================================
// Display Contracts List
// ======================================
function displayContractsList(contracts, title, container) {
    let html = `
        <div class="details-header">
            <h3>${title}</h3>
            <p>عدد العقود: <strong>${contracts.length}</strong></p>
        </div>
    `;
    
    contracts.forEach(contract => {
        html += `
            <div class="contract-card" onclick="showContractDetails(${allContracts.indexOf(contract)})">
                <h4>${contract.university} - ${contract.program}</h4>
                <div class="contract-info">
                    <div class="info-item">
                        <span class="info-label">الدرجة العلمية:</span>
                        <span class="info-value">${contract.degree}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">الإدارة المختصة:</span>
                        <span class="info-value">${contract.department}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">بداية العقد:</span>
                        <span class="info-value">${formatDate(contract.startDate)}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">انتهاء العقد:</span>
                        <span class="info-value">${formatDate(contract.endDate)}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">نسبة الإنجاز:</span>
                        <span class="info-value">${contract.progress || 'غير محدد'}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">حالة الوثائق:</span>
                        <span class="info-value">${contract.docReceiveStatus}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ======================================
// Update Universities List
// ======================================
function updateUniversitiesList() {
    const universitiesMap = new Map();
    
    allContracts.forEach(contract => {
        if (!universitiesMap.has(contract.university)) {
            universitiesMap.set(contract.university, {
                name: contract.university,
                count: 0,
                contracts: []
            });
        }
        
        const uni = universitiesMap.get(contract.university);
        uni.count++;
        uni.contracts.push(contract);
    });
    
    // Sort by count (descending)
    const universitiesArray = Array.from(universitiesMap.values())
        .sort((a, b) => b.count - a.count);
    
    const container = document.getElementById('universities-list');
    let html = '';
    
    universitiesArray.forEach(uni => {
        html += `
            <div class="university-card" onclick="showUniversityDetails('${uni.name}')">
                <h3>${uni.name}</h3>
                <div class="uni-stats">
                    <div class="uni-stat">
                        <span class="uni-stat-number">${uni.count}</span>
                        <span class="uni-stat-label">عدد العقود</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ======================================
// Show University Details
// ======================================
function showUniversityDetails(universityName) {
    const contracts = allContracts.filter(c => c.university === universityName);
    const container = document.getElementById('university-details');
    
    displayContractsList(contracts, `تفاصيل عقود ${universityName}`, container);
}

// ======================================
// Update Specialization Counts
// ======================================
function updateSpecializationCounts() {
    const deptMap = {
        'engineering': 'إدارة برامج العلوم الهندسية وعلوم الحاسب',
        'health': 'إدارة برامج العلوم الصحية',
        'humanities': 'إدارة برامج العلوم الإنسانية والتربوية',
        'islamic': 'إدارة برامج العلوم الإسلامية والعربية',
        'science': 'إدارة برامج التخصصات العلمية'
    };
    
    Object.keys(deptMap).forEach(key => {
        const count = allContracts.filter(c => c.department === deptMap[key]).length;
        document.getElementById(`${key}-count`).textContent = `${count} عقد`;
    });
}

// ======================================
// Show Specialization Details
// ======================================
function showSpecialization(type) {
    const deptMap = {
        'engineering': 'إدارة برامج العلوم الهندسية وعلوم الحاسب',
        'health': 'إدارة برامج العلوم الصحية',
        'humanities': 'إدارة برامج العلوم الإنسانية والتربوية',
        'islamic': 'إدارة برامج العلوم الإسلامية والعربية',
        'science': 'إدارة برامج التخصصات العلمية'
    };
    
    const contracts = allContracts.filter(c => c.department === deptMap[type]);
    const container = document.getElementById('specialization-details');
    
    displayContractsList(contracts, `عقود ${deptMap[type]}`, container);
}

// ======================================
// Update Department Counts
// ======================================
function updateDepartmentCounts() {
    const departments = [
        'إدارة برامج العلوم الإنسانية والتربوية',
        'إدارة برامج العلوم الهندسية وعلوم الحاسب',
        'إدارة برامج العلوم الصحية',
        'إدارة برامج العلوم الإسلامية والعربية',
        'إدارة برامج التخصصات العلمية'
    ];
    
    const idMap = {
        'إدارة برامج العلوم الإنسانية والتربوية': 'dept-hum-count',
        'إدارة برامج العلوم الهندسية وعلوم الحاسب': 'dept-eng-count',
        'إدارة برامج العلوم الصحية': 'dept-health-count',
        'إدارة برامج العلوم الإسلامية والعربية': 'dept-isl-count',
        'إدارة برامج التخصصات العلمية': 'dept-sci-count'
    };
    
    departments.forEach(dept => {
        const count = allContracts.filter(c => c.department === dept).length;
        document.getElementById(idMap[dept]).textContent = count;
    });
}

// ======================================
// Show Department Contracts
// ======================================
function showDepartmentContracts(deptName) {
    const contracts = allContracts.filter(c => c.department === deptName);
    const container = document.getElementById('department-details');
    
    displayContractsList(contracts, `عقود ${deptName}`, container);
}

// ======================================
// Search by Date
// ======================================
function searchByDate() {
    const searchDate = document.getElementById('search-date').value;
    if (!searchDate) {
        alert('الرجاء اختيار تاريخ للبحث');
        return;
    }
    
    const contracts = allContracts.filter(c => 
        c.startDate === searchDate || 
        c.endDate === searchDate ||
        c.docReceiveDate === searchDate ||
        c.updatedDocDate === searchDate ||
        c.verificationVisitDate === searchDate ||
        c.reviewersVisitDate === searchDate
    );
    
    const container = document.getElementById('date-results');
    displayContractsList(contracts, `العقود في تاريخ ${formatDate(searchDate)}`, container);
}

// ======================================
// Search by Date Range
// ======================================
function searchByDateRange(type, startDate, endDate) {
    let contracts = [];
    
    if (type === 'start') {
        contracts = allContracts.filter(c => {
            const date = new Date(c.startDate);
            return date >= new Date(startDate) && date <= new Date(endDate);
        });
    } else {
        contracts = allContracts.filter(c => {
            const date = new Date(c.endDate);
            return date >= new Date(startDate) && date <= new Date(endDate);
        });
    }
    
    const container = document.getElementById('date-results');
    const title = type === 'start' ? 
        `العقود التي بدأت من ${formatDate(startDate)} إلى ${formatDate(endDate)}` :
        `العقود التي تنتهي من ${formatDate(startDate)} إلى ${formatDate(endDate)}`;
    
    displayContractsList(contracts, title, container);
}

// ======================================
// Update All Contracts Table
// ======================================
function updateAllContractsTable() {
    const tbody = document.getElementById('all-contracts-tbody');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageContracts = allContracts.slice(startIndex, endIndex);
    
    let html = '';
    
    pageContracts.forEach((contract, index) => {
        const globalIndex = startIndex + index;
        const statusClass = getStatusClass(contract.endDate);
        
        html += `
            <tr>
                <td>${contract.university}</td>
                <td>${contract.program}</td>
                <td>${contract.degree}</td>
                <td>${contract.department}</td>
                <td>${formatDate(contract.startDate)}</td>
                <td>${formatDate(contract.endDate)}</td>
                <td>${contract.progress || 'غير محدد'}</td>
                <td><span class="contract-status ${statusClass}">${contract.status}</span></td>
                <td><button class="action-btn" onclick="showContractDetails(${globalIndex})">التفاصيل</button></td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
    updatePagination();
}

// ======================================
// Update Pagination
// ======================================
function updatePagination() {
    const totalPages = Math.ceil(allContracts.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    
    let html = `
        <button onclick="goToPage(1)" ${currentPage === 1 ? 'disabled' : ''}>الأولى</button>
        <button onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>السابق</button>
    `;
    
    // Show page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        html += `<button onclick="goToPage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
    }
    
    html += `
        <button onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>التالي</button>
        <button onclick="goToPage(${totalPages})" ${currentPage === totalPages ? 'disabled' : ''}>الأخيرة</button>
    `;
    
    pagination.innerHTML = html;
}

// ======================================
// Go to Page
// ======================================
function goToPage(page) {
    currentPage = page;
    updateAllContractsTable();
    document.getElementById('all-contracts').scrollIntoView({ behavior: 'smooth' });
}

// ======================================
// Show Contract Details (Modal)
// ======================================
function showContractDetails(index) {
    const contract = allContracts[index];
    const modal = document.getElementById('contractModal');
    const modalBody = document.getElementById('modal-body');
    
    let html = `
        <div class="modal-header">
            <h2>${contract.university}</h2>
            <p>${contract.program}</p>
        </div>
        
        <div class="modal-section">
            <h3>المعلومات الأساسية</h3>
            <div class="modal-grid">
                <div class="info-item">
                    <span class="info-label">الجامعة/الكلية:</span>
                    <span class="info-value">${contract.university}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">اسم البرنامج:</span>
                    <span class="info-value">${contract.program}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">الدرجة العلمية:</span>
                    <span class="info-value">${contract.degree}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">الإدارة المختصة:</span>
                    <span class="info-value">${contract.department}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">حالة العقد:</span>
                    <span class="info-value">${contract.status}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">نسبة الإنجاز:</span>
                    <span class="info-value">${contract.progress || 'غير محدد'}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>مواعيد العقد</h3>
            <div class="modal-grid">
                <div class="info-item">
                    <span class="info-label">بداية سريان/تمديد العقد:</span>
                    <span class="info-value">${formatDate(contract.startDate)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">انتهاء سريان العقد:</span>
                    <span class="info-value">${formatDate(contract.endDate)}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>استلام الوثائق</h3>
            <div class="modal-grid">
                <div class="info-item">
                    <span class="info-label">تاريخ استلام الوثائق:</span>
                    <span class="info-value">${contract.docReceiveDate ? formatDate(contract.docReceiveDate) : 'لم يتم التسليم'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">حالة استلام الوثائق:</span>
                    <span class="info-value">${contract.docReceiveStatus}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">تاريخ استلام الوثائق المحدثة:</span>
                    <span class="info-value">${contract.updatedDocDate ? formatDate(contract.updatedDocDate) : 'لم يتم التسليم'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">حالة الوثائق المحدثة:</span>
                    <span class="info-value">${contract.updatedDocStatus}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>الزيارات المجدولة</h3>
            <div class="modal-grid">
                <div class="info-item">
                    <span class="info-label">التاريخ المجدول لزيارة التحقق:</span>
                    <span class="info-value">${contract.verificationVisitDate ? formatDate(contract.verificationVisitDate) : 'غير محدد'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">التاريخ المجدول لزيارة المراجعين:</span>
                    <span class="info-value">${contract.reviewersVisitDate ? formatDate(contract.reviewersVisitDate) : 'غير محدد'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">حالة زيارة المراجعين:</span>
                    <span class="info-value">${contract.reviewersVisitStatus || 'غير محدد'}</span>
                </div>
            </div>
        </div>
    `;
    
    modalBody.innerHTML = html;
    modal.classList.add('show');
}

// ======================================
// Setup Modal
// ======================================
function setupModal() {
    const modal = document.getElementById('contractModal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.onclick = function() {
        modal.classList.remove('show');
    };
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };
}

// ======================================
// Setup Search and Filters
// ======================================
function setupSearchAndFilters() {
    // University search
    document.getElementById('uni-search').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.university-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
    
    // All contracts search
    document.getElementById('all-contracts-search').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm === '') {
            // Reset to full list
            updateAllContractsTable();
        } else {
            // Filter contracts
            const filtered = allContracts.filter(c => 
                c.university.toLowerCase().includes(searchTerm) ||
                c.program.toLowerCase().includes(searchTerm) ||
                c.degree.toLowerCase().includes(searchTerm) ||
                c.department.toLowerCase().includes(searchTerm)
            );
            
            displayFilteredContracts(filtered);
        }
    });
    
    // Filter change handlers
    document.getElementById('filter-university').addEventListener('change', applyFilters);
    document.getElementById('filter-department').addEventListener('change', applyFilters);
    document.getElementById('filter-degree').addEventListener('change', applyFilters);
}

// ======================================
// Populate Filters
// ======================================
function populateFilters() {
    // Universities
    const universities = [...new Set(allContracts.map(c => c.university))].sort();
    const uniSelect = document.getElementById('filter-university');
    universities.forEach(uni => {
        const option = document.createElement('option');
        option.value = uni;
        option.textContent = uni;
        uniSelect.appendChild(option);
    });
    
    // Departments
    const departments = [...new Set(allContracts.map(c => c.department))].sort();
    const deptSelect = document.getElementById('filter-department');
    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        deptSelect.appendChild(option);
    });
    
    // Degrees
    const degrees = [...new Set(allContracts.map(c => c.degree))].sort();
    const degreeSelect = document.getElementById('filter-degree');
    degrees.forEach(degree => {
        const option = document.createElement('option');
        option.value = degree;
        option.textContent = degree;
        degreeSelect.appendChild(option);
    });
}

// ======================================
// Apply Filters
// ======================================
function applyFilters() {
    const uniFilter = document.getElementById('filter-university').value;
    const deptFilter = document.getElementById('filter-department').value;
    const degreeFilter = document.getElementById('filter-degree').value;
    
    let filtered = allContracts;
    
    if (uniFilter) {
        filtered = filtered.filter(c => c.university === uniFilter);
    }
    
    if (deptFilter) {
        filtered = filtered.filter(c => c.department === deptFilter);
    }
    
    if (degreeFilter) {
        filtered = filtered.filter(c => c.degree === degreeFilter);
    }
    
    displayFilteredContracts(filtered);
}

// ======================================
// Display Filtered Contracts
// ======================================
function displayFilteredContracts(contracts) {
    const tbody = document.getElementById('all-contracts-tbody');
    let html = '';
    
    contracts.forEach((contract, index) => {
        const statusClass = getStatusClass(contract.endDate);
        
        html += `
            <tr>
                <td>${contract.university}</td>
                <td>${contract.program}</td>
                <td>${contract.degree}</td>
                <td>${contract.department}</td>
                <td>${formatDate(contract.startDate)}</td>
                <td>${formatDate(contract.endDate)}</td>
                <td>${contract.progress || 'غير محدد'}</td>
                <td><span class="contract-status ${statusClass}">${contract.status}</span></td>
                <td><button class="action-btn" onclick="showContractDetails(${allContracts.indexOf(contract)})">التفاصيل</button></td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html || '<tr><td colspan="9" class="text-center">لا توجد نتائج</td></tr>';
    
    // Hide pagination when filtering
    document.getElementById('pagination').innerHTML = `<p>عدد النتائج: ${contracts.length}</p>`;
}

// ======================================
// Refresh Tab Content
// ======================================
function refreshTabContent(tabId) {
    switch(tabId) {
        case 'universities':
            updateUniversitiesList();
            break;
        case 'all-contracts':
            currentPage = 1;
            updateAllContractsTable();
            break;
    }
}

// ======================================
// Utility Functions
// ======================================
function formatDate(dateString) {
    if (!dateString) return 'غير محدد';
    
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

function getStatusClass(endDate) {
    if (!endDate) return 'status-active';
    
    const end = new Date(endDate);
    const today = new Date();
    const diffDays = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'status-danger';
    if (diffDays < 180) return 'status-warning';
    return 'status-active';
}

// ======================================
// Export Functions (Optional)
// ======================================
function exportToExcel() {
    // يمكن إضافة وظيفة التصدير لاحقاً
    alert('سيتم إضافة وظيفة التصدير قريباً');
}

function printReport() {
    window.print();
}