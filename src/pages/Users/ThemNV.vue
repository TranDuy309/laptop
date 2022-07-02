<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <h4 slot="header" class="card-title">Thêm mới</h4>
            <form>
              <div class="row">
                <div class="col-md-4">
                  <base-input type="text" label="Tên đăng nhập" placeholder="Username" v-model="form.TEN">
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input v-model="form.EMAIL" type="email" label="Email" placeholder="Email">
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input v-model="form.SODIENTHOAI" type="text" label="Phone" placeholder="SDT">
                  </base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input type="text" label="Mật khẩu" placeholder="Password" v-model="form.PASS">
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input v-model="form.DIACHI" type="text" label="Địa chỉ">
                  </base-input>
                </div>
                <div class="col-md-4">
                  <!-- <div class="form-group col-md-4"> -->
                  <label for="inputState">Giới tính</label>
                  <select v-model="form.GIOITINH" id="inputState" class="form-control">
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
                  <!-- </div> -->
                </div>
              </div>
              <div>
                <button @click.prevent="onCreate()" type="submit" class="btn btn-primary btn-fill float-right">
                  Xác nhận
                </button>
              </div>
              <div class="clearfix"></div>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        TEN: null,
        EMAIL: null,
        PASS: null,
        SODIENTHOAI: null,
        DIACHI: null,
        GIOITINH: null,
      },
    };
  },
  methods: {
    //      onCreate() {
    // //       try {
    //         let data = new FormData();
    //         data.append("TEN", this.form.TEN);
    //         data.append("EMAIL", this.form.EMAIL);
    //         data.append("PASS", this.form.PASS);
    //       data.append("SODIENTHOAI", this.form.SODIENTHOAI);
    //        data.append("DIACHI", this.form.DIACHI);
    //         console.log(this.data)
    //          axios.post("http://localhost:3000/user/create-usr",data);
    // console.log(this.data)
    //     }
    // //         .then(
    // //       response => {
    // // console.log(response)

    // //  alert("success");
    // //       });

    //       } catch (error) {
    //         console.log(error);
    //       }
    //     },

    async onCreate() {
      const token = localStorage.token;
      let result = await axios.post("http://localhost:3000/admin/create-adm",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            // "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
          }
        },
        {
          TEN: this.form.TEN,
          EMAIL: this.form.EMAIL,
          PASS: this.form.PASS,
          SODIENTHOAI: this.form.SODIENTHOAI,
          DIACHI: this.form.DIACHI,
          GIOITINH: this.form.GIOITINH,

        },

      );
      console.log(result);
       this.$router.push('/quanlyuser/nhanvien')
    },
  }
};
</script>