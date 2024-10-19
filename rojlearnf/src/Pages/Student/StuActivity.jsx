import React from 'react'
import ProfileNav from '../../Comp/Navber/ProfileNav'
import Topnav from '../../Comp/Navber/Topnav'
import StudentLike from '../../Comp/Student/lcrf/StudentLike'
import StudentComment from '../../Comp/Student/lcrf/StudentComment'
import StudentRating from '../../Comp/Student/lcrf/StudentRating'
import StudentFeedback from '../../Comp/Student/lcrf/StudentFeedback'
import StudentTracking from '../../Comp/Student/lcrf/StudentTracking'

const StuActivity = () => {
  const [tab, setTab] = React.useState("Like");

  const onOptionChangeHandler = (event) => {
    setTab(event.target.value);
    console.log(event.target.value);
  }
  return (
    <>
      <div className='flex flex-row '>
        <div className=' w-1/6 fixed'>
          <ProfileNav role={"Student"} />
        </div>
        <div className='w-5/6 absolute  right-0 '>
          <Topnav />
          <div>
            

            <div className='mb-4'>
              <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" className="w-full h-10 text-center text-white border-gray-200 bg-gray-800" onChange={onOptionChangeHandler}>
                  <option>Like</option>
                  <option>Comment</option>
                  <option>Rating</option>
                  <option>Feedback</option>
                  <option>Tracking</option>
                  
                </select>
              </div>

              <div className=" hidden sm:block w-full ml-3 my-4">
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
              </div>
            </div>
            {tab === "Like" && <StudentLike />}
            {tab === "Comment" && <StudentComment />}
            {tab === "Rating" && <StudentRating />}
            {tab === "Feedback" && <StudentFeedback />}
            {tab === "Tracking" && <StudentTracking />}

          </div>
        </div>
      </div>
    </>
  )
}

export default StuActivity