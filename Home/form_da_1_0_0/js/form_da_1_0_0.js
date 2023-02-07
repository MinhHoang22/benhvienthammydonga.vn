const dataAddress = [
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    {
        name: "Hà Nội",
        address: "Số 212 Kim Mã, Q. Ba Đình",
        map: "https://www.google.com/maps/place/Th%E1%BA%A9m+M%E1%BB%B9+Vi%E1%BB%87n+%C4%90%C3%B4ng+%C3%81+H%C3%A0+N%E1%BB%99i/@21.0316652,105.8200869,16z/data=!4m5!3m4!1s0x0:0x52e35f35f12a3742!8m2!3d21.0318789!4d105.8245711?hl=vi",
    },
    
    
    
]

const renderData = (obj) => {
    let html = "";
    obj.map(item => {
        html += `
        <div class="form_da_1_0_0__item">
            <p>${item.name}</p>
            <span>${item.address}</span>
            <div class="form_da_1_0_0__des">
                <div class="form_da_1_0_0__map">
                    <a href="${item.map}" class="form_da_1_0_0__map--link"> <div class="form_da_1_0_0__map--img"></div> Chỉ đường</a>
                </div>
                <button class="form_da_1_0_0__call">
                    <div class="form_da_1_0_0__call--img"></div>Gọi ngay
                </button>
            </div>
        </div>
        `;
    });
    return html;
}

document.getElementById('overflowTest').innerHTML = renderData(dataAddress);

