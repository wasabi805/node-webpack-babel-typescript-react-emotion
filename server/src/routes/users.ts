import express from 'express';
const router = express.Router()

interface iUsers{
    id: number
    name: string
    ocupation: string
}

const users: iUsers[] = [
    {id: 1, name: 'Matt Murdock' , ocupation:'Lawyer'}, 
    {id: 2, name: 'Jennifer Walters' , ocupation:'Attorney'},
    {id: 3, name: 'Peter Parker' , ocupation:'Photographer'}
]

router.get('/', (req, res)=>{
    res.send(users)
})

router.get('/:id',(req, res)=>{
    const {id} = req.params
    const userId = parseInt(id, 10)

    const user = users.filter((user)=>user.id === userId)
    
    res.send(user)
})

export default router