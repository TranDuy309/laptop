<template>
    <div class="content">

        <!-- <div class="container-fluid"> -->
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#/giohang">Giỏ hàng</a></li>
                    <li class="breadcrumb-item"><a href="#">Thông tin giao hàng</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Phương thức thanh toán</li>
                </ol>
            </nav>

            <div class="row">
                <!-- left -->

                <div class="col-md-5">
                    <div class="col-12">
                        <h5 class="card-title" style="font-weight: bold">
                            Thông tin giao hàng
                        </h5>
                        <span>Bạn đã có tài khoản?&nbsp;<a href="#/dangnhap">Đăng nhập</a></span>
                        <h3></h3>
                        <form>
                            <div class="form-group">
                                <label for="inputEmail4">Họ và tên:</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Họ và Tên">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email:</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Số điện thoại:</label>
                                    <input type="text" class="form-control" id="inputPassword4"
                                        placeholder="Số điện thoại">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputEmail4">Địa chỉ:</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Địa chỉ">
                            </div>
                            <button type="submit" class="row-sm-2 btn-primary btn-fill btn btn-lg btn-block"
                                @click="notifyVue('top', 'right')">Thanh toán</button>
                        </form>
                    </div>
                </div>



                <!--right-->
                <div class="col-md-7">
                    <div class="col-md-12">
                        <h5 class="card-title" style="font-weight: bold">
                            &nbsp;
                        </h5>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="col-md-2"
                                                    style="text-align: center !important ; font-weight: bold; color:black">
                                                    Sản phẩm</th>
                                                <th class="col-md-5"
                                                    style="text-align: center !important ; font-weight: bold; color:black">
                                                    Tên sản phẩm</th>
                                                <th class="col-md-2"
                                                    style="text-align: center !important ; font-weight: bold; color:black">
                                                    Số lượng</th>
                                                <th class=""
                                                    style="text-align: center !important ; font-weight: bold; color:black">
                                                    Giá sản phẩm</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"><img class="img-fluid" src="img/faces/laptop-1.jpg"
                                                        alt="..." /></th>
                                                <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                                                <td style="text-align: center !important">3</td>
                                                <td style="text-align: center !important">45.000.000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><img class="img-fluid" src="img/faces/laptop-2.jpg"
                                                        alt="..." /></th>
                                                <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                                                <td style="text-align: center !important">2</td>
                                                <td style="text-align: center !important">45.000.000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><img class="img-fluid" src="img/faces/laptop-1.jpg"
                                                        alt="..." /></th>
                                                <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                                                <td style="text-align: center !important">1</td>
                                                <td style="text-align: center !important">45.000.000</td>
                                            </tr>
 <tr>
                                                <td colspan="3">
                                                    Tạm tính:
                                                    <br>
                                                    Phí vận chuyển:
                                                    
                                                    </td>
                                                <td style="text-align: center !important">
                                                    100.100.000<span>đ</span>
                                                    <br style="text-align: auto !important">--
                                                    </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3"
                                                    style=" font-weight: bold; color:black">
                                                    Tổng cộng</td>
                                                <td
                                                    style="text-align: center !important ; font-weight: bold; color:black">
                                                    100.100.000<span>đ</span></td>
                                            </tr>
                                            <tr>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
</template>
<script>
export default {
    components: {

    },
    data() {
        return {
            type: ['', 'info', 'success', 'warning', 'danger'],
            notifications: {
                topCenter: false
            }
        }
    },
    methods: {
        notifyVue(verticalAlign, horizontalAlign) {
            const color = Math.floor((Math.random() * 4) + 1)
            this.$notifications.notify(
                {
                    message: `<span>Thanh toán thành công !! <b>LaptopDD</b> - xin cảm ơn quý khách.</span>`,
                    icon: 'nc-icon nc-send',
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
