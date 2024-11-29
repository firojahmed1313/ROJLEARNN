import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExamByCourse } from '../../../Redux/Features/Assignment/getAllExamByCourseSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'




const StudentCourseExam = ({ id,role }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //console.log(id);
    const token = Cookies.get('ROJLEARN');
    //console.log(token);
    const exams = useSelector((state) => state.getExamByCourse.exambyid);
    //console.log(exams);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        else {
            dispatch(getAllExamByCourse(id));
        }
    }, [id])

    return (
        <>

            {
                exams?.length > 0 ?
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            exams?.map((exam, index) => {
                                return (
                                    <article
                                        key={index}
                                        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                                    >
                                        <span className="inline-block rounded bg-blue-600 p-2 text-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path
                                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                />
                                            </svg>
                                        </span>


                                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                            {exam?.title}
                                        </h3>


                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                            {exam?.descriptions}
                                        </p>

                                        <Link to={`/${(role=="student"?"studentExam":"teacherExam")}/${exam?._id}`} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                                            Give Exam

                                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                                &rarr;
                                            </span>
                                        </Link>
                                    </article>
                                )
                            })
                        }
                    </div>
                    :
                    <h4>No Exam</h4>
            }


        </>
    )
}

export default StudentCourseExam