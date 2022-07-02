<template>
  <div class="content">

    <!-- <div class="container-fluid"> -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- <div class="col-12">
                        <h5 class="card-title" style="font-weight: bold">
                            Laptop Acer Gaming
                        </h5>
                        <div class="card" style="">
                            <img class="img-fluid" src="img/faces/laptop-1.jpg" alt="..." />
                        </div>
                        <button type="button" class="row-sm-2 btn-danger btn-fill btn btn-lg btn-block"  @click="notifyVue('top', 'right')">Mua
                            hàng</button>
                    </div> -->
                    <h3 class="card-title" style="text-align: center !important ; font-weight: bold;">
                            GIỎ HÀNG
                        </h3>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Sản phẩm</th>
                <th class="col-md-6" style="text-align: center !important ; font-weight: bold; color:black">Tên sản phẩm</th>
                <th class="col-md-1" style="text-align: center !important ; font-weight: bold; color:black">Số lượng</th>
                <th class="col-md-2" style="text-align: center !important ; font-weight: bold; color:black">Giá tiền</th>
                <th class="col-md-1" style="text-align: center !important ; font-weight: bold; color:black">Xóa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><img class="img-fluid" src="img/faces/laptop-1.jpg" alt="..." /></th>
                <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                <td style="text-align: center !important">
                  <input type="number" label="Số lượng" min="0" step="1" value="0" required
                    style="width:70%; line-height: 30px; text-align: center;">
                </td>
                <td style="text-align: center !important">45.000.000</td>
                <td style="text-align: center !important"><button @click="notifyVue('top', 'right')" type="button"
                    class="row-sm-2 btn-secondary btn-fill">Xóa</button></td>
              </tr>
              <tr>
                <th scope="row"><img class="img-fluid" src="img/faces/laptop-2.jpg" alt="..." /></th>
                <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                <td style="text-align: center !important">
                  <input type="number" label="Số lượng" min="0" step="1" value="0" required
                    style="width:70%; line-height: 30px; text-align: center;">
                </td>
                <td style="text-align: center !important">45.000.000</td>
                <td style="text-align: center !important"><button type="button" class="row-sm-2 btn-secondary btn-fill"
                    @click="notifyVue('top', 'right')">Xóa</button></td>
              </tr>
              <tr>
                <th scope="row"><img class="img-fluid" src="img/faces/laptop-1.jpg" alt="..." /></th>
                <td>Laptop ASUS TUF Gaming F15 FX506LHB HN188W</td>
                <td style="text-align: center !important">
                  <input type="number" label="Số lượng" min="0" step="1" value="0" required
                    style="width:70%; line-height: 30px; text-align: center;">
                </td>
                <td style="text-align: center !important">45.000.000</td>
                <td style="text-align: center !important"><button type="button" class="row-sm-2 btn-secondary btn-fill"
                    @click="notifyVue('top', 'right')">Xóa</button></td>
              </tr>
              <tr>
      <td colspan="3" style="text-align: center !important ; font-weight: bold; color:black">Tổng tiền</td>
      <td style="text-align: center !important ; font-weight: bold; color:black">100.100.000<span>đ</span></td>
    </tr>
    <tr>
    </tr>
            </tbody>
          </table>


          <div style="text-align: left">
              <!-- <router-link to="/quanlysanpham/themsanpham"> -->
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger btn-fill float-right" @click="notifyVue1('top', 'right')">
                  Thanh toán
                </button>
              <!-- </router-link> -->
            </div>
            <!-- <table class="table table-bordered">
            <thead>
              <tr>
                <th class="col-md-2" style="text-align: center !important ; font-weight: bold;">Tổng tiền</th>
             
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table> -->
        </div>
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
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          message: `<span>Xóa sản phẩm hàng thành công !!</span>`,
          icon: 'nc-icon nc-simple-remove',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[4]
        })
    },
    notifyVue1(verticalAlign, horizontalAlign) {
      const color = Math.floor((Math.random() * 4) + 1)
      this.$notifications.notify(
        {
          message: `<span>Cảm ơn quý khách đã sử dụng dịch vụ !!</span>`,
          icon: 'nc-icon nc-favourite-28',
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
