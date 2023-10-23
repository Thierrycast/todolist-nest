export type taskRequestDTO = {
    title: string
    userId: string
}

export type taskResponseDTO = {
    id?: string
    title: string
    done: boolean
    userId: string
}