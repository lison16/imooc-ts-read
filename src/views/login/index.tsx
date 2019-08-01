import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component
export default class LoginPage extends Vue {
    public user_name: string = ''
    public password: string|number = ''

    @Action('loginActions') public loginAction

    public login() {
        this.loginAction({
            user_name: this.user_name,
            password: this.password
        }).then(() => {
            this.$router.push('/home')
        })
    }

    protected render() {
        return (
            <div class='login-page'>
                <input v-model={ this.user_name }/>
                <input v-model={ this.password } type='password' style='margin-left: 10px;'/>
                <button style='margin-left: 10px;' on-click={ this.login }>登录</button>
            </div>
        )
    }
}
