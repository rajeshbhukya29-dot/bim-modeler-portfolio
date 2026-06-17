const galleryItems = [
  "280_MEN_CDO_BARRACKS_STAIRCASE",
  "ELECTRICAL_SUBSTATION",
  "ELECTRICAL_SUBSTATION_3D",
  "ELECTRICAL_SUBSTATION_ELEVATIONS",
  "ELECTRICAL_SUBSTATION_PLAN_2",
  "ELECTRICAL_SUBSTATION_PLAN",
  "ELECTRICAL_SUBSTATION_STAIRCASE",
  "MI_CSD_ELEVATIONS",
  "TYPE_III_QUARTERS_ELEVATIONS",
  "1_MI_CSD_MODEL",
  "1_OFFICER'S_MESS_3D",
  "1_OFFICER'S_MESS_3D_1",
  "1_TYPE_III_QUARTERS_FLOOR",
  "2_MI_CSD",
  "2_OFFICER'S_MESS_FLOOR_PLAN",
  "2_OFFICER'S_MESS_FLOOR_PLAN_1",
  "2_TYPE_III_QUARTERS",
  "3_OFFICER'S_MESS_STAIRCASE_1",
  "3_OFFICER'S_MESS_STAIRCASE",
  "3_TYPE_III_QUARTERS_2",
  "4_OFFICER'S_MESS_ELEVATIONS",
  "4_OFFICER'S_MESS_ELEVATIONS_1",
  "4_TYPE_III_QUARTERS_4_5_6",
  "5_TYPE_III_QUARTERS_7_TERRACE_HRL",
  "6_TYPE_III_QUARTERS_STAIRCASE",
  "280_MEN_CDO_BARRACKS_1",
  "280_MEN_CDO_BARRACKS_2",
  "280_MEN_CDO_BARRACKS_3",
  "280_MEN_CDO_BARRACKS_4",
  "280_MEN_CDO_BARRACKS_5",
  "280_MEN_CDO_BARRACKS_ELEVATIONS"
];

const galleryGrid = document.getElementById("projectsGrid");

if (galleryGrid) {
  galleryItems.forEach(fileName => {
    const title = fileName
      .replaceAll("_", " ")
      .replace(/\b\w/g, char => char.toUpperCase());

    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img
        src="assets/images/${fileName}.png"
        alt="${title}"
        onclick="openLightbox('assets/images/${fileName}.png')"
      >

      <div class="project-card-content">
        <h3>${title}</h3>
        <p>BIM / architectural drawing and construction documentation sheet.</p>

        <a
          href="assets/pdfs/${fileName}.pdf"
          target="_blank"
          class="pdf-btn"
        >
          View / Download PDF
        </a>
      </div>
    `;

    galleryGrid.appendChild(card);
  });
}

function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  if (lightbox && lightboxImg) {
    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
  }
}

const closeBtn = document.getElementById("closeBtn");
const lightbox = document.getElementById("lightbox");

if (closeBtn && lightbox) {
  closeBtn.onclick = function () {
    lightbox.style.display = "none";
  };
}

if (lightbox) {
  lightbox.onclick = function (event) {
    if (event.target.id === "lightbox") {
      lightbox.style.display = "none";
    }
  };
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && lightbox) {
    lightbox.style.display = "none";
  }
});
