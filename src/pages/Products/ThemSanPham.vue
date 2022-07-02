<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card>
                        <h4 slot="header" class="card-title">Thêm sản phẩm mới</h4>
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <base-input type="text" label="Tên sản phẩm" placeholder="Nhập tên sản phẩm"
                                        v-model="form.TEN" required>
                                    </base-input>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputState">Hệ điều hành</label>
                                    <select v-model="form.HEDIEUHANH" id="inputState" class="form-control">
                                        <option value="Windows">Windows</option>
                                        <option value="Window 11">Window 11</option>
                                        <option value="Window 10">Window 10</option>
                                        <option value="Window 8">Window 8</option>
                                        <option value="Windows 7">Windows 7</option>
                                        <option value="Window XP">Window XP</option>
                                        <option value="Apple OS/Macintosh">Apple OS/Macintosh</option>
                                        <option value="Linux">Linux</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">


<!-- <b-form-group  id="input-group-2" label="Thương hiệu:" label-for="input-2">
                <b-form-select v-model="list_id" class="mb-3 form-select">
                  <b-form-select-option v-for="(use, index) in danhSachThuongHieu" :key="index"
                  :value="use.list_id" >{{ use.list_name }}</b-form-select-option>               
                </b-form-select>
              </b-form-group> -->


                                    <base-label for="inputState">Thương hiệu</base-label>
                                    <select v-model="form.ID" class="form-control">
                                        <option v-for="(use, index) in ThuongHieu" :key="index" :value="use.ID">{{ use.TEN }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <base-input v-model="form.CPU" type="text" label="CPU" required>
                                    </base-input>
                                </div>

                                <div class="col-md-6">
                                    <base-input v-model="form.GIA" type="text" label="Giá sản phẩm">
                                    </base-input>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputState">Ổ cứng</label>
                                    <select v-model="form.OCUNG" id="inputState" class="form-control">
                                        <option value="SSD">SSD</option>
                                        <option value="HDD">HDD</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <base-input v-model="form.SOLUONG" type="text" label="Số lượng">
                                    </base-input>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputState">RAM</label>
                                    <select v-model="form.RAM" id="inputState" class="form-control">
                                        <option value="2">2GB</option>
                                        <option value="4">4GB</option>
                                        <option value="8">8GB</option>
                                        <option value="16">16GB</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row">



                                <div class="col-md-6">
                                    <label for="formFile" class="form-label">Ảnh sản phẩm</label>
                                    <input @change="onFileChange" class="form-control" type="file" id="formFile" />
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Mô tả</label>
                                        <textarea v-model="form.MOTA" class="form-control"
                                            id="exampleFormControlTextarea1" rows="6"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-center" style="text-align: center">
                                    <button @click.prevent="onCreate()" type="submit"
                                        class="btn btn-primary btn-fill float-right">
                                        Xác nhận
                                    </button>
                                </div>
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
import { required, minLength, between } from 'vuelidate/lib/validators'
import axios from "axios";
export default {
    data() {
        return {
            form: {
                TEN: null,
                SOLUONG: null,
                ThuongHieu:[],
            },
        };
    },
    validations: {
        form: {
            TEN: {
                required,
                minLength: minLength(6),
            },
            SOLUONG: {
                between: between(20, 30)
            }
        },
    },
mounted() {
        this.solieu();
    },
    methods: {
        onFileChange(e) {
            this.form.fileName = e.target.files[0];
            this.form.fileName = e.target.files[0].name;
            this.form.selectedFile = e.target.files[0];
        },
        async solieu() {
            const token = localStorage.token;
            this.data = await axios.get(`http://localhost:3000/product/get-all-brand-active`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    // "Content-type": "Application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
             console.log(this.data.data);
          //  console.log(this.data.data.data);
            this.ThuongHieu = this.data.data;
        },
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

        // async onCreate() {
        //   const token = localStorage.token;
        //   let result = await axios.post("http://localhost:3000/admin/create-adm",
        //     {
        //       headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         // "Content-type": "Application/json",
        //         "Authorization": `Bearer ${token}`
        //       }
        //     },
        //     {
        //       TEN: this.form.TEN,
        //       EMAIL: this.form.EMAIL,
        //       PASS: this.form.PASS,
        //       SODIENTHOAI: this.form.SODIENTHOAI,
        //       DIACHI: this.form.DIACHI,
        //       GIOITINH: this.form.GIOITINH,

        //     },

        //   );
        //   console.log(result);
        //    this.$router.push('/quanlyuser/nhanvien')
        // },
    }
};
</script>