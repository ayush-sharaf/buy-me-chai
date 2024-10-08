import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className='flex justify-center items-center text-white flex-col font-bold h-[44vh] gap-4'>
      <div className='font-bold text-5xl'>Buy Me A Chai</div>
      
        <p>
          A crowdfunding platform for creators . Get Funded by your fans and followers . Start Now!
        </p>
        <div><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here!</button>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></div>
        <div>
        </div>
    </div>
   <div className='h-1 bg-white opacity-5'></div>
   <div className='text-white mx-auto container'>
    <h1 className='text-2xl font-bold text-center my-14'>Your fans can buy a Chai !</h1>
    <div className='flex gap-5 justify-around'>
    <div className="flex flex-col items-center space-y-3">
      <p className="font-bold w-full text-center">Fans want to help</p>
      <p className="text-center w-1/2">Your fans are available to help you</p>
    </div>
    <div className="flex flex-col items-center space-y-3">
      <p className="font-bold w-full text-center">Fans want to help</p>
      <p className="text-center w-1/2">Your fans are available to help you</p>
    </div>
    <div className="flex flex-col items-center space-y-3">
      <p className="font-bold w-full text-center">Fans want to help</p>
      <p className="text-center w-1/2">Your fans are available to help you</p>
    </div>
    </div>
   </div>
   <div className='h-1 mt-10 bg-white opacity-5'></div>
   <div className='text-white mx-auto container pb-10'>
    <h1 className='text-2xl font-bold text-center my-14'>Learn More</h1>
    <div className='flex gap-5 justify-around'>
    <div className="flex flex-col items-center space-y-3">
      <p className="font-bold w-full text-center">Fans want to help</p>
      <p className="text-center w-1/2">Your fans are available to help you</p>
    </div>
    <div className="flex flex-col items-center space-y-3">
      <p className="font-bold w-full text-center">Fans want to help</p>
      <p className="text-center w-1/2">Your fans are available to help you</p>
    </div>
    <div className="flex flex-col items-center space-y-3">
      <p className="font-bold w-full text-center">Fans want to help</p>
      <p className="text-center w-1/2">Your fans are available to help you</p>
    </div>
    </div>
   </div>
    </>
    
  );
}
