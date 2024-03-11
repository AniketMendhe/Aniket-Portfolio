import { createClient } from "next-sanity";

export const client =  createClient({
    projectId:"qn0gxpzx",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-08-31"
})