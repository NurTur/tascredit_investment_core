import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { LogoSection } from '@/components';
import { NotificationSection, ProfileSection } from '@/containers';
import { IconMenu2 } from '@tabler/icons';

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    width: 300,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.main,
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.primary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1rem" />
                    </Avatar>
                </ButtonBase>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            <NotificationSection />
            <ProfileSection />
        </>
    );
};

export default Header;
