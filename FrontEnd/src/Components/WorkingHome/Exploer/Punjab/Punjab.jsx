import React from 'react';
import '../Punjab/punjab.css';
const Punjab =() =>
{
    return(
        <div className="container-fluid">
           <div className="row p-5 border border-5px" id='divback'>
                <div className="col-5  p-3 " >


                <img src="https://www.sikh24.com/wp-content/uploads/2020/04/Sri-Harmandir-Sahib.jpg" class="img-fluid" alt="..."></img>
                            </div>
                            <div className="col-5 p-5">
                              <h1 className="text-center">Punjab</h1>
                   
                    <p>
                    The Golden Temple also known as the Harimandir Sahib.It was built as a place of worship for all religions, and is considered the holiest Gurdwara of Sikhism. The symbolic openness of the Sikhs is represented by the four entrances used to enter the Gurdwara. It also includes the world’s largest free kitchen, capable of serving food to 300,000 people a day.
                    </p>
                </div>
            </div>
                <div className="row p-5">
                    <div className="col space ">
                            <div className="card" >
                                <div className="card-body">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jallianwala_Bagh%2C_Amritsar_01.jpg/1280px-Jallianwala_Bagh%2C_Amritsar_01.jpg" className="card-img-top" alt=""/>
                                </div>
                                <div>
                                    <h2 className="text-center" > Jallianwala Bagh </h2>
                                    <div className='text-center p-2'>
                                        <p>
                                        The Jallianwala Bagh massacre, also known as the Amritsar massacre
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        <div className="card" >
                            <div className="card-body" style={{height:""}}>
                                <img   src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/chandigarh.jpg" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Chandigarh</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    The capital of Punjab, Chandigarh is counted among the metro cities of India and among the top places to visit in Punjab for couples.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col space " >
                        <div className="card" >
                            <div className="card-body ">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/ludhiana.jpg" className="card-img-top " alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Ludhiana</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    Yet another recommendation in our list of places to see in Punjab is Ludhiana. This is where you will be able to witness the true beauty of the state and its rich agricultural scenario.</p>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <div className="col space ">
                        <div className="card" >
                            <div className="card-body">
                                <img  src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/Patiala.jpeg" className="card-img-top" alt=""/>
                            </div>
                            <div>
                                <h2 className="text-center">Patiala</h2>
                                <div className='text-center p-2'>
                                    <p>
                                    The fourth largest city in the state, Patiala is the name we see featured in the list of beautiful places in Punjab quite often. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       
    );
}

export default Punjab;