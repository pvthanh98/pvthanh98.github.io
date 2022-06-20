import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as path from '../../routes/path';
import AssignmentIcon from '@mui/icons-material/Assignment';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

interface Props {
  title: string;
  handleCloseNavMenu : (link: string | null) => void;
}

export default function FinanceMenu({ title, handleCloseNavMenu }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link: string| null) => {
    setAnchorEl(null);
    handleCloseNavMenu(link)
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        color='inherit'
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {title}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={()=>handleClose(null)}
      >
        <MenuItem onClick={()=>handleClose(path.FINANCE_OVERVIEW_PATH)} disableRipple>
          <AssignmentIcon />
          Overview
        </MenuItem>
        <MenuItem onClick={()=>handleClose(path.FINANCE_EXPENSE_DAILY_PATH)} disableRipple>
          <EditIcon />
          Daily
        </MenuItem>
        <MenuItem onClick={()=>handleClose(path.FINANCE_EXPENSE_BY_CATEGORY_PATH)} disableRipple>
          <FileCopyIcon />
          Category
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={()=>handleClose(path.FINANCE_MONTHLY_LIMITATION_PATH)} disableRipple>
          <ArchiveIcon />
          Limit
        </MenuItem>
        <MenuItem onClick={()=>handleClose(path.FINANCE_EXPENSE_BY_MONTH_PATH)} disableRipple>
          <MoreHorizIcon />
          Year
        </MenuItem>
      </StyledMenu>
    </div>
  );
}