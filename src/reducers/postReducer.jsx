import { FETCH_POSTS, NEW_POSTS ,FORM} from "../actions/types"

const initialState = {
    items: [],
    item: {},
    form:{}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: payload
            }
        case NEW_POSTS:
            return {
                ...state,
                item: payload
            }
        case FORM:
            return {
                ...state,
                form: payload
            }

        default:
            return state
    }
}
