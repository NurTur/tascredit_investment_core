import React from 'react';
import { Typography } from '@mui/material';
import NavGroup from './navGroup';
import menuItem from './menuItems';

const MenuList = () => {
    console.log('menuItem.items ', menuItem.items);
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
