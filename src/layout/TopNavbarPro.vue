<template>
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
            </form>
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
                    <a class="nc-icon nc-cart-simple" style="color: white" href="#">&nbsp;Giỏ hàng
                    <span>(0)</span>
                    </a>
                </li>

            </ul>
        </div>
    </nav>
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