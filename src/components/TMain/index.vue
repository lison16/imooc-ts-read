<template>
    <div class="t-main-wrap">
        <a-layout style="height: 100%">
          <a-layout-sider>
                <a-menu
                    :selected-keys="[this.$route.path]"
                    @click="handleClickMenu"
                    theme="dark"
                    style="width: 100%"
                    mode="inline">
                    <a-menu-item key="/home">首页</a-menu-item>
                    <a-menu-item key="/about">介绍页</a-menu-item>
                </a-menu>
          </a-layout-sider>
          <a-layout>
            <a-layout-header style="background: #fff;text-align: right;">
                <a-dropdown>
                    <a-avatar>{{ userName }}</a-avatar>
                    <a-menu @click="handleClickAvatarMenu" slot="overlay">
                        <a-menu-item key="logout">退出登录</a-menu-item>
                    </a-menu>
                </a-dropdown>
            </a-layout-header>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
          </a-layout>
        </a-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import Cookie from 'js-cookie'

@Component({
    name: 'TMain'
})
export default class TMain extends Vue {
    @State('user_name') public userName
    @Mutation('setUserInfoMutations') public setUserInfo
    public handleClickMenu({ item, key, keyPath }) {
        this.$router.push(key)
    }
    public handleClickAvatarMenu({ item, key, keyPath }) {
        if (key === 'logout') {
            this.logout()
        }
    }
    public logout() {
        this.setUserInfo({ user_name: '', email: '' })
        Cookie.set('token', '')
        this.$router.push('/login')
    }
}
</script>

<style lang="less">
.t-main-wrap{
    height: 100%;
}
</style>
