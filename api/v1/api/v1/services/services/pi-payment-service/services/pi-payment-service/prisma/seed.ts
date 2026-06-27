import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

await prisma.user.create({
data:{
username:"demo",
email:"demo@mojad.global",
mojadId:"MOJAD001"
}
});

await prisma.job.create({
data:{
title:"AI Engineer",
description:"Build AI products",
ownerId:(await prisma.user.findFirst())!.id
}
});

}

main();
