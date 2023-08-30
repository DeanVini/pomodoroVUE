import { defineStore } from 'pinia';

export const useRouteHistoryStore = defineStore('routeHistory', {
    state: () => ({
        actualRoute: {}
    }),
    actions: {
        setActualRoute(route) {
            this.actualRoute = route;
        }
    },
});

export default useRouteHistoryStore;
