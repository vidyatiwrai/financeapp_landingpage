import TestimonialImg from "../assests/img/img.svg";
import BackSvg from "../assests/img/back.svg";
import StarSvg from "../assests/img/star.svg";
import UserSvg from "../assests/img/user.svg";
import UserSecSvg from "../assests/img/user-sec.svg";
export const Testomonial = () => {
    return (
        <section className="testomonial" id="testomonial">
            <div className="testominal-heading">
                <h1 style={{color:"black"}}>TESTIMONIAL</h1>
            </div>
            <div className="testimonial-subheading">
                <h1 style={{color:"black",marginTop:"3%"}}>What Our Users Say About Us?</h1>
            </div>
            <div className="testimonal-bx">

                <div className="testimonial-img-bulk">
                    <div className="back-glow">
                        <img src={BackSvg} alt="back"/>
                    </div>
                    <div >
                        <img style={{width:"100%"}} src={TestimonialImg} alt="img"/>

                    </div>
                    <img src={StarSvg} alt="star"/>

                </div>
                <div className="testimonial-txt-bx">
                    <div className="head-bx">
                        <h1 style={{color:"black",width:"60%",lineHeight:"30px"}}>
                            The Best Financial Accounting App Ever!
                        </h1>
                        
                    </div>
                    <p style={{marginTop:"3%"}}>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                    </p>     
                    <div className="user-icon">
                        <div>
                            <img src={UserSvg} alt="user-svg"/>

                        </div>
                        <div style={{marginTop:"5px",marginLeft:"10px"}}>
                            <img style={{opacity:"50%"}} src={UserSecSvg} alt="user-svg"/>

                        </div>
                    </div> 
                    <div className="user-name">
                        <h4 style={{color:"black",marginTop:"3%"}}>Nick Jonas</h4>
                    </div>            
                </div>

                
            </div>
         

        </section>
    )
}