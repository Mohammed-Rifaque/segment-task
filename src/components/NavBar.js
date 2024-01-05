import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactComponent as CustomArrow } from "../assets/images/dropdown-arrow.svg";

const Navbar = ({ title }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <div className="title-iconwrapper">
                    <div className="right-arrrow">
                        <CustomArrow />
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
