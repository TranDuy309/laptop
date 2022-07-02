import DashboardLayout from '../layout/DashboardLayout.vue'
import IndexProduct from '../layout/IndexProduct.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import UserIndex from 'src/pages/Users/Index.vue'
import UserNhanvien from 'src/pages/Users/Nhanvien.vue'
import UserKhachhang from 'src/pages/Users/Khachhang.vue'
import UserEdit from 'src/pages/Users/_id/chinhsuaNV.vue'
import UserAdd from 'src/pages/Users/ThemNV.vue'
import DangNhapUser from 'src/pages/DangNhap.vue'
import SanPhamDanhSach from 'src/pages/Products/SanPham.vue'
import SanPhamThem from 'src/pages/Products/ThemSanPham.vue'
import HomeIndex from 'src/pages/Trangchu/Index.vue'
import HomeTest from 'src/pages/Trangchu/test.vue'
import HomeCart from 'src/pages/Trangchu/GioHang.vue'


const routes = [{
        path: '/',
        // component: IndexLayout,
        component: IndexProduct,
        redirect: '/home',
        children: [{
                path: 'home',
                name: 'Home',
                component: HomeIndex
            },
            {
                path: 'test',
                name: 'Test',
                component: HomeTest
            },
            {
                path: 'giohang',
                name: 'GioHang',
                component: HomeCart
            },
        ]

    },
    {
        path: '/admin',
        component: DashboardLayout,
        redirect: '/admin/overview',
        children: [{
                path: 'overview',
                name: 'Overview',
                component: Overview
            },
            {
                path: 'user',
                name: 'User',
                component: UserProfile
            },
            {
                path: 'table-list',
                name: 'Table List',
                component: TableList
            },
            {
                path: 'typography',
                name: 'Typography',
                component: Typography
            },
            {
                path: 'icons',
                name: 'Icons',
                component: Icons
            },
            {
                path: 'maps',
                name: 'Maps',
                component: Maps
            },
            {
                path: 'notifications',
                name: 'Notifications',
                component: Notifications
            },
            {
                path: 'upgrade',
                name: 'Upgrade to PRO',
                component: Upgrade
            }
        ]
    },
    {
        path: '/quanlyuser',
        component: DashboardLayout,
        children: [{
                path: 'userslist',
                name: 'UsersList',
                component: UserIndex
            },
            {
                path: 'nhanvien',
                name: 'Nhanvien',
                component: UserNhanvien
            },
            {
                path: 'khachhang',
                name: 'Khachhang',
                component: UserKhachhang
            },
            {
                path: ':id/chinhsuaNV',
                name: 'chinhsuaNV',
                component: UserEdit
            },
            {
                path: 'themnv',
                name: 'ThemNV',
                component: UserAdd
            },
        ]
    },
    {
        path: '/quanlysanpham',
        component: DashboardLayout,
        children: [{
                path: 'sanpham',
                name: 'SanPham',
                component: SanPhamDanhSach
            },
            {
                path: 'themsanpham',
                name: 'ThemSanPham',
                component: SanPhamThem
            },
        ]
    },
    {
        path: '/dangnhap',
        component: DangNhapUser,
    },
    { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes