import { Box, List, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(
    () => `
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(82, 190, 128); 
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    width:100%;
`);
export const ListStyle = styled(List)(
    () => `
    color: white;
    display: flex;
    & .MuiLink-root{
        color: white;
        font-size: 20px;
        text-decoration: none;
    }
`);
export const IconStyle = styled(Box)(
    () => `
    color: white;
`);