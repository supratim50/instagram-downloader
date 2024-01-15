const LoadingSkeleton = () => {
return (
    <div>
    <div className='flex justify-center border-gray-600'>
        <div className="w-[450px] h-[750px] bg-gray-200 rounded-lg"></div>
    </div>
    <div className='flex items-center p-2'>
    <div className='w-full'>
        <div className="w-full h-4 bg-gray-200 rounded-lg mb-4"></div>
        <div className='w-full flex justify-center'>
            <div className='px-20 py-4 bg-gray-200 rounded-lg text-lg md:text-xl text-gray-400'>
                Download
            </div>
        </div>
    </div>
        
        
    </div>
    </div>
)}

export default LoadingSkeleton