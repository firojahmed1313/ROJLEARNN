import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import StudentLike from '../../Comp/Student/lcrf/StudentLike'
import StudentComment from '../../Comp/Student/lcrf/StudentComment'
import StudentRating from '../../Comp/Student/lcrf/StudentRating'
import StudentFeedback from '../../Comp/Student/lcrf/StudentFeedback'
import StudentTracking from '../../Comp/Student/lcrf/StudentTracking'
import ButtomNav from '@/Comp/Navber/ButtomNav'
const tData = [

  {
    id: 1,
    title: 'Like',
    tab: 'Like',
    icon: 'solar:like-outline',
  },
  {
    id: 2,
    title: 'Comment',
    tab: 'Comment',
    icon: 'material-symbols:comment-outline-rounded',
  }
  ,
  {
    id: 3,
    title: 'Rating',
    tab: 'Rating',
    icon: 'flowbite:star-outline',
  },
  {
    id: 4,
    title: 'Feedback',
    tab: 'Feedback',
    icon: 'fluent:person-feedback-28-regular',
  },
  {
    id: 5,
    title: 'Tracking',
    tab: 'Tracking',
    icon: 'streamline:business-progress-bar-2',
  }
]
const StuActivity = () => {
  const [tab, setTab] = React.useState("Like");

  const onOptionChangeHandler = (tab) => {
    setTab(tab);
    console.log(tab);
  }
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <div className="">
            <div className='mb-4'>
            <div className="hidden sm:block w-5/6 top-16 right-0 fixed z-40">
              <ButtomNav tData={tData} tab={tab} onClicks={onOptionChangeHandler} />
            </div>
              {/*<div className="hidden sm:block w-full ml-3 my-4">
              <nav className="flex gap-6" aria-label="Tabs">
              <button
                onClick={() => setTab("Like")}
                className={`${tab === "Like" ? " bg-sky-100  text-sky-600" : "text-gray-500 border-transparent"} rounded-lg shrink-0  p-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700`}
              >
                Like
              </button>

              <button
                onClick={() => setTab("Comment")}
                className={`${tab === "Comment" ? " bg-sky-100  text-sky-600" : "text-gray-500 border-transparent"} rounded-lg shrink-0  p-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700`}
              >
                Comment
              </button>
              <button
                onClick={() => setTab("Rating")}
                className={`${tab === "Rating" ? " bg-sky-100  text-sky-600" : "text-gray-500 border-transparent"} rounded-lg shrink-0  p-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700`}
              >
                Rating
              </button>
              <button
                onClick={() => setTab("Feedback")}
                className={`${tab === "Feedback" ? " bg-sky-100  text-sky-600" : "text-gray-500 border-transparent"} rounded-lg shrink-0  p-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700`}
              >
                Feedback
              </button>
              <button
                onClick={() => setTab("Tracking")}
                className={`${tab === "Tracking" ? " bg-sky-100  text-sky-600" : "text-gray-500 border-transparent"} rounded-lg shrink-0  p-2 text-sm font-medium hover:bg-gray-50 hover:text-gray-700`}
              >
                Tracking
              </button>
            </nav>
              </div>*/}
            </div>
            <div className="my-20">
              {tab === "Like" && <StudentLike />}
              {tab === "Comment" && <StudentComment />}
              {tab === "Rating" && <StudentRating />}
              {tab === "Feedback" && <StudentFeedback />}
              {tab === "Tracking" && <StudentTracking />}
            </div>

            <div className=" sm:hidden w-[98%] mx-auto left-0 fixed bottom-0 z-50">
              <ButtomNav tData={tData} tab={tab} onClicks={onOptionChangeHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StuActivity