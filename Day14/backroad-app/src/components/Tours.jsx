import { tours } from "./Data";

const Tours = () => {
  return (
    <>
        <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
      {
        tours.map((item)=>{
          const {id,date,title,text,icon,country,day,amount,itour}=item;
          return(
            <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={itour} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className={icon}></i></span> {country}
              </p>
              <p>{day}</p>
              <p>{amount}</p>
            </div>
          </div>
        </article>

          )
        }


        )
      }




        
      
      </div>
    </section>
    </>
  )
}

export default Tours