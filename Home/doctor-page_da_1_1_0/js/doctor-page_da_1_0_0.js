const url = "https://benhvienthammydonga.vn/";

const dataDoctor = [
    {
        id: 1,
        name: "TS.BS Park Hyo Jin",
        position: " Trưởng khoa PTTM Bệnh viện thẩm mỹ Đông Á",
        image: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/bs1.png`,
        imageModal: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/doctor1.png`,
        category: "Điều trị - Trẻ hóa da",
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
        imageModal: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/doctor1.png`,
        category: "Phẫu thuật thẩm mỹ",
        showHome: true,
        imageRegion: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/icon-korea.png`,
        description: "<ul>\n<li>content 1</li>\n<li>content</li>\n<li>content</li>\n</ul>\n",
        dataModal: "<ul>\n<li>content 1</li>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n</ul>\n"
    },
    {
      id: 3,
      name: "TS.BS Park Hyo Jin",
      position: " Trưởng khoa PTTM Bệnh viện thẩm mỹ Đông Á",
      image: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/bs1.png`,
      imageModal: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/doctor1.png`,
      category: "Phẫu thuật thẩm mỹ",
      showHome: true,
      imageRegion: `${url}/wp-content/themes/SCI_Theme/Module/Home/doctor_da_1_0_0/images/icon-korea.png`,
      description: "<ul>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n</ul>\n",
      dataModal: "<ul>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n<li>content</li>\n</ul>\n"
  }
]

const categories = [];
dataDoctor.map(item => {
  categories.push(item.category);
});
const category =  categories.filter((item, index) => { 
  return categories.indexOf(item) === index
});

const renderTabs = (arr) => {
  let html = "";
  for (item of arr){
    html += `<div class="doctor_da_1_0_0__tablink" data-tab="${item}" onclick="renderData(this)">${item}</div>`;
  }
  return html;
};

document.getElementsByClassName("doctor_da_1_0_0__tabs")[0].innerHTML = renderTabs(category);


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
                          <img width="270" height="400" src="${data[0].imageModal}" alt="">
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
                          <img width="12" height="15" src="/wp-content/themes/SCI_Theme/Module/Home/doctor-page_da_1_0_0/images/icon.png" alt="">
                      </div>
                  </a>
              </div>
          </div>
      </div>
     `;
  document.getElementsByClassName("doctor_da_1_0_0")[0].insertAdjacentHTML("beforeend", html);
};

const renderData = (ele) => {
  const elements = document.querySelectorAll(".doctor_da_1_0_0__tablink");
  elements.forEach(function(element) {
    element.classList.remove("current");
  });
  ele.classList.add('current');
  const dataID = ele.getAttribute("data-tab");
  renderList(dataDoctor, dataID);
  clickPop();
};

const renderList = (arr, filter) => {
  let html = "";
  const dataTab = arr.filter(item => {
    return item.category === filter;
  });
  for (let dataIndex of dataTab) {
    html += `
      <div class="doctor_da_1_0_0__item">
          <div class="doctor_da_1_0_0__person">
              <img width="240" height="700" src="${dataIndex.imageModal}" alt="">
          </div>
          <div class="doctor_da_1_0_0__info">
              <div class="doctor_da_1_0_0__name">${dataIndex.name}
              ${
                dataIndex.imageRegion === "none"
                  ? ""
                  : `<div class="doctor_da_1_0_0__country"><img width="50" height="26" src="${dataIndex.imageRegion}" alt=""></div>`
              }
              </div>
              <div class="doctor_da_1_0_0__position">${dataIndex.position}</div>
              <div class="doctor_da_1_0_0__content">
                  ${dataIndex.description}
                  <a href="#" class="doctor_da_1_0_0__more" data-id="${dataIndex.id}">Xem thêm</a>
              </div>
          </div>
          <div class="doctor_da_1_0_0__reg">
              <div class="doctor_da_1_0_0__regist btn-2">
                  <a href="#">
                      <div class="doctor_da_1_0_0__coating">
                          <p>Đăng ký khám</p>
                      </div>
                      <div class="doctor_da_1_0_0__iconReg">
                          <img width="12" height="15" src="/wp-content/themes/SCI_Theme/Module/Home/doctor-page_da_1_0_0/images/icon.png" alt="">
                      </div>
                  </a>
              </div>
          </div>
      </div>
    `;
  }
  document.getElementById("box-data").innerHTML = html
}

const clickPop = () => {
  const popBtn = document.querySelectorAll(".doctor_da_1_0_0__more");
  for (let i = 0; i < popBtn.length; i++) {
    popBtn[i].addEventListener("click", () => {
      const idPop = popBtn[i].getAttribute('data-id');
      showModal(idPop, dataDoctor);
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
}

const elements = document.querySelectorAll(".doctor_da_1_0_0__tablink");
elements[0].classList.add('current');
renderList(dataDoctor, dataDoctor[0].category);
clickPop();
