import React from 'react'
import AddExam from './ADDP/AddExam'
import { Link, useNavigate } from 'react-router-dom'


const data = [
    {
        id: 1,
        title: 'Exam 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 2,
        title: 'Exam 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 3,
        title: 'Exam 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    },
    {
        id: 4,
        title: 'Exam 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatum.'
    }
]

const TeacherAllExam = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <p className=" text-center text-blue-700 mt-4 text-3xl font-bold">All Exams</p>
            </div>
            <div className='my-4 '>

                <AddExam />
            </div>
            {
                (data.length != 0)
                    ?
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-[96%] mx-auto mt-4">
                        {
                            data?.map((item) => {
                                return (
                                    <div
                                        onClick={() => navigate(`/teacherExam/${item.id}`)}
                                        class=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden cursor-pointer"
                                    >
                                        <div class="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
                                            <p class="absolute bottom-6 left-7 text-white text-2xl">{item.id}</p>
                                        </div>
                                        <div class="fill-violet-500 w-12">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Layer_1"
                                                data-name="Layer 1"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h1 class="font-bold text-xl">{item.title}</h1>
                                        <p class="text-sm text-zinc-500 leading-6">
                                            {item.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }




                    </div>
                    : <h4>No Exam</h4>
            }
        </>

    )
}

export default TeacherAllExam