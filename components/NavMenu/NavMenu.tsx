import { useState, FC } from 'react';

import { Box, MenuItem, MenuList, Paper, ListItemText, ListItemIcon, Link, IconButton } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';

import { MenuContent, MenuElement } from './NavMenu.types';

export const NavMenu: FC<{ menuContent: MenuContent }> = ({ menuContent }) => {
    const [history, setHistory] = useState([menuContent]);

    const [activeMenu, setActiveMenu] = useState(() => {
        const content: MenuElement[] = [];

        for (const [, value] of Object.entries(menuContent)) {
            content.push(value);
        }

        return (content);
    });

    const setMenu = (subMenu: MenuContent) => {
        const content: MenuElement[] = [];

        for (const [, value] of Object.entries(subMenu)) {
            content.push(value);
        }

        setActiveMenu(content);
    }

    return (
        <Box>
            <Paper sx={{ width: 320 }}>
                    {
                        history.length > 1 &&
                        <IconButton
                            onClick={() => {
                                setMenu(history[history.length - 2]);
                                setHistory(history.slice(0, history.length - 1));
                            }}>
                            <ArrowBack />
                        </IconButton>
                    }

                    {
                        activeMenu.map((menuElement: MenuElement, index) =>
                            <MenuList key={index} dense>
                                <MenuItem onClick={() => {
                                    if (menuElement.subMenu !== undefined) {
                                        setHistory([...history, menuElement.subMenu]);
                                        setMenu(menuElement.subMenu);
                                    }
                                }}>
                                    {
                                        menuElement.link ?
                                            <Link href={menuElement.link} target="_blank">
                                                <ListItemText>
                                                    {menuElement.title}
                                                </ListItemText>
                                            </Link>
                                            :
                                            <ListItemText>
                                                {menuElement.title}
                                            </ListItemText>
                                    }

                                    {
                                        menuElement.subMenu !== undefined &&
                                        <ListItemIcon sx={{ marginRight: 'auto' }}>
                                            <ArrowForwardIcon />
                                        </ListItemIcon>
                                    }
                                </MenuItem>
                            </MenuList>
                        )
                    }
            </Paper>
        </Box >
    );
}