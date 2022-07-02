<!-- <template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h5 class="card-title" style="font-weight: bold">
                Danh sách người dùng
              </h5>
            </template>

            <div style="text-align: right">
              <router-link to="/quanlyuser/adduser">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success btn-sm">
                  Thêm người dùng
                </button>
              </router-link>
            </div>
            <div class="col-10" style="border: 1px solid black"></div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="text-align: center">STT</th>
                  <th style="text-align: center">Email</th>
                  <th style="text-align: center">Họ tên</th>
                  <th style="text-align: center">SĐT</th>
                  <th style="text-align: center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(use, index) in users" :key="index">
                  <td style="text-align: center">{{ index + 1 }}</td>
                  <td>{{ use.user_email }}</td>
                  <td>{{ use.user_name }}</td>
                  <td>{{ use.user_phone }}</td>
                  <td style="text-align: center">
                    <router-link :to="`/quanlyuser/${use.user_id}/manage`">
                      <button type="button" class="btn btn-primary btn-sm">
                        Sửa
                      </button>
                    </router-link>

                    &nbsp;
                    <button @click.prevent="onDel(use.user_id)" type="button" class="btn btn-warning btn-sm">
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
    };
  },
  mounted() {
    this.solieu();
  },

  methods: {
    async solieu() {
      const token = localStorage.token;
      this.data = await axios.get(`http://localhost:3000/user/get-all-usr/1`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Content-type": "Application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      console.log(this.data);
      console.log(this.data.data.data);
      this.users = this.data.data.data;
    },

    async onDel(user_id) {
      const token = localStorage.token;
      axios.delete(`http://localhost:3000/user/remove-usr/${user_id}`, {
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
</style> -->
