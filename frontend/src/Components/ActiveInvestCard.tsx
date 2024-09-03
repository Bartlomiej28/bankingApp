import React from 'react'

type Deposit ={
  percent: number,
  amount: number,
  duration: number,
  endData: string,
  startData: Date
}

function ActiveInvestCard({percent, amount, duration, endData, startData}: Deposit) {
  
  const formatISODateToDDMMYYYY = (isoDate: any) => {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getUTCFullYear();
  
    return `${day}.${month}.${year}`;
  };

  const parseDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  };
  
  const calculateElapsedPercentage = (startDateStr: string, endDateStr: string): number => {
    const startDate = parseDate(startDateStr);
    const endDate = parseDate(endDateStr);
    const now = new Date();
  
    if (now < startDate) return 0;
  
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedTime = Math.min(now.getTime() - startDate.getTime(), endDate.getTime() - startDate.getTime());
    const elapsedPercentage = (elapsedTime / totalDuration) * 100;
  
    return Math.min(100, Math.max(0, elapsedPercentage));
  };
  

  const formattedDate = formatISODateToDDMMYYYY(startData);
  const elapsedPercentage = calculateElapsedPercentage(formattedDate, endData);
 
  return (
    <div className='w-full flex flex-col gap-4 bg-blue-50 rounded-sm p-4'>
        <p className='font-bold'>Deposit</p>
        <div className='flex flex-col md:flex-row justify-between mb-6'>
            <p className='items-start'>Percent: {percent} %</p>
            <div className='flex flex-col'>
                <p>Deposit amount</p>
                <p>$ {amount}</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between'>
            <p>Duration: {duration} months</p>
            <p>To: {endData}</p>
        </div>
        <progress className="progress w-full" value={elapsedPercentage} max="100"></progress>
    </div>
  )
}

export default ActiveInvestCard

