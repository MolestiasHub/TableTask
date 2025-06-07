export const Calls = {
    incoming: 1,
    outgoing: 0,
} as const

export type CallType =  typeof Calls [keyof typeof Calls] | undefined

export type CallStatusType = "Дозвонился" | "Не дозвонился"