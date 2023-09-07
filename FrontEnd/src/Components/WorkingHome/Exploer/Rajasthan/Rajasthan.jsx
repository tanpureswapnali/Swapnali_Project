import React from 'react';
import '../Rajasthan/rajasthan.css';
const Rajasthan =() =>
{
    return(
        <div className="container-fluid">
           <div className="row p-5 border border-5px" id='divback'>
                <div className="col-5  p-3 " >


                <img src="https://www.holidify.com/images/bgImages/JAIPUR.jpg" class="img-fluid" alt="..."></img>
                            </div>
                            <div className="col-5 p-5">
                              <h1 className="text-center">Rajasthan</h1>
                   
                    <p>
                    THE PINK CITY. Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India. Renowned globally for its coloured gems, the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur.
                    </p>
                </div>
            </div>
                <div className="row p-5">
                    <div className="col space ">
                            <div className="card" >
                                <div className="card-body">
                                <img src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/10025.jpg" className="card-img-top" alt=""/>
                                </div>
                                <div>
                                    <h2 className="text-center" > Dausa</h2>
                                    <div className='text-center p-2'>
                                        <p>
                                        BEAUTIFUL LIKE HEAVEN. Dausa is a small ancient town named after a Sanskrit word Dhau-sa meaning Beautiful like Heaven.
Also referred as Deva Nagri.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="card" >
                            <div className="card-body" style={{height:""}}>
                                <img   src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/224.jpg" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Udaipur</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    THE CITY OF LAKES AND PALACES. 'Venice of the East', the city of lakes Udaipur is located around azure water lakes and is hemmed in by lush green hills of Aravallis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col space " >
                        <div className="card" >
                            <div className="card-body ">
                                <img src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/12.jpg" className="card-img-top " alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Jodhpur</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    THE BLUE CITY. Jodhpur, the second largest city in Rajasthan is popularly known as the Blue City.</p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div className="col space ">
                        <div className="card" >
                            <div className="card-body">
                                <img  src="https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/17.jpg" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Bundi</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    THE CITY OF STEPWELLS, It is popularly believed that Nobel laureate Rudyard Kipling penned part of his famous novel ‘Kim’ in Bundi. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       
    );
}

export default Rajasthan;