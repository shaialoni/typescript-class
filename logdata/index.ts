import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

axios.get(url)
    .then(res => {
        const post = res.data as Post

        const userId = post.userId
        const title = post.title
        const body = post.body

        printPost(userId, title, body)
        
    })
    .catch(err => console.error(err))

    const printPost = (userId: number, title: string, body: string) => {
        console.log(`
            User ID is ${userId}
            Title of post: ${title}
            Post content: ${body}
        `)
    }