<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card>
            <h4 slot="header" class="card-title">Sửa thông tin</h4>
            <form>
              <div class="row">
                <div class="col-md-3">
                  <base-input
                    type="text"
                    label="Họ và Tên"
                    placeholder="Họ và Tên"
                    v-model="form.TEN"
                  >
                  </base-input>
                </div>
                <div class="col-md-4">
                  <base-input
                    type="text"
                    label="Số điện thoại"
                    placeholder="Số điện thoại"
                    v-model="form.SODIENTHOAI"
                  >
                  </base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <base-input
                    type="text"
                    label="Địa chỉ"
                    placeholder="Địa chỉ"
                    v-model="form.DIACHI"
                  >
                  </base-input>
                </div>
              </div> 
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-info btn-fill float-left"
                  @click.prevent="onUpdate()"
                >
                  Cập nhật thông tin
                </button>
              </div>
              <div class="clearfix"></div>
            </form>
          </card>
        </div>
        <div class="col-md-4">
          <card class="card-user">
            <img
              slot="image"
              src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              alt="..."
            />
            <div class="author">
              <a href="#">
                <img class="avatar border-gray" :src="form.avatar" alt="..." />

                <h4 class="title">
                  {{ form.TEN }}<br />
                  <small>{{ form.TEN }}</small>
                </h4>
              </a>
            </div>
            <div
              slot="footer"
              class="text-center d-flex justify-content-center"
            >
              <button href="#" class="btn btn-simple">
                <i class="fa fa-facebook-square"></i>
              </button>
              <button href="#" class="btn btn-simple">
                <i class="fa fa-twitter"></i>
              </button>
              <button href="#" class="btn btn-simple">
                <i class="fa fa-google-plus-square"></i>
              </button>
            </div>
          </card>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import EditProfileForm from "../../UserProfile/EditProfileForm.vue";
import UserCard from "../../UserProfile/UserCard.vue";
import axios from "axios";
export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      data: [],
      user: [],
       form: {
        TEN: null,
        SODIENTHOAI: null,
        DIACHI: null,
      },
    };
  },
  created() {
    //console.log(this.$route.params.id);
  },
  mounted() {
    this.solieu();
  },

  methods: {
    async solieu() {
      console.log(this.$route.params.id)
      const token = localStorage.token;
      console.log(token)
      this.data = await axios.get(
        `http://localhost:3000/admin/find-adm-id/${this.$route.params.id}`,{
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      },
      );
      //  $(this.$route.params.id)
      console.log(this.data)
      this.user = this.data.data[0];
      this.form.TEN = this.user.TEN;      
      this.form.SODIENTHOAI = this.user.SODIENTHOAI;
      this.form.DIACHI = this.user.DIACHI;
    },
  async onUpdate() {

      const token = localStorage.token;
      console.log(token)
      const url =`http://localhost:3000/admin/update-adm/${this.$route.params.id}`

      await axios.put( url,
      this.form,
      {
          headers: {
            "Access-Control-Allow-Origin": "*",
            // "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
           }
        },
        // this.form,
      );
      alert("Chỉnh sửa thành công");
      this.$router.push('/quanlyuser/nhanvien')
    },
  },
};
</script>
<style>
</style>
