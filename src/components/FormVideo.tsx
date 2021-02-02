import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router";
import "../css/form.css";
import { notificationMessage } from "../herlpers/notificationMessage";
import { Video } from "../interfaces/video";
import VideoService from "../services/video";


interface IParams {
  id :  string
}

export const FormVideo = () => {
  const { t } = useTranslation();

  const [formValue, setFormValue] = useState<Video>({
       name : '',
       video : '',
  })

  const [loading, setLoading] = useState(false)

  const {id} = useParams<IParams>()
  const history = useHistory()

  const {name , video} = formValue

  const handlenFormValue = (e : React.ChangeEvent <HTMLInputElement>) => {
       setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
       })
  }

  const handlenSubmitForm = async (e : React.FormEvent <HTMLFormElement>) => {
     e.preventDefault()
     setLoading(true)
     setFormValue({
       name : '',
       video : ''
      })

     const data = await VideoService.postVideo(formValue)
     setLoading(false)
     if (id) {
       await VideoService.editVideo(id , formValue)
       history.push('/')
       return notificationMessage('Success' , 'Video updated' , 'success')
     }
      
      if (data?.message) {
        return notificationMessage('Error' , data.message , 'danger')
      }
      if (data) {
        return notificationMessage('Success' , 'Video added' , 'success')
      }
      

  }

  useEffect(() => {
    if (id) {
     const getvideo = async () => {
       const data = await VideoService.getVideoByid(id)
       setFormValue(data!)
     }
     getvideo()
    }
    
  },[id])

  return (
    <div className="cont-form">
      <div></div>
      <form className="form" onSubmit = {handlenSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder={t("name")}
          autoComplete="off"
          autoFocus
          value = {name}
          onChange = {handlenFormValue}
        />
        <input
          type="text"
          name="video"
          autoComplete="off"
          placeholder={t("videoUrl")}
          value = {video}
          onChange = {handlenFormValue}
        />
        <button className = {`${loading ? 'btn disable': 'btn'}`} type="submit">{!id?  t("addVideo") : t('editVideo')}</button>
      </form>
    </div>
  );
};
