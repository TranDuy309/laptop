<template>
    <div class="content">

        <!-- <div class="container-fluid"> -->
        <div class="container">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
    <li class="breadcrumb-item"><a href="#">Sản phẩm</a></li>
    <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
  </ol>
</nav>

            <div class="row">
                <!-- left -->

                <div class="col-md-6">
                    <div class="col-12">
                        <h5 class="card-title" style="font-weight: bold">
                            Laptop Acer Gaming
                        </h5>
                        <div class="card" style="">
                            <img class="img-fluid" src="img/faces/laptop-1.jpg" alt="..." />
                        </div>
                        <button type="button" class="row-sm-2 btn-danger btn-fill btn btn-lg btn-block"  @click="notifyVue('top', 'right')">Mua
                            hàng</button>
                    </div>
                </div>
                <!--right-->
                <div class="col-md-6">
                    <div class="col-md-12">
                        <h5 class="card-title" style="font-weight: bold">
                            &nbsp;
                        </h5>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <h5 class="card-title" style="font-weight: bold">
                                        Thông số chi tiết
                                    </h5>
                                    <table class="table table-bordered">

                                        <tbody>
                                            <tr>
                                                <td>Hãng</td>
                                                <td>Acer</td>
                                            </tr>
                                            <tr>
                                                <td>Màn hình</td>
                                                <td>15.6 inch, 1920 x 1080 Pixels, IPS, 144 Hz, Anti-glare LED-backlit
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>CPU</td>
                                                <td>Intel, Core i5, 10300H</td>
                                            </tr>
                                            <tr>
                                                <td>RAM</td>
                                                <td>8 GB (1 thanh 8 GB), DDR4, 2933 MHz</td>
                                            </tr>
                                            <tr>
                                                <td>Ổ cứng</td>
                                                <td>SSD 512 GB</td>
                                            </tr>
                                            <tr>
                                                <td>Đồ họa</td>
                                                <td>NVIDIA GeForce GTX 1650 4GB; Intel UHD Graphics</td>
                                            </tr>
                                            <tr>
                                                <td>Hệ điều hành</td>
                                                <td>Win 11</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <h5 class="card-title" style="font-weight: bold">
                        Giá sản phẩm:
                    </h5>
                    <div style="
                          font-weight: bold;
                          font-size: 50px;
                          color: red;
                          margin-top: 10px;
                        ">
                        <span>49.000.000 đ</span>
                    </div>
                </div>
            </div>
            <!-- Mô tả sản phẩm -->
            <div class="row">
                <p class="text-justify">
Hiệu năng cực đỉnh cho mọi tác vụ
Hiệu năng đáng tin cậy trên ASUS TUF Gaming F15 FX506LH HN188W giúp bạn chơi game, livestream và thực hiện đa tác vụ.
CPU Intel i5 tốc độ cao có thể kích hoạt nhiều luồng để xử lý đa nhiệm.
Kết hợp với card màn hình GTX 1650, đáp ứng tốc độ khung hình cao của nhiều tựa game phổ biến.
Tăng tốc độ tải ứng dụng với ổ SSD 512GB NVMe PCIe® và dễ dàng nâng cấp khả năng lưu trữ với ổ SSD thứ hai.
                </p>
            </div>
            <!-- Câu hỏi thường gặp -->
            <div class="row">


            </div>

        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
    }
    },
    methods: {
      notifyVue (verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            message: `<span>Mua hàng thành công !!</span>`,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[2]
          })
      }
    }
};
</script>
<style lang="scss">
</style>
