import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/login",
    name: "login",
    component: () =>
        import ('../views/Login.vue'),
    meta: {
        isPublic: true
    }
}, {
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
            path: "/categories/create",
            component: () =>
                import ('../views/CategoryEdit.vue'),
        },
        {
            path: "/categories/edit/:id",
            component: () =>
                import ('../views/CategoryEdit.vue'),
            props: true
        },
        {
            path: "/categories/list",
            component: () =>
                import ('../views/CategoryList.vue'),
        },
        {
            path: "/articles/create",
            component: () =>
                import ('../views/ArticleEdit.vue'),
        },
        {
            path: "/articles/edit/:id",
            component: () =>
                import ('../views/ArticleEdit.vue'),
            props: true
        },
        {
            path: "/articles/list",
            component: () =>
                import ('../views/ArticleList.vue'),
        },
        {
            path: "/comments/list",
            component: () =>
                import ('../views/CommentList.vue'),
            props: true
        },
        {
            path: "/links/create",
            component: () =>
                import ('../views/LinkEdit.vue'),
        },
        {
            path: "/links/edit/:id",
            component: () =>
                import ('../views/LinkEdit.vue'),
            props: true
        },
        {
            path: "/links/list",
            component: () =>
                import ('../views/LinkList.vue'),
        },
        {
            path: "/messages/list",
            component: () =>
                import ('../views/MessageList.vue'),
        },
        {
            path: "/users/list",
            component: () =>
                import ('../views/UserList.vue'),
        },
        {
            path: "/admin_users/create",
            component: () =>
                import ('../views/AdminUserEdit.vue'),
        },
        {
            path: "/admin_users/edit/:id",
            component: () =>
                import ('../views/AdminUserEdit.vue'),
            props: true
        },
        {
            path: "/admin_users/list",
            component: () =>
                import ('../views/AdminUserList.vue'),
        }
    ]
}, ]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (!to.meta.isPublic && !localStorage.token) {
        return next('/login')
    }
    next()
})

export default router