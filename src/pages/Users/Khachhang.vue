<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                        <template slot="header">
                            <h5 class="card-title" style="font-weight: bold">
                                Danh sách khách hàng
                            </h5>
                        </template>

                        <div style="text-align: left">
                            <router-link to="/quanlyuser/themnv">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    class="btn btn-primary btn-fill float-righ">
                                    Khách hàng mới
                                </button>
                            </router-link>
                        </div>
                        <div></div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th style="text-align: center">STT</th>
                                    <th style="text-align: center">Email</th>
                                    <th style="text-align: center">Họ tên</th>
                                    <th style="text-align: center">SĐT</th>
                                    <th style="text-align: center">Trạng thái</th>
                                    <th style="text-align: center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(use, index) in pageOfitems" :key="index">
                                    <template v-if="use.LOAI == 0">
                                        <td style="text-align: center">{{ index + 1 }}</td>
                                        <td>{{ use.EMAIL }}</td>
                                        <td>{{ use.TEN }}</td>
                                        <td>{{ use.SODIENTHOAI }}</td>
                                        <template v-if="use.TRANGTHAI == 0">
                                            <td style="text-align: left">Hoạt động</td>
                                        </template>
                                        <template v-else>
                                            <td style="text-align: left">Không hoạt động</td>
                                        </template>
                                        <td style="text-align: center">
                                            <button @click.prevent="onDel(use.ID)" type="button"
                                                class="btn btn-danger btn-fill float-righ">
                                                Xóa
                                            </button>
                                        </td>
                                    </template>
                                    <template v-else></template>
                                </tr>
                            </tbody>
                        </table>
                        <div style="text-align: center">
                            <jw-pagination :pageSize="2" :items="users" @changePage="onChangePage"></jw-pagination>
                        </div>
                    </card>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Paginate from 'vuejs-paginate'
import axios from "axios";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
export default {
    components: {
        LTable,
        Card,
        //   Paginate,
    },
    data() {
        return {
            data: [],
            users: [],
            pageOfitems: [],
        };
    },
    mounted() {
        this.solieu();
    },

    methods: {
        onChangePage(pageOfitems) {
            this.pageOfitems = pageOfitems;
        },

        async solieu() {
            const token = localStorage.token;
            this.data = await axios.get(`http://localhost:3000/user/get-all-usr`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            console.log(this.data);
          //  console.log(this.data.data.data);
            this.users = this.data.data;
        },

        async onDel(ID) {
            const token = localStorage.token;
            axios.delete(`http://localhost:3000/user/remove-usr/${ID}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then((result) => {
                console.warn(result);
            });
        },
        // clickCallback (pageNum) => {
        //  console.log(pageNum)
        // },
    }
}
</script>
<style>
</style>
