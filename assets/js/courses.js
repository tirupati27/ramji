// Comprehensive Single Source Configuration for Courses
const coursesData = [
  {
    id: 101,
    title: "Full-Stack Web Bootcamp 2026",
    tagline:
      "Master front-end and back-end development through hands-on projects and modern workflows.",
    description:
      "Build real-world web applications from scratch using HTML, CSS, JS, and modern backend frameworks.",
    image:
      "https://via.placeholder.com/400x220/1e293b/ffffff?text=Full-Stack+Bootcamp",
    originalPrice: "$120.00",
    currentPrice: "$29.99",
    isNew: true,
    rating: "4.9",
    ratingsCount: "1,240 ratings",
    students: "8,500+ students",
    language: "English",
    skillsList: [
      "Modern HTML5, CSS3, & Flexbox/Grid",
      "JavaScript ES6+ & Async Programming",
      "REST APIs & Node.js Backends",
      "Database management & deployment",
    ],
    syllabus: [
      {
        module: "Module 1: Front-End Foundations",
        content:
          "12 lectures • HTML structure, CSS layout techniques, and Bootstrap framework integration.",
      },
      {
        module: "Module 2: JavaScript Mastery",
        content:
          "18 lectures • Variables, functions, DOM manipulation, promises, and API consumption.",
      },
    ],
  },
  {
    id: 102,
    title: "Python for Data Science & AI",
    tagline:
      "Unlock the power of data automation and machine learning algorithms.",
    description:
      "Learn Python basics, data visualization, machine learning models, and automated scripting.",
    image:
      "https://via.placeholder.com/400x220/1e293b/ffffff?text=Python+%26+AI",
    originalPrice: "$89.99",
    currentPrice: "$19.99",
    isNew: false,
    rating: "4.8",
    ratingsCount: "980 ratings",
    students: "6,200+ students",
    language: "English",
    skillsList: [
      "Core Python Syntax & Libraries",
      "Pandas & Data Visualization",
      "Introduction to Machine Learning",
      "Automated Scripting workflows",
    ],
    syllabus: [
      {
        module: "Module 1: Python Essentials",
        content: "10 lectures • Data structures, loops, and custom functions.",
      },
      {
        module: "Module 2: Data Analysis",
        content: "14 lectures • Working with Pandas, NumPy, and charting data.",
      },
    ],
  },
  {
    id: 103,
    title: "Game Development Fundamentals",
    tagline: "Design, code, and publish engaging 2D and 3D virtual worlds.",
    description:
      "Design, code, and publish 2D and 3D games step-by-step with practical projects.",
    image:
      "https://via.placeholder.com/400x220/1e293b/ffffff?text=Game+Development",
    originalPrice: "$99.99",
    currentPrice: "$24.99",
    isNew: false,
    rating: "4.7",
    ratingsCount: "750 ratings",
    students: "4,100+ students",
    language: "English",
    skillsList: [
      "Game Engine Interfaces",
      "2D Physics & Collision logic",
      "Scripting interactive gameplay",
      "Publishing builds to web/desktop",
    ],
    syllabus: [
      {
        module: "Module 1: Engine Basics",
        content: "8 lectures • Scenes, nodes, and asset imports.",
      },
      {
        module: "Module 2: Game Mechanics",
        content:
          "15 lectures • Player controls, scoring systems, and UI overlays.",
      },
    ],
  },
];

