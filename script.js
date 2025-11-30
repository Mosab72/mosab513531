// بيانات العقود الكاملة
const contractsData = {
    "الجامعة الإسلامية": [
        {
            name: "الاقتصاد",
            degree: "ماجستير",
            startDate: "2024-03-07",
            endDate: "2025-03-06",
            department: "إدارة برامج العلوم الإنسانية والتربوية",
            progress: "40% - زيارة التحقق",
            visitDate: "2026-01-25",
            visitStatus: "متأخر"
        },
        {
            name: "الإعلام والاتصال",
            degree: "ماجستير",
            startDate: "2024-03-07",
            endDate: "2025-03-06",
            department: "إدارة برامج العلوم الإنسانية والتربوية",
            progress: "40% - زيارة التحقق",
            visitDate: "2026-02-01",
            visitStatus: "متأخر"
        },
        {
            name: "أصول التربية الإسلامية",
            degree: "ماجستير",
            startDate: "2024-03-07",
            endDate: "2025-03-06",
            department: "إدارة برامج العلوم الإنسانية والتربوية",
            progress: "40% - زيارة التحقق",
            visitDate: "2025-11-30",
            visitStatus: "متأخر"
        }
    ],
    // يمكن إضافة المزيد من الجامعات هنا
};

// بيانات التخصصات
const majorsData = {
    engineering: [
        { name: "علوم الحاسب", count: 18 },
        { name: "هندسة البرمجيات", count: 12 },
        { name: "الأمن السيبراني", count: 15 },
        { name: "تقنية المعلومات", count: 20 },
        { name: "نظم المعلومات", count: 14 },
        { name: "هندسة الحاسب", count: 11 },
        { name: "الهندسة المعمارية", count: 9 },
        { name: "التصميم الداخلي", count: 8 },
        { name: "التصميم الجرافيكي", count: 7 },
        { name: "الهندسة الميكانيكية", count: 6 },
        { name: "الهندسة الكهربائية", count: 5 },
        { name: "الهندسة الصناعية", count: 4 },
        { name: "الإدارة الهندسية", count: 6 },
        { name: "هندسة البرمجيات", count: 5 }
    ],
    health: [
        { name: "الطب والجراحة", count: 8 },
        { name: "طب الأسنان", count: 6 },
        { name: "دكتور صيدلة", count: 12 },
        { name: "التمريض", count: 15 },
        { name: "العلاج الطبيعي", count: 14 },
        { name: "علوم المختبرات", count: 10 },
        { name: "الأشعة التشخيصية", count: 8 },
        { name: "الصحة العامة", count: 7 },
        { name: "التغذية السريرية", count: 6 },
        { name: "العلاج التنفسي", count: 5 },
        { name: "البصريات", count: 4 },
        { name: "تقنية الأجهزة الطبية", count: 3 }
    ],
    humanities: [
        { name: "إدارة الأعمال", count: 25 },
        { name: "المحاسبة", count: 18 },
        { name: "التسويق", count: 15 },
        { name: "التمويل", count: 12 },
        { name: "اللغة الإنجليزية", count: 14 },
        { name: "علم النفس", count: 10 },
        { name: "علم الاجتماع", count: 8 },
        { name: "التربية", count: 20 },
        { name: "الإعلام", count: 7 },
        { name: "علم المعلومات", count: 6 }
    ],
    islamic: [
        { name: "الشريعة", count: 8 },
        { name: "الفقه", count: 7 },
        { name: "أصول الفقه", count: 6 },
        { name: "العقيدة", count: 5 },
        { name: "القرآن وعلومه", count: 4 },
        { name: "الحديث", count: 4 },
        { name: "اللغة العربية", count: 4 }
    ],
    science: [
        { name: "الرياضيات", count: 8 },
        { name: "الفيزياء", count: 6 },
        { name: "الكيمياء", count: 7 },
        { name: "الأحياء", count: 5 },
        { name: "الجيولوجيا", count: 4 }
    ]
};

// دالة فتح التبويبات
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    // تحميل البيانات حسب التبويب
    if (tabName === 'majors') {
        loadMajorsData();
    }
}

