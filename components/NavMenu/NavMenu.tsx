import { useState, FC } from 'react';

import { Box, MenuItem, MenuList, Paper,  ListItemText, ListItemIcon } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';

import { MenuContent, MenuElement } from './NavMenu.types';

export const NavMenu: FC<{ menuContent: MenuContent }> = ({ menuContent }) => {
    const [activeMenu, setActiveMenu] = useState(() => {
        const content = [];

        for (const [key, value] of Object.entries(menuContent)) {
            //console.log(`${key}: ${value}`);
            content.push(value);
        }

        return (content);
    });

    const setMenu = (subMenu: MenuContent) => {
        const content = [];

        for (const [key, value] of Object.entries(subMenu)) {
            console.log(key);
            content.push(value);
        }

        setActiveMenu(content);
    }

    console.log(activeMenu);

    return (
        <Box>
            {
                activeMenu.map((menuElement: MenuElement, index) =>
                    <Paper key={index} sx={{ width: 320 }}>
                        <MenuList dense>
                            <MenuItem onClick={() =>
                                menuElement.subMenu !== undefined && setMenu(menuElement.subMenu)}>
                                <ListItemText>
                                    {menuElement.title}
                                </ListItemText>

                                {
                                    menuElement.subMenu !== undefined &&
                                    <ListItemIcon sx={{ marginRight: 'auto' }}>
                                        <ArrowForwardIcon />
                                    </ListItemIcon>
                                }
                            </MenuItem>
                        </MenuList>
                    </Paper>
                )
            }
        </Box>
    );
}