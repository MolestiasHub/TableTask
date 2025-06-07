export default (ref, callBack) => {
    const func = (ev) => {
        if(ref?.current && !ref.current.contains(ev.target)) callBack()
    }
    document.addEventListener("click", func)

    return () => document.removeEventListener("click", func)
}