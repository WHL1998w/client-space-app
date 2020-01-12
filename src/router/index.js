import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Notes from '@/views/Notes.vue'
import Login from '@/views/Login.vue'
import BasicData from '@/views/BasicData.vue'
import Personal from '@/views/Personal.vue'
import NotesDetail from '@/views/NotesDetail.vue'
import Album from '@/views/Album.vue'
import WriteLog from '@/views/WriteLog.vue'
import DataBank from '@/views/DataBank.vue'
import InsertAblum from '@/views/InsertAlbum.vue'
Vue.use(VueRouter)

const routes = [
	
  {
   path: '/nav',
   component: Nav,
   children :[
   	{
   		path : '/',
   		redirect : 'index'
   	},
	{
		path : '/index',
		component : Index
	},
	{
		path : '/personal',
		component : Personal,
	},
	{
		path: '/notes',
		component: Notes
	},
	{
		path: '/writeLog',
		component:WriteLog
	},
	{
		path: '/album',
		component:Album
	},
	{
		path: '/notes/:id',
		component: NotesDetail
	},
	{
		path: '/dataBank',
		component:DataBank
	},
	{
		path:'/insertAblum',
		component:InsertAblum
	}
	]
 },
     {
     	path: '/',
     	component: Login
     },
]

const router = new VueRouter({
  routes
})

export default router
