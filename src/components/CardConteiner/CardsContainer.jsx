import Card from "../card/Card"
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {
const users = useSelector(state=> state.users)
    return (
        <div className={style.container}>
            {users.map(user => {
                return <Card
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                />
            })}

        </div>
    )
}

export default CardsContainer
