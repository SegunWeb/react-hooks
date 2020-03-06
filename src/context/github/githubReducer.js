const handlers = {

    DEFAULT: state => state,
};

export const githubReduscer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
};