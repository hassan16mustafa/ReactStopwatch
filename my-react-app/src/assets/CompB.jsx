import CompC from "./CompC"

import { UserContext } from "./CompA"


function CompB(){
    const user = useContex(UserContext);
   
    return(<>
        <div className="box">
            <h1>Comp B</h1>
            <CompC />
        </div>
        
        
        
        </>)


}



export default CompB