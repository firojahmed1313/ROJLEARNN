import { getStudentAssReport } from '@/Redux/Features/Report/GetStudentAssReportSlice';
import { getStudentExamReport } from '@/Redux/Features/Report/GetStudentExamReportSlice';
import { getStudentTaskReport } from '@/Redux/Features/Report/GetStudentTaskReportSlice';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ReportTable = ({data}) => {
    const [value, setValue] = React.useState();
    const dispatch = useDispatch();
    const assignment = useSelector((state) => state.getStudentAssMarks.studentAssReport);
    const exam = useSelector((state) => state.getStudentExamMarks.studentExamReport);
    const task = useSelector((state) => state.getStudentTaskMarks.studentTaskReport);
    // //console.log(assignment);
    // //console.log(exam);
    // //console.log(task);
    
    ////console.log(data);
   useEffect(() => {
        if(!data){
            //console.log("data not found");
        }
        else{
            if(data[0]?.type === "exam"){
                //console.log(data[0]?.type);
                ////console.log(exam);
                if(!exam){
                    dispatch(getStudentExamReport(data));
                }
                setValue(exam);
                
            }
            else if(data[0]?.type === "assignment"){
                //console.log(data[0]?.type);
                ////console.log(assignment);
                if(!assignment){
                    dispatch(getStudentAssReport(data));
                }
                setValue(assignment);
    
            }
            else if(data[0]?.type === "task"){
                //console.log(data[0]?.type);
                ////console.log(task);
                if(!task){
                    dispatch(getStudentTaskReport(data));
                }
                setValue(task);
            }
        }
   }, [data,assignment,exam,task]);
    
    //console.log(value);

    return (
        <>
            <div className="flex flex-col shadow-xl shadow-slate-500">
                <div className=" overflow-x-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg border-gray-300">
                            <table className=" min-w-full  rounded-xl">
                                <thead>
                                    <tr className="bg-blue-600 text-center text-lg font-bold  text-white shadow-inner shadow-blue-900">
                                        <th scope="col " className="p-5 shadow-inner shadow-sky-900  text-lg leading-6 font-bold  capitalize"> Title </th>
                                        <th scope="col" className="p-5 shadow-inner shadow-sky-900  leading-6  capitalize"> Marks Obtained </th>
                                        <th scope="col " className="p-5  shadow-inner shadow-sky-900 leading-6   capitalize"> Total Marks </th>
                                        <th scope="col" className="p-5 shadow-inner shadow-sky-900 leading-6   capitalize"> Date </th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                {
                                    value?.map((item,index) => {
                                        return (
                                            <tr className="bg-white text-center transition-all duration-500 hover:bg-gray-300" key={index}>
                                                <td className="p-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900  " title={item.contain?.title}> {item.contain?.title.substr(0,40)}... </td>
                                                <td className="p-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.mark?.mark} </td>
                                                <td className="p-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.contain?.totalmarks} </td>
                                                <td className="p-4 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.mark?.created_at.substr(0,10)} </td>
                                            </tr>
                                        )
                                    })
                                }
                                
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ReportTable