<template>

    <!-- <nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->

    <nav class="navbar navbar-expand-lg navbar-light bg-primary container">
        <a class="navbar-brand  ml-5" href="#" style="color:white;">LaptopDD</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">


            <form class="form-inline my-2 my-lg-0 ml-5" style="width:100%;">
                <input class="form-control mr-sm-2" style="width:75%;" type="search" placeholder="Tìm kiếm"
                    aria-label="Search">
                <button type="button" class="btn btn-light"
                    style="color:black;background-color:#fff;border-color:white">
                    <i class="nc-icon nc-zoom-split" style="color:black;font-size: 16px;"></i>
                </button>
                <!-- <button class="btn btn-light my-2 my-sm-0" type="submit" style="color:white;border-color:beige">Tìm kiếm</button> -->
            </form>
            <!-- <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div> -->
            <ul class="navbar-nav" style="width: 100% !important;">
                <li class="nav-item dropdown ml-auto mr-1">
                    <base-dropdown title="Tài khoản">
                  
                        <a class="dropdown-item" href="#">Chỉnh sửa thông tin</a>
                        <a class="dropdown-item" href="#">Lịch sử đặt hàng</a>
                        <a class="dropdown-item" href="#">Địa chỉ</a>
                        <a class="dropdown-item" href="#">Mật khẩu</a>
                        <div class="divider"></div>
                        <a class="dropdown-item" href="#">Đăng xuất</a>
                    </base-dropdown>
                </li>
                <li class="nav-item mr-5" style="list-style-type: none;width: max-content !important;">
                    <a class="nc-icon nc-cart-simple" style="color: white" href="#">&nbsp;Giỏ hàng</a>
                </li>

            </ul>
        </div>
    </nav>

    <!-- </nav> -->
    <!-- <nav class="navbar navbar-expand-lg"> -->
    <!-- <div class="container-fluid">
      <button
        type="button"
        class="navbar-toggler navbar-toggler-right"
        :class="{ toggled: $sidebar.showSidebar }"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
      >
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Search</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="form.username == null">
            <li class="nav-item">
              <router-link to="/login">
                <a class="nav-link" href="#"> Đăng nhập </a>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Đăng ký </a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <span style="color: #28a745; font-weight: bold"
                >Hi, {{ form.username }}</span
              >
            </li>
            <base-dropdown title="Tài khoản">
              <a class="dropdown-item" href="#">Quản lý</a>
              <a class="dropdown-item" href="#">Chỉnh sửa thông tin</a>
              <a class="dropdown-item" href="#">Lịch sử đặt hàng</a>
              <a class="dropdown-item" href="#">Địa chỉ</a>
              <a class="dropdown-item" href="#">Mật khẩu</a>
              <!-- <div class="divider"></div>
            <a class="dropdown-item" href="#">Đăng xuất</a> -->
    <!-- </base-dropdown>
            <li class="nav-item">
              <a @click.prevent="logout" href="#" class="nav-link"> Log out </a>
            </li>
          </template>
        </ul>
      </div>
    </div> -->

    <!-- <template>
  <div style="background-color: #f7f7f7">
    <div
      class="container"
      style="
        padding: 5px;
        font-size: 15px;
        font-family: sans-serif, Roboto;
        font-weight: 400;
        color: #6c757d;
      "
    >
      <b-row>
        <b-col cols="8"
          ><div>
            <span>Giới thiệu</span>&nbsp;&nbsp; <span>Liên hệ</span>&nbsp;&nbsp;
            <span>Blog</span>&nbsp;&nbsp;
          </div></b-col
        >
        <b-col
          ><div style="text-align: right">
            <b-icon scale="1" icon="person-circle"></b-icon>&nbsp;&nbsp;<span
              >Đăng nhập</span
            >&nbsp; | &nbsp;
            <b-icon scale="1" icon="person-plus-fill"></b-icon>&nbsp;
            <span>Đăng ký</span>
          </div></b-col
        >
      </b-row>
    </div>
  </div>
</template>
  </nav> -->
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            activeNotifications: false,
            user: [],
            form: {
                email: null,
                _id: null,
                username: null,
            },
        };
    },
    computed: {
        routeName() {
            const { name } = this.$route;
            return this.capitalizeFirstLetter(name);
        },
    },

    mounted() {
        this.login();
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        async login() {
            const response = await axios.get(
                "http://10.42.240.200:9999/api/users/auth/user",
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("user-token"),
                    },
                }
            );
            //console.log(response.data)
            this.user = response.data;
            //console.log(this.user)
            this.form.username = this.user.username;
            //console.log(this.form.username);
            this.form._id = this.user._id;
            this.form.email = this.user.email;
        },

        async logout() {
            localStorage.removeItem("user-token");
            // Reload lại page
            localStorage.setItem("reloaded", "3");
            location.reload();
        },
    },
};
</script>
<style>
</style>