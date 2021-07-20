import { Pool } from 'pg'
export const pool=new Pool({
    host:'ec2-3-231-69-204.compute-1.amazonaws.com',
    user:'wvoyihgeplyquk',
    password:'8d5f59224becf0432589334d536511beaec3fb2ced7824947b6bf3b9710ed8f9',
    database:'ddd3rr9s8dekj2',
    port:5432,
    ssl:{rejectUnauthorized:false}
});