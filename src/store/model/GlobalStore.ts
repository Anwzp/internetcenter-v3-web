import { defineStore } from "pinia";
export const globalStore = defineStore('globalStore', {
    state: () => {
        return {
            token: null,
            userInfo: null
        }
    },
    actions: {
        setToken(token: string) {
            localStorage.setItem('token', token)
        }
    },
    getters: {
        getToken: (): string | null => {
            const token: string | null = localStorage.getItem('token');
            return token
        }
    }
})