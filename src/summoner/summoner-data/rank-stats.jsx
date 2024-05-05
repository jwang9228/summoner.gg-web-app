function RankStats({ queueData, queueName }) {
  const AWS_S3_URL = import.meta.env.VITE_AWS_S3_URL;

  const getRankByTier = (tier, rank) => {
    if (tier === 'MASTER' || tier === 'GRANDMASTER' || tier === 'CHALLENGER') {
      return '';
    } else {
      const rankMapping = {
        'I': '1',
        'II': '2',
        'III': '3',
        'IV': '4',
      };
      return rankMapping[rank] || '';
    }
  };

  const calculateWinrate = (wins, losses) => {
    const totalGames = wins + losses;
    if (totalGames === 0) {
      return '';
    } else {
      return `${Math.round((wins / totalGames) * 100)}% WR`;
    }
  };

  return (
    <div className='flex flex-col mt-2.5'>
      <div className={`py-1.5 px-2.5 rounded-t-lg ${!queueData && 'rounded-b-lg'} bg-slate-900`}>
        <div className='flex px-1.5 justify-between text-zinc-300/95 text-sm laptop:text-base'>
          <span>{queueName}</span>
          {!queueData && <span className='text-zinc-400/90'>Unranked</span>}
        </div>
      </div>
      {queueData && (
        <div className='flex py-1.5 px-2.5 border-t border-zinc-500 rounded-b-lg bg-slate-900'>
          <img src={`${AWS_S3_URL}/rank-crests/${queueData.tier}.png`} className='size-12 laptop:size-16'/>
          <div className='flex flex-col justify-center ml-4'>
            <div className='text-base laptop:text-lg text-zinc-300 tracking-wide'>
              {`${queueData.tier.charAt(0)}${queueData.tier.slice(1).toLowerCase()} ${getRankByTier(queueData.tier, queueData.rank)}`}
            </div>
            <div className='text-sm laptop:text-base text-zinc-300/90'>
              {`${queueData.leaguePoints} LP`}
            </div>
          </div>
          <div className='flex flex-col justify-center ml-auto text-right text-zinc-400 text-sm laptop:text-base'>
            {`${queueData.win}W ${queueData.loss}L`}
            <span>{calculateWinrate(queueData.win, queueData.loss)}</span>
          </div>
        </div>
      )}
    </div>
  )
}
export default RankStats;