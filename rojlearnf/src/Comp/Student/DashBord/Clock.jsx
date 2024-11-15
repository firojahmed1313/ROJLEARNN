import React, { useEffect } from 'react'
const monghts = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Clock = () => {
    const [currTime,setCurrTime]=React.useState(new Date().toLocaleTimeString());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currDate = new Date().toLocaleDateString();
    const day = new Intl.DateTimeFormat("en-US", options).format(new Date()).split(",")[0];
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrTime(new Date().toLocaleTimeString());
        }, 20000);
      
        return () => clearInterval(intervalId);
      }, []);
    console.log(currTime);
    console.log(currDate);
    return (
        <>       
            <div class="before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative mx-auto   flex flex-col justify-around items-center w-44 h-44 rounded-2xl shadow-inner shadow-gray-50 bg-neutral-900 text-gray-50">
                <span class="">{day}, {monghts[currDate.split("/")[0] - 1]} {currDate.split("/")[1]}</span>
                <span class="z-10 flex items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">{currTime.split(":")[0]}<span class="text-xl font-bold text-gray-50 [text-shadow:none]">:</span>{currTime.split(":")[1]}</span>
                <div class="text-gray-50 w-48 flex flex-row justify-evenly">
                    <span class="text-xs font-bold">{currTime.split(":")[2].split(" ")[1]}</span>
                    <div class="flex flex-row items-center">
                        <svg class="w-5 h-5 fill-red-500 animate-bounce" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                            <path class="" d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z" fill-rule="evenodd">
                            </path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                            <path class="svg-fill-primary" d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z">
                            </path>
                        </svg>
                        <svg class="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                            <path class="svg-fill-primary" d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z" fill-rule="evenodd">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Clock