// دالة تصفية الجامعات
function filterUniversities() {
    const input = document.getElementById('universitySearch');
    const filter = input.value.toUpperCase();
    const cards = document.getElementsByClassName('university-card');

    for (let i = 0; i < cards.length; i++) {
        const txtValue = cards[i].textContent || cards[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// دالة عرض تفاصيل الجامعة
function showUniversityDetails(universityName) {
    alert('عرض تفاصيل: ' + universityName + '\n\nسيتم فتح صفحة منفصلة بكل تفاصيل عقود الجامعة');
    // يمكن هنا إضافة modal أو صفحة جديدة
}

// دالة تبديل فئة التخصصات
function toggleMajorCategory(category) {
    const majorsList = document.getElementById(category + '-majors');
    majorsList.classList.toggle('active');
}

// دالة تحميل بيانات التخصصات
function loadMajorsData() {
    // تحميل التخصصات الهندسية
    loadMajorsList('engineering', majorsData.engineering);
    
    // تحميل التخصصات الصحية
    loadMajorsList('health', majorsData.health);
    
    // تحميل العلوم الإنسانية
    loadMajorsList('humanities', majorsData.humanities);
    
    // تحميل العلوم الإسلامية
    loadMajorsList('islamic', majorsData.islamic);
    
    // تحميل التخصصات العلمية
    loadMajorsList('science', majorsData.science);
}

// دالة تحميل قائمة التخصصات
function loadMajorsList(category, data) {
    const container = document.getElementById(category + '-majors');
    if (!container || container.children.length > 0) return; // تجنب التكرار
    
    container.innerHTML = '';
    data.forEach(major => {
        const majorItem = document.createElement('div');
        majorItem.className = 'major-item';
        majorItem.innerHTML = `
            <span class="major-name">${major.name}</span>
            <span class="major-count">${major.count} عقد</span>
        `;
        majorItem.onclick = () => showMajorDetails(major.name, major.count);
        container.appendChild(majorItem);
    });
}

// دالة عرض تفاصيل التخصص
function showMajorDetails(majorName, count) {
    alert(`التخصص: ${majorName}\nعدد العقود: ${count}\n\nسيتم عرض جميع العقود المرتبطة بهذا التخصص`);
}

// دالة البحث بتاريخ محدد
function searchByDate() {
    const dateInput = document.getElementById('specificDate');
    const searchDate = dateInput.value;
    
    if (!searchDate) {
        alert('الرجاء اختيار تاريخ للبحث');
        return;
    }
    
    const resultsContainer = document.getElementById('dateSearchResults');
    resultsContainer.innerHTML = `
        <div class="section-card">
            <div class="section-header moderate">
                <h3>نتائج البحث عن تاريخ: ${formatDate(searchDate)}</h3>
            </div>
            <div class="contracts-list">
                <div class="loading">جاري البحث...</div>
            </div>
        </div>
    `;
    
    // محاكاة البحث
    setTimeout(() => {
        resultsContainer.innerHTML = `
            <div class="section-card">
                <div class="section-header moderate">
                    <h3>نتائج البحث عن تاريخ: ${formatDate(searchDate)}</h3>
                    <span class="count-badge">5 عقود</span>
                </div>
                <div class="contracts-list">
                    <div class="contract-item">
                        <div class="contract-details">
                            <h4>مثال على عقد بهذا التاريخ</h4>
                            <p><strong>الجامعة:</strong> جامعة نموذجية</p>
                            <p><strong>التاريخ:</strong> ${formatDate(searchDate)}</p>
                        </div>
                    </div>
                    <div class="no-results">سيتم عرض جميع العقود المرتبطة بهذا التاريخ</div>
                </div>
            </div>
        `;
    }, 1000);
}

// دالة البحث بفترة زمنية
function searchByDateRange() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (!startDate || !endDate) {
        alert('الرجاء اختيار تاريخ البداية والنهاية');
        return;
    }
    
    if (startDate > endDate) {
        alert('تاريخ البداية يجب أن يكون قبل تاريخ النهاية');
        return;
    }
    
    const resultsContainer = document.getElementById('dateSearchResults');
    resultsContainer.innerHTML = `
        <div class="section-card">
            <div class="section-header moderate">
                <h3>نتائج البحث من ${formatDate(startDate)} إلى ${formatDate(endDate)}</h3>
            </div>
            <div class="contracts-list">
                <div class="loading">جاري البحث...</div>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        resultsContainer.innerHTML = `
            <div class="section-card">
                <div class="section-header moderate">
                    <h3>نتائج البحث من ${formatDate(startDate)} إلى ${formatDate(endDate)}</h3>
                    <span class="count-badge">15 عقد</span>
                </div>
                <div class="contracts-list">
                    <div class="no-results">سيتم عرض جميع العقود في هذه الفترة الزمنية</div>
                </div>
            </div>
        `;
    }, 1000);
}

// دالة عرض تفاصيل الإدارة
function showDepartmentDetails(departmentName) {
    alert('عرض تفاصيل: ' + departmentName + '\n\nسيتم عرض جميع العقود التابعة لهذه الإدارة');
}

// دالة تنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-SA', options);
}

// تحميل البيانات عند بدء الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل النظام بنجاح');
    console.log('إجمالي العقود: 445');
    
    // تفعيل أول تبويب
    document.querySelector('.tab-btn').click();
});

// دوال مساعدة إضافية
function showContractDetails(contractId) {
    console.log('عرض تفاصيل العقد:', contractId);
}

function exportToExcel() {
    alert('جاري تصدير البيانات إلى Excel...');
}

function exportToPDF() {
    window.print();
}

// معالج الأحداث العامة
window.addEventListener('load', function() {
    console.log('تم تحميل جميع الموارد');
});