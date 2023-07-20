function tinhLuong() {
    var soNgayLamViec = document.getElementById('so-ngay-lam-viec').value * 1;
    var luong1Gio = 100000;
    console.log("Số ngày làm việc: ", soNgayLamViec);
    var tienLuong = soNgayLamViec * luong1Gio;
    console.log("Tiền lương: ", tienLuong);
    if (soNgayLamViec >= 0) {
        document.getElementById('tien-luong').innerHTML = `Tiền lương của bạn là: ${tienLuong.toLocaleString()} đồng.`;
    }
    else {
        document.getElementById('tien-luong').innerHTML = `Tiền lương của bạn là: ${tienLuong.toLocaleString()} đồng.`;
        alert('Ứng tiền nên hết lương tháng tới luôn à bạn');
    }
}
function tinhGiaTriTrungBinh() {
    var soThuc1 = document.getElementById('so-thuc-1').value * 1;
    var soThuc2 = document.getElementById('so-thuc-2').value * 1;
    var soThuc3 = document.getElementById('so-thuc-3').value * 1;
    var soThuc4 = document.getElementById('so-thuc-4').value * 1;
    var soThuc5 = document.getElementById('so-thuc-5').value * 1;
    console.log(soThuc1, soThuc2, soThuc3, soThuc4, soThuc5);
    var giatriTB = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    console.log(giatriTB);
    document.getElementById('gia-tri-trung-binh').innerHTML = `Giá trị trung bình của 5 số vừa nhập là: ${giatriTB.toLocaleString()}`;
}
function quyDoiTien() {
    var soTienUSD = document.getElementById('so-tien').value * 1;
    var heSoQuyDoi = 23500;
    console.log(soTienUSD);
    if (soTienUSD > 0) {
        var soTienVND = soTienUSD * heSoQuyDoi;
        console.log(soTienVND);
        document.getElementById('so-tien-VND').innerHTML = `Số tiền VNĐ tương ứng có thể đổi là: ${soTienVND.toLocaleString()} VNĐ`;
    }
    else if (soTienUSD == 0) {
        var soTienVND = soTienUSD * heSoQuyDoi;
        console.log(soTienVND);
        document.getElementById('so-tien-VND').innerHTML = `Số tiền VNĐ tương ứng có thể đổi là: ${soTienVND.toLocaleString()} VNĐ`;
        alert('Vui lòng nhập tiền cao hơn. Bạn hết tiền à?');
    }
    else {
        alert('Tiền âm thì không đổi được đâu nha bạn!');
    }
}
function tinhHinhChuNhat() {
    var chieuDai = document.getElementById('chieu-dai').value * 1;
    console.log(chieuDai);
    var chieuRong = document.getElementById('chieu-rong').value * 1;
    console.log(chieuRong);
    if (chieuDai <= 0) {
        alert('Bạn đã nhập sai giá trị(chiều dài sao <=0 được đúng hông nè). Vui lòng nhập lại cho đúng! Đừng quậy!');
    } else if (chieuRong <= 0) {
        alert('Bạn đã nhập sai giá trị(chiều rộng sao <=0 được đúng hông nè). Vui lòng nhập lại đàng hoàng! Bạn kỳ ghê!');
    }
    else {
        var chuViHCN = (chieuDai + chieuRong) / 2;
        var dientichHCN = chieuDai * chieuRong;
        document.getElementById('chu-vi').innerHTML = `Chu vi hình chữ nhật trên là: ${chuViHCN.toLocaleString()} cm`;
        document.getElementById('dien-tich').innerHTML = `Diện tích hình chữ nhật trên là: ${dientichHCN.toLocaleString()} cm2`;
    }
}
function tinhTong2KySo() {
    var soTuNhien = document.getElementById('so-tu-nhien').value * 1;
    console.log(soTuNhien);
    if (10 <= soTuNhien && soTuNhien <= 99) {
        var soDonVi = soTuNhien % 10;
        console.log(soDonVi);
        var soHangChuc = (soTuNhien - soDonVi) / 10;
        console.log(soHangChuc);
        var tong2KySo = soDonVi + soHangChuc;
        document.getElementById('tong-ky-so').innerHTML = `Tổng 2 ký số của số vừa nhập là: ${tong2KySo}`;
    }
    else {
        alert('Bạn đã nhập sai giá trị. Vui lòng nhập lại! Bạn ngốc thế!');
    }
}