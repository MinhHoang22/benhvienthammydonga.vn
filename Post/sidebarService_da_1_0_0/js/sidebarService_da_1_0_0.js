const dataService = [
    {
        name: "Nâng mũi cấu trúc Nano 1",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 2",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "false",
    },
    {
        name: "Nâng mũi cấu trúc Nano 3",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 4",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 5",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 6",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 7",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
    {
        name: "Nâng mũi cấu trúc Nano 8",
        image: "https://benhvienthammydonga.vn/wp-content/themes/SCI_Theme/Module/Home/service_da_1_0_0/images/service_da_1_0_0-p1.jpg",
        link: "https://benhvienthammydonga.vn/tham-my-mui/nang-mui-cau-truc/?new",
        show: "true",
    },
];

const dataShow = dataService.filter(item => {
    return item.show === "true";
});

const renderData = (obj) => {
    let html = "";
    let dataLimit = obj.slice(0, 6);
    dataLimit.map(item => {
        html += `
            <a href="${item.link}" class="sidebarService_da_1_0_0__content">
                <div class="sidebarService_da_1_0_0__pic">
                    <img width="576" height="408" src="${item.image}" alt="">
                </div>
                <h3 class="sidebarService_da_1_0_0__des">${item.name}</h3>
            </a>
        `;
    });
    return html;
}

document.getElementById('data_service_sidebar').innerHTML = renderData(dataShow);