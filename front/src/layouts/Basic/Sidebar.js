import React from 'react'
import {
  Hidden,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Link } from '@reach/router'

export default class Sidebar extends React.PureComponent {
  render() {
    const { routes } = this.props
    
    const menuItems = routes.map((route, index) => {
      if (route.redirect) return null

      return (
        <Link to={route.path} key={index}>
          <ListItem>
            <ListItemIcon>
              {typeof route.icon === 'string' ? (
                <Icon>{route.icon}</Icon>
              ) : (
                <route.icon />
              )}
            </ListItemIcon>
            <ListItemText
              primary={route.sidebarName}
              disableTypography={true}
            />
          </ListItem>
        </Link>
      )
    })

    return (
      <div>
        <Hidden>
          <Drawer variant="permanent" open={true}>
            <div>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>{menuItems}</List>
          </Drawer>
        </Hidden>
      </div>
    )
  }
}
