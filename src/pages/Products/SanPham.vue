<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h5 class="card-title" style="font-weight: bold">
                Danh sách sản phẩm
              </h5>
            </template>

            <div style="text-align: left">
              <router-link to="/quanlysanpham/themsanpham">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary btn-fill float-right">
                  Thêm sản phẩm
                </button>
              </router-link>
            </div>
            <div></div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="text-align: center">STT</th>
                  <th style="text-align: center">Hình</th>
                  <th style="text-align: center">Tên</th>
                  <th style="text-align: center">Thương hiệu</th>
                  <th style="text-align: center">Giá</th>
                  <th style="text-align: center">Trạng thái</th>
                  <th style="text-align: center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(use, index) in users" :key="index">
                 <template v-if="use.LOAI == 1">
                  <td style="text-align: center">{{ index + 1 }}</td>
                  <td><img class="img-thumbnail" src="img/faces/laptop-1.jpg" alt="..."/></td>
                  <td>{{ use.TEN }}</td>
                  <td>{{ use.SODIENTHOAI }}</td>
                  <td>{{ use.DIACHI }}</td>
                  <template v-if="use.TRANGTHAI == 0">
                                    <td style="text-align: left">Còn hàng</td>
                                </template>
                                <template v-else>
                                    <td style="text-align: left">Hết hàng</td>
                                </template>
                  <td style="text-align: center">
                    <router-link :to="`/quanlyuser/${use.ID}/chinhsuaNV`">
                      <button type="button" class="btn btn-primary btn-fill float-righ">
                        Sửa
                      </button>
                    </router-link>
                    &nbsp;
                    <button @click.prevent="onDel(use.ID)" type="button" class="btn btn-danger btn-fill float-righ">
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
import axios from "axios";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
export default {
  components: {
    LTable,
    Card,
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
      this.data = await axios.get(`http://localhost:3000/admin/get-all-adm`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      console.log(this.data);
     // console.log(this.data.data.data);
      this.users = this.data.data;
    },

    async onDel(ID) {
      const token = localStorage.token;
      axios.delete(`http://localhost:3000/admin/remove-adm/${ID}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      }).then((result) => {
        console.warn(result);
      });

    },
  }
}
</script>
<style>
</style>
