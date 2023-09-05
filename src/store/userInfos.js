import { defineStore } from 'pinia';

export const userInfoStore = defineStore("userInfoStore", {
    state: () => ({
        userInfo: JSON.parse(localStorage.getItem('user-info')),
    }),
    actions: {
        setUserInfo(object){
            this.userInfo = object;
        }
    }
})

export default userInfoStore;