// Renders the Course Grid View into the root app container
function renderCoursesGrid() {
  const rootContainer = document.getElementById("app-view-root");
  if (!rootContainer) return;

  rootContainer.innerHTML = `
    <div class="text-center mb-5">
      <h2 class="fw-bold text-white">Featured Courses</h2>
      <p style="color: var(--text-muted);">Master new skills with step-by-step practical guides.</p>
    </div>
    <div class="row g-4" id="courses-container">
      ${coursesData
        .map((course) => {
          const badgeHTML = course.isNew
            ? `
          <div class="position-absolute top-0 end-0 m-3">
            <span class="badge bg-danger text-uppercase badge-flashing rounded-pill px-3 py-2 fw-bold">
              <i class="bi bi-lightning-fill me-1"></i>New
            </span>
          </div>`
            : "";

          return `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 dark-card position-relative overflow-hidden">
              ${badgeHTML}
              <img src="${course.image}" class="card-img-top" alt="${course.title}">
              <div class="card-body d-flex flex-column p-4">
                <h5 class="card-title fw-bold text-white mb-2">${course.title}</h5>
                <p class="card-text small flex-grow-1" style="color: var(--text-muted);">${course.description}</p>
                <div class="pt-3 border-top border-secondary border-opacity-50 d-flex align-items-center justify-content-between">
                  <div>
                    <span class="price-original me-2">${course.originalPrice}</span>
                    <span class="price-current">${course.currentPrice}</span>
                  </div>
                  <button data-course-id="${course.id}" class="btn btn-gradient btn-sm rounded-pill px-3 fw-semibold view-details-btn">
                    View Details <i class="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
  `;

  // Attach event listeners to view buttons
  document.querySelectorAll(".view-details-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const courseId = parseInt(
        e.currentTarget.getAttribute("data-course-id"),
        10,
      );
      viewCourseDetails(courseId);
    });
  });
}

// Renders Single Course Details View into the root app container
function viewCourseDetails(courseId) {
  const course = coursesData.find((c) => c.id === courseId);
  if (!course) return;

  const rootContainer = document.getElementById("app-view-root");
  if (!rootContainer) return;

  rootContainer.innerHTML = `
    <div class="mb-4">
      <button id="back-to-grid-btn" class="btn btn-dark border-secondary btn-sm rounded-pill px-3 shadow">
        <i class="bi bi-arrow-left me-1"></i> Back to Profile & Courses
      </button>
    </div>

    <div class="row g-4">
      <!-- Left Column: Info & Syllabus -->
      <div class="col-lg-8">
        <div class="card dark-card p-4 mb-4">
          <span class="badge bg-warning text-dark mb-2 fw-bold text-uppercase px-3 py-2 rounded-pill w-fit">
            <i class="bi bi-star-fill me-1"></i> Bestseller
          </span>
          <h1 class="fw-bold mb-3 text-white display-6">${course.title}</h1>
          <p class="lead mb-4" style="color: var(--text-muted);">${course.tagline}</p>
          <div class="d-flex flex-wrap align-items-center gap-4 text-warning mb-4">
            <div><i class="bi bi-star-fill"></i> ${course.rating} <span class="text-white-50">(${course.ratingsCount})</span></div>
            <div style="color: var(--text-muted);"><i class="bi bi-people-fill text-white me-1"></i> ${course.students}</div>
            <div style="color: var(--text-muted);"><i class="bi bi-globe text-white me-1"></i> ${course.language}</div>
          </div>
        </div>

        <div class="card dark-card p-4 mb-4">
          <h4 class="fw-bold text-white mb-3"><i class="bi bi-check2-square me-2" style="color: var(--accent-neon);"></i>What You Will Learn</h4>
          <ul class="list-unstyled row g-3 mb-0" style="color: var(--text-muted);">
            ${course.skillsList.map((skill) => `<li class="col-md-6"><i class="bi bi-check-circle-fill me-2" style="color: var(--accent-neon);"></i> ${skill}</li>`).join("")}
          </ul>
        </div>

        <div class="card dark-card p-4">
          <h4 class="fw-bold text-white mb-3"><i class="bi bi-journal-code me-2" style="color: var(--accent-purple);"></i>Course Syllabus</h4>
          <div class="accordion accordion-flush" id="dynamicSyllabus">
            ${course.syllabus
              .map(
                (s, index) => `
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button ${index !== 0 ? "collapsed" : ""} fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#mod-${index}">
                    ${s.module}
                  </button>
                </h2>
                <div id="mod-${index}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}" data-bs-parent="#dynamicSyllabus">
                  <div class="accordion-body" style="color: var(--text-muted);">${s.content}</div>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- Right Column: Sticky Pricing & Checkout -->
      <div class="col-lg-4">
        <div class="card dark-card p-4 sticky-top" style="top: 80px;">
          <img src="${course.image}" class="card-img-top rounded mb-3" alt="Course Preview">
          <div class="mb-3 d-flex align-items-baseline justify-content-between">
            <div>
              <span class="price-original me-2">${course.originalPrice}</span>
              <span class="price-current">${course.currentPrice}</span>
            </div>
            <span class="badge bg-danger text-white">75% OFF</span>
          </div>
          <button class="btn btn-gradient btn-lg w-100 mb-3 fw-bold rounded-pill shadow-sm">Enroll Now</button>
          <p class="text-center small mb-0" style="color: var(--text-muted);"><i class="bi bi-shield-check me-1"></i> 30-Day Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  `;

  // Attach event listener to the back button right after rendering
  const backBtn = document.getElementById("back-to-grid-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      renderCoursesGrid();
    });
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCoursesGrid();
});
