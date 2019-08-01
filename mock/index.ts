import Mock from 'mockjs'

type MsgType = string|number

const success = (msg: MsgType = '', data?: any) => {
    return {
        code: 0,
        msg,
        data
    }
}

const error = (code: number, msg: MsgType = '', data?: any) => {
    return {
        code,
        msg,
        data
    }
}

interface PostResInterface {
    body: string
    type: 'POST'
    url: string
}

Mock.mock(/\/api\/user\/login/, loginRes)
Mock.mock(/\/api\/user\/get_info/, getInfoRes)

function loginRes(req: PostResInterface) {
    const { user_name, password } = JSON.parse(req.body)
    if (user_name === 'Lison' && String(password) === '123456') {
        return success('登录成功', { user_id: 101 })
    } else {
        return error(1001, '用户名或密码错误')
    }
}

function getInfoRes() {
    return success('', {
        user_name: 'Lison',
        avatar: '',
        email: 'xxx@xx.com'
    })
}
