
import './result.css'
import React from 'react'

const Result = () => {
  return (
    <div className='result_bg_container'>
        <div className='content'>

            <h1 className='live_result_heading'>Live Result</h1>
            <div className='cards_container'>
                

                <div className='student_data_container'>
                <h1 style={{color:"rgb(8, 131, 131) "}}>Student Basic Information</h1>
                    <div className='field_container'>
                        <p className='name_para'>Name</p>
                        <p className='value_para    '>{"Shashank"}</p>
                    </div>
                    <div className='field_container'>
                        <p className='name_para'>Phone</p>
                        <p className='value_para    '>{8965652365}</p>
                    </div>
                    <div className='field_container'>
                        <p className='name_para'>Email</p>
                        <p className='value_para'>{"shashankmende88@gmail.com"}</p>
                    </div>
                    <div className='field_container'>
                        <p className='name_para'>DOB</p>
                        <p className='value_para    '>{"25/02/2003"}</p>
                    </div>
                   
                </div>
                
                <div className='result_data_container'>
                    <h1 className='performance_heading'>Your Overall Performance Report</h1>
                    <div className='result_field_container'>
                        <p className='result_field'>Attempted</p>
                        <p className='result_value'><span style={{color:"blue",fontWeight:"bold",margin:"6px"}}>25</span>/25</p>
                    </div>
                    <div className='result_field_container'>
                        <p className='result_field'>Correct</p>
                        <p className='result_value'><span style={{color:"green",fontWeight:"bold",margin:"6px"}}>22</span>/25</p>
                    </div>
                    <div className='result_field_container'>
                        <p className='result_field'>In-correct</p>
                        <p className='result_value'><span style={{color:"red",fontWeight:"bold",margin:"6px"}}>3</span>/25</p>
                    </div>
                </div>
                  
            </div>
        </div>

    </div>
  )
}

export default Result