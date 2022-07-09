import express from 'express';
const router = express.Router()

interface iUsers{
    name: string
    ocupation: string
}

const users: iUsers[] = [
    {name: 'Matt Murdock' , ocupation:'Lawyer'}, 
        {name: 'Jennifer Walters' , ocupation:'Attorney'},
        {name: 'Peter Parker' , ocupation:'Photographer'}
    ]

router.get('/', (req, res)=>{
    res.send(users)
})

export default router