import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>

                <img src='https://tox-ick.org/wp-content/uploads/2011/09/water-1000x200.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>

        </div>
    )
}
export default ProfileInfo;