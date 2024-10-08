import { NextResponse } from "next/server";

import { DbConnect } from "../../../../../databse/databse";
import prisma from "../../../../../prisma";
 

 
DbConnect()

interface Params{
    id:string
}

export async function GET({params}:{params:Params}) {
    const {id}=params
    const resp=await prisma.all_Blogs.findFirst({where:{id:id}})
    return NextResponse.json({status:200,resp:[resp]})
     
}
export async function DELETE({params}:{params:Params}) {
    try {
        
        const {id}=params
        const resp=await prisma.all_Blogs.delete({where:{id:id}})
        return NextResponse.json({status:200,message:'post deleted successfully',resp:[resp]})
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:200,message:'no records found'})
    }
     
}
export async function PUT(req:Request,{params}:{params:Params}) {
    try {
        const {id}=params
        const {title,description}=await req.json()
  
        const resp=await prisma.all_Blogs.update({data:{title,description},where:{id:id}})
        
        return NextResponse.json({status:200,message:'post updated successfully',resp:[resp]})
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:200,message:'no records found'})
    }
     
}