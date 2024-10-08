import { NextResponse } from "next/server";

import { DbConnect } from "../../../../databse/databse";
 
import prisma from "../../../../prisma";
 

 
DbConnect()

export async function POST(req:Request) {
    const {title,description}=await req.json()
    const resp=await prisma.all_Blogs.create({data:{title,description}})
    return NextResponse.json({status:201,message:'post created successfully',resp:[resp]})
}


export async function GET(){
    const resp=await prisma.all_Blogs.findMany()
    return NextResponse.json({status:200,resp:[resp]})
}
