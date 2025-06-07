import { useState } from "react";

export default function(init = false): [boolean, VoidFunction, VoidFunction, VoidFunction] {
    const [state, setState] = useState(init)

    const open = () => setState(true)

    const close = () => setState(false)

    const toggle = () => setState(!state)

    return [state, open, close, toggle]
}