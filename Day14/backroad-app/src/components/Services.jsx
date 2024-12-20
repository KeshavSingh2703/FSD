import { service } from "./Data";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          {service.map((item) => (
            <article className="service" key={item.id}>
              <span className="service-icon">
                <i className={item.cname}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{item.title}</h4>
                <p className="service-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;