const url = "https://benhvienthammydonga.vn/";

const dataDoctor = [
    {
        id: 1,
        name: "TS.BS Park Hyo Jin",
        position: " Trưởng khoa PTTM Bệnh viện thẩm mỹ Đông Á",
        image: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/bs1.png`,
        imageModal: "images/doctor1.png",
        category: "Phẫu thuật thẩm mỹ",
        showHome: true,
        imageRegion: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/icon-korea.png`,
        description: "<ul>\n<li>content</li>\n</ul>\n",
        dataModal: "<ul>\n<li>content</li>\n</ul>\n"
    },
    {
        id: 2,
        name: "TS.BS Park Hyo Jin",
        position: " Trưởng khoa PTTM Bệnh viện thẩm mỹ Đông Á",
        image: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/bs1.png`,
        imageModal: "images/doctor1.png",
        category: "Phẫu thuật thẩm mỹ",
        showHome: true,
        imageRegion: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/icon-korea.png`,
        description: "<ul>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n</ul>\n",
        dataModal: "<ul>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n</ul>\n"
    },
    {
      id: 3,
      name: "TS.BS Park Hyo Jin",
      position: " Trưởng khoa PTTM Bệnh viện thẩm mỹ Đông Á",
      image: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/bs1.png`,
      imageModal: "images/doctor1.png",
      category: "Phẫu thuật thẩm mỹ",
      showHome: true,
      imageRegion: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/icon-korea.png`,
      description: "<ul>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n</ul>\n",
      dataModal: "<ul>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n</ul>\n"
  }
]

const dataDoctorHome = dataDoctor.filter(item => {
  return item.showHome === true;
});


const showModal = (id, arr) => {
  let html = "";
  let data = arr.filter((item) => {
    return item.id == id;
  });
  html = `
      <div class="modal popupdoctor_da_1_0_0" id="modal-doctor" style="display: flex">
          <div class="modal-bg"></div>
          <div class="modal-box animate-pop popupdoctor_da_1_0_0__box">
              <div class="popupdoctor_da_1_0_0__header">
                  <div class="modal-close popupdoctor_da_1_0_0__close">&times;</div>
                  <div class="popupdoctor_da_1_0_0__title">
                      <div class="popupdoctor_da_1_0_0__pic">
                          <img src="${data[0].imageModal}" alt="">
                      </div>
                      <div class="popupdoctor_da_1_0_0__info">
                          ${data[0].name}
                          <p>${data[0].position}</p>
                      </div>
                  </div>
              </div>
              <div class="popupdoctor_da_1_0_0__body">
                ${data[0].dataModal}
              </div>
              <div class="popupdoctor_da_1_0_0__regist">
                  <a href="#">
                      <div class="popupdoctor_da_1_0_0__coating">
                          <p>Đăng ký khám</p>
                      </div>
                      <div class="popupdoctor_da_1_0_0__iconReg">
                          <img width="12" height="15" src="images/icon.png" alt="">
                      </div>
                  </a>
              </div>
          </div>
      </div>
     `;
  document.getElementsByClassName("doctor_da_1_0_0")[0].insertAdjacentHTML("beforeend", html);
};

const renderData = (arr) => {
  let html = "";
  for (itemData of arr) {
    html += `
        <div class="doctor_da_1_0_0__item modal-btn" data-id="${itemData.id}">
            <div class="doctor_da_1_0_0__img">
                <img width="110" height="110" src="${itemData.image}" alt="">
            </div>
            <div class="doctor_da_1_0_0__content">
                <h3 class="doctor_da_1_0_0__name">
                    <p>${itemData.name}</p>
                </h3>
                <span>
                    ${itemData.position}
                </span>
                ${
                  itemData.imageRegion === "none"
                    ? ""
                    : `<div class="doctor_da_1_0_0__country"><img width="50" height="26" src="${itemData.imageRegion}" alt=""></div>`
                }
            </div>
            <div class="doctor_da_1_0_0__icon"></div>
        </div>
        `;
  }
  return html;
};

document.getElementsByClassName("doctor_da_1_0_0__box")[0].innerHTML = renderData(dataDoctorHome);
const popBtn = document.querySelectorAll(".doctor_da_1_0_0__item");
for (let i = 0; i < popBtn.length; i++) {
  popBtn[i].addEventListener("click", () => {
    const idPop = popBtn[i].getAttribute('data-id');
    showModal(idPop, dataDoctorHome);
    document.querySelectorAll(".popupdoctor_da_1_0_0__close")[0].addEventListener("click", () => {
        document.getElementById("modal-doctor").remove();
      });
      window.onclick = (e) => {
        if (e.target == document.getElementsByClassName("modal-bg")[0]) {
          document.getElementById("modal-doctor").remove();
        }
      };
  });
}