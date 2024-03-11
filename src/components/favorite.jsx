import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from 'react';

const Favorite = () => {
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        setActive(!active);
    }
    return (
        <div onClick={toggleActive}>
            {active ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
    );
}

export default Favorite;
