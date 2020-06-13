import { initialState } from './constant'

export const clear = function () {
    this.props.handleParent({ user: initialState.user })
}

export const getUpdatedList = function(user, add = true) {
    const list = this.props.state.list.filter(u => u.id !== user.id)
    if (add) list.unshift(user)
    return list
}
