import React, { forwardRef } from 'react';
import {
	AppBar,
	UserMenu,
	MenuItemLink,
	useLogout,
	useTranslate,
} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';

const useStyles = makeStyles({
	title: {
		flex: 1,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
	},
	spacer: {
		flex: 1,
	},
	appBar: {
		background: '#04a2e0',
	},
});

const ConfigurationMenu = forwardRef<any, any>((props, ref) => {
	const translate = useTranslate();
	return (
		<MenuItemLink
			ref={ref}
			to="/configuration"
			primaryText={translate('admin.menu.configuration')}
			leftIcon={<SettingsIcon />}
			onClick={props.onClick}
			sidebarIsOpen
		/>
	);
});

const CustomUserMenu = (props: any) => (
	<UserMenu {...props}>
		<ConfigurationMenu />
	</UserMenu>
);

const CustomAppBar = (props: any) => {
	const classes = useStyles();
	return (
		<AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
			<Typography
				variant="h6"
				color="inherit"
				className={classes.title}
				id="react-admin-title"
			/>
			<Logo />
			<span className={classes.spacer} />
		</AppBar>
	);
};

export default CustomAppBar;
