import { NextResponse } from "next/server";

import { DbConnect } from "../../../../../databse/databse";
import prisma from "../../../../../prisma";
 

 
DbConnect()

interface Params{
    id:string
}

export async function GET(req:Request,{params}:{params:Params}) {
    let {id}=params
    let resp=await prisma.all_Blogs.findFirst({where:{id:id}})
    return NextResponse.json({status:200,resp:[resp]})
     
}
export async function DELETE(req:Request,{params}:{params:Params}) {
    try {
        
        let {id}=params
        let resp=await prisma.all_Blogs.delete({where:{id:id}})
        return NextResponse.json({status:200,message:'post deleted successfully',resp:[resp]})
    } catch (error) {
        return NextResponse.json({status:200,message:'no records found'})
    }
     
}
export async function PUT(req:Request,{params}:{params:Params}) {
    try {
        let {id}=params
        let {title,description}=await req.json()
  
        let resp=await prisma.all_Blogs.update({data:{title,description},where:{id:id}})
        
        return NextResponse.json({status:200,message:'post updated successfully',resp:[resp]})
    } catch (error) {
        return NextResponse.json({status:200,message:'no records found'})
    }
     
}