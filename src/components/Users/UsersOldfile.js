import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user png.png';

let Users = (props) => {
let getUsers = () => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);

        });

        /* props.setUsers( [
             {
                 id: 1,
                 photoUrl: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
                 followed: false,
                 fullName: 'Dmitry',
                 status: 'Nachalnik',
                 location: {city: 'Glazov', country: 'Russia'}
             },
                 {
                     id: 2,
                     photoUrl: 'https://st2.depositphotos.com/1007566/11541/v/950/depositphotos_115416492-stock-illustration-avatar-business-man-vector-graphic.jpg',
                     followed: false,
                     fullName: 'Konstantine',
                     status: 'Zamestitel nachalnika',
                     location: {city: 'Asbest', country: 'Russia'}
                 },
                 {
                     id: 3,
                     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhjalj6qjThFexCOHqT62JgI1i7x2pttIzEA&usqp=CAU',
                     followed: true,
                     fullName: 'Aleksandr',
                     status: 'Vedushiy Ingeneer',
                     location: {city: 'Krasnoyarsk', country: 'Russia'}
                 },
                 {
                     id: 4,
                     photoUrl: 'https://cdn4.vectorstock.com/i/1000x1000/05/03/avatar-man-icon-people-design-graphic-vector-9400503.jpg',
                     followed: true,
                     fullName: 'Evgeniy',
                     status: 'Vedushiy Ingeneer',
                     location: {city: 'Nazarovo', country: 'Russia'}
                 },
                 {
                     id: 5,
                     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvREstVQarsjpnUDt0S4kjAODY3VGBq99RRQ&usqp=CAU',
                     followed: true,
                     fullName: 'Aleksey',
                     status: 'Vedushiy Ingeneer',
                     location: {city: 'Zazerburg', country: 'Russia'}
                 },
                 {
                     id: 6,
                     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaObV2OWJXGHqgu_VKDtiaOah56x_uMcrWhQ&usqp=CAU',
                     followed: false,
                     fullName: 'Roman',
                     status: 'Vedushiy Ingeneer',
                     location: {city: 'Zazerburg', country: 'Russia'}
                 }

             ])
     */
    }
}
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
           <span>
               <div>
                   <img src={ u.photos.small !=null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
               </div>
           <div>
               { u.followed
               ? <button onClick={ () => {props.unfollow(u.id) } } >Unfollow</button>
               : <button onClick={ () => {props.follow(u.id) } } >Follow</button>  }

           </div>
           </span>
           <span>
               <span>
                   <div>{u.name}</div>
                   <div>{u.status}</div>
               </span>
           <span>
               <div>{"u.location.country"}</div>
               <div>{"u.location.city"}</div>
           </span>
           </span>
            </div>)
        }
            </div>

        }

export default Users;