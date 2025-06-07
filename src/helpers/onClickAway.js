export default (ref, callBack) => {
    const func = (ev) => {
        ev.preventDefault()
        if(ref?.current && (ref.current!==ev.target && !ref.current.contains(ev.target) )) callBack()
    }
    document.addEventListener("click", func)

    return () => document.removeEventListener("click", func)
}