import prisma from "../prisma"

 

export const DbConnect=async()=>{
    try {
        await prisma.$connect()
    } catch (error) {
        console.log('sorry databse not connected')
    }finally{
        await prisma.$disconnect()
    }
}