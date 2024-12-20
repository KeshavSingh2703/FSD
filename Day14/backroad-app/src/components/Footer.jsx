import { footerMenu } from "./Data"


const Footer = () => {
  return (
    <>
         <footer className="section footer">
      <ul className="footer-links">
        
        {
            footerMenu.map((item)=>{
                const {id,url,text}=item;
                return(
                    <li key={id}>
                     <a href={url} className="footer-link">{text}</a>
                     </li>
                )
            }
            )    
        }
        
        
      </ul>
      
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>

    </>
  )
}

export default Footer