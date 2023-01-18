const dataDoctor = [
  {
    id: 1,
    name: "TS.BS Park Hyo Jin",
    position: "Cố vấn chuyên môn Phẫu thuật thẩm mỹ",
    imageRegion: "images/icon-korea.png",
    image: "images/bs1.png",
    imageModal: "images/doctor1.png",
    dataModal: [
      {
        title: "CHỨC VỤ",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 1,
      },
      {
        title: "QUÁ TRÌNH HỌC TẬP VÀ CÔNG TÁC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 2,
      },
      {
        title: "KINH NGHIỆM LÀM VIỆC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 3,
      },
      {
        title: "CÁC DỊCH VỤ THẨM MỸ THỰC HIỆN",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 4,
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Mahmoud Ghofran",
    position: "Cố vấn chuyên môn Trẻ hóa da",
    imageRegion: "images/icon-switzerland.png",
    image: "images/bs2.png",
    imageModal: "images/doctor1.png",
    dataModal: [
      {
        title: "CHỨC VỤ",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 1,
      },
      {
        title: "QUÁ TRÌNH HỌC TẬP VÀ CÔNG TÁC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 2,
      },
      {
        title: "KINH NGHIỆM LÀM VIỆC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 3,
      },
      {
        title: "CÁC DỊCH VỤ THẨM MỸ THỰC HIỆN",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 4,
      },
    ],
  },
  {
    id: 3,
    name: "BS Felix Trần",
    position: "Giám đốc chuyên môn Phẫu thuật thẩm mỹ",
    imageRegion: "none",
    image: "images/bs3.png",
    imageModal: "images/doctor1.png",
    dataModal: [
      {
        title: "CHỨC VỤ",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 1,
      },
      {
        title: "QUÁ TRÌNH HỌC TẬP VÀ CÔNG TÁC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 2,
      },
      {
        title: "KINH NGHIỆM LÀM VIỆC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 3,
      },
      {
        title: "CÁC DỊCH VỤ THẨM MỸ THỰC HIỆN",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 4,
      },
    ],
  },
  {
    id: 4,
    name: "Ths. Bs Huỳnh Thị Tuyết Như",
    position: "Giám đốc chuyên môn Điều trị - Trẻ hóa da",
    imageRegion: "none",
    image: "images/bs4.png",
    imageModal: "images/doctor1.png",
    dataModal: [
      {
        title: "CHỨC VỤ",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 1,
      },
      {
        title: "QUÁ TRÌNH HỌC TẬP VÀ CÔNG TÁC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 2,
      },
      {
        title: "KINH NGHIỆM LÀM VIỆC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 3,
      },
      {
        title: "CÁC DỊCH VỤ THẨM MỸ THỰC HIỆN",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 4,
      },
    ],
  },
  {
    id: 5,
    name: "BS Felix Trần",
    position: "Bác sĩ chuyên khoa Phẫu thuật thẩm mỹ",
    imageRegion: "none",
    image: "images/bs5.png",
    imageModal: "images/doctor1.png",
    dataModal: [
      {
        title: "CHỨC VỤ",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 1,
      },
      {
        title: "QUÁ TRÌNH HỌC TẬP VÀ CÔNG TÁC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 2,
      },
      {
        title: "KINH NGHIỆM LÀM VIỆC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 3,
      },
      {
        title: "CÁC DỊCH VỤ THẨM MỸ THỰC HIỆN",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 4,
      },
    ],
  },
  {
    id: 6,
    name: "Bs. Thế Anh",
    position: "Bác sĩ chuyên khoa Phẫu thuật thẩm mỹ",
    imageRegion: "none",
    image: "images/bs6.png",
    imageModal: "images/doctor1.png",
    dataModal: [
      {
        title: "CHỨC VỤ",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 1,
      },
      {
        title: "QUÁ TRÌNH HỌC TẬP VÀ CÔNG TÁC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 2,
      },
      {
        title: "KINH NGHIỆM LÀM VIỆC",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 3,
      },
      {
        title: "CÁC DỊCH VỤ THẨM MỸ THỰC HIỆN",
        content: ["<li>What is Lorem Ipsum?</li>"],
        typeIcon: 4,
      },
    ],
  },
];

const showModal = (id) => {
  let html = "";
  let body = "";
  let data = dataDoctor.filter((item) => {
    return item.id == id;
  });
  for (let i = 0; i < data[0].dataModal.length; i++) {
    body += `
              <div class="popupdoctor_da_1_0_0__item">
                  <div class="popupdoctor_da_1_0_0__name">
                      <div class="popupdoctor_da_1_0_0__icon ${data[0].dataModal[i].typeIcon == 1 ? 'popupdoctor_da_1_0_0__icon--1' : data[0].dataModal[i].typeIcon == 2 ? 'popupdoctor_da_1_0_0__icon--2' : data[0].dataModal[i].typeIcon == 3 ? 'popupdoctor_da_1_0_0__icon--3' : 'popupdoctor_da_1_0_0__icon--4' }">
                          
                      </div>
                      <div class="popupdoctor_da_1_0_0__titleName">
                          ${data[0].dataModal[i].title}
                      </div>
                  </div>
                  <div class="popupdoctor_da_1_0_0__des">
                      <ul>
                          ${data[0].dataModal[i].content.join("")}
                      </ul>
                  </div>
              </div>
          `;
  }

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
                  ${body}
              </div>
              <div class="popupdoctor_da_1_0_0__regist">
                  <a href="#">
                      <div class="popupdoctor_da_1_0_0__coating">
                          <p>Xem tất cả</p>
                      </div>
                      <div class="popupdoctor_da_1_0_0__iconReg">
                          <img width="12" height="15" src="images/icon.png" alt="">
                      </div>
                  </a>
              </div>
          </div>
      </div>
     `;
  document
    .getElementsByClassName("doctor_da_1_0_0")[0]
    .insertAdjacentHTML("beforeend", html);
};

const renderData = () => {
  let html = "";
  for (itemData of dataDoctor) {
    html += `
        <div class="doctor_da_1_0_0__item modal-btn" data-modal="modal-doctor-${
          itemData.id
        }" data-id="${itemData.id}">
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
  document.getElementsByClassName("doctor_da_1_0_0__box")[0].innerHTML = html;
  const popBtn = document.querySelectorAll(".doctor_da_1_0_0__item");
  for (let i = 0; i < popBtn.length; i++) {
    popBtn[i].addEventListener("click", () => {
      showModal(i + 1);
      document
        .querySelectorAll(".popupdoctor_da_1_0_0__close")[0]
        .addEventListener("click", () => {
          document.getElementById("modal-doctor").remove();
        });
        window.onclick = (e) => {
          if (e.target == document.getElementsByClassName("modal-bg")[0]) {
            document.getElementById("modal-doctor").remove();
          }
        };
    });
  }
};

renderData();
