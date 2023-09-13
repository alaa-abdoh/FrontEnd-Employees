import IndividualMember from "./IndividualMember"
function Members(){
    let employees = [{id:1, name:"Alaa", checked: true}, {id:2, name:"Ali Abdullah", checked: false},
    {id:3, name:"Kamel Ghada", checked: false},{id:4, name:"Eman Noor", checked: true},
    {id:5, name:"Rania Ata", checked: true}, {id:6, name:"Malek Jad", checked: false}];
    return(
        <div className="members">
           { 
                employees.map((obj)=>{
                    return <IndividualMember key={obj.id} name={obj.name} checked={obj.checked}/>
                    })
           }
        </div>
    )
}
export default Members;