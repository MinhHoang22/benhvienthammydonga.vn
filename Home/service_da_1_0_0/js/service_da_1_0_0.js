const dataService = [
    {
        name: "Nâng mũi cấu trúc Nano 1",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 2",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "false",
    },
    {
        name: "Nâng mũi cấu trúc Nano 3",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 4",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 5",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 6",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 7",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 8",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
];

const dataShow = dataService.filter(item => {
    return item.show === "true";
});

const renderData = (obj) => {
    let dataLimit = obj.slice(0, 6);
    let html = "";
    dataLimit.map(item => {
        html += `
            <a href="${item.link}" class="service_da_1_0_0__item">
                <div class="service_da_1_0_0__pic">
                    <img width="576" height="408" src="${item.image}" alt="">
                </div>
                <h3 class="service_da_1_0_0__text">${item.name}</h3>
            </a>
        `;
    });
    return html;
}

document.getElementById('box_home_service').innerHTML = renderData(dataShow);