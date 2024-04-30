function SummonerData({ summonerData }) {
  const AWS_S3_URL = import.meta.env.VITE_AWS_S3_URL;
  return (
    <div className='mt-16'>
      <div className='flex ml-[1.5rem] laptop:ml-24 mb-4'>
        <img src={`${AWS_S3_URL}/profileicon/${summonerData.profileIconId}.png`} className='rounded bg-slate-600 w-[4rem] h-[4rem] laptop:w-24 laptop:h-24' />
        <div className='flex flex-col'>
          <div className='ml-3 laptop:ml-4 mb-auto text-[min(5vw,16px)] laptop:text-3xl text-zinc-300 font-semibold laptop:font-[550]'>
            {summonerData.summonerName}
            <span className='ml-1 text-zinc-300/95 font-[550] laptop:font-normal'>{`#${summonerData.tagLine}`}</span>
          </div>
          <button 
            type='button' 
            className='rounded w-20 laptop:w-28 py-1.5 ml-3 laptop:ml-4 
            text-sm laptop:text-base font-[550] bg-blue-600/95 text-zinc-300 tracking-wider'
          >
            Update
          </button>
        </div>
      </div>
      <div className='w-screen grid laptop:grid-cols-3 laptop:gap-3 laptop:mt-4'>
        <div className='mx-[1.5rem] my-2.5 laptop:mx-0 laptop:my-0 laptop:ml-24'>
          <div className='bg-slate-600 rounded'>
            ranked solo {/* TODO: test height and width of these elements by putting transparent dummys*/}
          </div>
          <div className='bg-slate-600 rounded'>
            ranked flex
          </div>
        </div>
        <div className='laptop:col-span-2 bg-slate-600 rounded mx-[1.5rem] laptop:mx-0 laptop:mr-7'>02</div>
      </div>
    </div>
  )
}
export default SummonerData;