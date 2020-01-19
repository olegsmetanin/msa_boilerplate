export const PostCreateType = 'PostCreate'

export const PostCreate = Symbol('PostCreate')

export interface PostCreate {
    type: "PostCreate"
    content: string
}
