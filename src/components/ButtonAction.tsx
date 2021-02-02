import { useHistory } from "react-router-dom"
import '../css/btn-action.css'


interface IProps {
     id:  string,
     deleteVideo: (id : string) =>void
}

export const ButtonAction = (props : IProps) => {

     const {id , deleteVideo} = props

     const history = useHistory()
     const handlenEdit = () => {
          
          history.push(`/edit-video/${id}`)
     }

     const handlenDelete = () => {
          deleteVideo(id)
     }

     return (
          <div className = 'btn-action'>
               <button onClick = {handlenEdit}><i className="far fa-edit"></i></button>

               <button onClick = {handlenDelete}><i className="far delete fa-trash-alt"></i></button>
          </div>
     )
}
