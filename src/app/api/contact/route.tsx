import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
const messageSchema=z.object({name:z.string().trim().min(1).max(100),email:z.email().max(254),message:z.string().trim().min(10).max(5000),topic:z.enum(['Technical help','Article correction','Story suggestion','Feedback','Something else']).default('Feedback')});
export async function POST(req:Request){
 const reply=(status:number,error:string)=>NextResponse.json({success:false,error},{status});
 if(!req.headers.get('content-type')?.includes('application/json'))return reply(415,'Please send your message using the support form.');
 if(Number(req.headers.get('content-length')||0)>24000)return reply(413,'Your message is too long. Please shorten it.');
 let input;try{const raw=await req.text();if(raw.length>24000)return reply(413,'Your message is too long. Please shorten it.');input=messageSchema.safeParse(JSON.parse(raw));}catch{return reply(400,'Please check your message and try again.');}
 if(!input.success)return reply(400,'Enter a valid name, email, and a message between 10 and 5,000 characters.');
 const {EMAIL_USER,EMAIL_PASS,EMAIL_RECEIVER}=process.env;
 if(!EMAIL_USER||!EMAIL_PASS||!EMAIL_RECEIVER)return reply(503,'Messaging is temporarily unavailable. Please try again later.');
 const {name,email,message,topic}=input.data;
 try{const transporter=nodemailer.createTransport({service:'gmail',auth:{user:EMAIL_USER,pass:EMAIL_PASS},connectionTimeout:10000,socketTimeout:15000});await transporter.sendMail({from:EMAIL_USER,replyTo:email,to:EMAIL_RECEIVER,subject:`Zticle: ${topic}`,text:`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`});return NextResponse.json({success:true});}
 catch{console.error('Support message delivery failed.');return reply(502,'Your message could not be delivered. Please try again later.');}
}
