import Vue from 'vue'
import Vuex from 'vuex'
import { loginReq, getInfoReq } from '@/api/user'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_name: '',
    email: ''
  },
  mutations: {
    setUserInfoMutations(state, info) {
      const { user_name, email } = info
      state.user_name = user_name
      state.email = email
    }
  },
  actions: {
    loginActions({ commit, dispatch }, { user_name, password }) {
      return new Promise((resolve, reject) => {
        loginReq({ user_name, password }).then((response) => { // 首先调登录接口
          const { data: { code, msg, data } } = response
          if (code === 0) {// 成功返回后，将token存到cookie中，然后携带token去请求获取信息接口
            Cookies.set('token', 'value')
            dispatch('getInfoActions').then(() => {
              resolve()
            })
          } else {
            console.error(msg)
          }
        })
      })
    },
    getInfoActions({ commit }) {
      return new Promise((resolve, reject) => {
        getInfoReq().then((res) => {
          const { data: { code, data } } = res
          if (code === 0) {
            commit('setUserInfoMutations', data)
            resolve() // 全部操作做完后，调用resolve方法
          }
        })
      })
    }
  },
})
