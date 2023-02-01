const dataService = [
    {
        name: "Nâng mũi cấu trúc Nano 1",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
    {
        name: "Nâng mũi cấu trúc Nano 2",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
    {
        name: "Nâng mũi cấu trúc Nano 3",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
    {
        name: "Nâng mũi cấu trúc Nano 4",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
    {
        name: "Nâng mũi cấu trúc Nano 5",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
    {
        name: "Nâng mũi cấu trúc Nano 6",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
    {
        name: "Nâng mũi cấu trúc Nano 7",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
    {
        name: "Nâng mũi cấu trúc Nano 8",
        image: "images/cateService_da_1_0_0-2.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new"
    },
];

const dataLimit = dataService.slice(0,6);

const renderData = (obj) => {
    let html = "";
    obj.map(item => {
        html += `
            <a href="${item.link}" class="sidebar_da_1_1_0__content">
                <div class="sidebar_da_1_1_0__pic">
                    <img src="${item.image}" alt="">
                </div>
                <div class="sidebar_da_1_1_0__des">${item.name}</div>
            </a>
        `;
    });
    return html;
}

document.getElementById('data_service_sidebar').innerHTML = renderData(dataLimit);