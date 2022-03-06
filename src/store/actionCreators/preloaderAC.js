import { TOGGLE_PRELOADER } from "../actions/preloaderActions";

export const setIsLoading = (value) => ({ type: TOGGLE_PRELOADER, payload: value });