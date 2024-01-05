
const asyncHandler = (requesstHandler) =>{
    (req,res,next)=>{
        Promise.resolve(requesstHandler(req,res,next))
        .catch((err)=>console.log(err));
    }
}
export {asyncHandler}

// const asyncHandler = (func) => async(req,res,next)=> {
//     try {
//         await func(req,res,next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess:false,
//             message:err.message
//         })
//     }
// }