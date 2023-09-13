import IndividualMember from "./IndividualMember"
import Button from "./Button"
function Members(){
    let employees = [{id:1, name:"Alaa", checked: true}, {id:2, name:"Ali Abdullah", checked: false},
    {id:3, name:"Kamel Ghada", checked: false},{id:4, name:"Eman Noor", checked: true},
    {id:5, name:"Rania Ata", checked: true}, {id:6, name:"Malek Jad", checked: false}];
    return(
        <>
            <div className="members">
            { 
                    employees.map((obj)=>{
                        return <IndividualMember key={obj.id} name={obj.name} checked={obj.checked}/>
                        })
            }
            </div>
            <div className="buttons">
                <Button type="cloudy"  text="cancel"/>
                <Button type="radiant" text="Save"/>
            </div>
        </>
    )
}
export default Members;