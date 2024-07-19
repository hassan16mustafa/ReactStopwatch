import CompD from "./CompD"
import { UserContext } from "./CompA"

function CompC(){
    const user = useContex(UserContext);

    return(<>
        <div className="box">
            <h1>Comp C</h1>
            <CompD />
        </div>
        
        
        
        </>)

}



export default CompC