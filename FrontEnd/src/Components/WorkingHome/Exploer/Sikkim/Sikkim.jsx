import React from 'react';
import '../Sikkim/sikkim.css';
const Sikkim =() =>
{
    return(
        <div className="container-fluid">
           <div className="row p-5 border border-5px" id='divback'>
                <div className="col-5  p-3 " >


                <img src="https://media2.thrillophilia.com/images/photos/000/119/275/original/1509529482_Tsomgo-lake.jpg?w=753&h=450&dpr=1.0" class="img-fluid" alt="..."></img>
                            </div>
                            <div className="col-5 p-5">
                              <h1 className="text-center">Sikkim</h1>
                   
                    <p>
                    The Tsomgo Lake, also popular as the Changu Lake, is a water body made of a glacier making it one of the best places to visit in Gangtok. Located at the altitude of 12310 feet, the Tsomgo Lake is one of Sikkim’s prime tourist attractions. The lake is located 38 km from Gangtok, en route to the Nathula Pass.
                    </p>
                </div>
            </div>
                <div className="row p-5">
                    <div className="col space ">
                            <div className="card" >
                                <div className="card-body">
                                <img src="https://media2.thrillophilia.com/images/photos/000/119/301/original/1528467049_shutterstock_1040248213.jpg?w=753&h=450&dpr=1.0" className="card-img-top" alt=""/>
                                </div>
                                <div>
                                    <h2 className="text-center" >Nathula Pass</h2>
                                    <div className='text-center p-2'>
                                        <p>
                                        Nathula Pass is located at a height of 14140 feet and this is the best place to be for the trekking enthusiasts when visiting Sikkim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="card" >
                            <div className="card-body" style={{height:""}}>
                                <img   src="https://media2.thrillophilia.com/images/photos/000/119/282/original/1613028861_shutterstock_156153566.jpg?w=753&h=450&dpr=1.0" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Yumthang Valley of Flowers </h2>
                                <div className='text-center p-2'>
                                    <p>
                                    The undulating meadows, the grazing yaks by the banks of wild Teesta river and the many hot springs amid the towering mountain peaks position Yumthang valley among the top places to visit in Sikkim
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col space " >
                        <div className="card" >
                            <div className="card-body ">
                                <img src="https://media2.thrillophilia.com/images/photos/000/119/305/original/1513331483_green_lake_sikkim.jpg?w=753&h=450&dpr=1.0" className="card-img-top " alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Green Lake</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    Fix your eyes to the jade-green lake surrounded by snow-covered glaciers and mountains. Green Lake is still an unexplored and unhindered destination in Sikkim.
                                    </p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div className="col space ">
                        <div className="card" >
                            <div className="card-body">
                                <img  src="https://media2.thrillophilia.com/images/photos/000/119/308/original/1528525372_shutterstock_377120077.jpg?w=753&h=450&dpr=1.0" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Ravangla</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    Embark on a journey to explore a lesser-known quaint village amidst the high mountains of Eastern Himalayas in South Sikkim. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       
    );
}

export default Sikkim;