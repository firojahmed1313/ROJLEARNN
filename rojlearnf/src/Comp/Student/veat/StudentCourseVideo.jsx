import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoByCourse } from '../../../Redux/Features/Video/GetVideoByCourseSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useRef } from 'react'

const StudentCourseVideo = ({ id }) => {
    const [no, setNo] = useState(0);
    const playerRef = useRef(null);
    const dispatch = useDispatch();
    console.log(id);
    const token = Cookies.get('ROJLEARN');
    console.log(token);
    let videos;
    
    videos = useSelector((state) => state.getVideoByCourse.videoByCourse);
    console.log(videos);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
            dispatch(getVideoByCourse(id));
        }
    }, [id])

    const handelNext = () => {
        console.log("Next");
        setNo((no + 1) % videos.length);
    }
    return (
        <>
            <div class="flex justify-center">
                {
                    videos?.length > 0 ?
                        <div class="rounded-lg shadow-lg bg-white min-w-sm w-[90%] flex flex-col md:flex-row">
                            <div class="p-6 md:w-[70%] h-[70dvh] acpect-video ">
                                {/* <video width="320" height="240" controls class="w-full rounded-t-lg">
                                    <source src={videos[no]?.url} type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video> */}
                                <ReactPlayer
                                    ref={playerRef}
                                    url={videos[no]?.url}
                                    
                                    controls={true}
                                    onPlay={() => console.log("video is playing")}
                                    onPause={() => console.log("video is paused")}
                                    margin="auto"
                                    width="100%"
                                    height="100%"
                                />
                            </div>

                            <div class="p-6 md:w-[30%]">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">{videos[no]?.name}</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    {videos[no]?.description}
                                </p>
                                <p class="text-gray-700 text-base mb-4">
                                    {videos[no]?.duration}
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handelNext}>Next</button>
                            </div>
                        </div>
                        :
                        <div>
                            <p>No videos found</p>
                        </div>
                }

            </div>
        </>
    )
}

export default StudentCourseVideo