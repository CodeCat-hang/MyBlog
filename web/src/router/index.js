import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('../views/Home.vue'),
            meta: {
                title: '首页 - HXY'
            }
        },
        {
            path: '/archives',
            name: 'Archive',
            component: () =>
                import ('../views/Archive.vue'),
            meta: {
                title: '归档 - HXY'
            }
        },
        {
            path: '/tags',
            name: 'Tag',
            component: () =>
                import ('../views/Tag.vue'),
            meta: {
                title: '标签 - HXY'
            }
        },
        {
            path: '/links',
            name: 'Link',
            component: () =>
                import ('../views/Link.vue'),
            meta: {
                title: '友链 - HXY'
            }
        },
        {
            path: '/message',
            name: 'Message',
            component: () =>
                import ('../views/Message.vue'),
            meta: {
                title: '留言 - HXY'
            }
        },
        {
            path: '/about',
            name: 'About',
            component: () =>
                import ('../views/About.vue'),
            meta: {
                title: '关于 - Main'
            }
        },
        {
            path: '/article/list/:id',
            name: 'Article',
            component: () =>
                import ('../views/Article.vue'),
            props: true,
            meta: {
                title: '文章详情 - HXY'
            }
        }
    ]
}, {
    path: '*',
    redirect: '/'
}]

const router = new VueRouter({
    mode: "history",
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    routes
})
router.beforeEach((to, from, next) => {
    // to and from are both route objects
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router