export const removeMacToolbar = () => {
    document.querySelectorAll("[class^=index_controls]").forEach(e => {
        e.remove();
    })
};

