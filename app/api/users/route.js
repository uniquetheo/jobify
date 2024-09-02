export const GET = async () =>{
    return NextApiResponse.status(200).json({message: "Hello World"});
}