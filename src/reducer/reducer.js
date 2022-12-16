
const reducer = (state, action) => {
    if (state === undefined) {
        state = {
            count: 0,
            words: []
        }
    }

    switch (action.type) {
        case "ADD_WORD":
            return {
                ...state,
                count: state.count + 1,
                words: state.words.concat(action.word)
            }

        default:
            return state
    }
}

export default reducer