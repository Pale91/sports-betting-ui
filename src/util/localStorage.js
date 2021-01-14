export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if(!serializedState) {
            return;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error(error);
    }
};

export const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
};