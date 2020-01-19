// Messages

export interface PostCreate {
    type: 'PostCreate'
    req_id: string
    content: string
}

export const PostCreateType = 'PostCreate'

export interface PostCreateSuccess {
    type: 'PostCreateSuccess'
    req_id: string
    id: string
}

export const PostCreateSuccessType = 'PostCreateSuccess'

export interface PostCreateFailed {
    type: 'PostCreateFailed'
    req_id: string
    id: string
}

export const PostCreateFailedType = 'PostCreateFailed'


export interface UnknownRequest {
    type: 'UnknownRequest'
    req_id: string
    error: Object
}

export const UnknownRequestType = 'UnknownRequest'

