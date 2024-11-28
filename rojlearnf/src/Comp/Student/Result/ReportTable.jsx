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
    // console.log(assignment);
    // console.log(exam);
    // console.log(task);
    
    //console.log(data);
   useEffect(() => {
        if(!data){
            console.log("data not found");
        }
        else{
            if(data[0]?.type === "exam"){
                console.log(data[0]?.type);
                //console.log(exam);
                if(!exam){
                    dispatch(getStudentExamReport(data));
                }
                setValue(exam);
                
            }
            else if(data[0]?.type === "assignment"){
                console.log(data[0]?.type);
                //console.log(assignment);
                if(!assignment){
                    dispatch(getStudentAssReport(data));
                }
                setValue(assignment);
    
            }
            else if(data[0]?.type === "task"){
                console.log(data[0]?.type);
                //console.log(task);
                if(!task){
                    dispatch(getStudentTaskReport(data));
                }
                setValue(task);
            }
        }
   }, [data,assignment,exam,task]);
    
    console.log(value);

    return (
        <>
            <div class="flex flex-col">
                <div class=" overflow-x-auto">
                    <div class="min-w-full inline-block align-middle">
                        <div class="overflow-hidden border rounded-lg border-gray-300">
                            <table class=" min-w-full  rounded-xl">
                                <thead>
                                    <tr class="">
                                        <th scope="col " class="p-5 bg-gray-50 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Title </th>
                                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Marks Obtained </th>
                                        <th scope="col " class="p-5 bg-gray-50 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Total Marks </th>
                                        <th scope="col" class="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Date </th>
                                    </tr>
                                </thead>
                                <tbody class="">
                                {
                                    value?.map((item) => {
                                        return (
                                            <tr class="bg-white transition-all duration-500 hover:bg-gray-50">
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 " title={item.contain?.title}> {item.contain?.title.substr(0,12)}... </td>
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.mark?.mark} </td>
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.contain?.totalmarks} </td>
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {item.mark?.created_at.substr(0,10)} </td>
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