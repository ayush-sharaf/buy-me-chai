import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className="cover w-full bg-red-50 relative">
        <img src="https://t3.ftcdn.net/jpg/04/70/37/00/360_F_470370030_TxVCOsONUxh659YzwP2wCkX0ijAetDh9.jpg" className="object-cover w-full h-[350px]" alt=""></img>
    <div className="absolute -bottom-20 right-[46%] border-white border-2  rounded-full">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" width={150} height={150} className="object-cover rounded-full" ></img>
    </div>
    </div>
    <div className='info flex justify-center items-center my-24 flex-col gap-2'>
        <div className="font-extrabold text-3xl">@{params.username}</div>
        
        <div className="text-slate-400">
            creating web interfaces and ui ux master
        </div>
        <div className="text-slate-400">
            0 members . 0 posts . Rs.1500/release
        </div>
    </div>
    </>
  )
}

export default Username
